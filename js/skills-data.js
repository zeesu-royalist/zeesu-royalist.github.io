// Centralized skills database for Zeesu Royalist — MERN Full-Stack Developer

const programmingSkills = [

    /* ── FRONTEND ───────────────────────────────────────────────────── */
    {
        category: "frontend",
        title: "JavaScript",
        icon: "fab fa-js-square",
        iconColor: "#F7DF1E",
        proficiency: 95,
        description: "Core language powering all my projects — async patterns, closures, modern ES2024 features, and DOM manipulation."
    },
    {
        category: "frontend",
        title: "TypeScript",
        icon: "fas fa-code",
        iconColor: "#3178C6",
        proficiency: 88,
        description: "Strongly-typed JavaScript for scalable apps — interfaces, generics, enums, and strict type inference."
    },
    {
        category: "frontend",
        title: "Next.js",
        icon: "fas fa-forward",
        iconColor: "#000000",
        proficiency: 92,
        description: "SSR, SSG, App Router, server actions, middleware, and full-stack Next.js applications."
    },
    {
        category: "frontend",
        title: "React.js",
        icon: "fab fa-react",
        iconColor: "#61DAFB",
        proficiency: 94,
        description: "Modular component architectures, custom hooks, Context API, and optimized rendering patterns."
    },
    {
        category: "frontend",
        title: "GSAP",
        icon: "fas fa-wave-square",
        iconColor: "#88CE02",
        proficiency: 85,
        description: "Rich micro-animations, ScrollTrigger sequences, timeline chaining, and motion design."
    },
    {
        category: "frontend",
        title: "Tailwind CSS",
        icon: "fas fa-wind",
        iconColor: "#38BDF8",
        proficiency: 92,
        description: "Utility-first responsive layouts, custom config, JIT mode, and dark-mode theming."
    },
    {
        category: "frontend",
        title: "Shadcn/ui",
        icon: "fas fa-layer-group",
        iconColor: "#09090B",
        proficiency: 85,
        description: "Accessible, copy-paste component library built on Radix primitives — fully customizable."
    },
    {
        category: "frontend",
        title: "Bootstrap",
        icon: "fab fa-bootstrap",
        iconColor: "#7952B3",
        proficiency: 88,
        description: "Grid system, utility classes, responsive components, and custom SCSS theme overrides."
    },
    {
        category: "frontend",
        title: "Material UI",
        icon: "fas fa-palette",
        iconColor: "#007FFF",
        proficiency: 82,
        description: "Google's design system — custom theme providers, styled engine, and component overrides."
    },

    /* ── BACKEND & REAL-TIME ────────────────────────────────────────── */
    {
        category: "logic",
        title: "Node.js",
        icon: "fab fa-node-js",
        iconColor: "#339933",
        proficiency: 90,
        description: "Event-driven backend services, REST APIs, middleware pipelines, and server-side logic."
    },
    {
        category: "logic",
        title: "Express.js",
        icon: "fas fa-server",
        iconColor: "#444444",
        proficiency: 88,
        description: "Lightweight, fast REST API framework — routing, middleware, auth guards, and error handling."
    },
    {
        category: "logic",
        title: "Socket.IO",
        icon: "fas fa-plug",
        iconColor: "#010101",
        proficiency: 78,
        description: "Real-time bidirectional communication — live chats, notifications, and collaborative systems."
    },
    {
        category: "logic",
        title: "Redux",
        icon: "fas fa-exchange-alt",
        iconColor: "#764ABC",
        proficiency: 83,
        description: "Centralized global state management — actions, reducers, middleware, and Redux Toolkit."
    },
    {
        category: "logic",
        title: "Zustand",
        icon: "fas fa-atom",
        iconColor: "#FF6154",
        proficiency: 82,
        description: "Minimal, unopinionated React state management — slices, subscriptions, and persist middleware."
    },
    {
        category: "logic",
        title: "Zod",
        icon: "fas fa-shield-alt",
        iconColor: "#3068B7",
        proficiency: 85,
        description: "TypeScript-first schema validation — runtime type checking, form parsing, and API safety."
    },
    {
        category: "logic",
        title: "Joi",
        icon: "fas fa-check-circle",
        iconColor: "#F7941E",
        proficiency: 78,
        description: "Powerful object schema description and validation for Node.js request payloads."
    },
    {
        category: "logic",
        title: "MongoDB",
        icon: "fas fa-leaf",
        iconColor: "#47A248",
        proficiency: 88,
        description: "Document-based NoSQL database — aggregation pipelines, indexes, Mongoose ODM, and Atlas."
    },
    {
        category: "logic",
        title: "MySQL",
        icon: "fas fa-database",
        iconColor: "#4479A1",
        proficiency: 82,
        description: "Relational SQL — complex joins, stored procedures, indexing, and query optimization."
    },
    {
        category: "logic",
        title: "PostgreSQL",
        icon: "fas fa-database",
        iconColor: "#336791",
        proficiency: 80,
        description: "Advanced relational DB — JSONB, full-text search, row-level security, and transactions."
    },
    {
        category: "logic",
        title: "Supabase",
        icon: "fas fa-bolt",
        iconColor: "#3ECF8E",
        proficiency: 78,
        description: "Open-source Firebase alternative — Postgres + Auth + Storage + Realtime in one platform."
    },
    {
        category: "logic",
        title: "Prisma ORM",
        icon: "fas fa-link",
        iconColor: "#2D3748",
        proficiency: 83,
        description: "Next-generation ORM — type-safe queries, migrations, schema modeling, and Prisma Studio."
    },
    {
        category: "logic",
        title: "Redis",
        icon: "fas fa-memory",
        iconColor: "#DC382D",
        proficiency: 75,
        description: "In-memory caching layer — session storage, rate-limiting, pub/sub, and queue management."
    },
    {
        category: "logic",
        title: "Python",
        icon: "fab fa-python",
        iconColor: "#3776AB",
        proficiency: 80,
        description: "Scripting, automation tasks, data manipulation, and quick prototyping utilities."
    },
    {
        category: "logic",
        title: "C / C++",
        icon: "fas fa-terminal",
        iconColor: "#00599C",
        proficiency: 82,
        description: "Systems programming, pointer tracking, memory management, and algorithmic efficiency."
    },

    /* ── DEVOPS, CLOUD & TOOLS ──────────────────────────────────────── */
    {
        category: "tools",
        title: "AWS",
        icon: "fab fa-aws",
        iconColor: "#FF9900",
        proficiency: 80,
        description: "IAM roles, S3 buckets, EC2 instances, Lambda functions, and cloud deployment pipelines."
    },
    {
        category: "tools",
        title: "Docker",
        icon: "fab fa-docker",
        iconColor: "#2496ED",
        proficiency: 78,
        description: "Containerizing full-stack apps, Docker Compose stacks, and reproducible dev environments."
    },
    {
        category: "tools",
        title: "Git & GitHub",
        icon: "fab fa-git-alt",
        iconColor: "#F1502F",
        proficiency: 93,
        description: "Version control, branching strategies, PR reviews, CI/CD triggers, and GitHub Actions."
    },
    {
        category: "tools",
        title: "VS Code",
        icon: "fas fa-code",
        iconColor: "#007ACC",
        proficiency: 95,
        description: "Primary IDE — custom keybindings, debugging, extensions, and workspace config."
    },
    {
        category: "tools",
        title: "Cursor",
        icon: "fas fa-magic",
        iconColor: "#6B21A8",
        proficiency: 88,
        description: "AI-powered code editor — pair programming, codebase chat, and smart autocomplete."
    },
    {
        category: "tools",
        title: "Responsive Design",
        icon: "fas fa-mobile-alt",
        iconColor: "#10B981",
        proficiency: 96,
        description: "Fluid grids, flexbox, CSS clamp, media queries, and zero-overflow layouts across all screens."
    },
    {
        category: "tools",
        title: "UI/UX Design",
        icon: "fas fa-drafting-compass",
        iconColor: "#F472B6",
        proficiency: 85,
        description: "Wireframes, component systems, accessibility, user flows, and design-to-code precision."
    },
    {
        category: "tools",
        title: "Performance",
        icon: "fas fa-tachometer-alt",
        iconColor: "#F59E0B",
        proficiency: 83,
        description: "Lazy loading, code splitting, image optimization, caching strategies, and Lighthouse tuning."
    }
];

const otherSkills = [
    {
        title: "Chess Player",
        icon: "fas fa-chess",
        iconColor: "#6366f1",
        description: "Cultivating strategic foresight, analyzing multi-step possibilities, patience, and visual tactics under timed conditions."
    },
    {
        title: "Rubik's Cube Solver",
        icon: "fas fa-cubes",
        iconColor: "#a855f7",
        description: "Applying spatial visualization, fast muscle memory routines, and pattern-recognition algorithms (CFOP method)."
    },
    {
        title: "Graphic Designing",
        icon: "fas fa-bezier-curve",
        iconColor: "#06b6d4",
        description: "Structuring brand typography rules, alignment grids, visual balance, vector manipulation, and product identity schemes."
    },
    {
        title: "Photo Editing",
        icon: "fas fa-sliders-h",
        iconColor: "#f43f5e",
        description: "Fine-tuning exposure curves, localized masks, professional color grading, saturation curves, and digital filters."
    },
    {
        title: "AI-Assisted Documentation",
        icon: "fas fa-file-alt",
        iconColor: "#2563eb",
        description: "Generating structured documentation, reports, technical articles, and project summaries using modern AI-powered workflows."
    },
    {
        title: "Professional Presentation Creation",
        icon: "fas fa-file-powerpoint",
        iconColor: "#dc2626",
        description: "Developing polished presentations for project showcases, business proposals, technical seminars, and portfolio demonstrations."
    }
];
