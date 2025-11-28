import cap1 from '../assets/images/cap1.png';
import cap2 from '../assets/images/cap2.jpg';

export const projectsData = [
    {
        id: 1,
        title: "Wiener Labs Arbitrage",
        subtitle: "Advanced DeFi Trading System on Solana with High-Speed Arbitrage Execution",
        description: "A sophisticated arbitrage trading system built on Solana blockchain, leveraging high-speed execution and advanced algorithms to identify and capitalize on price discrepancies across decentralized exchanges.",
        image: cap1,
        category: "DeFi",
        status: "Active",
        tech: ["Solana", "Rust", "React", "TypeScript", "Anchor"],
        features: [
            "Sub-second transaction execution",
            "Multi-DEX price monitoring",
            "Automated profit optimization",
            "Risk management protocols",
            "Real-time analytics dashboard"
        ],
        metrics: {
            tvl: "$2.5M+",
            transactions: "50K+",
            uptime: "99.9%"
        },
        link: "#"
    },
    {
        id: 2,
        title: "RWA Tokenization Platform",
        subtitle: "Real World Asset Tokenization Infrastructure",
        description: "A comprehensive platform for tokenizing real-world assets including real estate, commodities, and securities. Enabling fractional ownership and global accessibility.",
        image: cap2,
        category: "Tokenization",
        status: "Active",
        tech: ["Ethereum", "Solidity", "Next.js", "The Graph", "IPFS"],
        features: [
            "Fractional ownership",
            "Regulatory compliance",
            "Multi-chain support",
            "Automated dividend distribution",
            "Secondary market trading"
        ],
        metrics: {
            tvl: "$10M+",
            assets: "25+",
            investors: "1000+"
        },
        link: "#"
    },
    {
        id: 3,
        title: "DeFi Yield Optimizer",
        subtitle: "Automated Yield Farming Strategies",
        description: "An intelligent yield optimization protocol that automatically allocates funds across multiple DeFi protocols to maximize returns while minimizing risk.",
        image: cap1,
        category: "DeFi",
        status: "Active",
        tech: ["Ethereum", "Solidity", "React", "Hardhat", "Chainlink"],
        features: [
            "Auto-compounding",
            "Risk-adjusted strategies",
            "Gas optimization",
            "Multi-protocol integration",
            "Impermanent loss protection"
        ],
        metrics: {
            apy: "15-45%",
            tvl: "$5M+",
            users: "2500+"
        },
        link: "#"
    },
    {
        id: 4,
        title: "Cross-Chain Bridge",
        subtitle: "Seamless Asset Transfer Across Blockchains",
        description: "A secure and efficient bridge protocol enabling seamless transfer of assets between Ethereum, Solana, and other major blockchain networks.",
        image: cap2,
        category: "Infrastructure",
        status: "Development",
        tech: ["Rust", "Solidity", "Go", "React", "WebSocket"],
        features: [
            "Multi-chain support",
            "Atomic swaps",
            "Low latency transfers",
            "Decentralized validators",
            "Fee optimization"
        ],
        metrics: {
            chains: "5+",
            volume: "$1M+",
            speed: "<30s"
        },
        link: "#"
    },
    {
        id: 5,
        title: "NFT Marketplace",
        subtitle: "Next-Gen Digital Asset Trading Platform",
        description: "A feature-rich NFT marketplace with advanced trading capabilities, creator royalties, and cross-chain NFT support.",
        image: cap1,
        category: "NFT",
        status: "Active",
        tech: ["Solana", "Rust", "Next.js", "PostgreSQL", "Redis"],
        features: [
            "Lazy minting",
            "Auction system",
            "Creator royalties",
            "Collection analytics",
            "Social features"
        ],
        metrics: {
            volume: "$500K+",
            collections: "100+",
            creators: "500+"
        },
        link: "#"
    },
    {
        id: 6,
        title: "DAO Governance Platform",
        subtitle: "Decentralized Decision Making Infrastructure",
        description: "A comprehensive DAO governance platform enabling transparent voting, proposal management, and treasury operations.",
        image: cap2,
        category: "Governance",
        status: "Active",
        tech: ["Ethereum", "Solidity", "React", "TheGraph", "Snapshot"],
        features: [
            "On-chain voting",
            "Delegation system",
            "Treasury management",
            "Proposal templates",
            "Multi-sig integration"
        ],
        metrics: {
            daos: "15+",
            proposals: "200+",
            voters: "5000+"
        },
        link: "#"
    }
];

export const categories = ["All", "DeFi", "Tokenization", "Infrastructure", "NFT", "Governance"];

