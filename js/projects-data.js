// Database of all projects in the Zeesu Royalist portfolio
const projectsData = [
    {
        id: "prepai",
        title: "PrepAI",
        category: "web-apps",
        image: "images/new1.jpeg",
        description: "AI-powered interview preparation platform for technical and behavioral practice.",

        longDescription: "PrepAI is a modern AI-powered interview preparation web application designed to help job seekers confidently prepare for their next interview. Users can upload their resume and match it with any job description to receive personalized technical and behavioral interview questions, skill roadmaps, profile match analysis, and AI-driven preparation insights. The clean, minimal interface ensures an intuitive user experience while making interview preparation faster and more effective.",

        tech: [
            "Next.js",
            "Tailwind",
            "TypeScript",
            "Responsive Design",
            "AI API Integration"
        ],

        features: [
            "Resume & Job Description matching using AI",
            "Personalized technical and behavioral interview questions",
            "Skill gap analysis with customized learning roadmap",
            "Profile match scoring and interview readiness insights",
            "Modern responsive dashboard with interactive UI",
            "Fast, clean, and user-friendly experience"
        ],

        challenges: "Creating a clean, responsive landing page while maintaining smooth animations, readable typography, and scalable card layouts across different screen sizes.",

        solution: "Implemented modern Flexbox and CSS Grid layouts, responsive typography using clamp(), reusable UI components, optimized spacing, and subtle animations to deliver a premium user experience.",

        futureImprovements: "Add user authentication, AI chat interview simulator, voice-based mock interviews, interview history tracking, progress analytics, and backend integration with cloud databases.",

        github: "https://github.com/zeesu-royalist",
        demo: "https://prepai-frontend-d5f6.onrender.com"
    },
    {
        id: "zkill",
        title: "zKill",
        category: "web-apps",
        image: "images/new3.jpeg",
        description: "An AI-powered no-code platform that builds React applications from simple text prompts.",

        longDescription: "zKill is a futuristic AI web application that enables users to create complete React applications without writing code. By simply describing an idea in natural language, the AI generates production-ready React code, resolves dependencies, and provides a live preview directly in the browser. Designed with a modern cyberpunk-inspired interface, the platform focuses on speed, simplicity, and an intuitive development experience for creators of all skill levels.",

        tech: [
            "Next.js",
            "Tailwind",
            "TypeScript",
            "Responsive Design",
            "Glassmorphism UI",
            "Modern CSS Animations"
        ],

        features: [
            "Generate React applications using AI-powered prompts",
            "Instant live preview of generated applications",
            "Automatic dependency management",
            "Export production-ready source code",
            "Interactive modern dashboard with animated UI",
            "Fully responsive design for desktop and mobile"
        ],

        challenges: "Creating a visually engaging futuristic interface while maintaining smooth performance, responsive layouts, and complex background animations across different screen sizes.",

        solution: "Used Flexbox, CSS Grid, reusable UI components, optimized gradients, glow effects, and lightweight animations to deliver a premium, high-performance user experience.",

        futureImprovements: "Integrate real AI code generation APIs, user authentication, project history, cloud storage, collaborative editing, GitHub integration, and deployment to platforms like Vercel or Netlify.",

        github: "https://github.com/zeesu-royalist",
        demo: "https://z-kill.vercel.app"
    },
    {
        id: "jobboard",
        title: "JobBoard",
        category: "web-apps",
        image: "images/new2.jpeg",
        description: "A modern job portal connecting developers with top tech opportunities.",

        longDescription: "JobBoard is a responsive job portal designed to bridge the gap between talented developers and leading technology companies. The platform enables job seekers to browse curated job listings, apply instantly, and connect directly with hiring managers. Recruiters can also post new job openings, manage listings, and reach qualified candidates through a clean, user-friendly interface.",

        tech: [
            "React",
            "Sass",
            "JavaScript",
            "Responsive Design",
            "Local Storage"
        ],

        features: [
            "Browse curated job opportunities from top tech companies",
            "Post and manage job openings through an intuitive dashboard",
            "Instant one-click job applications",
            "Direct communication with recruiters and hiring managers",
            "Responsive UI optimized for desktop, tablet, and mobile devices",
            "Modern glassmorphism design with smooth animations"
        ],

        challenges: "Designing a professional dashboard with responsive layouts while maintaining readability, smooth navigation, and visually appealing glassmorphism effects across all devices.",

        solution: "Built the interface using Flexbox, CSS Grid, reusable UI components, responsive typography, and optimized animations to create a fast and elegant user experience.",

        futureImprovements: "Integrate backend authentication, resume uploads, company profiles, advanced search filters, real-time notifications, application tracking, and AI-powered job recommendations.",

        github: "https://github.com/zeesu-royalist",
        demo: "https://job-one-sigma.vercel.app"
    },
    {
        id: "zeesumax",
        title: "ZeesuMax",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790070065/1759579315315-tiny_nbksyb.webp",
        description: "Stream your favorite movies, shows, and documentaries in HD.",
        longDescription: "ZeesuMax is a premium streaming interface conceptualized for modern entertainment hubs. It provides an intuitive catalog system that aggregates movies, series, and independent documentaries into beautiful high-definition grids, resembling premium services like Netflix or HBO Max.",
        tech: ["React", "CSS3", "JavaScript", "Vanilla Web APIs"],
        features: [
            "HD video rendering & adaptive container layouts",
            "Rich interactive content category filter tags",
            "Personalized user watchlists saved to browser storage",
            "Advanced search capabilities to quickly locate shows"
        ],
        challenges: "Ensuring video container scaling on multiple screens while maintaining fast load times for highly graphical cards.",
        solution: "Applied flexbox layouts, strict image aspect ratios, and modern loading animations during image fetch requests.",
        futureImprovements: "Integration with live streaming APIs and real-time database management systems like Firebase.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://zeesu-royalist.github.io/Max/"
    },
    {
        id: "zeesu-mapweb",
        title: "Zeesu MapWeb",
        category: "tech",
        image: "images/cardA2.jpg",
        description: "Geographic and tech solutions high-quality services to help navigate.",
        longDescription: "Zeesu MapWeb is a spatial mapping dashboard designed for geographic visualization and route inspection. Utilizing interactive map interfaces, it lets clients query destinations, examine local coordinates, and access location-based business services.",
        tech: ["Next.js", "Shad/Cn", "JavaScript", "Geolocation API", "Leaflet.js / Custom Maps"],
        features: [
            "Real-time geographic location detection",
            "Custom map styles with interactive coordinate pinning",
            "Quick distance calculations and route recommendations",
            "Responsive layout tailored for navigation on-the-go"
        ],
        challenges: "Managing asynchronous location tracking requests and plotting custom routes smoothly on mobile browsers.",
        solution: "Implemented asynchronous JS promises and optimized SVG icon layering for maps to reduce layout shifting.",
        futureImprovements: "Integrate offline map caching and augmented reality routing.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://zeesu-royalist.github.io/Map"
    },
    {
        id: "zeesuxen-ai",
        title: "ZeesuXen AI",
        category: "tech",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/f_auto,q_auto/v1784097340/cardA3_ymxqio.webp",
        description: "Personal AI assistant, conversations with intelligent AI technology.",
        longDescription: "ZeesuXen AI is an interactive chat application powered by conversational artificial intelligence. It mimics human interactions, provides smart answers, parses complex queries, and supports creative writing tasks directly inside a clean, glowing glassmorphic workspace.",
        tech: ["React", "Tailwind", "JavaScript", "Web APIs", "AI API Integration"],
        features: [
            "Interactive chat window with smooth autoscroll",
            "Sleek markdown text formatting for code blocks",
            "Custom system prompt customizations (creative, concise, etc.)",
            "Instant answers with clean typewriter loading states"
        ],
        challenges: "Creating a natural feeling typewriter loading effect while parsing long text output dynamically.",
        solution: "Developed custom JS chunking algorithms that process API streaming results line-by-line and animate text delivery.",
        futureImprovements: "Voice inputs, speech-to-text response, and multi-modal image interpretation support.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://zeesu-royalist.github.io/XenAi"
    },
    {
        id: "zeesuvision-ai",
        title: "ZeesuVision AI",
        category: "tech",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790070065/1760159565709-tiny_yyqm2d.webp",
        description: "Transforming your imagination into stunning visual art with AI.",
        longDescription: "ZeesuVision AI is a neural image generation studio that translates natural text prompts into unique digital designs and visual assets, enabling users to prototype layouts and graphics quickly.",
        tech: ["Next.js", "Shad/cn", "TypeScript", "Image Generation APIs", "Canvas API"],
        features: [
            "Prompt helper utility with quick inspiration tags",
            "Multi-resolution output options for standard screens",
            "Instant photo manipulation and adjustment tools",
            "Direct downloading of high-quality PNG formats"
        ],
        challenges: "Ensuring stable connections while generating media, preventing visual freezing during long API calls.",
        solution: "Engineered elegant, glowing loading skeletons and detailed toast notifications showing step-by-step progress.",
        futureImprovements: "Batch image generation and visual styles style-sheets selector.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/Vision-AI/"
    },
    {
        id: "zeesu-lib",
        title: "Zeesu Lib",
        category: "web-apps",
        image: "images/cardA5.jpg",
        description: "Premium platform for book lovers to discover and download favorite books.",
        longDescription: "Zeesu Lib is a modern digital library designed for bibliophiles. It aggregates thousands of open-source literary works, letting users filter by genres, read directly online, and download EPUB or PDF formats easily.",
        tech: ["React", "Sass", "JavaScript", "Open Library API", "LocalStorage"],
        features: [
            "Full-text catalog search spanning titles, authors, and genres",
            "Interactive e-reader with font scaling and night mode",
            "Personalized library bookshelf for tracking read items",
            "High fidelity cover art previews with dynamic loading"
        ],
        challenges: "Handling thousands of catalog records efficiently in the DOM without degrading render performance.",
        solution: "Implemented pagination and debounced input events on search bars to minimize rendering cycles.",
        futureImprovements: "Audiobook streaming, bookmarks syncing, and interactive notes taking.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/Lib/"
    },
    {
        id: "codesync",
        title: "CodeSync",
        category: "web-apps",
        image: "images/new4.jpeg",
        description: "A modern browser-based code editor inspired by VS Code for seamless coding and project management.",

        longDescription: "CodeSync is a developer-focused web application that recreates the familiar Visual Studio Code experience inside the browser. It features a professional code editor, project explorer, integrated terminal, syntax-highlighted files, and a responsive workspace designed for writing, editing, and managing web development projects. The clean interface provides an immersive coding environment while maintaining excellent performance across devices.",

        tech: [
            "React",
            "Tailwind",
            "JavaScript",
            "Responsive Design",
            "Monaco Editor",
            "Vite"
        ],

        features: [
            "VS Code-inspired browser interface",
            "Integrated Monaco code editor with syntax highlighting",
            "Project explorer with file and folder navigation",
            "Built-in terminal simulation for development workflow",
            "Responsive workspace optimized for desktop and tablets",
            "Clean dark theme with professional developer experience"
        ],

        challenges: "Replicating the desktop IDE experience inside a web browser while maintaining responsive layouts, accurate spacing, smooth interactions, and high performance.",

        solution: "Developed reusable UI components using Flexbox and CSS Grid, integrated Monaco Editor for code editing, optimized layout rendering, and implemented responsive design principles for a seamless coding experience.",

        futureImprovements: "Add real-time collaboration, Git integration, file upload/download support, multiple editor tabs, AI code completion, cloud project storage, and live deployment integration.",

        github: "https://github.com/zeesu-royalist",
        demo: "http://code-editor-website-one.vercel.app"
    },
    {
        id: "zeesu-retouch",
        title: "Zeesu ReTouch",
        category: "utilities",
        image: "images/card13.jpg",
        description: "Upload your image and adjust filters to create your perfect look.",
        longDescription: "Zeesu ReTouch is a browser-based photo editor utility. It lets users upload images and apply immediate adjustments like contrast, brightness, blur, sepia, and crop directly in the browser.",
        tech: ["Next.js", "Sass", "JavaScript", "Canvas API", "CSS Filters"],
        features: [
            "Local file selection and instant rendering onto editable canvases",
            "Range slider controls adjusting CSS filters in real-time",
            "Download option export editing canvases back to high-res JPGs",
            "Preset adjustment templates (Vintage, Dark, Cyberpunk)"
        ],
        challenges: "Handling highly dense, high-resolution phone photos on canvas components without causing lag.",
        solution: "Rendered a preview thumbnail copy to apply filters in real-time, then exported selections to the large photo on final save.",
        futureImprovements: "AI-based background removal and sticker additions tools.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/ReTouch/"
    },
    {
        id: "zeesu-verse",
        title: "Zeesu Verse",
        category: "web-apps",
        image: "images/cardA6.jpg",
        description: "Discover the latest trends, shop effortlessly, and enjoy unbeatable deals.",
        longDescription: "Zeesu Verse is a flagship e-commerce portal showcasing modern visual design trends. It presents product catalogs, handles cart additions, supports coupons, and creates a seamless checkout checkout flow.",
        tech: ["HTML5", "CSS3", "JavaScript", "CSS Grid", "Dynamic Checkout API"],
        features: [
            "Dynamic product lists with live price filters",
            "Interactive product hover zooms and color previews",
            "Animated cart sliding drawer with subtotal calculations",
            "Mock gateway integration with billing confirmation screens"
        ],
        challenges: "Synchronizing the state of the shopping cart item counter across different pages without using heavy frameworks.",
        solution: "Developed a vanilla Javascript state listener tracking LocalStorage updates to refresh headers dynamically.",
        futureImprovements: "Payment portal, merchant administration panels, and user transaction history log.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/Verse/"
    },
    {
        id: "zeesu-pixel",
        title: "Zeesu Pixel",
        category: "web-apps",
        image: "images/card1.jpg",
        description: "Find high-quality images quickly using advanced search features.",
        longDescription: "Zeesu Pixel is a media search app that fetches millions of high-definition, royalty-free stock pictures from Unsplash/Pexels. Perfect for designers looking for quick high-resolution image assets.",
        tech: ["Next.js", "Tailwind", "JavaScript", "Unsplash API", "Infinite Scroll"],
        features: [
            "Live masonry photo grids that adapt dynamically",
            "One-click direct photo downloading with API download tracking",
            "Detailed search filters including orientation and color themes",
            "Image preview overlays with full EXIF camera details"
        ],
        challenges: "Implementing infinite scrolling smoothly without visual page jittering or double API triggers.",
        solution: "Used IntersectionObserver targeting a bottom sentinel element to pre-fetch items before reaching the page end.",
        futureImprovements: "In-browser photo cropping and user collections organization.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/Pixel/"
    },
    {
        id: "zeesu-noteweb",
        title: "Zeesu NoteWeb",
        category: "utilities",
        image: "images/card2.jpg",
        description: "Create, save, and manage personal notes efficiently online.",
        longDescription: "Zeesu NoteWeb is a lightweight note-taking web utility featuring sticky notes grids. Designed for rapid brain-dumping, todo list organization, and markdown editing.",
        tech: ["HTML5", "CSS3", "JavaScript", "RichText Editor", "LocalStorage"],
        features: [
            "Sticky notes board with drag-and-drop ordering",
            "Rich text options (Bold, Italic, Bullet lists, Colors)",
            "Automated background savings so no data is ever lost",
            "JSON import/export tools to backup note directories"
        ],
        challenges: "Preserving nested HTML formats during text selection changes and ensuring drag-and-drop functions on touchscreens.",
        solution: "Utilized native browser `contentEditable` properties and integrated touch-events translations in custom draggable algorithms.",
        futureImprovements: "Cloud database sync and notes locking using pin codes.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://zeesu-royalist.github.io/NoteWeb/"
    },
    {
        id: "zeesu-wordtest",
        title: "Zeesu WordTest",
        category: "games",
        image: "images/card4.jpg",
        description: "Measure typing speed accurately with real-time test results.",
        longDescription: "Zeesu WordTest is an interactive, gamified typing utility designed to analyze and test speed, accuracy, and typing consistency. Offers charts tracking performance history.",
        tech: ["React", "Bootstrap", "JavaScript", "Timer APIs", "SVG Charting"],
        features: [
            "Real-time tracking of words-per-minute (WPM) and accuracy percentages",
            "Visual character color highlights (green correct, red error)",
            "Configurable timers (15s, 30s, 60s) and custom text modes",
            "Post-test statistical analysis showing key character mistakes"
        ],
        challenges: "Managing word wrap rendering without throwing off character indexing during fast inputs.",
        solution: "Split texts into nested span arrays and indexed active characters directly to prevent layout recalculation gaps.",
        futureImprovements: "Global typing leaderboards, achievements badges, and sound feedback.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://zeesu-royalist.github.io/WordTest/"
    },
    {
        id: "zeesu-reader",
        title: "Zeesu Reader",
        category: "utilities",
        image: "images/card5.jpg",
        description: "Text to speech converter for easy listening and content accessibility.",
        longDescription: "Zeesu Reader utilizes SpeechSynthesis interfaces to turn pasted articles, text documents, or paragraphs into spoken content. Great for accessibility and listening on the go.",
        tech: ["React", "CSS3", "JavaScript", "Speech Synthesis API"],
        features: [
            "Multi-language selector utilizing native system voices",
            "Adjustable sliders for speed, pitch, and output volume",
            "Highlighting active read words in real time",
            "File uploader to import external txt/doc files for voiceover"
        ],
        challenges: "Ensuring speech continuity when long articles are read, as browser synthesis engines can timeout on long texts.",
        solution: "Segmented long input documents into sentence queues, triggering them sequentially to maintain sound feeds.",
        futureImprovements: "Converting speech directly to download-ready MP3 audio files.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/Reader/"
    },
    {
        id: "zeesu-news",
        title: "Zeesu News",
        category: "web-apps",
        image: "images/cardA7.jpg",
        description: "Delivering trusted, real-time news powered by the latest technology.",
        longDescription: "Zeesu News is a real-time news aggregation portal designed to deliver current articles from top global outlets. Categorized sections, simple card sharing, and custom reading filters are included in this web app.",
        tech: ["HTML5", "CSS3", "JavaScript", "News API", "Async/Await API Calls"],
        features: [
            "Live article stream with pull-to-refresh indicators",
            "News filters by tech, business, sports, and science",
            "Text-to-speech option to read headline snippets aloud",
            "Dynamic shares and copy link tools for every article"
        ],
        challenges: "Handling rate-limits from API providers while ensuring content updates remain functional on reload.",
        solution: "Created cache wrappers in LocalStorage to store news articles for 15-minute windows before hitting endpoints.",
        futureImprovements: "Offline article saving and interactive push notifications.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/News"
    },
    {
        id: "zeesu-qrstudio",
        title: "Zeesu QR Studio",
        category: "utilities",
        image: "images/card3.jpg",
        description: "Generate and share, and download QR codes instantly online.",
        longDescription: "Zeesu QR Studio is an elegant tool designed to transform texts, URLs, WiFi login details, and contact numbers into fully customized QR codes with varying colors, logos, and size options.",
        tech: ["React", "Tailwind", "JavaScript", "QRCode.js API", "Canvas API"],
        features: [
            "Instant dynamic QR code updates on keystroke",
            "Custom styling options (foreground/background color pickers)",
            "Image logo insertion into the center of generated QR",
            "High-resolution PNG, SVG, or JPEG downloads"
        ],
        challenges: "Maintaining readability of the generated QR code when light background colors are selected.",
        solution: "Added an automated contrast checker that alerts users if custom color selections degrade scan readability.",
        futureImprovements: "Dynamic QR codes tracking visit counts and custom background layouts.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/QR"
    },
    {
        id: "zeesu-notify",
        title: "Zeesu Notify",
        category: "utilities",
        image: "images/card6.jpg",
        description: "Email subscription service for educational updates and guidance.",
        longDescription: "Zeesu Notify is a service page featuring a mailing subscription module. It assists students and programmers by forwarding modern development guides, educational links, and study materials.",
        tech: ["HTML5", "CSS3", "JavaScript", "RegEx Forms validation"],
        features: [
            "Interactive email capture box with form alerts",
            "User preference checkbox selection for targeted updates",
            "Success popup messages with clean confetti visual triggers",
            "Fully responsive forms fitting sidebar/column widgets"
        ],
        challenges: "Validating input configurations against sophisticated email naming patterns without slowing down validation states.",
        solution: "Leveraged micro-debouncing on keyup events and executed rapid, standard RegEx validations.",
        futureImprovements: "Full newsletter template editor and direct sync with Mailchimp/Sendgrid APIs.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/Notify/"
    },
    {
        id: "zeesu-fusion-cinema",
        title: "Zeesu Fusion Cinema",
        category: "web-apps",
        image: "images/card7.jpg",
        description: "Streaming platform for movies & shorts, cartoons, and adventure films.",
        longDescription: "Zeesu Fusion Cinema is a movie entertainment catalog focused on custom indie creations, animations, and adventure releases. Users can browse reviews and play custom trailers.",
        tech: ["Next.js", "Sass", "JavaScript", "Media Source Extensions"],
        features: [
            "Cinema dark-mode interface with spotlight effects",
            "Interactive rating systems and review posts section",
            "Custom-built HTML5 video player elements",
            "Dynamic categories grids showcasing cartoon releases"
        ],
        challenges: "Constructing custom video player layout controls (play buttons, progress bars) that work uniformly across standard browsers.",
        solution: "Hid default browser styling controls and built accessible overlay controls styled with Flexbox.",
        futureImprovements: "Social co-watching sessions (synchronized video rooms).",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/Fusion/"
    },
    {
        id: "zeesu-music",
        title: "Zeesu Music",
        category: "web-apps",
        image: "images/card8.jpg",
        description: "Music service to explore artists and listen to collections.",
        longDescription: "Zeesu Music is a custom audio player interface loaded with pre-configured playlists, equalizer indicators, and direct track selection grids to play background audios.",
        tech: ["React", "Tailwind", "JavaScript", "HTML5 Audio API"],
        features: [
            "Animated play/pause buttons and volume controls",
            "Track progression timeline with seeking capabilities",
            "Artist metadata display and cover artwork rotating animation",
            "Interactive queue organizer to arrange upcoming songs"
        ],
        challenges: "Preventing audio cut-offs on mobile lockscreen shifts and managing song track loading asynchronously.",
        solution: "Configured state handlers and integrated preloading attributes on HTMLAudioElement objects.",
        futureImprovements: "Full lyrics synchronization, playlist exports, and custom EQ presets.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/music/"
    },
    {
        id: "zeesu-mart",
        title: "Zeesu Mart",
        category: "web-apps",
        image: "images/card9.jpg",
        description: "E-commerce platform for clothing, wishlists, and shopping cart.",
        longDescription: "Zeesu Mart is an interactive shopping storefront showcasing catalogs of clothing, accessories, and shoes. It features filtering, wishlist bookmarking, and local inventory calculations.",
        tech: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
        features: [
            "Grid cards displaying clothes with dynamic quick-add actions",
            "Persistent wishlist heart indicators using browser cookies/storage",
            "Instant price recalculations on size or color adjustments",
            "Checkout summary invoices with discount inputs"
        ],
        challenges: "Allowing users to easily edit cart quantities inside summary tables without breaking DOM tracking.",
        solution: "Engineered single-source-of-truth item arrays and forced redrawing of target cart DOM nodes on quantity edits.",
        futureImprovements: "Payment portal, merchant administration panels, and invoice PDF generation.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/Zeesu-Mart/"
    },
    {
        id: "zeesu-chronicles",
        title: "Zeesu Chronicles",
        category: "web-apps",
        image: "images/card10.jpg",
        description: "Knowledge hub for space, technology facts, and scientific discoveries.",
        longDescription: "Zeesu Chronicles is a tech blog and digital magazine offering articles on astronomy, deep space exploration, quantum technologies, and physics discoveries. Immersive visuals and typography define its interface.",
        tech: ["Next.js", "CSS3", "JavaScript", "NASA API / Custom Articles"],
        features: [
            "Space image-of-the-day slider retrieving live NASA data",
            "Bookmark article reading list panel with progress tracking",
            "Immersive audio narrations for top science stories",
            "Floating interactive stargazing canvas elements"
        ],
        challenges: "Ensuring images downloaded from astronomy API feeds are compressed enough to load instantly.",
        solution: "Implemented automated image compression wrappers and lazy loading attributes for all media feeds.",
        futureImprovements: "3D planets viewer using canvas renderers and interactive quiz modules.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/chronicles/"
    },
    {
        id: "zeesu-delights",
        title: "Zeesu Delights",
        category: "web-apps",
        image: "images/card11.jpg",
        description: "Food delivery with fresh ingredients and fast home service.",
        longDescription: "Zeesu Delights is an elegant web interface designed for dining establishments and food hubs. Features responsive ordering layouts, menus, and delivery mapping overlays.",
        tech: ["HTML5", "CSS3", "JavaScript", "CSS Transitions"],
        features: [
            "Animated culinary menus divided into breakfast, mains, and desserts",
            "Delivery estimation timers showing progress indicators",
            "Interactive reservation desk booking forms with calendar selections",
            "Visual order customization options (extra cheese, size adjustments)"
        ],
        challenges: "Creating interactive ordering tabs that update items dynamically without annoying page refreshes.",
        solution: "Utilized asynchronous JS content swapping and transition classes for seamless visual changes.",
        futureImprovements: "Real-time delivery vehicle tracking systems and push notifications.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesu-royalist.github.io/Zeesu-Delights/"
    },
    {
        id: "zeesu-official",
        title: "Zeesu Official",
        category: "web-apps",
        image: "images/card12.jpg",
        description: "My personal blogs and service featuring various artists and collections.",
        longDescription: "Zeesu Official is the landing hub highlighting Zeesu's blog feeds, creative writings, and collaborations. Perfect dashboard linking other digital nodes.",
        tech: ["React", "CSS3", "JavaScript", "RSS Feed Parsers"],
        features: [
            "Interactive blogs stream with custom reader views",
            "Dark/Light layouts toggle with state memory",
            "Creative projects showcase with image slideshow overlays",
            "Direct contact integration buttons linking platforms"
        ],
        challenges: "Integrating external feed parsing scripts without impacting initial index layout calculations.",
        solution: "Deferred parsing scripts and utilized async scripts tags to render pages prior to parsing updates.",
        futureImprovements: "Interactive guestbooks and discussion boards support.",
        github: "https://github.com/zeesu-royalist/",
        demo: "https://zeesuroyalist.weebly.com"
    },

    // ══════════════════════════════════════════════════════════════════════
    // NEW ADDED PROJECTS
    // ══════════════════════════════════════════════════════════════════════
    {
        id: "zeesusend-file-transfer",
        title: "ZeesuSEND — File Transfer",
        category: "utilities",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790100250/2026-09-22_at_11.31.53_PM-tiny_xi0xkz.webp",
        description: "Encrypted, fast, and reliable file transfer platform allowing users to store, send, and receive files up to 100MB with instant links.",
        longDescription: "ZeesuSEND is a secure high-speed file transfer and cloud storage utility trusted by Zeesu Royalist. Features end-to-end AES-256 encryption, drag-and-drop file uploaders, customizable link expiration timers (24 hours), unlimited download limits, dynamic transfer statistics (14K+ files daily), and instant shareable transfer links.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "AES-256",
            "Tailwind CSS",
            "Web Crypto API"
        ],
        features: [
            "End-to-end client-side AES-256 file encryption",
            "Drag-and-drop file uploader supporting up to 100MB transfers",
            "Instant shareable download links with automated 24-hour expiration",
            "Real-time upload and download transfer progress telemetry",
            "Dynamic dashboard displaying daily file exchange metrics",
            "Zero registration required for fast peer-to-peer file sharing"
        ],
        challenges: "Ensuring memory-efficient client-side encryption for large file payloads without blocking the UI main thread.",
        solution: "Leveraged Web Workers and the Web Crypto API to handle chunked encryption and decryption asynchronously in the background.",
        futureImprovements: "Support for password-protected download links, folder batch uploads, and cloud storage bucket integrations.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://send-theta-nine.vercel.app"
    },
    {
        id: "hodorflix-streaming",
        title: "HodorFlix — Streaming Hub",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790100249/2026-09-22_at_11.31.05_PM-tiny_d3ehz9.webp",
        description: "Worldwide streaming entertainment & course portal with 10K+ movies, 500+ TV series, and interactive live resources in 4K.",
        longDescription: "HodorFlix is a cinematic entertainment and learning streaming portal serving global audiences across 100+ countries with 99% viewer satisfaction. Delivers 4K Ultra HD ad-free streaming, blockbuster movie libraries, TV show series like Stranger Things, trending anime, documentary archives, and curated skill courses.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Video Player",
            "REST API"
        ],
        features: [
            "4K Ultra HD ad-free streaming video player with bitrate adaptation",
            "Extensive catalog featuring 10,000+ movies, TV shows, and anime",
            "Curated skill development and interactive learning courses section",
            "Personalized user watchlists and playback resume functionality",
            "Category carousels with smooth horizontal scroll and hover previews",
            "Fast multi-parameter search engine across titles, genres, and cast"
        ],
        challenges: "Optimizing media catalog caching and rendering hundreds of high-resolution poster images seamlessly without layout lag.",
        solution: "Implemented Next.js dynamic image optimization, lazy loading, and responsive media query breakpoints.",
        futureImprovements: "Offline downloading capability, synchronized watch parties with friends, and multi-language subtitle selector.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://flix-peach.vercel.app"
    },
    {
        id: "zeesu-meet",
        title: "ZeesuMeet — P2P Video Meetings",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790011874/1789402791900_exhu9p.webp",
        description: "Ultra-responsive peer-to-peer WebRTC video conferencing platform designed for developer collaboration.",
        longDescription: "ZeesuMeet is a next-generation WebRTC video conferencing application enabling ultra-low latency peer-to-peer calls. Features instant private room creation, multi-participant video grid layout, active speaker detection, in-call screen sharing, and synchronized team sync controls.",
        tech: [
            "WebRTC",
            "Socket.io",
            "React",
            "Next.js",
            "Node.js",
            "Tailwind CSS"
        ],
        features: [
            "Ultra-low latency peer-to-peer HD video and audio communication",
            "Instant one-click room creation and secure meeting invitation links",
            "Dynamic multi-participant grid layout with active speaker highlighting",
            "High-definition screen sharing and audio source switching",
            "In-call real-time text chat with markdown and code snippet support",
            "Hardware controls for microphone mute, camera toggle, and device selection"
        ],
        challenges: "Managing WebRTC ICE candidate negotiation, NAT traversal, and smooth fallback during fluctuating network bandwidth.",
        solution: "Configured robust STUN/TURN servers and implemented adaptive stream bitrate resolution based on client network quality.",
        futureImprovements: "End-to-end recording export, virtual background blur via AI segmentation, and breakout collaboration rooms.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://meet-sigma-silk.vercel.app"
    },
    {
        id: "z-collab-code",
        title: "Z Collab Code — Workspace",
        category: "tech",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790070065/1788939329994-tiny_xiwyte.webp",
        description: "Real-time collaborative developer workspace with multi-timezone world clock synchronization and Monaco editor.",
        longDescription: "Distributed engineering workspace built for remote development teams. Features seamless room onboarding with custom display names, live multi-city world clock telemetry (London, New York, Los Angeles, Paris), simultaneous multi-user code editing with Monaco Editor, and interactive bento layout.",
        tech: [
            "React",
            "TypeScript",
            "WebSockets",
            "Socket.io",
            "Monaco Editor",
            "Tailwind CSS"
        ],
        features: [
            "Simultaneous multi-cursor real-time code editing using Monaco Editor",
            "Live world clock telemetry across global engineering hubs",
            "Custom room onboarding with active collaborator presence markers",
            "Multi-language syntax highlighting with auto-formatting support",
            "Built-in code execution simulation and developer output console",
            "Interactive responsive bento grid workspace design"
        ],
        challenges: "Synchronizing concurrent keystrokes and editor states between multiple connected clients without conflict overwrites.",
        solution: "Implemented Operational Transformation (OT) state management combined with WebSocket delta broadcasts.",
        futureImprovements: "Integrated audio huddles, Git version branch merging, and AI pair-programming assistant.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://z-collab-code.vercel.app"
    },
    {
        id: "stylehub-apparel",
        title: "StyleHub™ — Molecular Streetwear",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790013326/1786339937199_meln8t.webp",
        description: "Biotech-engineered streetwear platform with high-density puff prints, weekly Friday drops, and admin catalog.",
        longDescription: "Edgy, high-octane streetwear web storefront engineered for modern trendsetters. Equipped with weekly puff-print apparel drops, editorial banner typography, full apparel categorization (Tees, Hoodies, Sweatshirts, Jackets, Accessories), admin management, and animated customer review badges.",
        tech: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "REST API",
            "Zustand"
        ],
        features: [
            "Modern cyberpunk & brutalist aesthetic with fluid micro-interactions",
            "Weekly timed drop countdown timers and limited-edition product releases",
            "Comprehensive apparel catalog filtering by size, fit, and aesthetic tags",
            "Interactive 360-degree high-density puff-print product visualizer",
            "Persistent shopping cart with express checkout and coupon validations",
            "Admin management portal for inventory tracking and drop scheduling"
        ],
        challenges: "Creating smooth Framer Motion entrance transitions without incurring layout shift or performance bottlenecks.",
        solution: "Utilized hardware-accelerated CSS transform properties and optimized image preloading strategies.",
        futureImprovements: "Augmented Reality (AR) virtual try-on, 3D fabric simulations, and community street style showcase gallery.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://stylehub-sooty.vercel.app"
    },
    {
        id: "printdoot-ecommerce",
        title: "Printdoot — Custom Printing",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790013326/Screenshot_2026-09-21_at_11.20.47_PM_btmuek.webp",
        description: "On-demand custom printing marketplace for visiting cards, custom apparel, stationery, and corporate merchandise.",
        longDescription: "Feature-rich web-to-print e-commerce platform allowing customers to design and order personalized merchandise. Includes gold foil visiting card customizer, custom t-shirt & hoodie printing previews, stationery notebooks, sticker packaging, drinkware, and automated coupon engine.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Redux",
            "Payment Gateway"
        ],
        features: [
            "Interactive web-to-print customizer for corporate & personal merchandise",
            "Real-time preview of gold foil cards, apparel prints, and drinkware",
            "Bulk quantity pricing calculator with tiered volume discount tiers",
            "High-resolution vector design and artwork file upload validation",
            "Integrated shopping bag with automated promo codes and instant invoice billing",
            "Order tracking system with step-by-step printing & dispatch status updates"
        ],
        challenges: "Building an intuitive in-browser mockup preview that renders user-uploaded artwork accurately onto 3D merchandise textures.",
        solution: "Utilized HTML5 Canvas and CSS blend modes to overlay transparent design layers realistically on product templates.",
        futureImprovements: "Full in-browser drag-and-drop graphic design tool with customizable templates and vector typography tools.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://printdoot.com"
    },
    {
        id: "airship-sanctuary",
        title: "Airship — Clean Air Sanctuary",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790013326/1772529916447_etodal.webp",
        description: "Architectural clean-air sanctuary cabin website tackling severe urban air pollution and oxidative stress crises.",
        longDescription: "Eco-architectural and health tech web platform presenting the Airship clean-air sanctuary pod. Designed to protect urban dwellers in severely polluted regions like Delhi NCR, featuring 3D pod specifications, oxidative stress clinical research, online booking calendar, and ambient sanctuary visuals.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "Lucide React"
        ],
        features: [
            "Immersive architectural presentation of clean-air micro-sanctuary pods",
            "Real-time air quality index (AQI) comparison charts and health metrics",
            "Interactive 3D pod specification explorer and interior virtual tour",
            "Seamless online booking calendar for sanctuary visits and consultations",
            "Scientific research repository highlighting oxidative stress mitigation",
            "Sleek minimalist design language with ambient animations and smooth scrolling"
        ],
        challenges: "Communicating complex environmental and biomedical data in an engaging, visually compelling, and accessible format.",
        solution: "Structured the interface with interactive telemetry cards, responsive SVG charts, and scroll-triggered infographics.",
        futureImprovements: "Live IoT pod sensor integration displaying real-time internal oxygen purity and particulate levels.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://www.airshipindia.com"
    },
    {
        id: "mehfuz-medi-streetwear",
        title: "Mehfuz Medi — Luxury Streetwear",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790013326/1786192047945_q12hx1.webp",
        description: "High-end urban streetwear and sneakers storefront featuring dynamic oversized drops and fluid cart experience.",
        longDescription: "Modern fashion e-commerce experience curated for hype streetwear and premium sneakers. Features interactive hero carousels, categorized filtering (Men, Women, Sneakers, Bestof, Shirts), 30-day hassle-free returns, app cashback perks, and lightning-fast mobile shopping cart.",
        tech: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "Stripe API",
            "Node.js"
        ],
        features: [
            "Curated luxury streetwear, sneakers, and oversized apparel catalogue",
            "Dynamic hero slider showcasing seasonal collections and spotlight drops",
            "Multi-category product filtering by gender, collection, price, and fit",
            "Slide-out animated shopping bag with live tax and discount calculation",
            "Product detail gallery with zoomable imagery and size recommendation guides",
            "Mobile-optimized responsive touch navigation and swipe gestures"
        ],
        challenges: "Delivering silky 60fps animations across image-heavy product grids on lower-end mobile devices.",
        solution: "Optimized image compression with WebP formats, utilized CSS transforms, and debounced scroll listeners.",
        futureImprovements: "Personalized style quiz, customer sneaker drop raffle system, and cryptocurrency checkout integration.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://mehfuz-medi.vercel.app"
    },
    {
        id: "zeesu-gen-ai",
        title: "ZeesuGen AI — Intelligence Engine",
        category: "tech",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790098613/1785831737939-tiny_icfmmy.webp",
        description: "High-performance AI engine delivering creative solutions, real-time code generation, and intelligent conversations.",
        longDescription: "Futuristic artificial intelligence workspace powered by advanced large language models. Delivers real-time code generation, query processing telemetry with 99.9% uptime, creative brainstorming tools, and sleek conversational AI chat interface.",
        tech: [
            "Next.js",
            "React",
            "OpenAI API",
            "Tailwind CSS",
            "TypeScript",
            "Prism.js"
        ],
        features: [
            "Multi-language code generation, debugging, and refactoring suite",
            "Streaming conversational AI interface with typewriter animation effect",
            "Curated prompt library covering software architecture, algorithms, and design",
            "Syntax-highlighted code blocks with one-click copy and formatting",
            "Custom system role presets (Software Architect, Debugger, Creative Writer)",
            "Clean cyberpunk-inspired dark workspace with glowing accent indicators"
        ],
        challenges: "Handling real-time token streaming over HTTP without flickering or stuttering during rapid responses.",
        solution: "Implemented the ReadableStream API with custom buffer processing to render text deltas progressively.",
        futureImprovements: "Voice input/output, multi-file code sandbox execution, and custom fine-tuned model selection.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://zeesu-royalist.github.io/Gen/"
    },
    {
        id: "zeesu-ai-hub",
        title: "Zeesu AI Hub — Multi-Model AI Suite",
        category: "tech",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790098613/1785747843456-tiny_a86q7h.webp",
        description: "Unified AI workspace housing creative chatbots, intelligent prompt libraries, and automated assistance tools.",
        longDescription: "Enterprise-grade AI ecosystem bringing together specialized domain chatbots, prompt engineering templates, and generative problem solvers. Features dark cyberpunk UI, interactive chat preview iframe, glowing ambient backdrops, and model fine-tuning settings.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "LLM APIs",
            "Framer Motion",
            "TypeScript"
        ],
        features: [
            "Unified dashboard consolidating multiple specialized AI agents",
            "Interactive prompt engineering sandbox with parameter tuning (Temperature, Top-P)",
            "Live preview iframe showing real-time agent output and markdown rendering",
            "Exportable conversation logs in JSON, Markdown, and PDF formats",
            "Cyberpunk aesthetic with glowing gradients and glassmorphism styling",
            "Persistent local session history with tagged query bookmarks"
        ],
        challenges: "Architecting a unified interface to control heterogeneous AI models with varying response formats.",
        solution: "Created an adapter pattern in TypeScript that normalizes various model outputs into a unified data structure.",
        futureImprovements: "Agent orchestration workflows, multi-agent debates, and custom tool-calling integrations.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://zeesu-royalist.github.io/Ai/"
    },
    {
        id: "time-trove-watches",
        title: "Time Trove — Luxury Watches",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790098612/1772371298915-tiny_sgofan.webp",
        description: "Premium horology and smartwatch storefront featuring analog dials, chronographs, and health fitness trackers.",
        longDescription: "Sophisticated watch e-commerce web platform showcasing luxury timepieces, analog classics, and high-tech fitness smartwatches. Includes dynamic 360-degree product showcases, category filtering, user reviews, cart management, and secure checkout integration.",
        tech: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Stripe API",
            "TypeScript"
        ],
        features: [
            "Luxury timepiece showcase with high-definition product photography",
            "Granular filtering by movement (Automatic, Quartz, Smart), case material, and strap",
            "Interactive dial dimension and wrist-size comparison visualizer",
            "Comprehensive specification table including water resistance and battery life",
            "Customer reviews and rating aggregate breakdown module",
            "Full shopping cart workflow with secure checkout authentication"
        ],
        challenges: "Providing ultra-crisp watch dial detail zooming without causing high memory consumption.",
        solution: "Implemented dynamic image tile zooming with CSS clip paths and progressive resolution loading.",
        futureImprovements: "3D Three.js watch customizer for personalized straps, bezels, and dial engraving.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://www.instagram.com/p/DbdPK5jEwq8/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
    },
    {
        id: "cheers-cart-spirits",
        title: "Cheers Cart — Spirits E-Commerce",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790098615/1768642303015-tiny_ru4r1a.webp",
        description: "Curated fine liquor, whiskey, and wine e-commerce platform with bottle showcases and seamless shopping bag.",
        longDescription: "High-end adult beverage and premium spirits web storefront. Engineered with cinematic dark luxury aesthetics, bottle detail views, age verification gating, drink pairing recommendations, and streamlined express cart checkout.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Stripe",
            "Redux"
        ],
        features: [
            "Cinematic dark luxury storefront highlighting premium whiskey, wine, and craft spirits",
            "Mandatory age verification modal compliance check on initial visit",
            "Tasting notes, ABV percentage, distillery provenance, and pairing guides",
            "Curated gift hamper builder and personalized gift card options",
            "Seamless shopping bag drawer with real-time tax and delivery estimation",
            "Fast express checkout with multiple digital payment integrations"
        ],
        challenges: "Maintaining state for age verification while ensuring SEO crawler accessibility.",
        solution: "Used cookie-based session verification with fallback server-side rendering headers.",
        futureImprovements: "Cocktail recipe generator, monthly subscription tasting club, and cellar inventory tracker.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://liquorstore.jbhtechinnovation.com"
    },
    {
        id: "lari-traders-education",
        title: "Lari Traders — Trading Hub",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790098615/1789120211171-tiny_vf4pjc.webp",
        description: "Institutional trading academy and market analytics platform featuring quantitative models and portfolio metrics.",
        longDescription: "Professional trading education portal designed for financial market traders. Delivers algorithmic market analysis, structured risk management curriculums, advisory scheduling, live composite benchmark tracking, and high-impact visual financial telemetry.",
        tech: [
            "Next.js",
            "React",
            "Recharts",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
        ],
        features: [
            "Institutional-grade trading curriculum and structured market mastery courses",
            "Interactive financial charts and quantitative portfolio benchmark telemetry",
            "Advisory session scheduler with automated calendar booking integration",
            "Risk management calculators (Position Sizing, Risk-to-Reward ratio)",
            "Student success case studies with verified trading performance analytics",
            "Modern glassmorphism dashboard layout with dark theme aesthetics"
        ],
        challenges: "Rendering complex real-time charting components without causing jank during frequent data points updating.",
        solution: "Utilized memoized Recharts components and virtualized time-series data rendering.",
        futureImprovements: "Live TradingView charting integration, automated paper-trading sandbox, and community Discord bot sync.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://lari-traders.vercel.app"
    },
    {
        id: "omni-shop-fashion",
        title: "OMNI Shop — Modern Fashion",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790098615/1769258150597-tiny_tonti2.webp",
        description: "Trendy women's and men's apparel storefront featuring seasonal collections, sale must-haves, and bag checkout.",
        longDescription: "Clean, responsive fashion retail e-commerce application. Features hero promotional carousels for seasonal spring drops, multi-category filtering, responsive product cards with hover zoom, customer wishlist saving, and smooth cart transitions.",
        tech: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Redux",
            "TypeScript"
        ],
        features: [
            "Contemporary fashion retail storefront with dynamic seasonal hero banners",
            "Comprehensive product filtering by gender, category, color, and price range",
            "Product cards with instant hover image swap and color swatch previews",
            "Persistent customer wishlist with instant move-to-cart functionality",
            "Slide-out shopping bag drawer with real-time discount code calculation",
            "Fully responsive grid layouts designed for mobile, tablet, and desktop"
        ],
        challenges: "Creating smooth color swatch image switching without unnecessary component re-renders.",
        solution: "Pre-cached swatch image assets and used local component state for instant swatch switching.",
        futureImprovements: "Customer size recommendation engine, live inventory low-stock alerts, and user review uploads.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://omnishop.jbhtechinnovation.com"
    },
    {
        id: "tumie-pet-care",
        title: "Tumie — Premium Pet Food",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790098615/1769608309758-tiny_jknxc1.webp",
        description: "Wholesome pet food e-commerce platform offering tailored dry food, wet food, healthy treats, and raw nutrition.",
        longDescription: "Vibrant, friendly pet food e-commerce storefront designed for pet parents. Features categorized pet dietary options (Dry food, Wet food, Treats, Raw food, Semi-food), up to 40% discount promo banners, multi-item shopping cart, and veterinary-approved product specs.",
        tech: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "JavaScript"
        ],
        features: [
            "Pet nutrition marketplace with dietary categorization (Dry, Wet, Treats, Raw food)",
            "Nutritional breakdown tables and vet-approved ingredient transparency tags",
            "Pet profile creator to recommend customized portion sizes based on age and breed",
            "Discount promo banners and recurring subscription order options",
            "Interactive shopping cart with item quantity modifiers and instant checkout",
            "Playful, warm UI design with animated badges and responsive layouts"
        ],
        challenges: "Designing an engaging and playful UI that remains fast and accessible for all users.",
        solution: "Utilized SVG micro-illustrations, CSS animations, and strict semantic HTML hierarchy.",
        futureImprovements: "Autoship subscription scheduling, pet health tracker, and online vet consultation booking.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://petfood.jbhtechinnovation.com"
    },
    {
        id: "tech-deviser-repairs",
        title: "Tech Deviser — IT Solutions & Repairs",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790098616/1771334963942-tiny_xeqnru.webp",
        description: "Hardware repairs and corporate IT service portal offering diagnostics, networking setup, and CCTV maintenance.",
        longDescription: "Professional IT services and hardware repair enterprise portal. Offers laptop and motherboard diagnostics, enterprise networking infrastructure, CCTV security installation, repair ticket booking, pricing tiers, and client support contact forms.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "REST API"
        ],
        features: [
            "Service catalog covering computer hardware repair, enterprise networking, and CCTV setup",
            "Online repair ticket booking system with symptom checklist and device selection",
            "Transparent pricing tier breakdowns for residential and commercial IT contracts",
            "Customer service inquiry contact forms with automated email notifications",
            "Client testimonials, case studies, and corporate partner showcase",
            "Professional corporate branding with high-contrast readable layouts"
        ],
        challenges: "Designing a multi-step repair booking form that is easy to complete on mobile devices.",
        solution: "Divided the booking flow into intuitive steps with persistent state across transitions.",
        futureImprovements: "Real-time repair status tracker with live technician updates and SMS notification triggers.",
        github: "https://github.com/zeesu-royalist",
        demo: "http://techdeviser.jbhtechinnovation.com"
    },
    {
        id: "zeesu-quick-bite",
        title: "QuickBite — Food Delivery App",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790098614/1786006441385-tiny_fvorzf.webp",
        description: "Mobile-first food ordering platform with daily combos, restaurant menus, live cart tracking, and meal offers.",
        longDescription: "Delightful mobile-optimized food ordering web application. Includes regional delivery selection, daily promotions like Summer Combo and Burger Bash, item categorization, interactive mobile bottom tab navigation, and live order placement.",
        tech: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Mobile UI",
            "TypeScript"
        ],
        features: [
            "Mobile-first app interface with bottom navigation bar and gesture support",
            "Dynamic meal combo promotions (Summer Combo, Burger Bash, Family Deals)",
            "Categorized food menus with dietary filter tags (Veg, Non-Veg, Spicy)",
            "Custom meal modifiers (extra toppings, drink pairings, spice level)",
            "Live shopping cart drawer with price recalculation and promo code support",
            "Estimated delivery timer and driver tracking simulation interface"
        ],
        challenges: "Achieving native-app-like smoothness and responsive touch ergonomics in a web browser.",
        solution: "Utilized CSS safe-area insets, fixed bottom sheet drawers, and passive touch event listeners.",
        futureImprovements: "Real-time geolocation driver tracking with Mapbox and push notifications on order milestones.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://food-mu-eosin.vercel.app"
    },
    {
        id: "gyanchand-amrit-ghee",
        title: "Gyanchand Amrit — Organic Ghee",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790098612/1771491336049-tiny_jt6uua.webp",
        description: "Authentic farm-fresh A2 Desi Ghee and natural wellness store with pincode delivery verification and instant checkout.",
        longDescription: "Traditional Indian wellness and organic dairy e-commerce storefront. Delivers pure bilona A2 Desi Ghee sourced from Gir and Sahiwal cows directly to consumers. Features pincode delivery checks, UPI payment discounts, customer account portal, and authentic farm-to-table traceability.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Payment Gateway",
            "JavaScript"
        ],
        features: [
            "Organic dairy storefront showcasing authentic Bilona churned A2 Desi Ghee",
            "Pincode serviceability check tool with estimated delivery date calculations",
            "Educational showcase detailing Vedic bilona method and nutritional benefits",
            "Multiple pack size selectors (500ml, 1L, 5L) with instant price recalculation",
            "UPI payment discounts and secure multi-option checkout flow",
            "Customer testimonials and lab-tested purity certification badges"
        ],
        challenges: "Integrating real-time postal pincode validation without delaying checkout interactions.",
        solution: "Cached regional postal datasets locally in client storage to enable instant pincode lookups.",
        futureImprovements: "Automated recurring monthly ghee refill subscriptions and batch QR code traceability.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://upasna.jbhtechinnovation.com"
    },
    {
        id: "traditional-art",
        title: "Harshom — Traditional Craft",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790681250/1767964540310.-webp_ninja_wm0zqc.webp",
        description: "E-commerce and showcase platform for handcrafted clay idols and authentic heritage craft.",
        longDescription: "Harshom is a digital showcase and e-commerce platform created for a traditional art client specializing in handmade clay idols and cultural crafts. The platform empowers artisans to showcase authentic heritage crafts online, expanding their audience reach while preserving the cultural authenticity of their craft.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
        ],
        features: [
            "Heritage craft showcase featuring detailed clay idol art galleries",
            "Artisan story and cultural craft creation process walkthrough",
            "Categorized product listings by festival, deity, and craft style",
            "High-resolution image zoom highlighting handcrafted artistic textures",
            "Custom order inquiry form for bespoke handcrafted sculptures",
            "Culturally inspired warm aesthetics with smooth animations"
        ],
        challenges: "Capturing the delicate textures and detail of handmade clay crafts through web imagery without slowing load speeds.",
        solution: "Applied WebP image compression with high-DPI responsive image sets and progressive lazy loading.",
        futureImprovements: "Virtual 3D exhibit room and artisan direct donation/patronage support feature.",
        github: "https://github.com/zeesu-royalist",
        demo: "http://harshom.com"
    },
    {
        id: "blue-depth-conservation",
        title: "Blue Depth — Ocean Sanctuary",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790100249/1759219183722-tiny_iugs9q.webp",
        description: "Global marine conservation platform dedicated to protecting ocean ecosystems, sea turtles, and endangered coral reefs.",
        longDescription: "Environmental awareness and ocean conservation initiative mobilizing global action for marine wildlife protection. Features interactive ocean zones telemetry, endangered species profiles (sea turtles, coral reefs), conservation statistics, organizational partnerships, and community donation channels.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
        ],
        features: [
            "Interactive ocean depth zone telemetry explorer from surface to abyss",
            "Endangered marine species profiles (Sea Turtles, Whales, Coral Reefs)",
            "Conservation impact data counters and interactive reef health metrics",
            "Community donation portal supporting marine rescue missions",
            "Educational guides on ocean plastic mitigation and sustainable practices",
            "Immersive deep ocean blue aesthetics with gentle aquatic wave animations"
        ],
        challenges: "Designing an interactive depth-scrolling experience that performs smoothly across mobile and desktop.",
        solution: "Used CSS custom properties tied to scroll progress and optimized requestAnimationFrame hooks.",
        futureImprovements: "Interactive 3D ocean map with real-time satellite tracking of tagged sea turtles.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://zeesu-royalist.github.io/BlueDepth/"
    },
    {
        id: "home-decor-platform",
        title: "Home & Decor Store",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790681580/1768046122300-webp_ninja_ezo09w.webp",
        description: "Comprehensive e-commerce platform showcasing sofas, designer lighting, wall decor, and home essentials.",
        longDescription: "A comprehensive digital e-commerce platform delivered for a premier home and decor client. Showcases and sells a wide range of furniture and home essentials including luxury sofas, coffee tables, modern lighting, ceiling fixtures, wall stickers, and decorative accessories with a clean, intuitive shopping experience.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
        ],
        features: [
            "Multi-category home decor catalog (Sofas, Tables, Lighting, Wall Art, Decor)",
            "Room visualizer layouts showing furniture configurations in real living spaces",
            "Product cards with dimension guides, material specifications, and color variants",
            "Wishlist management and persistent slide-out shopping cart",
            "Modern clean layout emphasizing product aesthetics and photography",
            "Customer review section with photo uploads and star ratings"
        ],
        challenges: "Creating a multi-tier categorization system that allows effortless browsing through hundreds of decor items.",
        solution: "Implemented faceted search and filtering with instant URL query parameter updates.",
        futureImprovements: "Augmented Reality room placement tool allowing users to preview furniture in their own rooms.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://www.instagram.com/p/DbVZczrkxdE/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
    },
    {
        id: "cosmetics-brand-store",
        title: "Cosmetics & Beauty Brand",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790681820/1771492275697-webp_ninja_iibne0.webp",
        description: "E-commerce web platform for women's beauty, skincare, and cosmetic products with seamless checkout.",
        longDescription: "A modern e-commerce storefront designed and developed for a women's cosmetics and beauty brand at JBH Tech Innovation. Focuses on delivering an aesthetically pleasing, elegant interface while ensuring a smooth, effortless shopping journey for skincare, beauty kits, and cosmetics.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
        ],
        features: [
            "Elegant pastel beauty aesthetic with subtle micro-animations and clean typography",
            "Categorized product collections (Skincare, Lip Care, Eye Makeup, Face Kits)",
            "Skin type compatibility filter (Oily, Dry, Sensitive, Combination)",
            "Ingredient transparency cards and cruelty-free certification badges",
            "Slide-out shopping bag with free shipping threshold progress bar",
            "Fast mobile checkout with UPI, Card, and Net Banking options"
        ],
        challenges: "Balancing an elegant, soft design aesthetic with high-contrast accessibility standards.",
        solution: "Carefully tuned color contrast ratios while maintaining soft pastel glassmorphic surfaces.",
        futureImprovements: "Virtual shade finder matching foundation shades with user webcam scans.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://www.instagram.com/p/DbdMP3aEw83/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
    },
    {
        id: "great-shop-ecommerce",
        title: "GreatShop — Men's Fashion",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790100249/1767687641895-tiny_aatmzl.webp",
        description: "Trendy men's apparel and accessories storefront with daily discounts, wishlist management, and express checkout.",
        longDescription: "Full-featured lifestyle fashion marketplace showcasing trending men's clothing, footwear, luxury handbags, and festive dresses. Includes Deal of the Day flash sales, starting prices from ₹200, user account authentication, persistent 3-item wishlist and cart drawers, and secure checkout workflows.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Redux",
            "Stripe"
        ],
        features: [
            "Dynamic Deal of the Day flash sale banner with real-time countdown clock",
            "Budget-friendly price filter categories (Under ₹299, ₹499, ₹999)",
            "Comprehensive men's apparel catalogue covering formal, casual, and footwear",
            "Persistent user wishlist and animated slide-out shopping cart drawer",
            "Interactive product review gallery and customer recommendation ratings",
            "Express multi-payment checkout supporting cards, UPI, and digital wallets"
        ],
        challenges: "Managing rapid inventory price updates and countdown timers simultaneously on client state.",
        solution: "Utilized Redux Toolkit with lightweight interval hooks to sync flash sale state efficiently.",
        futureImprovements: "Personalized AI outfit builder based on user shopping history and preferences.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://www.instagram.com/p/DbVYhtsk29Y/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
    },
    {
        id: "eyewear-ecommerce",
        title: "Eyewear & Optical Store",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790013326/1769517689126_natxcl.webp",
        description: "Scalable e-commerce website for an eyewear and prescription glasses manufacturing brand.",
        longDescription: "A scalable, elegant e-commerce solution built for an eyewear and sunglasses manufacturing company, developed as part of work at JBH Tech Innovation. Features interactive frame browsing, face shape recommendations, lens prescription customizers (single vision, progressive, blue-light blocking), and seamless checkout.",
        tech: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "REST API"
        ],
        features: [
            "Extensive eyewear catalog featuring sunglasses, prescription eyeglasses, and reading frames",
            "Frame shape filtering (Aviator, Wayfarer, Round, Cat-Eye, Square, Rimless)",
            "Interactive lens customizer (Anti-glare, Blue light filter, Photochromic)",
            "Face shape recommendation guide to help customers select flattering frames",
            "High-resolution multi-angle frame photography and 360-degree rotation view",
            "Prescription upload module with power matrix selector and secure checkout"
        ],
        challenges: "Designing an intuitive prescription configuration flow that handles complex optical power values.",
        solution: "Built step-by-step prescription matrix inputs with automated error checking and value constraints.",
        futureImprovements: "Virtual 3D webcam try-on using face mesh tracking to preview glasses in real time.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://www.instagram.com/p/DbdQ4elk71b/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
    },
    {
        id: "zeesu-nex-ai",
        title: "Zeesu Nex AI",
        category: "tech",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790100249/1760332228384-tiny_lfawzc.webp",
        description: "Conversational AI companion delivering intelligent problem-solving, code explanations, document summaries, and multi-turn chat.",
        longDescription: "Conversational AI assistant built on cutting-edge LLMs delivering instant answers, math problem solving, and document summarization. Features preset prompt carousels ('Explain AI in simple terms', 'How does machine learning work?'), chat history tracking, dark/light theme toggle, and audio/attachment uploaders.",
        tech: [
            "Next.js",
            "React",
            "LLM API",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
        ],
        features: [
            "Conversational AI assistant with real-time streaming responses and typing animations",
            "Interactive prompt suggestions for coding, math, science, and creative writing",
            "Multi-turn dialogue context retention and conversation branch history",
            "Integrated code syntax highlighting and instant snippet copy buttons",
            "Dark & Light mode visual theme switcher with smooth state transition",
            "Responsive chat layout optimized for seamless desktop and mobile interaction"
        ],
        challenges: "Preserving context across extensive multi-turn conversational exchanges while keeping token counts optimal.",
        solution: "Implemented sliding window conversation history truncation and context summarization.",
        futureImprovements: "Multi-modal image interpretation, voice dialogue input, and export to PDF/Markdown.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://zeesu-royalist.github.io/NexAi/"
    },
    {
        id: "book-mart",
        title: "JBD Book Publication",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790682434/1768307583369-webp_ninja_odenrk.webp",
        description: "Digital platform for a book publication business featuring catalogs, author bios, and online purchasing.",
        longDescription: "A comprehensive digital publishing platform developed for a book publication client at JBH Tech Innovation. Showcases their extensive catalogue of educational, academic, and literary titles, author biographies, publication details, and online book ordering through a clean, professional, and reader-friendly interface.",
        tech: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Stripe API"
        ],
        features: [
            "Categorized book library spanning academic curricula, fiction, and competitive exam guides",
            "Book preview pages with sample chapter excerpts, ISBN info, and author bios",
            "Direct online book purchasing with volume discount support for institutions",
            "Search functionality filtering by subject, author, grade, and publication year",
            "Clean, readable typography optimized for academic literature discovery",
            "Publication announcement blog and upcoming release notifications"
        ],
        challenges: "Organizing an extensive catalogue of academic publications into intuitive, easily discoverable categories.",
        solution: "Created hierarchical multi-level filters with instant search index indexing.",
        futureImprovements: "E-book digital reader integration with interactive bookmarks and student note annotations.",
        github: "https://github.com/zeesu-royalist",
        demo: "https://jbdpublication.com"
    },
    {
        id: "industrial-company",
        title: "Industrial Boiler Solutions",
        category: "web-apps",
        image: "https://res.cloudinary.com/qtxwjzre/image/upload/v1790682265/1766214302892-webp_ninja_yj2tg9.webp",
        description: "Enterprise web platform for an industrial manufacturing company showcasing heavy boilers and engineering specs.",
        longDescription: "A professional industrial manufacturing web platform completed for an industrial engineering company while working at JBH Tech Innovation. Showcases steam boilers, thermic fluid heaters, pressure vessels, technical engineering specifications, client project galleries, and commercial quotation request forms.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "REST API"
        ],
        features: [
            "Industrial machinery catalogue featuring steam boilers, heat exchangers, and pressure vessels",
            "Detailed engineering specification sheets (Capacity, Pressure, Fuel types, Efficiency)",
            "Interactive quotation request generator for enterprise client tenders",
            "Compliance and safety certification repository (ISO, ASME, IBR standards)",
            "Completed industrial project showcase and client installation case studies",
            "High-contrast robust industrial design language with responsive layouts"
        ],
        challenges: "Presenting heavy engineering specifications and technical data in a clear, accessible, and responsive layout.",
        solution: "Designed structured technical specification tables and downloadable PDF data sheet triggers.",
        futureImprovements: "Interactive fuel efficiency calculator and 3D exploded view of boiler assembly components.",
        github: "https://github.com/zeesu-royalist",
        demo: "http://boilers.jbhtechinnovation.com"
    }
];
