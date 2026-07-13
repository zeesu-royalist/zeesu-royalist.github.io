// Database of all 29 projects in the Zeesu Royalist portfolio
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
        image: "images/cardA1.jpg",
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
        image: "images/cardA3.jpg",
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
        image: "images/cardA4.jpg",
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
    }
];
