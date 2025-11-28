import { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from 'prop-types';
import { GitHubCalendar } from 'react-github-calendar';
import SpotifyPlayer from '../SpotifyPlayer';

gsap.registerPlugin(ScrollTrigger);

function MemberProfile({ member, onClose }) {
    const [githubAccounts, setGithubAccounts] = useState([]); // Array of {username, data, repos, activity}
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        gsap.fromTo('.profile-overlay', 
            { opacity: 0 },
            { opacity: 1, duration: 0.4 }
        );
        
        gsap.fromTo('.profile-container', 
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, delay: 0.1 }
        );

        gsap.fromTo('.profile-section',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3 }
        );

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        const fetchGitHubData = async () => {
            if (!member.github) {
                setLoading(false);
                return;
            }

            // Support both single username (string) and multiple usernames (array)
            const githubUsernames = Array.isArray(member.github) ? member.github : [member.github];

            try {
                const accountsData = await Promise.all(
                    githubUsernames.map(async (username) => {
                        try {
                            // Fetch user data
                            const userResponse = await fetch(`https://api.github.com/users/${username}`);
                            const userData = await userResponse.json();

                            // Fetch all repos to get star counts
                            const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                            let reposData = await reposResponse.json();

                            // Fetch featured repos if specified (only for first account)
                            let featuredRepos = [];
                            if (username === githubUsernames[0] && member.featuredRepos && member.featuredRepos.length > 0) {
                                const featuredPromises = member.featuredRepos.map(repoFullName =>
                                    fetch(`https://api.github.com/repos/${repoFullName}`)
                                        .then(res => res.json())
                                        .catch(err => {
                                            console.error(`Error fetching ${repoFullName}:`, err);
                                            return null;
                                        })
                                );
                                const featuredResults = await Promise.all(featuredPromises);
                                featuredRepos = featuredResults.filter(repo => repo !== null);
                            }

                            // Sort repos by stars (descending)
                            const sortedRepos = reposData.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));

                            // Combine: featured repos first, then top starred repos (avoiding duplicates)
                            const featuredRepoIds = new Set(featuredRepos.map(r => r.id));
                            const otherTopRepos = sortedRepos.filter(r => !featuredRepoIds.has(r.id)).slice(0, 6 - featuredRepos.length);
                            const finalRepos = [...featuredRepos, ...otherTopRepos].slice(0, 6);

                            // Fetch activity
                            let eventsData = [];
                            try {
                                const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public?per_page=10`);
                                const eventsJson = await eventsResponse.json();
                                eventsData = Array.isArray(eventsJson) ? eventsJson : [];
                            } catch (e) {
                                console.error(`Error fetching events for ${username}:`, e);
                            }

                            return {
                                username,
                                data: userData || {},
                                repos: finalRepos || [],
                                activity: eventsData
                            };
                        } catch (error) {
                            console.error(`Error fetching GitHub data for ${username}:`, error);
                            return null;
                        }
                    })
                );

                setGithubAccounts(accountsData.filter(account => account !== null));
                setLoading(false);
            } catch (error) {
                console.error('GitHub API Error:', error);
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, [member.github, member.featuredRepos]);

    const handleClose = () => {
        gsap.to('.profile-overlay', {
            opacity: 0,
            duration: 0.3,
            onComplete: onClose
        });
    };

    const getActivityIcon = (type) => {
        switch(type) {
            case 'PushEvent': return '📝';
            case 'CreateEvent': return '✨';
            case 'PullRequestEvent': return '🔀';
            case 'IssuesEvent': return '🐛';
            case 'WatchEvent': return '⭐';
            case 'ForkEvent': return '🍴';
            default: return '💻';
        }
    };

    const getActivityText = (event) => {
        switch(event.type) {
            case 'PushEvent':
                return `Pushed ${event.payload.commits?.length || 0} commits to ${event.repo.name}`;
            case 'CreateEvent':
                return `Created ${event.payload.ref_type} in ${event.repo.name}`;
            case 'PullRequestEvent':
                return `${event.payload.action} pull request in ${event.repo.name}`;
            case 'IssuesEvent':
                return `${event.payload.action} issue in ${event.repo.name}`;
            case 'WatchEvent':
                return `Starred ${event.repo.name}`;
            case 'ForkEvent':
                return `Forked ${event.repo.name}`;
            default:
                return `Activity in ${event.repo.name}`;
        }
    };

    return (
        <div className="profile-overlay fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4 overflow-y-auto">
            <div className="profile-container bg-white w-full max-w-7xl max-h-[95vh] overflow-y-auto rounded-2xl relative my-8">
                <button
                    onClick={handleClose}
                    className="sticky top-4 right-4 float-right z-10 w-14 h-14 bg-black text-[#fef3dc] rounded-full flex items-center justify-center hover:bg-[#fef3dc] hover:text-black transition-all duration-300 font-bold text-3xl shadow-lg"
                >
                    ×
                </button>

                <div className="px-6 sm:px-12 pt-20 pb-12">
                    <div className="profile-section grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="lg:col-span-1">
                            <div className="sticky top-8">
                                <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-black shadow-2xl mb-6">
                                    {member.img ? (
                                        <img src={member.img} alt={member.title} className="w-full h-full object-cover object-center" />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#fef3dc] to-[#d4c4a8] flex items-center justify-center">
                                            <span className="text-6xl font-[SansitaBold] text-[#3d3a2f]">
                                                {member.title.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <h1 className="font-[SansitaBold] text-4xl sm:text-5xl mb-3">{member.title}</h1>
                                <p className="font-[Sansita] text-xl sm:text-2xl text-white bg-black px-4 py-2 rounded-full inline-block mb-4">
                                    {member.role}
                                </p>
                                <div className="space-y-3 text-gray-700 font-[Sansita]">
                                    <p className="flex items-center gap-2">
                                        <span className="text-2xl">📍</span>
                                        <span>{member.location}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="text-2xl">🎓</span>
                                        <span className="text-sm">{member.education}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="text-2xl">🌐</span>
                                        <span>{member.languages.join(', ')}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <div className="profile-section">
                                <h2 className="font-[SansitaBold] text-3xl sm:text-4xl mb-4 border-b-4 border-[#fef3dc] pb-2">About</h2>
                                <p className="font-[Sansita] text-lg text-gray-700 leading-relaxed mb-6">{member.bio}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    {member.achievements.map((achievement, index) => (
                                        <div key={index} className="flex items-start gap-3 bg-[#fef3dc] p-4 rounded-lg border-2 border-black">
                                            <span className="text-2xl">🏆</span>
                                            <p className="font-[Sansita] text-sm">{achievement}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="profile-section">
                                <h2 className="font-[SansitaBold] text-3xl sm:text-4xl mb-4 border-b-4 border-[#fef3dc] pb-2">Expertise</h2>
                                <div className="flex flex-wrap gap-3">
                                    {member.expertise.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="font-[Sansita] text-sm bg-black text-[#fef3dc] px-4 py-2 rounded-full border-2 border-black hover:bg-[#fef3dc] hover:text-black transition-all duration-300 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {!loading && githubAccounts.length > 0 && (
                                <div className="profile-section">
                                    <h2 className="font-[SansitaBold] text-3xl sm:text-4xl mb-4 border-b-4 border-[#fef3dc] pb-2">Key Projects</h2>
                                    <div className="space-y-4">
                                        {githubAccounts.map((account) =>
                                            account.repos.slice(0, 6).map((repo) => (
                                                <a
                                                    key={repo.id}
                                                    href={repo.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block border-2 border-black rounded-lg p-5 hover:shadow-xl transition-all duration-300 bg-white hover:bg-[#fef3dc]/20"
                                                >
                                                    <div className="flex items-start justify-between mb-2">
                                                        <h3 className="font-[SansitaBold] text-xl flex-1">{repo.name}</h3>
                                                        <div className="flex items-center gap-3 ml-4">
                                                            {repo.stargazers_count > 0 && (
                                                                <span className="font-[Sansita] text-sm text-gray-600 flex items-center gap-1">
                                                                    ⭐ {repo.stargazers_count}
                                                                </span>
                                                            )}
                                                            {repo.forks_count > 0 && (
                                                                <span className="font-[Sansita] text-sm text-gray-600 flex items-center gap-1">
                                                                    🔱 {repo.forks_count}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    {repo.description && (
                                                        <p className="font-[Sansita] text-sm text-gray-700 mb-3">{repo.description}</p>
                                                    )}
                                                    <div className="flex flex-wrap gap-2">
                                                        {repo.language && (
                                                            <span className="font-[Sansita] text-xs bg-[#fef3dc] text-black px-3 py-1 rounded-full border border-black">
                                                                {repo.language}
                                                            </span>
                                                        )}
                                                        {repo.topics && repo.topics.slice(0, 4).map((topic, topicIndex) => (
                                                            <span
                                                                key={topicIndex}
                                                                className="font-[Sansita] text-xs bg-white text-black px-3 py-1 rounded-full border border-black"
                                                            >
                                                                {topic}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </a>
                                            ))
                                        )}
                                    </div>
                                </div>
                            )}

                            {loading && (
                                <div className="profile-section">
                                    <h2 className="font-[SansitaBold] text-3xl sm:text-4xl mb-4 border-b-4 border-[#fef3dc] pb-2">GitHub Activity</h2>
                                    <div className="flex items-center justify-center py-12">
                                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#fef3dc] border-t-black"></div>
                                    </div>
                                </div>
                            )}

                            {!loading && githubAccounts.map((account, accountIndex) => (
                                <div key={account.username} className="profile-section">
                                    <h2 className="font-[SansitaBold] text-3xl sm:text-4xl mb-4 border-b-4 border-[#fef3dc] pb-2 flex items-center gap-3">
                                        <span>GitHub Activity - @{account.username}</span>
                                        <a
                                            href={`https://github.com/${account.username}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl hover:scale-110 transition-transform"
                                        >
                                            🔗
                                        </a>
                                    </h2>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                                        <div className="bg-[#fef3dc] p-4 rounded-lg border-2 border-black text-center">
                                            <p className="font-[SansitaBold] text-3xl">{account.data?.public_repos || 0}</p>
                                            <p className="font-[Sansita] text-sm text-gray-700">Repositories</p>
                                        </div>
                                        <div className="bg-[#fef3dc] p-4 rounded-lg border-2 border-black text-center">
                                            <p className="font-[SansitaBold] text-3xl">{account.data?.followers || 0}</p>
                                            <p className="font-[Sansita] text-sm text-gray-700">Followers</p>
                                        </div>
                                        <div className="bg-[#fef3dc] p-4 rounded-lg border-2 border-black text-center">
                                            <p className="font-[SansitaBold] text-3xl">{account.data?.following || 0}</p>
                                            <p className="font-[Sansita] text-sm text-gray-700">Following</p>
                                        </div>
                                        <div className="bg-[#fef3dc] p-4 rounded-lg border-2 border-black text-center">
                                            <p className="font-[SansitaBold] text-3xl">{account.data?.public_gists || 0}</p>
                                            <p className="font-[Sansita] text-sm text-gray-700">Gists</p>
                                        </div>
                                    </div>

                                    {account.username && (
                                        <div className="mb-6">
                                            <h3 className="font-[SansitaBold] text-2xl mb-4">Contribution Activity</h3>
                                            <div className="bg-white p-6 rounded-lg border-2 border-black overflow-x-auto">
                                                <GitHubCalendar
                                                    username={account.username}
                                                    blockSize={12}
                                                    blockMargin={4}
                                                    fontSize={14}
                                                    colorScheme="light"
                                                    theme={{
                                                        light: ['#f0f0f0', '#fef3dc', '#e6d9b8', '#d4c094', '#c2a770'],
                                                        dark: ['#f0f0f0', '#fef3dc', '#e6d9b8', '#d4c094', '#c2a770']
                                                    }}
                                                    style={{
                                                        fontFamily: 'Sansita, sans-serif'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {account.repos && account.repos.length > 0 && (
                                        <div className="mb-6">
                                            <h3 className="font-[SansitaBold] text-2xl mb-4">
                                                {accountIndex === 0 && member.featuredRepos ? 'Featured & Top Repositories' : 'Top Repositories'}
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {account.repos.slice(0, 6).map((repo, index) => {
                                                    const isFeatured = member.featuredRepos?.includes(repo.full_name);
                                                    return (
                                                        <a
                                                            key={index}
                                                            href={repo.html_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`border-2 rounded-lg p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 relative ${
                                                                isFeatured
                                                                    ? 'border-[#fef3dc] bg-[#fef3dc] shadow-lg'
                                                                    : 'border-black bg-white'
                                                            }`}
                                                        >
                                                            {isFeatured && (
                                                                <div className="absolute -top-2 -right-2 bg-black text-[#fef3dc] px-3 py-1 rounded-full text-xs font-[SansitaBold] shadow-lg">
                                                                    ⭐ FEATURED
                                                                </div>
                                                            )}
                                                            <h4 className="font-[SansitaBold] text-lg mb-2 truncate pr-16">{repo.name}</h4>
                                                            <p className="font-[Sansita] text-sm text-gray-600 mb-3 line-clamp-2">
                                                                {repo.description || 'No description'}
                                                            </p>
                                                            <div className="flex items-center gap-4 text-sm">
                                                                {repo.language && (
                                                                    <span className="flex items-center gap-1 text-gray-600">
                                                                        <span className="w-3 h-3 rounded-full bg-black"></span>
                                                                        {repo.language}
                                                                    </span>
                                                                )}
                                                                <span className="flex items-center gap-1 font-[SansitaBold] text-black">
                                                                    ⭐ {repo.stargazers_count || 0}
                                                                </span>
                                                                <span className="flex items-center gap-1 text-gray-600">
                                                                    🍴 {repo.forks_count || 0}
                                                                </span>
                                                            </div>
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {account.activity && account.activity.length > 0 && (
                                        <div>
                                            <h3 className="font-[SansitaBold] text-2xl mb-4">Recent Activity</h3>
                                            <div className="space-y-3">
                                                {account.activity.slice(0, 8).map((event, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-black transition-all duration-300"
                                                    >
                                                        <span className="text-2xl">{getActivityIcon(event.type)}</span>
                                                        <div className="flex-1">
                                                            <p className="font-[Sansita] text-sm">{getActivityText(event)}</p>
                                                            <p className="font-[Sansita] text-xs text-gray-500 mt-1">
                                                                {new Date(event.created_at).toLocaleDateString('en-US', {
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                })}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Spotify Player */}
            <SpotifyPlayer spotifyTrackId={member.spotifyTrackId} />
        </div>
    );
}

MemberProfile.propTypes = {
    member: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default MemberProfile;


