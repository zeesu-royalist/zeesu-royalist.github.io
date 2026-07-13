// Database of all 29 projects in the Zeesu Royalist portfolio
const projectsData = [
    {
        id: "zeesumax",
        title: "ZeesuMax",
        category: "web-apps",
        image: "images/cardA1.jpg",
        description: "Stream your favorite movies, shows, and documentaries in HD.",
        longDescription: "ZeesuMax is a premium streaming interface conceptualized for modern entertainment hubs. It provides an intuitive catalog system that aggregates movies, series, and independent documentaries into beautiful high-definition grids, resembling premium services like Netflix or HBO Max.",
        tech: ["HTML5", "CSS3", "JavaScript", "Vanilla Web APIs"],
        features: [
            "HD video rendering & adaptive container layouts",
            "Rich interactive content category filter tags",
            "Personalized user watchlists saved to browser storage",
            "Advanced search capabilities to quickly locate shows"
        ],
        challenges: "Ensuring video container scaling on multiple screens while maintaining fast load times for highly graphical cards.",
        solution: "Applied flexbox layouts, strict image aspect ratios, and modern loading animations during image fetch requests.",
        futureImprovements: "Integration with live streaming APIs and real-time database management systems like Firebase.",
        github: "https://github.com/zeesu-royalist/ZeesuMax",
        demo: "https://zeesu-royalist.github.io/ZeesuMax/"
    },
    {
        id: "zeesu-mapweb",
        title: "Zeesu MapWeb",
        category: "tech",
        image: "images/cardA2.jpg",
        description: "Geographic and tech solutions high-quality services to help navigate.",
        longDescription: "Zeesu MapWeb is a spatial mapping dashboard designed for geographic visualization and route inspection. Utilizing interactive map interfaces, it lets clients query destinations, examine local coordinates, and access location-based business services.",
        tech: ["HTML5", "CSS3", "JavaScript", "Geolocation API", "Leaflet.js / Custom Maps"],
        features: [
            "Real-time geographic location detection",
            "Custom map styles with interactive coordinate pinning",
            "Quick distance calculations and route recommendations",
            "Responsive layout tailored for navigation on-the-go"
        ],
        challenges: "Managing asynchronous location tracking requests and plotting custom routes smoothly on mobile browsers.",
        solution: "Implemented asynchronous JS promises and optimized SVG icon layering for maps to reduce layout shifting.",
        futureImprovements: "Integrate offline map caching and augmented reality routing.",
        github: "https://github.com/zeesu-royalist/zeesu-mapweb",
        demo: "https://zeesu-royalist.github.io/zeesu-mapweb/"
    },
    {
        id: "zeesuxen-ai",
        title: "ZeesuXen AI",
        category: "tech",
        image: "images/cardA3.jpg",
        description: "Personal AI assistant, conversations with intelligent AI technology.",
        longDescription: "ZeesuXen AI is an interactive chat application powered by conversational artificial intelligence. It mimics human interactions, provides smart answers, parses complex queries, and supports creative writing tasks directly inside a clean, glowing glassmorphic workspace.",
        tech: ["HTML5", "CSS3", "JavaScript", "Web APIs", "AI API Integration"],
        features: [
            "Interactive chat window with smooth autoscroll",
            "Sleek markdown text formatting for code blocks",
            "Custom system prompt customizations (creative, concise, etc.)",
            "Instant answers with clean typewriter loading states"
        ],
        challenges: "Creating a natural feeling typewriter loading effect while parsing long text output dynamically.",
        solution: "Developed custom JS chunking algorithms that process API streaming results line-by-line and animate text delivery.",
        futureImprovements: "Voice inputs, speech-to-text response, and multi-modal image interpretation support.",
        github: "https://github.com/zeesu-royalist/ZeesuXen-AI",
        demo: "https://zeesu-royalist.github.io/ZeesuXen-AI/"
    },
    {
        id: "zeesuvision-ai",
        title: "ZeesuVision AI",
        category: "tech",
        image: "images/cardA4.jpg",
        description: "Transforming your imagination into stunning visual art with AI.",
        longDescription: "ZeesuVision AI is a neural image generation studio that translates natural text prompts into unique digital designs and visual assets, enabling users to prototype layouts and graphics quickly.",
        tech: ["HTML5", "CSS3", "JavaScript", "Image Generation APIs", "Canvas API"],
        features: [
            "Prompt helper utility with quick inspiration tags",
            "Multi-resolution output options for standard screens",
            "Instant photo manipulation and adjustment tools",
            "Direct downloading of high-quality PNG formats"
        ],
        challenges: "Ensuring stable connections while generating media, preventing visual freezing during long API calls.",
        solution: "Engineered elegant, glowing loading skeletons and detailed toast notifications showing step-by-step progress.",
        futureImprovements: "Batch image generation and visual styles style-sheets selector.",
        github: "https://github.com/zeesu-royalist/ZeesuVision-AI",
        demo: "https://zeesu-royalist.github.io/ZeesuVision-AI/"
    },
    {
        id: "zeesu-lib",
        title: "Zeesu Lib",
        category: "web-apps",
        image: "images/cardA5.jpg",
        description: "Premium platform for book lovers to discover and download favorite books.",
        longDescription: "Zeesu Lib is a modern digital library designed for bibliophiles. It aggregates thousands of open-source literary works, letting users filter by genres, read directly online, and download EPUB or PDF formats easily.",
        tech: ["HTML5", "CSS3", "JavaScript", "Open Library API", "LocalStorage"],
        features: [
            "Full-text catalog search spanning titles, authors, and genres",
            "Interactive e-reader with font scaling and night mode",
            "Personalized library bookshelf for tracking read items",
            "High fidelity cover art previews with dynamic loading"
        ],
        challenges: "Handling thousands of catalog records efficiently in the DOM without degrading render performance.",
        solution: "Implemented pagination and debounced input events on search bars to minimize rendering cycles.",
        futureImprovements: "Audiobook streaming, bookmarks syncing, and interactive notes taking.",
        github: "https://github.com/zeesu-royalist/Zeesu-Lib",
        demo: "https://zeesu-royalist.github.io/Zeesu-Lib/"
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
        github: "https://github.com/zeesu-royalist/Zeesu-Verse",
        demo: "https://zeesu-royalist.github.io/Zeesu-Verse/"
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
        github: "https://github.com/zeesu-royalist/Zeesu-News",
        demo: "https://zeesu-royalist.github.io/Zeesu-News/"
    },
    {
        id: "zeesu-pixel",
        title: "Zeesu Pixel",
        category: "web-apps",
        image: "images/card1.jpg",
        description: "Find high-quality images quickly using advanced search features.",
        longDescription: "Zeesu Pixel is a media search app that fetches millions of high-definition, royalty-free stock pictures from Unsplash/Pexels. Perfect for designers looking for quick high-resolution image assets.",
        tech: ["HTML5", "CSS3", "JavaScript", "Unsplash API", "Infinite Scroll"],
        features: [
            "Live masonry photo grids that adapt dynamically",
            "One-click direct photo downloading with API download tracking",
            "Detailed search filters including orientation and color themes",
            "Image preview overlays with full EXIF camera details"
        ],
        challenges: "Implementing infinite scrolling smoothly without visual page jittering or double API triggers.",
        solution: "Used IntersectionObserver targeting a bottom sentinel element to pre-fetch items before reaching the page end.",
        futureImprovements: "In-browser photo cropping and user collections organization.",
        github: "https://github.com/zeesu-royalist/Zeesu-Pixel",
        demo: "https://zeesu-royalist.github.io/Zeesu-Pixel/"
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
        github: "https://github.com/zeesu-royalist/Zeesu-NoteWeb",
        demo: "https://zeesu-royalist.github.io/Zeesu-NoteWeb/"
    },
    {
        id: "zeesu-qrstudio",
        title: "Zeesu QR Studio",
        category: "utilities",
        image: "images/card3.jpg",
        description: "Generate and share, and download QR codes instantly online.",
        longDescription: "Zeesu QR Studio is an elegant tool designed to transform texts, URLs, WiFi login details, and contact numbers into fully customized QR codes with varying colors, logos, and size options.",
        tech: ["HTML5", "CSS3", "JavaScript", "QRCode.js API", "Canvas API"],
        features: [
            "Instant dynamic QR code updates on keystroke",
            "Custom styling options (foreground/background color pickers)",
            "Image logo insertion into the center of generated QR",
            "High-resolution PNG, SVG, or JPEG downloads"
        ],
        challenges: "Maintaining readability of the generated QR code when light background colors are selected.",
        solution: "Added an automated contrast checker that alerts users if custom color selections degrade scan readability.",
        futureImprovements: "Dynamic QR codes tracking visit counts and custom background layouts.",
        github: "https://github.com/zeesu-royalist/Zeesu-QR-Studio",
        demo: "https://zeesu-royalist.github.io/Zeesu-QR-Studio/"
    },
    {
        id: "zeesu-wordtest",
        title: "Zeesu WordTest",
        category: "games",
        image: "images/card4.jpg",
        description: "Measure typing speed accurately with real-time test results.",
        longDescription: "Zeesu WordTest is an interactive, gamified typing utility designed to analyze and test speed, accuracy, and typing consistency. Offers charts tracking performance history.",
        tech: ["HTML5", "CSS3", "JavaScript", "Timer APIs", "SVG Charting"],
        features: [
            "Real-time tracking of words-per-minute (WPM) and accuracy percentages",
            "Visual character color highlights (green correct, red error)",
            "Configurable timers (15s, 30s, 60s) and custom text modes",
            "Post-test statistical analysis showing key character mistakes"
        ],
        challenges: "Managing word wrap rendering without throwing off character indexing during fast inputs.",
        solution: "Split texts into nested span arrays and indexed active characters directly to prevent layout recalculation gaps.",
        futureImprovements: "Global typing leaderboards, achievements badges, and sound feedback.",
        github: "https://github.com/zeesu-royalist/Zeesu-WordTest",
        demo: "https://zeesu-royalist.github.io/Zeesu-WordTest/"
    },
    {
        id: "zeesu-reader",
        title: "Zeesu Reader",
        category: "utilities",
        image: "images/card5.jpg",
        description: "Text to speech converter for easy listening and content accessibility.",
        longDescription: "Zeesu Reader utilizes SpeechSynthesis interfaces to turn pasted articles, text documents, or paragraphs into spoken content. Great for accessibility and listening on the go.",
        tech: ["HTML5", "CSS3", "JavaScript", "Speech Synthesis API"],
        features: [
            "Multi-language selector utilizing native system voices",
            "Adjustable sliders for speed, pitch, and output volume",
            "Highlighting active read words in real time",
            "File uploader to import external txt/doc files for voiceover"
        ],
        challenges: "Ensuring speech continuity when long articles are read, as browser synthesis engines can timeout on long texts.",
        solution: "Segmented long input documents into sentence queues, triggering them sequentially to maintain sound feeds.",
        futureImprovements: "Converting speech directly to download-ready MP3 audio files.",
        github: "https://github.com/zeesu-royalist/Zeesu-Reader",
        demo: "https://zeesu-royalist.github.io/Zeesu-Reader/"
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
        github: "https://github.com/zeesu-royalist/Zeesu-Notify",
        demo: "https://zeesu-royalist.github.io/Zeesu-Notify/"
    },
    {
        id: "zeesu-fusion-cinema",
        title: "Zeesu Fusion Cinema",
        category: "web-apps",
        image: "images/card7.jpg",
        description: "Streaming platform for movies & shorts, cartoons, and adventure films.",
        longDescription: "Zeesu Fusion Cinema is a movie entertainment catalog focused on custom indie creations, animations, and adventure releases. Users can browse reviews and play custom trailers.",
        tech: ["HTML5", "CSS3", "JavaScript", "Media Source Extensions"],
        features: [
            "Cinema dark-mode interface with spotlight effects",
            "Interactive rating systems and review posts section",
            "Custom-built HTML5 video player elements",
            "Dynamic categories grids showcasing cartoon releases"
        ],
        challenges: "Constructing custom video player layout controls (play buttons, progress bars) that work uniformly across standard browsers.",
        solution: "Hid default browser styling controls and built accessible overlay controls styled with Flexbox.",
        futureImprovements: "Social co-watching sessions (synchronized video rooms).",
        github: "https://github.com/zeesu-royalist/Zeesu-Fusion-Cinema",
        demo: "https://zeesu-royalist.github.io/Zeesu-Fusion-Cinema/"
    },
    {
        id: "zeesu-music",
        title: "Zeesu Music",
        category: "web-apps",
        image: "images/card8.jpg",
        description: "Music service to explore artists and listen to collections.",
        longDescription: "Zeesu Music is a custom audio player interface loaded with pre-configured playlists, equalizer indicators, and direct track selection grids to play background audios.",
        tech: ["HTML5", "CSS3", "JavaScript", "HTML5 Audio API"],
        features: [
            "Animated play/pause buttons and volume controls",
            "Track progression timeline with seeking capabilities",
            "Artist metadata display and cover artwork rotating animation",
            "Interactive queue organizer to arrange upcoming songs"
        ],
        challenges: "Preventing audio cut-offs on mobile lockscreen shifts and managing song track loading asynchronously.",
        solution: "Configured state handlers and integrated preloading attributes on HTMLAudioElement objects.",
        futureImprovements: "Full lyrics synchronization, playlist exports, and custom EQ presets.",
        github: "https://github.com/zeesu-royalist/music",
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
        github: "https://github.com/zeesu-royalist/Zeesu-Mart",
        demo: "https://zeesu-royalist.github.io/Zeesu-Mart/"
    },
    {
        id: "zeesu-chronicles",
        title: "Zeesu Chronicles",
        category: "web-apps",
        image: "images/card10.jpg",
        description: "Knowledge hub for space, technology facts, and scientific discoveries.",
        longDescription: "Zeesu Chronicles is a tech blog and digital magazine offering articles on astronomy, deep space exploration, quantum technologies, and physics discoveries. Immersive visuals and typography define its interface.",
        tech: ["HTML5", "CSS3", "JavaScript", "NASA API / Custom Articles"],
        features: [
            "Space image-of-the-day slider retrieving live NASA data",
            "Bookmark article reading list panel with progress tracking",
            "Immersive audio narrations for top science stories",
            "Floating interactive stargazing canvas elements"
        ],
        challenges: "Ensuring images downloaded from astronomy API feeds are compressed enough to load instantly.",
        solution: "Implemented automated image compression wrappers and lazy loading attributes for all media feeds.",
        futureImprovements: "3D planets viewer using canvas renderers and interactive quiz modules.",
        github: "https://github.com/zeesu-royalist/chronicles",
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
        github: "https://github.com/zeesu-royalist/Zeesu-Delights",
        demo: "https://zeesu-royalist.github.io/Zeesu-Delights/"
    },
    {
        id: "zeesu-official",
        title: "Zeesu Official",
        category: "web-apps",
        image: "images/card12.jpg",
        description: "My personal blogs and service featuring various artists and collections.",
        longDescription: "Zeesu Official is the landing hub highlighting Zeesu's blog feeds, creative writings, and collaborations. Perfect dashboard linking other digital nodes.",
        tech: ["HTML5", "CSS3", "JavaScript", "RSS Feed Parsers"],
        features: [
            "Interactive blogs stream with custom reader views",
            "Dark/Light layouts toggle with state memory",
            "Creative projects showcase with image slideshow overlays",
            "Direct contact integration buttons linking platforms"
        ],
        challenges: "Integrating external feed parsing scripts without impacting initial index layout calculations.",
        solution: "Deferred parsing scripts and utilized async scripts tags to render pages prior to parsing updates.",
        futureImprovements: "Interactive guestbooks and discussion boards support.",
        github: "https://github.com/zeesu-royalist/zeesu-official",
        demo: "https://zeesu-royalist.github.io/zeesu-official/"
    },
    {
        id: "zeesu-retouch",
        title: "Zeesu ReTouch",
        category: "utilities",
        image: "images/card13.jpg",
        description: "Upload your image and adjust filters to create your perfect look.",
        longDescription: "Zeesu ReTouch is a browser-based photo editor utility. It lets users upload images and apply immediate adjustments like contrast, brightness, blur, sepia, and crop directly in the browser.",
        tech: ["HTML5", "CSS3", "JavaScript", "Canvas API", "CSS Filters"],
        features: [
            "Local file selection and instant rendering onto editable canvases",
            "Range slider controls adjusting CSS filters in real-time",
            "Download option export editing canvases back to high-res JPGs",
            "Preset adjustment templates (Vintage, Dark, Cyberpunk)"
        ],
        challenges: "Handling highly dense, high-resolution phone photos on canvas components without causing lag.",
        solution: "Rendered a preview thumbnail copy to apply filters in real-time, then exported selections to the large photo on final save.",
        futureImprovements: "AI-based background removal and sticker additions tools.",
        github: "https://github.com/zeesu-royalist/zeesu-retouch",
        demo: "https://zeesu-royalist.github.io/zeesu-retouch/"
    },
    {
        id: "zeesu-weather",
        title: "Zeesu Weather Web",
        category: "utilities",
        image: "images/card14.jpg",
        description: "Check weather in real time and make your plans easy.",
        longDescription: "Zeesu Weather Web pulls meteorological data from weather API networks. Displays temperature, wind speed, humidity forecasts, and dynamic graphic animations matches the location climate.",
        tech: ["HTML5", "CSS3", "JavaScript", "OpenWeather API", "SVG Animations"],
        features: [
            "Geo-location detection for instant local weather displays",
            "5-day detailed atmospheric temperature forecast graphs",
            "Dynamic weather theme shifting (snowing, raining, sunny)",
            "Dual metrics support (Celsius / Fahrenheit conversions)"
        ],
        challenges: "Formatting meteorological API JSON payloads and dealing with non-standard weather icon libraries.",
        solution: "Parsed data using optimized model arrays and designed custom SVG icons mapping weather description fields.",
        futureImprovements: "Weather alerts notification emails and interactive global wind maps.",
        github: "https://github.com/zeesu-royalist/Zeesu-Weather-Cast",
        demo: "https://zeesu-royalist.github.io/Zeesu-Weather-Cast/"
    },
    {
        id: "zeesu-memestorm",
        title: "Zeesu MemeStorm",
        category: "games",
        image: "images/card15.jpg",
        description: "Funny memes online to make your face happy and relax.",
        longDescription: "Zeesu MemeStorm is a meme generator and sharing platform. Users can fetch popular trending templates, customize text inputs, and compile fresh custom memes.",
        tech: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Meme APIs"],
        features: [
            "Catalog of trending meme templates with rapid search functions",
            "Interactive top/bottom text overlay adjustments on canvases",
            "Download options for creations and direct clipboard sharing links",
            "One-click random template generator for fast fun"
        ],
        challenges: "Ensuring meme text wraps cleanly and text outlines stay highly legible across variable templates.",
        solution: "Created customizable helper functions on canvas text contexts that calculate word widths and add dark shadows.",
        futureImprovements: "Gif-meme creations, animation sticker overlays, and user upload portals.",
        github: "https://github.com/zeesu-royalist/Zeesu-MemeStorm",
        demo: "https://zeesu-royalist.github.io/Zeesu-MemeStorm/"
    },
    {
        id: "zeesu-quizhub",
        title: "Zeesu Quiz Hub",
        category: "games",
        image: "images/card16.jpg",
        description: "Play the quiz, learn something new, and sharpen your brain.",
        longDescription: "Zeesu Quiz Hub is an educational quiz platform hosting category questions spanning Science, History, Tech, and Pop culture. Features interactive score sheets.",
        tech: ["HTML5", "CSS3", "JavaScript", "Trivia API", "State Engines"],
        features: [
            "Interactive question counters and countdown timers",
            "Visual answers state (green correct, red incorrect indicator checks)",
            "Score summaries with custom ratings based on accuracy",
            "Dynamic category and difficulty level filters"
        ],
        challenges: "Shuffling question answer choices dynamically without repeating choices or messing up correct index pointers.",
        solution: "Applied Fisher-Yates array shuffling algorithms while keeping absolute indices in structured state arrays.",
        futureImprovements: "Multiplayer quiz battles, high score logs, and custom quiz creators.",
        github: "https://github.com/zeesu-royalist/The-Zeesu-Quiz-Hub",
        demo: "https://zeesu-royalist.github.io/The-Zeesu-Quiz-Hub/"
    },
    {
        id: "zeesu-quotes",
        title: "Zeesu Quotes Liv",
        category: "utilities",
        image: "images/card17.jpg",
        description: "Learn from experts by their quotes and transform your life.",
        longDescription: "Zeesu Quotes Liv is an inspirational content platform feeding motivational quotes from global leaders and figures. Includes social sharing configurations.",
        tech: ["HTML5", "CSS3", "JavaScript", "Quotes API", "Twitter Share Integration"],
        features: [
            "Random quote picker with smooth fade-in animations",
            "Filter quotes by topics (success, wisdom, technology, design)",
            "Direct Tweet-this integrations copying selected items",
            "Text-to-speech button to listen to quotes aloud"
        ],
        challenges: "Managing content layout shifts when quotes are extremely long or short.",
        solution: "Defined fixed minimum dimensions for glass cards and utilized transition wrappers to scale items.",
        futureImprovements: "Daily notifications option and user favorites compilation database.",
        github: "https://github.com/zeesu-royalist/Zeesu-Quotes-Library",
        demo: "https://zeesu-royalist.github.io/Zeesu-Quotes-Library/"
    },
    {
        id: "zeesu-todo",
        title: "Zeesu To-Do",
        category: "utilities",
        image: "images/card18.jpg",
        description: "Make your plans, manage tasks, and boost your productivity.",
        longDescription: "Zeesu To-Do is an intuitive productivity dashboard. Beyond simple checklist logs, it offers category breakdowns, priority tags, and deadline trackers.",
        tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Drag & Drop API"],
        features: [
            "Task list tags separating Work, Personal, and Health items",
            "Color indicator prioritization systems (High, Medium, Low)",
            "Completed item metrics tracker displaying completion graphs",
            "Filter toggles displaying active, complete, or overdue items"
        ],
        challenges: "Preserving tasks data schemas across updates and preventing accidental user data deletes.",
        solution: "Integrated automated version checks on LocalStorage loads and designed action confirmation overlays.",
        futureImprovements: "Pomodoro timers integration and audio alerts on completions.",
        github: "https://github.com/zeesu-royalist/To-Do-List-",
        demo: "https://zeesu-royalist.github.io/To-Do-List-/"
    },
    {
        id: "zeesu-tictac",
        title: "Zeesu Tic-Tak",
        category: "games",
        image: "images/card19.jpg",
        description: "Play with your special friend, and make special moments.",
        longDescription: "Zeesu Tic-Tak is an interactive web variation of the classic Tic-Tac-Toe game. Supports 2-player mode and an AI opponent option.",
        tech: ["HTML5", "CSS3", "JavaScript", "AI Minimax Algorithm"],
        features: [
            "2-Player pass-and-play mode and AI match configurations",
            "Smart AI opponent utilizing optimal move Minimax functions",
            "Confetti visuals triggers on match victory conditions",
            "Match scoreboards tracking historical series totals"
        ],
        challenges: "Configuring the AI Minimax script to run immediately without blocking mobile browser main execution threads.",
        solution: "Optimized evaluation tree heuristics to limit calculations to immediate next-move search depths.",
        futureImprovements: "Online multiplayer matching using WebSockets connections.",
        github: "https://github.com/zeesu-royalist/Tic-Tac-Toe-Game",
        demo: "https://zeesu-royalist.github.io/Tic-Tac-Toe-Game/"
    },
    {
        id: "zeesu-texts",
        title: "Zeesu Texts",
        category: "utilities",
        image: "images/card20.jpg",
        description: "Get different text styling and use that anywhere.",
        longDescription: "Zeesu Texts is a text utility and transformer. Lets users change text blocks into casing formats like UPPERCASE, lowercase, CamelCase, Title Case, binary, or Morse code.",
        tech: ["HTML5", "CSS3", "JavaScript", "RegEx Transformers"],
        features: [
            "Casing converters changing inputs in real-time",
            "Text complexity indicators showing word, sentence, and char totals",
            "Binary and Morse code encoder/decoder grids",
            "One-click copy systems linked directly to text outputs"
        ],
        challenges: "Converting unicode and special character subsets without breaking string parsing systems.",
        solution: "Implemented rigorous input sanitation rules and detailed encoding lookups lists.",
        futureImprovements: "Full markdown-to-HTML editors and custom font converters.",
        github: "https://github.com/zeesu-royalist/String-Transformers",
        demo: "https://zeesu-royalist.github.io/String-Transformers/"
    },
    {
        id: "rock-paper-scissors",
        title: "Rock Paper Scissors",
        category: "games",
        image: "images/card21.jpg",
        description: "AI based rock paper scissors, that makes moves by itself.",
        longDescription: "Rock Paper Scissors is a gamified interface. Players match hands against an AI opponent that evaluates selection patterns to counter-play.",
        tech: ["HTML5", "CSS3", "JavaScript", "Probability Predictor Engine"],
        features: [
            "Animated hand motions during active battle phases",
            "Smart AI patterns tracker modifying machine moves dynamically",
            "Streak trackers and matches achievements badges",
            "Sound effects triggers during round results"
        ],
        challenges: "Aligning sound triggers and hand motion transitions uniformly across mobile devices.",
        solution: "Preloaded audio snippets using native media contexts and utilized CSS keyframes transitions.",
        futureImprovements: "Advanced move choices (Rock, Paper, Scissors, Lizard, Spock).",
        github: "https://github.com/zeesu-royalist/AI-Based-Rock-Paper-Scissors",
        demo: "https://zeesu-royalist.github.io/AI-Based-Rock-Paper-Scissors/"
    },
    {
        id: "zeesu-pay",
        title: "Zeesu Pay",
        category: "utilities",
        image: "images/card22.jpg",
        description: "Smart billing & tipping solution for shopkeepers and customers.",
        longDescription: "Zeesu Pay is a lightweight checkout invoicing dashboard. It simplifies bill splits, tip distributions, and item allocations for retail checkouts and groups.",
        tech: ["HTML5", "CSS3", "JavaScript", "Math Formulas Parser"],
        features: [
            "Invoice input fields dividing subtotal and tax amounts",
            "Tip sliders adjusting values dynamically",
            "Bill split grids allocating figures per individual head",
            "E-receipt creation tools formatting print templates"
        ],
        challenges: "Formatting floating point rounding calculations to prevent currency calculation mismatches.",
        solution: "Utilized strict scaling factors (converting calculations to integer cents and parsing back on display).",
        futureImprovements: "UPI payment QR code generator integration and transaction receipt shares.",
        github: "https://github.com/zeesu-royalist/Zeesu-Pay",
        demo: "https://zeesu-royalist.github.io/Zeesu-Pay/"
    }
];
