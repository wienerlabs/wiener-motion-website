import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData, categories } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const filteredProjects = selectedCategory === "All" 
        ? projectsData 
        : projectsData.filter(p => p.category === selectedCategory);

    useEffect(() => {
        document.body.setAttribute("theme", "white");
        
        gsap.fromTo('.page-header', 
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );

        gsap.fromTo('.category-btn',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3 }
        );

        gsap.fromTo('.project-card',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, delay: 0.5 }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    useEffect(() => {
        gsap.fromTo('.project-card',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 }
        );
    }, [selectedCategory]);

    const handleBackClick = () => {
        gsap.to('.projects-container', {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => navigate('/')
        });
    };

    return (
        <div ref={containerRef} className="projects-container min-h-screen bg-[var(--light)] pb-20">
            {/* Header */}
            <div className="page-header bg-black text-white py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <button 
                        onClick={handleBackClick}
                        className="flex items-center gap-2 text-[#fef3dc] hover:opacity-70 transition-opacity mb-8 font-[Sansita] text-lg"
                    >
                        <span className="text-2xl">←</span>
                        <span>Back to Home</span>
                    </button>
                    <h1 className="font-[SansitaBold] text-5xl sm:text-7xl mb-4">Our Projects</h1>
                    <p className="font-[Sansita] text-xl sm:text-2xl text-gray-300 max-w-2xl">
                        Discover our cutting-edge blockchain and tokenization solutions across DeFi, infrastructure, and AI.
                    </p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-8 py-10">
                <div className="flex flex-wrap gap-4 justify-center">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`category-btn font-[Sansita] px-6 py-3 rounded-full border-2 border-black transition-all duration-300 text-lg
                                ${selectedCategory === category 
                                    ? 'bg-black text-white' 
                                    : 'bg-[#fef3dc] text-black hover:bg-black hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-8">
                <p className="font-[Sansita] text-gray-600 mb-6 text-center">
                    Showing {filteredProjects.length} projects
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="project-card bg-white rounded-2xl overflow-hidden border-2 border-black
                                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`font-[Sansita] px-3 py-1 rounded-full text-sm
                                        ${project.status === 'Launched' || project.status === 'Completed' ? 'bg-green-500 text-white' :
                                          project.status === 'Testnet' || project.status === 'Demo' ? 'bg-blue-500 text-white' :
                                          project.status === 'Active' ? 'bg-emerald-500 text-white' :
                                          'bg-yellow-500 text-black'}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="font-[Sansita] px-3 py-1 rounded-full text-sm bg-[#fef3dc] text-black border border-black">
                                        {project.category}
                                    </span>
                                </div>
                                {project.progress !== undefined && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-2">
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-[#fef3dc] rounded-full transition-all duration-500"
                                                    style={{ width: `${project.progress}%` }}
                                                />
                                            </div>
                                            <span className="font-[Sansita] text-white text-xs">{project.progress}%</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="font-[SansitaBold] text-xl mb-2 line-clamp-1">{project.title}</h3>
                                <p className="font-[Sansita] text-gray-600 text-sm mb-4 line-clamp-2">
                                    {project.subtitle}
                                </p>
                                {project.tech && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((t, i) => (
                                            <span key={i} className="font-[Sansita] text-xs px-2 py-1 bg-gray-100 rounded">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="font-[Sansita] text-xs px-2 py-1 bg-gray-100 rounded">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>
                                )}
                                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                                    {project.metrics ? (
                                        Object.entries(project.metrics).slice(0, 2).map(([key, value], i) => (
                                            <div key={i} className="text-center">
                                                <p className="font-[SansitaBold] text-lg">{value}</p>
                                                <p className="font-[Sansita] text-xs text-gray-500 capitalize">{key}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <>
                                            <div className="text-center">
                                                <p className="font-[SansitaBold] text-sm">{project.budget || 'TBD'}</p>
                                                <p className="font-[Sansita] text-xs text-gray-500">Budget</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="font-[SansitaBold] text-sm">{project.duration || 'TBD'}</p>
                                                <p className="font-[Sansita] text-xs text-gray-500">Duration</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </div>
    );
}

function ProjectModal({ project, onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        gsap.fromTo('.modal-overlay',
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
        );

        gsap.fromTo('.modal-content',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, delay: 0.1 }
        );

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleClose = () => {
        gsap.to('.modal-overlay', {
            opacity: 0,
            duration: 0.2,
            onComplete: onClose
        });
    };

    return (
        <div
            className="modal-overlay fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
            onClick={handleClose}
        >
            <div
                className="modal-content bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-4 border-black"
                onClick={e => e.stopPropagation()}
            >
                {/* Header Image */}
                <div className="relative h-64 sm:h-80">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#fef3dc] transition-colors"
                    >
                        <span className="text-2xl">×</span>
                    </button>
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex flex-wrap gap-3 mb-3">
                            <span className={`font-[Sansita] px-3 py-1 rounded-full text-sm
                                ${project.status === 'Launched' || project.status === 'Completed' ? 'bg-green-500 text-white' :
                                  project.status === 'Testnet' || project.status === 'Demo' ? 'bg-blue-500 text-white' :
                                  project.status === 'Active' ? 'bg-emerald-500 text-white' :
                                  'bg-yellow-500 text-black'}`}>
                                {project.status}
                            </span>
                            <span className="font-[Sansita] px-3 py-1 rounded-full text-sm bg-[#fef3dc] text-black">
                                {project.category}
                            </span>
                            {project.priority && (
                                <span className={`font-[Sansita] px-3 py-1 rounded-full text-sm
                                    ${project.priority === 'S' ? 'bg-purple-500 text-white' :
                                      project.priority === 'A' ? 'bg-red-500 text-white' :
                                      'bg-orange-500 text-white'}`}>
                                    Priority: {project.priority}
                                </span>
                            )}
                        </div>
                        <h2 className="font-[SansitaBold] text-3xl sm:text-4xl text-white">{project.title}</h2>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    <p className="font-[Sansita] text-xl text-gray-700 mb-6">{project.subtitle}</p>
                    <p className="font-[Sansita] text-gray-600 mb-8 leading-relaxed">{project.description}</p>

                    {/* Progress Bar */}
                    {project.progress !== undefined && (
                        <div className="mb-8">
                            <div className="flex justify-between mb-2">
                                <span className="font-[SansitaBold] text-lg">Progress</span>
                                <span className="font-[SansitaBold] text-lg">{project.progress}%</span>
                            </div>
                            <div className="h-4 bg-gray-200 rounded-full overflow-hidden border-2 border-black">
                                <div
                                    className="h-full bg-gradient-to-r from-[#fef3dc] to-[#c2a770] rounded-full transition-all duration-500"
                                    style={{ width: `${project.progress}%` }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Metrics or Budget */}
                    {project.metrics ? (
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {Object.entries(project.metrics).map(([key, value], i) => (
                                <div key={i} className="bg-[#fef3dc] p-4 rounded-xl text-center border-2 border-black">
                                    <p className="font-[SansitaBold] text-xl">{value}</p>
                                    <p className="font-[Sansita] text-sm text-gray-600 capitalize">{key}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-[#fef3dc] p-4 rounded-xl text-center border-2 border-black">
                                <p className="font-[SansitaBold] text-xl">{project.budget || 'TBD'}</p>
                                <p className="font-[Sansita] text-sm text-gray-600">Budget</p>
                            </div>
                            <div className="bg-[#fef3dc] p-4 rounded-xl text-center border-2 border-black">
                                <p className="font-[SansitaBold] text-xl">{project.duration || 'TBD'}</p>
                                <p className="font-[Sansita] text-sm text-gray-600">Duration</p>
                            </div>
                        </div>
                    )}

                    {/* Team */}
                    {project.team && project.team.length > 0 && (
                        <div className="mb-8">
                            <h3 className="font-[SansitaBold] text-2xl mb-4">Team</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.team.map((member, i) => (
                                    <span key={i} className="font-[Sansita] px-4 py-2 bg-black text-white rounded-full">
                                        {member}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                        <div className="mb-8">
                            <h3 className="font-[SansitaBold] text-2xl mb-4">Key Features</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {project.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</span>
                                        <span className="font-[Sansita]">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tech Stack */}
                    {project.tech && project.tech.length > 0 && (
                        <div className="mb-8">
                            <h3 className="font-[SansitaBold] text-2xl mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="font-[Sansita] px-4 py-2 bg-gray-100 rounded-full border border-gray-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Links */}
                    {project.links && Object.keys(project.links).length > 0 && (
                        <div className="mb-8">
                            <h3 className="font-[SansitaBold] text-2xl mb-4">Links</h3>
                            <div className="flex flex-wrap gap-3">
                                {Object.entries(project.links).map(([key, url], i) => (
                                    <a
                                        key={i}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-[Sansita] px-4 py-2 bg-[#fef3dc] rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors capitalize"
                                    >
                                        {key === 'github' ? '🔗 GitHub' :
                                         key === 'website' ? '🌐 Website' :
                                         key === 'docs' ? '📚 Docs' :
                                         key === 'demo' ? '🎬 Demo' : key}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="flex gap-4">
                        {project.links?.website || project.links?.github ? (
                            <a
                                href={project.links?.website || project.links?.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 font-[SansitaBold] bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition-colors text-center"
                            >
                                Visit Project
                            </a>
                        ) : (
                            <button className="flex-1 font-[SansitaBold] bg-gray-400 text-white py-4 rounded-xl cursor-not-allowed">
                                Coming Soon
                            </button>
                        )}
                        <button
                            onClick={handleClose}
                            className="flex-1 font-[SansitaBold] bg-[#fef3dc] text-black py-4 rounded-xl border-2 border-black hover:bg-[#e6d9b8] transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;

