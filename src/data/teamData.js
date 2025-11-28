import img1 from '../assets/images/team1.png';
import img2 from '../assets/images/team2.png';
import img3 from '../assets/images/team3.png';
import img4 from '../assets/images/team4.png';
import img5 from '../assets/images/team5.png';
import img6 from '../assets/images/team6.png';
import img7 from '../assets/images/team7.png';
import img8 from '../assets/images/team8.png';
import img9 from '../assets/images/team9.png';
import img10 from '../assets/images/team10.png';
import img11 from '../assets/images/team11.png';

import img13 from '../assets/images/team13.png';

export const teamData = [
    {
        key: 1,
        id: "baturalp-guvenc",
        title: "Baturalp Guvenc",
        role: "Co-Founder & CEO",
        img: img1,
        github: ["virjilakrum", "0raclus"], // Two GitHub accounts
        featuredRepos: [
            "dante-gpu/dantegpu-core",
            "dante-gpu/dante-cli-sdk",
            "virjilakrum/zk-lokomotive"
        ],
        spotifyTrackId: "28TeosAOQZvsftj5ZxucaX", // TAK TAK TAK - Lvbel C5
        bio: "Visionary leader with 8+ years in blockchain and fintech. Led multiple successful tokenization projects across Solana and Ethereum ecosystems.",
        expertise: ["Strategic Planning", "Business Development", "Web3 Strategy", "Tokenomics", "Fundraising"],
        achievements: [
            "Founded 3 successful Web3 startups",
            "Raised $15M+ in funding",
            "Led team to 62 completed projects",
            "Speaker at 10+ blockchain conferences"
        ],
        education: "MBA in Finance, BSc Computer Science",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English", "German"],
        projects: [
            { name: "Wiener Labs Arbitrage", role: "Founder", tech: ["Solana", "Rust", "React"] },
            { name: "RWA Tokenization Platform", role: "CEO", tech: ["Ethereum", "Solidity", "Next.js"] },
            { name: "DeFi Yield Optimizer", role: "Product Lead", tech: ["Web3", "Smart Contracts"] }
        ]
    },
    {
        key: 2,
        id: "mehmet-hayirli",
        title: "Mehmet Hayirli",
        role: "Co-Founder & CTO",
        img: img2,
        github: "mehmethayirli",
        spotifyTrackId: "4kjI1gwQZRKNDkw1nI475M", // MY EYES - Travis Scott
        bio: "Blockchain architect with deep expertise in smart contract development and distributed systems. Pioneer in RWA tokenization infrastructure.",
        expertise: ["Blockchain Architecture", "Smart Contracts", "System Design", "Solidity", "Rust"],
        achievements: [
            "Architected 50+ smart contracts",
            "Zero security breaches in production",
            "Published 5 blockchain research papers",
            "Mentor at ETHGlobal hackathons"
        ],
        education: "PhD Computer Science, MSc Cryptography",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "Multi-chain Bridge Protocol", role: "Lead Architect", tech: ["Solidity", "Rust", "Go"] },
            { name: "NFT Marketplace", role: "CTO", tech: ["Ethereum", "IPFS", "React"] },
            { name: "DAO Governance System", role: "Tech Lead", tech: ["Smart Contracts", "Web3"] }
        ]
    },
    {
        key: 3,
        id: "samet-ozetci",
        title: "Samet Ozetci",
        role: "Co-Founder & COO",
        img: img3,
        github: "sametozetci",
        spotifyTrackId: "3cfOd4CMv2snFaKAnMdnvK", // Starboy - The Weeknd
        bio: "Operations expert specializing in scaling Web3 companies. Proven track record in project delivery and team management.",
        expertise: ["Operations Management", "Project Delivery", "Process Optimization", "Agile", "Team Leadership"],
        achievements: [
            "Scaled team from 5 to 50+ members",
            "Delivered 87 projects on time",
            "Reduced operational costs by 40%",
            "Built remote-first culture"
        ],
        education: "MBA Operations, BSc Industrial Engineering",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English", "Spanish"],
        projects: [
            { name: "Project Management Platform", role: "COO", tech: ["React", "Node.js", "PostgreSQL"] },
            { name: "Client Portal System", role: "Operations Lead", tech: ["Next.js", "GraphQL"] }
        ]
    },
    {
        key: 4,
        id: "emir-bilal-ozkan",
        title: "Emir Bilal Ozkan",
        role: "Co-Founder & CFO",
        img: img4,
        github: "emirbilalozkan",
        spotifyTrackId: "7qiZfU4dY1lWllzX7mPBI", // Shape of You - Ed Sheeran
        bio: "Financial strategist with expertise in tokenomics and institutional partnerships. Former investment banker turned Web3 finance expert.",
        expertise: ["Financial Strategy", "Tokenomics", "Institutional Relations", "DeFi", "Risk Management"],
        achievements: [
            "Structured $28M in tokenized assets",
            "Partnered with 15+ institutions",
            "Designed tokenomics for 20+ projects",
            "Former VP at Goldman Sachs"
        ],
        education: "MBA Finance, CFA Charterholder",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English", "French"],
        projects: [
            { name: "Asset Tokenization Framework", role: "CFO", tech: ["Blockchain", "Smart Contracts"] },
            { name: "DeFi Lending Protocol", role: "Financial Architect", tech: ["Ethereum", "Solidity"] }
        ]
    },
    {
        key: 5,
        id: "muhammed-akinci",
        title: "Muhammed Akinci",
        role: "Lead Backend & AI Developer",
        img: img5,
        github: "MuhammedAkinci",
        spotifyTrackId: "0DiWol3AO6WpXZgp0goxAV", // One Dance - Drake
        bio: "AI and backend specialist building intelligent systems for automated trading and predictive analytics. Expert in machine learning and distributed systems.",
        expertise: ["AI/ML", "Backend Development", "Data Engineering", "Python", "TensorFlow", "Microservices"],
        achievements: [
            "Built AI trading bot with 85% accuracy",
            "Processed 10M+ transactions daily",
            "Published ML research at NeurIPS",
            "Kaggle Grandmaster"
        ],
        education: "MSc Artificial Intelligence, BSc Computer Engineering",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "AI Trading Engine", role: "Lead Developer", tech: ["Python", "TensorFlow", "Redis"] },
            { name: "Predictive Analytics Platform", role: "ML Engineer", tech: ["PyTorch", "FastAPI", "PostgreSQL"] },
            { name: "Real-time Data Pipeline", role: "Backend Lead", tech: ["Kafka", "Spark", "Kubernetes"] }
        ]
    },
    {
        key: 6,
        id: "yigit-balaban",
        title: "Yigit Balaban",
        role: "DevOps & Backend Engineer",
        img: img6,
        github: "fybx",
        spotifyTrackId: "3AJwUDP919kvQ9QcozQPxg", // Levitating - Dua Lipa
        bio: "Infrastructure expert ensuring 99.99% uptime and seamless scalability. Specialist in cloud architecture and CI/CD automation.",
        expertise: ["DevOps", "Cloud Infrastructure", "System Reliability", "Kubernetes", "AWS", "Terraform"],
        achievements: [
            "Achieved 99.99% uptime",
            "Reduced deployment time by 80%",
            "Managed infrastructure for 1M+ users",
            "AWS Certified Solutions Architect"
        ],
        education: "BSc Computer Engineering",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "Multi-region Cloud Infrastructure", role: "DevOps Lead", tech: ["AWS", "Kubernetes", "Terraform"] },
            { name: "CI/CD Pipeline Automation", role: "DevOps Engineer", tech: ["Jenkins", "Docker", "GitLab"] }
        ]
    },
    {
        key: 7,
        id: "abdullah-velisoy",
        title: "Abdullah Velisoy",
        role: "Fullstack Developer",
        img: img7,
        github: "Abdullah-V",
        spotifyTrackId: "6habFhsOp2NvshLv26DqMb", // Such a Whore - JVLA
        bio: "Versatile fullstack developer creating seamless user experiences. Expert in modern web technologies and blockchain integration.",
        expertise: ["Full Stack Development", "React", "Node.js", "TypeScript", "Web3.js", "GraphQL"],
        achievements: [
            "Built 30+ production applications",
            "Contributed to 50+ open source projects",
            "Created popular React component library",
            "Tech blogger with 100K+ readers"
        ],
        education: "BSc Software Engineering",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "DeFi Dashboard", role: "Fullstack Developer", tech: ["React", "Node.js", "Web3"] },
            { name: "NFT Minting Platform", role: "Lead Developer", tech: ["Next.js", "Solidity", "IPFS"] }
        ]
    },
    {
        key: 8,
        id: "osman-nuri-yildiz",
        title: "Osman Nuri Yildiz",
        role: "Blockchain Developer",
        img: img8,
        github: "osmannyildiz",
        spotifyTrackId: "1zi7xx7UVEFkmKfv06H8x0", // Sunflower - Post Malone
        bio: "Blockchain specialist developing secure and efficient smart contracts on multiple chains. Expert in Solidity and Rust.",
        expertise: ["Solidity", "Rust", "Multi-chain Development", "Smart Contracts", "Web3", "DeFi"],
        achievements: [
            "Deployed 100+ smart contracts",
            "Audited 50+ DeFi protocols",
            "Won 5 blockchain hackathons",
            "Core contributor to major DeFi projects"
        ],
        education: "BSc Computer Science",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "Cross-chain DEX", role: "Blockchain Developer", tech: ["Solidity", "Rust", "Cosmos"] },
            { name: "Staking Protocol", role: "Smart Contract Developer", tech: ["Ethereum", "Hardhat"] }
        ]
    },
    {
        key: 9,
        id: "nihat-alp-onaran",
        title: "Nihat Alp Onaran",
        role: "Security Auditor",
        img: img9,
        github: "nihatalponaran",
        spotifyTrackId: "5ChkMS8OtdzJeqyybCc9R5", // Lose Yourself - Eminem
        bio: "Security expert conducting comprehensive audits to ensure platform and smart contract safety. Former penetration tester.",
        expertise: ["Security Auditing", "Penetration Testing", "Smart Contract Security", "Cryptography", "Ethical Hacking"],
        achievements: [
            "Audited $500M+ in smart contracts",
            "Found 200+ critical vulnerabilities",
            "CEH and OSCP certified",
            "Bug bounty hunter with $100K+ earnings"
        ],
        education: "MSc Cybersecurity, BSc Computer Engineering",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "Smart Contract Audit Tool", role: "Security Lead", tech: ["Python", "Slither", "Mythril"] },
            { name: "Penetration Testing Framework", role: "Security Engineer", tech: ["Kali Linux", "Metasploit"] }
        ]
    },
    {
        key: 10,
        id: "cemalettin-kursun",
        title: "Cemalettin Kursun",
        role: "AI Researcher",
        img: img10,
        github: "cemalettinkursun",
        spotifyTrackId: "2takcwOaAZWiXQijPHIx7B", // Time - Hans Zimmer
        bio: "Research scientist developing cutting-edge AI models for predictive analytics and automation in blockchain.",
        expertise: ["Machine Learning", "Deep Learning", "Research & Development", "NLP", "Computer Vision"],
        achievements: [
            "Published 10+ AI research papers",
            "Created novel ML algorithms",
            "PhD candidate at MIT",
            "Google AI Residency alumni"
        ],
        education: "PhD AI (in progress), MSc Machine Learning",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "Blockchain Analytics AI", role: "AI Researcher", tech: ["PyTorch", "Transformers", "Python"] },
            { name: "Market Prediction Model", role: "ML Researcher", tech: ["TensorFlow", "Keras", "Pandas"] }
        ]
    },
    {
        key: 11,
        id: "oguz-kaan-demir",
        title: "Oguz Kaan Demir",
        role: "Frontend Developer",
        img: img11,
        github: "kaahndemir",
        spotifyTrackId: "4cOdK2wGLETKBW3PvgPWqT", // Radioactive - Imagine Dragons
        bio: "UI specialist crafting beautiful and intuitive interfaces for Web3 applications. Expert in modern frontend frameworks.",
        expertise: ["React", "UI/UX", "Web3 Integration", "TypeScript", "Tailwind CSS", "Animation"],
        achievements: [
            "Designed 40+ user interfaces",
            "Won 3 design awards",
            "Created viral design system",
            "Dribbble top designer"
        ],
        education: "BSc Computer Science, UX Design Certification",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "Web3 Wallet Interface", role: "Frontend Lead", tech: ["React", "Web3.js", "Framer Motion"] },
            { name: "NFT Gallery", role: "UI Developer", tech: ["Next.js", "Three.js", "GSAP"] }
        ]
    },
    {
        key: 12,
        id: "yunus-emre-yoldas",
        title: "Yunus Emre Yoldas",
        role: "Firmware Developer",
        img: img13,
        github: "gAtrium",
        spotifyTrackId: "7MXVkk9YMctZqd1Srtv4MB",
        bio: "Hardware integration specialist developing firmware for IoT and blockchain-connected devices. Expert in embedded systems.",
        expertise: ["Embedded Systems", "IoT", "Hardware Integration", "C/C++", "RTOS", "Blockchain Hardware"],
        achievements: [
            "Developed 20+ IoT devices",
            "Created blockchain hardware wallet",
            "Patent holder for IoT security",
            "Embedded systems consultant"
        ],
        education: "MSc Embedded Systems, BSc Electrical Engineering",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "Blockchain Hardware Wallet", role: "Firmware Lead", tech: ["C", "ARM", "Secure Element"] },
            { name: "IoT Sensor Network", role: "Embedded Engineer", tech: ["C++", "MQTT", "ESP32"] }
        ]
    },
    {
        key: 13,
        id: "burak-artun",
        title: "Burak Artun",
        role: "Software Developer",
        img: "https://github.com/MrShiroLu.png",
        github: "MrShiroLu",
        spotifyTrackId: "0VjIjW4GlUZAMYd2vXMi3b",
        bio: "Full-stack developer with expertise in modern web technologies and blockchain integration.",
        expertise: ["Full-Stack Development", "Web3", "JavaScript", "Node.js", "React"],
        achievements: [
            "Contributed to multiple open source projects",
            "Built scalable web applications",
            "Expert in modern JavaScript frameworks"
        ],
        education: "BSc Computer Science",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "Web3 DApp", role: "Full-Stack Developer", tech: ["React", "Node.js", "Solidity"] }
        ]
    },
    {
        key: 14,
        id: "bilal-erkam-kilinc",
        title: "Bilal Erkam Kilinc",
        role: "Software Developer",
        img: "https://github.com/B-erkamklnc.png",
        github: "B-erkamklnc",
        spotifyTrackId: "7qiZfU4dY1lWllzX7mPBI3",
        bio: "Software developer focused on building robust and scalable applications.",
        expertise: ["Software Development", "Backend Systems", "Database Design", "API Development"],
        achievements: [
            "Developed enterprise-level applications",
            "Expert in system architecture",
            "Database optimization specialist"
        ],
        education: "BSc Software Engineering",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "Enterprise Backend", role: "Backend Developer", tech: ["Node.js", "PostgreSQL", "Redis"] }
        ]
    },
    {
        key: 15,
        id: "fahad",
        title: "Fahad",
        role: "Software Engineer",
        img: "https://github.com/me-imfhd.png",
        github: "me-imfhd",
        spotifyTrackId: "4cOdK2wGLETKBW3PvgPWqT",
        bio: "Software engineer with deep expertise in system design and scalable architecture.",
        expertise: ["System Design", "Distributed Systems", "Rust", "Go", "Cloud Architecture"],
        achievements: [
            "Built high-performance distributed systems",
            "Expert in Rust and Go",
            "Cloud infrastructure specialist"
        ],
        education: "BSc Computer Engineering",
        location: "Remote",
        languages: ["English"],
        projects: [
            { name: "Distributed System", role: "Software Engineer", tech: ["Rust", "Go", "Kubernetes"] }
        ]
    },
    {
        key: 16,
        id: "serdar-soydemir",
        title: "Serdar Soydemir",
        role: "Developer",
        img: "https://github.com/Serdarsoydem.png",
        github: "Serdarsoydem",
        spotifyTrackId: "2HbKqm4o0w5wEeEFXm2sD4",
        bio: "Developer passionate about creating innovative solutions and clean code.",
        expertise: ["Software Development", "Web Technologies", "Problem Solving"],
        achievements: [
            "Built multiple successful projects",
            "Clean code advocate",
            "Active open source contributor"
        ],
        education: "BSc Computer Science",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "Web Platform", role: "Developer", tech: ["JavaScript", "React", "Node.js"] }
        ]
    },
    {
        key: 17,
        id: "giray-altug-korkmaz",
        title: "Giray Altug Korkmaz",
        role: "Developer",
        img: "https://github.com/GirayKorkmaz.png",
        github: "GirayKorkmaz",
        spotifyTrackId: "3n3Ppam7vgaVa1iaRUc9Lp",
        bio: "Developer with strong problem-solving skills and passion for technology.",
        expertise: ["Software Development", "Web Development", "Mobile Development"],
        achievements: [
            "Developed cross-platform applications",
            "Full-stack development expertise",
            "Technology enthusiast"
        ],
        education: "BSc Computer Engineering",
        location: "Istanbul, Turkey",
        languages: ["Turkish", "English"],
        projects: [
            { name: "Cross-Platform App", role: "Developer", tech: ["React Native", "Node.js", "Firebase"] }
        ]
    },
    {
        key: 18,
        id: "zilxbt",
        title: "Zilxbt",
        role: "Developer",
        img: "https://github.com/DopeCrewFriends.png",
        github: "DopeCrewFriends",
        spotifyTrackId: "2LBqCSwhJGcFQeTHMVGwy3",
        bio: "Developer contributing to blockchain and Web3 projects.",
        expertise: ["Blockchain", "Web3", "Development"],
        achievements: [
            "Web3 enthusiast",
            "Blockchain developer"
        ],
        education: "Computer Science",
        location: "Remote",
        languages: ["English"],
        projects: []
    }
];

