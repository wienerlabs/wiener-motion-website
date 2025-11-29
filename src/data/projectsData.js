import cap1 from '../assets/images/cap1.png';
import cap2 from '../assets/images/cap2.jpg';

// Project-specific images
import zkLokomotiveImg from '../assets/images/zkλ (zk-lokomotive).png';
import paralyxImg from '../assets/images/Paralyx.png';
import definiteImg from '../assets/images/Definite.png';
import keyraImg from '../assets/images/Keyra.png';
import bytrosImg from '../assets/images/Bytros.png';
import danteGPUImg from '../assets/images/DanteGPU.png';
import omnisphereImg from '../assets/images/Omnisphere.png';
import ursusImg from '../assets/images/Ursus.png';
import synapseImg from '../assets/images/Synapse.png';
import quantlinkImg from '../assets/images/Quantlink.png';
import swayImg from '../assets/images/Sway.png';

export const projectsData = [
    // ===== FLAGSHIP PROJECTS (Detailed) =====
    {
        id: 1,
        title: "zkλ (zk-lokomotive)",
        subtitle: "Secure & Anonymous File Transfer and Decentralized Data Storage Hub",
        description: "A privacy-focused platform providing secure and anonymous file transfer capabilities with decentralized data storage. Built with zero-knowledge proofs for maximum security and privacy.",
        image: zkLokomotiveImg,
        category: "Security",
        status: "Launched",
        priority: "A",
        progress: 100,
        tech: ["ZK Proofs", "Rust", "React", "IPFS", "Cryptography"],
        features: [
            "End-to-end encryption",
            "Zero-knowledge proofs",
            "Decentralized storage",
            "Anonymous transfers",
            "Audit-ready security"
        ],
        team: ["Baturalp Guvenc", "Salih Eryilmaz", "Ali Necati Altay", "Ferit Yigit Balaban"],
        links: {
            docs: "https://docs.zk-lokomotive.xyz/",
            website: "https://zk-lokomotive.xyz",
            demo: "https://youtu.be/dlXIzUJSYis"
        },
        metrics: {
            completion: "100%",
            status: "Live",
            audit: "Required"
        }
    },
    {
        id: 2,
        title: "Paralyx",
        subtitle: "Cross-Chain Lending Protocol Bridging Ethereum LSDs to Stellar",
        description: "A decentralized cross-chain lending protocol that bridges Ethereum's Liquid Staking Derivatives (LSDs) to Stellar's high-speed, low-cost infrastructure. Enabling seamless DeFi operations across chains.",
        image: paralyxImg,
        category: "DeFi",
        status: "Testnet",
        priority: "B",
        progress: 60,
        tech: ["Ethereum", "Stellar", "Solidity", "Rust", "React"],
        features: [
            "Cross-chain lending",
            "LSD integration",
            "High-speed transactions",
            "Low-cost operations",
            "Decentralized architecture"
        ],
        team: ["Baturalp Guvenc", "Mehmet Hayirli", "Salih Eryilmaz"],
        links: {
            github: "https://github.com/paralyx-LSD/paralyx-protocol",
            website: "https://www.paralyx.com/"
        },
        metrics: {
            completion: "60%",
            spent: "$3,000",
            liquidity: "High priority"
        }
    },
    {
        id: 3,
        title: "Definite Protocol",
        subtitle: "Delta-Neutral Hedge Investment System",
        description: "Advanced delta-neutral hedge investment system operating across multiple chains including Stacks, Starknet, Algorand, and Hyperliquid. Sophisticated risk management for institutional-grade returns.",
        image: definiteImg,
        category: "DeFi",
        status: "Testnet",
        priority: "S",
        progress: 25,
        tech: ["Stacks", "Starknet", "Algorand", "Hyperliquid", "TypeScript"],
        features: [
            "Delta-neutral strategies",
            "Multi-chain support",
            "Automated hedging",
            "Risk management",
            "Institutional grade"
        ],
        team: ["Baturalp Guvenc", "Mehmet Hayirli"],
        links: {
            github: "https://github.com/Definite-Protocol"
        },
        metrics: {
            completion: "25%",
            budget: "$25K-$125K",
            complexity: "High"
        }
    },
    {
        id: 4,
        title: "Keyra",
        subtitle: "Privacy-First Decentralized Password Manager",
        description: "KEYRA is a secure, privacy-focused password manager utilizing decentralized storage and Zero-Knowledge Proofs. Your passwords never leave your device unencrypted.",
        image: keyraImg,
        category: "Consumer App",
        status: "Testnet",
        priority: "A",
        progress: 90,
        tech: ["ZK Proofs", "React Native", "IPFS", "Encryption", "TypeScript"],
        features: [
            "Zero-knowledge architecture",
            "Decentralized storage",
            "Cross-device sync",
            "Biometric authentication",
            "Secure sharing"
        ],
        team: ["Mehmet Hayirli", "Baturalp Guvenc"],
        links: {
            website: "https://keyra.xyz"
        },
        metrics: {
            completion: "90%",
            spent: "$15,000",
            mobile: "In development"
        }
    },
    {
        id: 5,
        title: "Bytros",
        subtitle: "Perpetual Trading with tBTC Collateral on Starknet",
        description: "Trade perpetual futures using tBTC as collateral without bridging, KYC, or centralized exchanges. Enjoy gasless transactions with AVNU Paymaster and access 50+ markets via Extended Protocol.",
        image: bytrosImg,
        category: "BTCFi",
        status: "Testnet",
        priority: "A",
        progress: 80,
        tech: ["Starknet", "Cairo", "React", "tBTC", "AVNU"],
        features: [
            "No bridging required",
            "Gasless transactions",
            "50+ markets",
            "tBTC collateral",
            "No KYC"
        ],
        team: ["Muhammed Akinci", "Baturalp Guvenc"],
        links: {
            github: "https://github.com/Bytros",
            demo: "https://www.youtube.com/watch?v=cXtH9bSPLys"
        },
        metrics: {
            completion: "80%",
            markets: "50+",
            status: "Testnet Live"
        }
    },
    {
        id: 6,
        title: "DanteGPU",
        subtitle: "Distributed GPU Computing for AI Agents on Solana",
        description: "DanteGPU is a platform enabling AI agents to efficiently utilize distributed GPU resources through the Solana blockchain. Democratizing access to computational power for AI development.",
        image: danteGPUImg,
        category: "Infrastructure",
        status: "Demo",
        priority: "S",
        progress: 60,
        tech: ["Solana", "Rust", "Python", "CUDA", "React"],
        features: [
            "Distributed GPU network",
            "AI agent integration",
            "Blockchain coordination",
            "Cost-effective compute",
            "Scalable infrastructure"
        ],
        team: ["Baturalp Guvenc", "Mehmet Hayirli", "Muhammed Akinci", "Salih Eryilmaz"],
        links: {
            github: "https://github.com/dante-gpu"
        },
        metrics: {
            completion: "60%",
            valuation: "$15M (Jan 2025)",
            spent: "$150,000"
        }
    },
    {
        id: 7,
        title: "Omnisphere",
        subtitle: "Cross-Chain Liquidity Protocol with Atomic Composition",
        description: "A revolutionary cross-chain liquidity protocol enabling atomic composition of liquidity across multiple blockchain networks. Unified liquidity for the multi-chain future.",
        image: omnisphereImg,
        category: "DeFi",
        status: "Development",
        priority: "B",
        progress: 15,
        tech: ["Rust", "Solidity", "LayerZero", "React", "TypeScript"],
        features: [
            "Atomic liquidity composition",
            "Multi-chain support",
            "Unified pools",
            "MEV protection",
            "Gas optimization"
        ],
        team: ["Baturalp Guvenc", "Salih Eryilmaz"],
        links: {},
        metrics: {
            completion: "15%",
            status: "Early Development"
        }
    },

    // ===== DEFI PROJECTS =====
    {
        id: 8,
        title: "The Lich Arbitrage",
        subtitle: "High-Speed DeFi Arbitrage System",
        description: "Advanced arbitrage trading system for identifying and executing profitable trades across decentralized exchanges.",
        image: cap1,
        category: "DeFi",
        status: "Development",
        progress: 40,
        tech: ["Solana", "Rust", "TypeScript"],
        budget: "$4,500 - $13,000",
        duration: "180 days"
    },
    {
        id: 9,
        title: "Seltra AMM",
        subtitle: "Next-Generation Automated Market Maker",
        description: "Innovative AMM design with improved capital efficiency and reduced impermanent loss.",
        image: cap2,
        category: "DeFi",
        status: "Development",
        progress: 30,
        tech: ["Solidity", "React", "The Graph"],
        budget: "$6,000 - $18,000",
        duration: "240 days"
    },
    {
        id: 10,
        title: "Epoch-Swap",
        subtitle: "Time-Weighted Token Swap Protocol",
        description: "Decentralized exchange with time-weighted average pricing for reduced slippage.",
        image: cap1,
        category: "DeFi",
        status: "Development",
        progress: 25,
        tech: ["Solidity", "React", "Hardhat"],
        budget: "$4,000 - $11,000",
        duration: "150 days"
    },
    {
        id: 11,
        title: "Flexible Staking",
        subtitle: "Dynamic Staking Protocol",
        description: "Flexible staking solution with customizable lock periods and reward structures.",
        image: cap2,
        category: "DeFi",
        status: "Development",
        progress: 20,
        tech: ["Solidity", "React", "Ethers.js"],
        budget: "$3,000 - $8,000",
        duration: "120 days"
    },
    {
        id: 12,
        title: "Yieldspan Protocol",
        subtitle: "Yield Optimization Across Time Horizons",
        description: "Protocol for optimizing yield across different time spans and risk profiles.",
        image: cap1,
        category: "DeFi",
        status: "Development",
        progress: 15,
        tech: ["Solidity", "React", "Chainlink"],
        budget: "$7,000 - $20,000",
        duration: "300 days"
    },
    {
        id: 13,
        title: "AetherUSD",
        subtitle: "Decentralized Stablecoin Protocol",
        description: "Algorithmic stablecoin with innovative stabilization mechanisms.",
        image: cap2,
        category: "DeFi",
        status: "Development",
        progress: 20,
        tech: ["Solidity", "React", "Chainlink"],
        budget: "$6,000 - $18,000",
        duration: "240 days"
    },
    {
        id: 14,
        title: "EQUINOX",
        subtitle: "Balanced DeFi Ecosystem",
        description: "Comprehensive DeFi platform with lending, borrowing, and yield farming.",
        image: cap1,
        category: "DeFi",
        status: "Development",
        progress: 10,
        tech: ["Solidity", "React", "The Graph"],
        budget: "$9,000 - $30,000",
        duration: "360 days"
    },
    {
        id: 15,
        title: "Stable.fun",
        subtitle: "Gamified Stablecoin Platform",
        description: "Fun and engaging stablecoin platform with gamification elements.",
        image: cap2,
        category: "DeFi",
        status: "Concept",
        progress: 5,
        tech: ["Solana", "React", "Anchor"],
        budget: "$1,500 - $4,500",
        duration: "90 days"
    },

    // ===== LAUNCHPAD PROJECTS =====
    {
        id: 16,
        title: "ZK-Launchpad",
        subtitle: "Zero-Knowledge Token Launchpad",
        description: "Privacy-preserving launchpad for fair token distributions using ZK proofs.",
        image: cap1,
        category: "Launchpad",
        status: "Development",
        progress: 25,
        tech: ["ZK Proofs", "Solidity", "React"],
        budget: "$8,000 - $22,000",
        duration: "300 days"
    },
    {
        id: 17,
        title: "Mina Launchpad Telegram Bot",
        subtitle: "Telegram-Based Token Launch Platform",
        description: "Easy-to-use Telegram bot for launching tokens on the Mina Protocol.",
        image: cap2,
        category: "Launchpad",
        status: "Development",
        progress: 20,
        tech: ["Mina", "TypeScript", "Telegram API"],
        budget: "$3,000 - $7,000",
        duration: "337 days"
    },
    {
        id: 18,
        title: "Solana IDO Launchpad",
        subtitle: "Initial DEX Offering Platform on Solana",
        description: "Full-featured IDO platform for launching tokens on Solana.",
        image: cap1,
        category: "Launchpad",
        status: "Development",
        progress: 30,
        tech: ["Solana", "Rust", "React", "Anchor"],
        budget: "$6,000 - $18,000",
        duration: "240 days"
    },

    // ===== INFRASTRUCTURE PROJECTS =====
    {
        id: 19,
        title: "Genesis Framework",
        subtitle: "Blockchain Development Framework",
        description: "Comprehensive framework for rapid blockchain application development.",
        image: cap2,
        category: "Infrastructure",
        status: "Development",
        progress: 15,
        tech: ["Rust", "TypeScript", "WebAssembly"],
        budget: "$12,000 - $40,000",
        duration: "450 days"
    },
    {
        id: 20,
        title: "IPFS Gateway",
        subtitle: "Decentralized Storage Gateway",
        description: "High-performance IPFS gateway for decentralized file access.",
        image: cap1,
        category: "Infrastructure",
        status: "Completed",
        progress: 100,
        tech: ["Go", "IPFS", "Docker"],
        budget: "$500 - $2,000",
        duration: "30 days"
    },
    {
        id: 21,
        title: "Pigeon-CCTP",
        subtitle: "Cross-Chain Transfer Protocol",
        description: "Efficient cross-chain transfer protocol for seamless asset movement.",
        image: cap2,
        category: "Infrastructure",
        status: "Concept",
        progress: 5,
        tech: ["Rust", "Solidity", "LayerZero"],
        budget: "$2,500 - $7,500",
        duration: "180 days"
    },
    {
        id: 22,
        title: "oAPP xChain",
        subtitle: "Omnichain Application Framework",
        description: "Framework for building omnichain applications across multiple blockchains.",
        image: cap1,
        category: "Infrastructure",
        status: "Development",
        progress: 20,
        tech: ["LayerZero", "Solidity", "TypeScript"],
        budget: "$5,000 - $15,000",
        duration: "210 days"
    },
    {
        id: 23,
        title: "Solana IP Registry",
        subtitle: "Intellectual Property Registration on Solana",
        description: "Blockchain-based intellectual property registration and verification system.",
        image: cap2,
        category: "Infrastructure",
        status: "Development",
        progress: 25,
        tech: ["Solana", "Rust", "React", "Anchor"],
        budget: "$5,000 - $15,000",
        duration: "210 days"
    },

    // ===== SECURITY PROJECTS =====
    {
        id: 24,
        title: "ZKoCaml",
        subtitle: "Zero-Knowledge Proofs in OCaml",
        description: "ZK proof library and tools built with OCaml for high-assurance applications.",
        image: cap1,
        category: "Security",
        status: "Development",
        progress: 20,
        tech: ["OCaml", "ZK Proofs", "Cryptography"],
        budget: "$7,000 - $20,000",
        duration: "300 days"
    },
    {
        id: 25,
        title: "Aporia Zero",
        subtitle: "Zero-Trust Security Framework",
        description: "Comprehensive zero-trust security framework for Web3 applications.",
        image: cap2,
        category: "Security",
        status: "Development",
        progress: 35,
        tech: ["Rust", "TypeScript", "Cryptography"],
        budget: "$3,000 - $8,000",
        duration: "92 days"
    },
    {
        id: 26,
        title: "AES-256-GCM-PBKDF2-Machine",
        subtitle: "Enterprise Encryption Engine",
        description: "High-performance encryption engine using AES-256-GCM with PBKDF2 key derivation.",
        image: cap1,
        category: "Security",
        status: "Completed",
        progress: 100,
        tech: ["Rust", "Cryptography", "WebAssembly"],
        budget: "$1,000 - $3,000",
        duration: "30 days"
    },
    {
        id: 27,
        title: "ChipherFlow",
        subtitle: "Encrypted Data Pipeline",
        description: "End-to-end encrypted data pipeline for secure information flow.",
        image: cap2,
        category: "Security",
        status: "Development",
        progress: 25,
        tech: ["Rust", "Cryptography", "gRPC"],
        budget: "$3,000 - $9,000",
        duration: "180 days"
    },

    // ===== AI PROJECTS =====
    {
        id: 28,
        title: "UrsusAI",
        subtitle: "AI-Powered Trading Analytics",
        description: "Machine learning platform for trading analytics and market predictions.",
        image: ursusImg,
        category: "AI",
        status: "Development",
        progress: 30,
        tech: ["Python", "TensorFlow", "React", "Solana"],
        budget: "$6,000 - $18,000",
        duration: "200 days"
    },
    {
        id: 29,
        title: "Sceptic AI",
        subtitle: "AI-Based Security Auditor",
        description: "AI-powered smart contract security auditing and vulnerability detection.",
        image: cap2,
        category: "AI",
        status: "Development",
        progress: 25,
        tech: ["Python", "PyTorch", "Solidity"],
        budget: "$6,000 - $16,000",
        duration: "180 days"
    },
    {
        id: 30,
        title: "AI Driven Tools",
        subtitle: "AI Toolkit for Developers",
        description: "Suite of AI-powered development tools for blockchain developers.",
        image: cap1,
        category: "AI",
        status: "Development",
        progress: 20,
        tech: ["Python", "OpenAI", "TypeScript"],
        budget: "$5,000 - $15,000",
        duration: "150 days"
    },

    // ===== GOVERNANCE & IDENTITY =====
    {
        id: 31,
        title: "ZKVoteIOS",
        subtitle: "Private Voting on iOS",
        description: "Zero-knowledge voting application for iOS with complete ballot privacy.",
        image: cap2,
        category: "Governance",
        status: "Development",
        progress: 20,
        tech: ["Swift", "ZK Proofs", "Mina"],
        budget: "$3,000 - $9,000",
        duration: "180 days"
    },
    {
        id: 32,
        title: "PID (ProveID)",
        subtitle: "Decentralized Identity Verification",
        description: "Privacy-preserving identity verification using zero-knowledge proofs.",
        image: cap1,
        category: "Governance",
        status: "Development",
        progress: 25,
        tech: ["ZK Proofs", "React", "Solidity"],
        budget: "$2,500 - $7,500",
        duration: "150 days"
    },

    // ===== TOOLS & UTILITIES =====
    {
        id: 33,
        title: "Sway",
        subtitle: "Smart Contract Development Tool",
        description: "Developer tools for Fuel blockchain smart contract development.",
        image: swayImg,
        category: "Tools",
        status: "Development",
        progress: 30,
        tech: ["Sway", "Rust", "TypeScript"],
        budget: "$4,000 - $11,000",
        duration: "180 days"
    },
    {
        id: 34,
        title: "ETH Trade Bot",
        subtitle: "Automated Ethereum Trading",
        description: "Automated trading bot for Ethereum-based DEXs.",
        image: cap1,
        category: "Tools",
        status: "Development",
        progress: 40,
        tech: ["TypeScript", "Ethers.js", "Node.js"],
        budget: "$1,500 - $4,500",
        duration: "60 days"
    },
    {
        id: 35,
        title: "Bill Port",
        subtitle: "Crypto Payment Gateway",
        description: "Simple cryptocurrency payment processing for businesses.",
        image: cap2,
        category: "Tools",
        status: "Development",
        progress: 35,
        tech: ["TypeScript", "React", "Solana"],
        budget: "$1,000 - $3,000",
        duration: "60 days"
    },
    {
        id: 36,
        title: "ETH Shopify",
        subtitle: "E-commerce Crypto Integration",
        description: "Shopify integration for Ethereum and crypto payments.",
        image: cap1,
        category: "Tools",
        status: "Development",
        progress: 30,
        tech: ["TypeScript", "Shopify API", "Ethers.js"],
        budget: "$1,500 - $4,500",
        duration: "90 days"
    },
    {
        id: 37,
        title: "Stream Lens",
        subtitle: "Real-time Blockchain Analytics",
        description: "Real-time streaming analytics for blockchain data.",
        image: cap2,
        category: "Tools",
        status: "Development",
        progress: 25,
        tech: ["Rust", "Apache Kafka", "React"],
        budget: "$1,500 - $4,000",
        duration: "90 days"
    },
    {
        id: 38,
        title: "DOM Rust",
        subtitle: "Rust-based DOM Manipulation",
        description: "High-performance DOM manipulation library written in Rust/WASM.",
        image: cap1,
        category: "Tools",
        status: "Development",
        progress: 40,
        tech: ["Rust", "WebAssembly", "JavaScript"],
        budget: "$1,500 - $4,000",
        duration: "90 days"
    },

    // ===== CONSUMER APPS =====
    {
        id: 39,
        title: "Synapse",
        subtitle: "Web3 Social Platform",
        description: "Decentralized social networking platform with token incentives.",
        image: synapseImg,
        category: "Consumer App",
        status: "Development",
        progress: 20,
        tech: ["React", "Solana", "IPFS"],
        budget: "$5,000 - $15,000",
        duration: "180 days"
    },
    {
        id: 40,
        title: "Cheeseart",
        subtitle: "NFT Art Platform",
        description: "Creative NFT art platform for digital artists.",
        image: cap1,
        category: "Consumer App",
        status: "Development",
        progress: 25,
        tech: ["React", "Solana", "Arweave"],
        budget: "$2,500 - $6,500",
        duration: "366 days"
    },
    {
        id: 41,
        title: "Stable Charity",
        subtitle: "Crypto Donation Platform",
        description: "Transparent charity donation platform using stablecoins.",
        image: cap2,
        category: "Consumer App",
        status: "Development",
        progress: 30,
        tech: ["React", "Solidity", "USDC"],
        budget: "$2,000 - $6,000",
        duration: "120 days"
    },

    // ===== EDUCATION & RESEARCH =====
    {
        id: 42,
        title: "ZK-Edu",
        subtitle: "Zero-Knowledge Education Platform",
        description: "Educational platform teaching zero-knowledge cryptography concepts.",
        image: cap1,
        category: "Education",
        status: "Development",
        progress: 35,
        tech: ["React", "TypeScript", "ZK Proofs"],
        budget: "$2,000 - $5,000",
        duration: "120 days"
    },
    {
        id: 43,
        title: "Fundamental",
        subtitle: "Blockchain Research Platform",
        description: "Research and analytics platform for blockchain fundamentals.",
        image: cap2,
        category: "Education",
        status: "Development",
        progress: 15,
        tech: ["Python", "React", "PostgreSQL"],
        budget: "$7,500 - $25,000",
        duration: "240 days"
    },
    {
        id: 44,
        title: "Quantlink",
        subtitle: "Quantitative Analysis Tools",
        description: "Quantitative analysis and backtesting tools for crypto trading.",
        image: quantlinkImg,
        category: "Education",
        status: "Development",
        progress: 20,
        tech: ["Python", "React", "TradingView"],
        budget: "$4,000 - $12,000",
        duration: "150 days"
    },

    // ===== OTHER PROJECTS =====
    {
        id: 45,
        title: "Simurglabs",
        subtitle: "Blockchain R&D Laboratory",
        description: "Research and development lab for experimental blockchain projects.",
        image: cap2,
        category: "Other",
        status: "Active",
        progress: 50,
        tech: ["Rust", "Solidity", "Python"],
        budget: "$3,500 - $9,000",
        duration: "150 days"
    },
    {
        id: 46,
        title: "Solphi",
        subtitle: "Solana DeFi Aggregator",
        description: "DeFi aggregator for optimal swap routes on Solana.",
        image: cap1,
        category: "DeFi",
        status: "Development",
        progress: 30,
        tech: ["Solana", "Rust", "React"],
        budget: "$1,500 - $4,500",
        duration: "90 days"
    },
    {
        id: 47,
        title: "Qross",
        subtitle: "Cross-Chain Query Protocol",
        description: "Query protocol for fetching data across multiple blockchains.",
        image: cap2,
        category: "Infrastructure",
        status: "Development",
        progress: 25,
        tech: ["GraphQL", "Rust", "TypeScript"],
        budget: "$1,000 - $3,000",
        duration: "60 days"
    },
    {
        id: 48,
        title: "TrustQuick",
        subtitle: "Fast Trust Score System",
        description: "Quick and reliable trust scoring for DeFi protocols.",
        image: cap1,
        category: "Security",
        status: "Development",
        progress: 30,
        tech: ["Python", "React", "Machine Learning"],
        budget: "$2,000 - $7,000",
        duration: "90 days"
    },
    {
        id: 49,
        title: "Sittaris",
        subtitle: "Stellar Network Tools",
        description: "Development tools and utilities for Stellar network.",
        image: cap2,
        category: "Tools",
        status: "Development",
        progress: 25,
        tech: ["Stellar", "TypeScript", "React"],
        budget: "$2,500 - $7,500",
        duration: "150 days"
    },
    {
        id: 50,
        title: "Adversei",
        subtitle: "Adversarial Testing Framework",
        description: "Framework for adversarial testing of smart contracts.",
        image: cap1,
        category: "Security",
        status: "Concept",
        progress: 10,
        tech: ["Python", "Solidity", "Rust"],
        budget: "$2,000 - $6,000",
        duration: "120 days"
    }
];

export const categories = [
    "All",
    "DeFi",
    "Security",
    "Infrastructure",
    "BTCFi",
    "Consumer App",
    "AI",
    "Launchpad",
    "Governance",
    "Tools",
    "Education",
    "Other"
];

