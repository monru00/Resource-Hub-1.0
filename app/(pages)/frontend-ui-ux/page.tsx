import ResourceCard from "../../components/ResourceCard";

interface Resource {
  id: string;
  title: string;
  question: string;
  description: string;
  imageSrc: string;
  altText: string;
  link: string;
}

const resources: Resource[] = [
  {
    id: "1",
    title: "ui-coach",
    question: "Want to sharpen your design skills through real-world practice?",
    description:
      "UI Coach gives you daily UI challenges, color palettes, and font pairings to help you create thoughtful, clean designs. A solid space to train your design instincts.",
    imageSrc: "/images/ui-coach.jpg",
    altText: "ui-coach image",
    link: "https://www.uicoach.io/",
  },
  {
    id: "2",
    title: "Designercize",
    question: "Stuck on a creative block or want to practice fast thinking?",
    description:
      "Designercize throws you random UX design prompts to flex your problem-solving muscles. Great for warming up before real client work or interviews.",
    imageSrc: "/images/designsize.jpg",
    altText: "designsize image",
    link: "https://designercize.com/",
  },
  {
    id: "3",
    title: "UX Tools Challenges",
    question:
      "Want to get better at solving UX problems, not just designing screens?",
    description:
      "UX Tools gives you realistic product challenges that simulate the work UX designers face daily. It’s perfect for practicing your research, ideation, and wireframing process.",
    imageSrc: "/images/uxtools.jpg",
    altText: "uxtools image",
    link: "https://uxtools.co/challenges",
  },
  {
    id: "4",
    title: "Design Better Podcast",
    question: "Want to hear how top teams design at scale?",
    description:
      "The Design Better Podcast interviews product and design leaders from companies like Google and Airbnb. Great for learning how design shapes culture and strategy.",
    imageSrc: "/images/designbetterpodcast.jpg",
    altText: "designbetterpodcast image",
    link: "https://designbetterpodcast.com/",
  },
  {
    id: "5",
    title: "Lapa Ninja",
    question: "Need fresh inspiration for your next landing page or portfolio?",
    description:
      "Lapa Ninja curates beautiful, high-quality landing pages from around the web. Ideal for studying layout, flow, and visual hierarchy",
    imageSrc: "/images/ninja.jpg",
    altText: "ninja image",
    link: "https://www.lapa.ninja/",
  },
  {
    id: "6",
    title: "Figma UI Kit",
    question: "Looking for layout ideas, animations, or typography details?",
    description:
      "Call to Inspiration offers a wide range of real-site design inspiration, neatly categorized by element. It’s perfect for discovering small design touches that elevate your work.",
    imageSrc: "/images/Futuristic-Stroke-Patterns.jpg",
    altText: "Futuristic-Stroke-Patterns image",
    link: "https://www.figma.com/community/file/1009514730236199133",
  },
  {
    id: "7",
    title: "Call to Inspiration",
    question: "Looking for layout ideas, animations, or typography details?",
    description:
      "Call to Inspiration offers a wide range of real-site design inspiration, neatly categorized by element. It’s perfect for discovering small design touches that elevate your work",
    imageSrc: "/images/calltoinspiration.jpg",
    altText: "calltoinspiration image",
    link: "https://calltoinspiration.com/",
  },
  {
    id: "8",
    title: "Navbar Gallery",
    question: "Struggling to design a good-looking, functional navigation bar?",
    description:
      "Navbar Gallery showcases real-world navs from modern websites with all kinds of styles and structures. Super handy for UI pattern research.",
    imageSrc: "/images/navbar-gallery.jpg",
    altText: "navbar-gallery image",
    link: "https://www.navbar.gallery/",
  },
  {
    id: "9",
    title: "Design Spells",
    question:
      "Want to discover clever microinteractions and creative design details?",
    description:
      "Design Spells collects delightful UI moments like easter eggs, animations, and transitions. It’s like a treasure chest of little UX surprises.",
    imageSrc: "/images/easter-egg.jpg",
    altText: "easter-egg image",
    link: "https://www.designspells.com/?tag=easter-egg",
  },
  {
    id: "10",
    title: "Realtime Colors",
    question: "Need to test color palettes live and see how they feel in UI?",
    description:
      "Realtime Colors lets you tweak colors and fonts in real-time with instant preview across components. Perfect for quick, visual feedback during design.",
    imageSrc: "/images/realtimecolors.jpg",
    altText: "realtimecolors image",
    link: "https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff&fonts=Inter-Inter",
  },
  {
    id: "11",
    title: "Looka",
    question: "Need a professional logo without hiring a designer?",
    description:
      "Looka helps you generate custom logos based on your brand style using AI. Fast, sleek, and surprisingly customizable for early-stage products.",
    imageSrc: "/images/looka.jpg",
    altText: "Looka image",
    link: "https://looka.com/",
  },
  {
    id: "12",
    title: "Bento Grids",
    question: "Want to build a beautiful bento-style personal website?",
    description:
      "Bento Grids provides real examples and inspiration for modular, grid-based designs. Great for portfolios, dashboards, and personal brands.",
    imageSrc: "/images/bentogrids.jpg",
    altText: "Bento Grids image",
    link: "https://bentogrids.com/",
  },
  {
    id: "13",
    title: "Foleo Design",
    question:
      "Curating your design portfolio but unsure how to present projects?",
    description:
      "Foleo shows well-crafted portfolios with strong storytelling and visual layout. A must-see for designers looking to land interviews.",
    imageSrc: "/images/foleo.jpg",
    altText: "Foleo Design image",
    link: "https://www.foleo.design/",
  },
  {
    id: "14",
    title: "The Design System Guide",
    question: "Trying to build or improve your team’s design system?",
    description:
      "This guide walks through the principles, workflows, and components that make scalable systems work. Ideal for teams that want consistency across products.",
    imageSrc: "/images/thedesignsystem.jpg",
    altText: "The Design System Guide image",
    link: "https://thedesignsystem.guide/",
  },
  {
    id: "15",
    title: "Litho Animations",
    question: "Curious how to create smooth transitions in Android UIs?",
    description:
      "Litho’s animation docs explain different transition types used in performant, declarative UI systems. Great for developers optimizing UX on Android.",
    imageSrc: "/images/fblitho.jpg",
    altText: "Litho Animations image",
    link: "https://fblitho.com/docs/animations/transition-types/",
  },
  {
    id: "16",
    title: "Icons8 Lunacy",
    question: "Want a free, fast design tool that works offline?",
    description:
      "Lunacy is a Figma-like design app with built-in assets, icons, and illustrations — perfect for Windows users. It’s lightweight, responsive, and ideal for quick mockups.",
    imageSrc: "/images/icons8.jpg",
    altText: "Icons8 Lunacy image",
    link: "https://icons8.com/lunacy",
  },
  {
    id: "17",
    title: "Figma Design System",
    question: "Designing dashboards and need components fast?",
    description:
      "This community Figma file gives you clean, responsive dashboard templates to speed up your workflow. Great for admin panels, SaaS apps, or internal tools.",
    imageSrc: "/images/preline-ui.jpg",
    altText: "Figma Design System image",
    link: "https://www.figma.com/community/file/1179068859697769656",
  },
  {
    id: "18",
    title: "Pacdora",
    question: "Want to design packaging and see it in 3D instantly?",
    description:
      "Pacdora lets you create box, bag, and bottle designs with templates and live previews. Ideal for product designers and brand developers.",
    imageSrc: "/images/pacdora.jpg",
    altText: "Pacdora image",
    link: "https://www.pacdora.com/",
  },
  {
    id: "19",
    title: "Storyset",
    question: "Need high-quality illustrations you can customize on the fly? ",
    description:
      "Storyset gives you editable, animated vector illustrations with flexible styles and themes. A fantastic resource for adding life to websites and presentations.",
    imageSrc: "/images/storyset.jpg",
    altText: "Storyset image",
    link: "https://storyset.com/",
  },
  {
    id: "20",
    title: "Overflow",
    question:
      "Want to present your design flows with clarity and storytelling?",
    description:
      "Overflow lets you turn static designs into interactive user flows with clean visual mapping. Great for sharing logic, decisions, and journeys with teams or clients.",
    imageSrc: "/images/overflow-design.jpg",
    altText: "Overflow image",
    link: "https://www.overflow.design/ec.html",
  },
  {
    id: "21",
    title: "Carbon Design System",
    question: "Working on enterprise-grade UIs and want structure?",
    description:
      "Carbon is IBM’s open-source design system with a full component library, code, and design guidelines. It’s great for teams who need consistency across complex platforms.",
    imageSrc: "/images/carbondesignsystem.jpg",
    altText: "Carbon Design System image",
    link: "https://carbondesignsystem.com/",
  },
  {
    id: "22",
    title: "Motion Zajno",
    question:
      "Looking to explore motion in digital storytelling and product design?",
    description:
      "Motion by Zajno showcases smooth, expressive animations in UI and branding. Perfect for understanding how motion enhances user experience.",
    imageSrc: "/images/motion-zajno.jpg",
    altText: "Motion Zajno image",
    link: "https://motion.zajno.com/",
  },
  {
    id: "23",
    title: "Typewolf",
    question: "Searching for type combinations that actually look good?",
    description:
      "Typewolf curates beautiful font pairings, trends, and usage examples across real websites. It’s the designer’s go-to for typography that works.",
    imageSrc: "/images/typewolf.jpg",
    altText: "Typewolf image",
    link: "https://www.typewolf.com/",
  },
  {
    id: "24",
    title: "Penpot",
    question: "Want a Figma alternative that’s open source and team-friendly?",
    description:
      "Penpot is a design and prototyping tool built for collaboration — browser-based and open to all. Ideal for teams that want control and freedom over their workflow.",
    imageSrc: "/images/penpot.jpg",
    altText: "Penpot image",
    link: "https://penpot.app/",
  },
  {
    id: "25",
    title: "Figma",
    question: "Want to design, prototype, and collaborate — all in one place?",
    description:
      "Figma is a powerful, browser-based design tool used by teams to create user interfaces, systems, and prototypes in real time. It’s fast, flexible, and built for modern product design.",
    imageSrc: "/images/figma.jpg",
    altText: "Figma image",
    link: "https://www.figma.com/",
  },
  {
    id: "26",
    title: "palitra",
    question:
      "Looking for color palettes inspired by anything — even “hello kitty”?",
    description:
      "Palitra turns keywords into beautiful, ready-to-use color combinations. It’s a great tool for designers and developers who want fast, creative color inspiration.",
    imageSrc: "/images/Palitra.jpg",
    altText: "Palitra image",
    link: "https://palitra.app/?q=hello+kitty",
  },
  {
    id: "27",
    title: "Laws of UX",
    question:
      "Want to design interfaces that feel intuitive and human-centered? ",
    description:
      "Laws of UX explains key psychological principles that shape how users interact with design. It’s a must-read for anyone serious about creating better user experiences.",
    imageSrc: "/images/lawsofux.jpg",
    altText: "Laws of UX image",
    link: "https://lawsofux.com/",
  },
  {
    id: "28",
    title: "Footer Design",
    question: "Running out of ideas for how to end your websites with style?",
    description:
      "Footer Design showcases a curated collection of real-world website footers for design inspiration. Simple, useful, and perfect when you want to polish the bottom of your layout.",
    imageSrc: "/images/footerdesign.jpg",
    altText: "Footer Design image",
    link: "https://www.footer.design/",
  },
  {
    id: "29",
    title: "SaaS Landing Page",
    question:
      "Need inspiration for designing your next SaaS product landing page?",
    description:
      "SaaS Landing Page offers a rich gallery of high-converting designs from real companies. It’s perfect for studying layout, copy, and structure that actually works.",
    imageSrc: "/images/sasslanding.jpg",
    altText: "SaaS Landing Page image",
    link: "https://saaslandingpage.com/",
  },
  {
    id: "30",
    title: "Sixelf",
    question: "Trying to find beautiful, lightweight SVG icons fast?",
    description:
      "Sixelf gives you access to simple, scalable icons that are easy to customize and use. Great for clean UI design without the bloat.",
    imageSrc: "/images/sixelf.jpg",
    altText: "Sixelf image",
    link: "https://sixelf.com/",
  },
  {
    id: "31",
    title: "Pangram Pangram",
    question: "Want high-quality, modern typefaces that stand out?",
    description:
      "Pangram Pangram offers premium fonts with free personal-use options and strong visual character. Ideal for elevating your designs with great typography.",
    imageSrc: "/images/pangram.jpg",
    altText: "Pangram Pangram image",
    link: "https://pangrampangram.com/",
  },
  {
    id: "32",
    title: "HyperUI",
    question: "Building with Tailwind and need ready-made components?",
    description:
      "HyperUI gives you beautifully crafted, free Tailwind UI pieces to speed up your workflow and keep your designs consistent.",
    imageSrc: "/images/HyperUI.jpg",
    altText: "HyperUI image",
    link: "https://www.hyperui.dev/",
  },
  {
    id: "33",
    title: "Preline",
    question: "Looking for a full-featured Tailwind CSS UI kit?",
    description:
      "Preline offers responsive components, templates, and layouts — perfect for building polished interfaces faster.",
    imageSrc: "/images/Preline.jpg",
    altText: "Preline image",
    link: "https://preline.co/",
  },
  {
    id: "34",
    title: "FarmUI",
    question: "Want a Tailwind-based component library with smooth motion?",
    description:
      "FarmUI delivers sleek, interactive components with thoughtful microinteractions — great for expressive, modern UIs.",
    imageSrc: "/images/FarmUI.jpg",
    altText: "FarmUI image",
    link: "https://www.farmui.com/",
  },
  {
    id: "35",
    title: "Tailark",
    question: "Need Tailwind UI components and templates that just work?",
    description:
      "Tailark provides a growing set of responsive building blocks — ideal for product dashboards, websites, and SaaS apps.",
    imageSrc: "/images/Tailark.jpg",
    altText: "Tailark image",
    link: "https://tailark.com/",
  },
  {
    id: "36",
    title: "DynaUI",
    question: "Searching for dynamic, animated components for your UI?",
    description:
      "DynaUI blends clean design with smooth transitions, giving your interfaces a modern, delightful feel.",
    imageSrc: "/images/DynaUI.jpg",
    altText: "DynaUI image",
    link: "https://www.dynaui.design/",
  },
  {
    id: "37",
    title: "Kibo UI",
    question:
      "Looking for stylish Tailwind components with utility-first power?",
    description:
      "Kibo UI offers flexible, accessible components with simple customization — great for fast prototyping and production apps.",
    imageSrc: "/images/Kibo UI.jpg",
    altText: "Kibo UI image",
    link: "https://www.kibo-ui.com/",
  },
  {
    id: "38",
    title: "Magic UI",
    question: "Want animated Tailwind components that feel alive?",
    description:
      "Magic UI brings in motion-ready UI pieces built with Framer Motion — perfect for apps that need energy and flair.",
    imageSrc: "/images/Magic UI.jpg",
    altText: "Magic UI image",
    link: "https://magicui.design/",
  },
  {
    id: "39",
    title: "Jolly UI",
    question: "Need a playful, accessible component set?",
    description:
      "Jolly UI mixes personality with utility, offering colorful Tailwind components that make your interfaces feel friendly and inviting.",
    imageSrc: "/images/Jolly UI.jpg",
    altText: "Jolly UI image",
    link: "https://www.jollyui.dev/",
  },
  {
    id: "40",
    title: "Prism UI",
    question: "Looking for developer-friendly components with clean design?",
    description:
      "Prism UI serves up a functional, minimal set of Tailwind components that help you build fast and scale with ease.",
    imageSrc: "/images/Prism UI.jpg",
    altText: "Prism UI image",
    link: "https://www.prismui.tech/",
  },
  {
    id: "41",
    title: "Mixcn UI",
    question: "Want a versatile Tailwind-based UI kit that feels refined?",
    description:
      " Mixcn UI combines simplicity and polish — perfect for modern projects that need smooth layouts and consistency.",
    imageSrc: "/images/Mixcn UI.jpg",
    altText: "Mixcn UI image",
    link: "https://mixcn-ui.vercel.app/components",
  },
  {
    id: "42",
    title: "Gravity UI",
    question: "Need a high-quality UI kit for dashboards and apps?",
    description:
      "Gravity UI offers modern, responsive components focused on usability and aesthetic — ideal for product teams.",
    imageSrc: "/images/Gravity UI.jpg",
    altText: "Gravity UI image",
    link: "https://gravity-ui.com/",
  },
  {
    id: "43",
    title: "Eldora UI",
    question: "Looking for stylish, lightweight components for Tailwind?",
    description:
      "Eldora UI gives you a curated set of UI parts with soft visuals and smooth interactions — great for landing pages and product sites.",
    imageSrc: "/images/Eldora UI.jpg",
    altText: "Eldora UI image",
    link: "https://www.eldoraui.site/",
  },
  {
    id: "44",
    title: "Naive UI",
    question: "Building with Vue and want a complete UI library?",
    description:
      "Naive UI gives you fully themeable, customizable Vue 3 components — fast to use, elegant to ship.",
    imageSrc: "/images/Naive UI.jpg",
    altText: "Naive UI image",
    link: "https://www.naiveui.com/en-US/dark/components/button",
  },
  {
    id: "45",
    title: "PrimeReact",
    question: "Want a mature React UI suite with rich components?",
    description:
      "PrimeReact offers everything from data tables to calendars — ideal for enterprise-grade dashboards and apps",
    imageSrc: "/images/PrimeReact.jpg",
    altText: "PrimeReact image",
    link: "https://primereact.org/",
  },
  {
    id: "46",
    title: "Ark UI",
    question: "Need fully accessible, headless components in React or Vue?",
    description:
      "Ark UI gives you composable building blocks that work seamlessly with styling systems like Tailwind or CSS-in-JS.",
    imageSrc: "/images/Ark UI.jpg",
    altText: "Ark UI image",
    link: "https://ark-ui.com/",
  },
  {
    id: "47",
    title: "Solid UI",
    question: "Using SolidJS and need ready components?",
    description:
      "Solid UI delivers fast, lightweight pieces designed for Solid's reactivity — great for building performant apps.",
    imageSrc: "/images/Solid UI.jpg",
    altText: "Solid UI image",
    link: "https://www.solid-ui.com/",
  },
  {
    id: "48",
    title: "Kobalte",
    question: "Looking for accessible primitives for SolidJS?",
    description:
      "Kobalte brings headless UI components that give you full control over styling, interaction, and structure.",
    imageSrc: "/images/Kobalte.jpg",
    altText: "Kobalte image",
    link: "https://kobalte.dev/docs/core/overview/introduction/",
  },
  {
    id: "49",
    title: "Tamagui",
    question: "Want to build universal apps with a single design system?",
    description: "Want to build universal apps with a single design system?",
    imageSrc: "/images/Tamagui.jpg",
    altText: "Tamagui image",
    link: "https://tamagui.dev/",
  },
  {
    id: "50",
    title: "Gluestack",
    question: "Building for mobile and web using design tokens?",
    description:
      "Gluestack is a styled-components-based UI system that helps you stay consistent and responsive across platforms.",
    imageSrc: "/images/Gluestack.jpg",
    altText: "Gluestack image",
    link: "https://gluestack.io/",
  },
  {
    id: "51",
    title: "Refine",
    question: "Need a framework to build full-featured CRUD apps fast?",
    description:
      "Refine streamlines data-heavy apps with built-in auth, routing, and APIs — ideal for dashboards and admin panels.",
    imageSrc: "/images/Refine.jpg",
    altText: "Refine image",
    link: "https://refine.dev/",
  },
  {
    id: "52",
    title: "Salad Storybook",
    question: "Looking for UI inspiration and component patterns?",
    description:
      "Salad Storybook is a collection of beautifully designed components — a great reference for modern, aesthetic design systems.",
    imageSrc: "/images/Salad Storybook.jpg",
    altText: "Salad Storybook image",
    link: "https://salad-storybook.fly.dev/welcome",
  },
  {
    id: "53",
    title: "Svelte Loading Spinners",
    question: "Working with Svelte and need stylish loading animations?",
    description:
      "This collection gives you lightweight, customizable spinners — great for adding visual feedback without heavy dependencies.",
    imageSrc: "/images/Svelte Loading Spinners.jpg",
    altText: "Svelte Loading Spinners image",
    link: "https://schum123.github.io/svelte-loading-spinners/",
  },
  {
    id: "54",
    title: "Awesome Loaders",
    question: "Want modern, creative loaders for your site?",
    description:
      "Awesome Loaders offers a growing collection of animated loaders built with HTML, CSS, and SVG — ideal for keeping users engaged.",
    imageSrc: "/images/Awesome Loaders.jpg",
    altText: "Awesome Loaders image",
    link: "https://awesome-loaders.netlify.app/docs/loaders/boltloader/",
  },
  {
    id: "55",
    title: "CSS Loaders 3D",
    question: "Looking to add depth to your loading experience?",
    description:
      "CSS Loaders 3D features rotating cubes, bouncing balls, and other pure CSS animations — perfect for playful, engaging interfaces.",
    imageSrc: "/images/CSS Loaders 3D.jpg",
    altText: "CSS Loaders 3D image",
    link: "https://css-loaders.com/3d/",
  },
  {
    id: "56",
    title: "BlurHash",
    question: "Need a fast-loading image placeholder?",
    description:
      "BlurHash creates a compact, blurred preview of your images — a slick technique to improve perceived loading speed.",
    imageSrc: "/images/BlurHash.jpg",
    altText: "BlurHash image",
    link: "https://blurha.sh/",
  },
  {
    id: "57",
    title: "SVGL",
    question: "Want to animate your SVGs without touching a timeline?",
    description:
      "SVGL lets you create SVG animations visually — export them in clean code, ready for production use.",
    imageSrc: "/images/SVGL.jpg",
    altText: "SVGL image",
    link: "https://svgl.app/",
  },
  {
    id: "58",
    title: "Open Peeps",
    question: "Looking for hand-drawn illustration packs that feel friendly?",
    description:
      "Open Peeps provides modular, customizable characters — great for onboarding screens, avatars, or fun product visuals.",
    imageSrc: "/images/Open Peeps.jpg",
    altText: "Open Peeps image",
    link: "https://www.openpeeps.com/",
  },
  {
    id: "59",
    title: "Rough Notation",
    question: "Want to annotate your UI with hand-drawn flair?",
    description:
      "Rough Notation lets you add animated highlights and underlines in a sketchy style — ideal for walkthroughs or product tours.",
    imageSrc: "/images/Rough Notation.jpg",
    altText: "Rough Notation image",
    link: "https://github.com/linkstrifer/react-rough-notation#readme",
  },
  {
    id: "60",
    title: "Component Gallery",
    question: "Need visual references for real-world UI components?",
    description:
      "Component Gallery showcases how top products design buttons, cards, inputs, and more — a solid resource for UI inspiration.",
    imageSrc: "/images/Component Gallery.jpg",
    altText: "Component Gallery image",
    link: "https://component.gallery/",
  },
  {
    id: "61",
    title: "Figcomponents",
    question: "Working in Figma and want ready-to-use components?",
    description:
      "Figcomponents gives you searchable, community-made Figma assets — a fast way to explore patterns and speed up your design process.",
    imageSrc: "/images/Figcomponents.jpg",
    altText: "Figcomponents image",
    link: "https://www.figcomponents.com/",
  },
  {
    id: "62",
    title: "Neo Brutalism",
    question: "Love bold colors, big borders, and chunky design?",
    description:
      "Neo Brutalism is a gallery of sites using this aesthetic — great for discovering edgy, standout web design inspiration.",
    imageSrc: "/images/Neo Brutalism.jpg",
    altText: "Neo Brutalism image",
    link: "https://www.neobrutalism.dev/",
  },
  {
    id: "63",
    title: "UV Canvas",
    question: "Want to explore 3D and shader-powered visuals on the web?",
    description:
      "UV Canvas gives you interactive experiments and generative designs — perfect for learning GLSL or just getting visual ideas.",
    imageSrc: "/images/UV Canvas.jpg",
    altText: "UV Canvas image",
    link: "https://uvcanvas.com/",
  },
  {
    id: "64",
    title: "Omatsuri",
    question: "Need handy frontend tools without leaving your browser?",
    description:
      "Omatsuri is a bundle of micro-tools — from CSS generators to SVG compressors — all in a clean, developer-focused UI.",
    imageSrc: "/images/Omatsuri.jpg",
    altText: "Omatsuri image",
    link: "https://omatsuri.app/",
  },
  {
    id: "65",
    title: "React Text Transition",
    question: "Want to animate text changes in your React app?",
    description:
      "This simple library adds smooth transitions between text states — great for dynamic headlines, counters, or rotating quotes.",
    imageSrc: "/images/React Text Transition.jpg",
    altText: "React Text Transition image",
    link: "https://github.com/WinterCore/react-text-transition",
  },
  {
    id: "66",
    title: "Icons8 Icons",
    question: "Looking for a massive collection of clean, modern icons?",
    description:
      "Icons8 offers thousands of customizable icons in multiple styles, perfect for web, mobile, and product design.",
    imageSrc: "/images/Icons8-Icons.jpg",
    altText: "Icons8 Icons image",
    link: "https://icons8.com/",
  },
  {
    id: "67",
    title: "Iconscout",
    question: "Need icons, illustrations, and 3D assets — all in one place?",
    description:
      "Iconscout gives you a wide variety of design assets with flexible formats, ideal for fast, consistent visuals.",
    imageSrc: "/images/Iconscout.jpg",
    altText: "Iconscout image",
    link: "https://iconscout.com/icons",
  },
  {
    id: "68",
    title: "Remix Icon",
    question: "Want a free, consistent icon set built for modern UI?",
    description:
      "Remix Icon offers a sleek collection of open-source icons with a focus on clarity and minimalism — perfect for interfaces.",
    imageSrc: "/images/Remix-Icon.jpg",
    altText: "Remix Icon image",
    link: "https://remixicon.com/",
  },
  {
    id: "69",
    title: "Atlas Icons",
    question: "Looking for pixel-perfect SVG icons with personality?",
    description:
      "Atlas Icons is an open-source set designed for sharpness, flexibility, and easy use across modern UIs.",
    imageSrc: "/images/Atlas-Icons.jpg",
    altText: "Atlas Icons image",
    link: "https://atlasicons.vectopus.com/",
  },
  {
    id: "70",
    title: "The Noun Project",
    question: "Searching for visual metaphors for almost anything?",
    description:
      "The Noun Project hosts millions of icons contributed by designers worldwide — ideal for storytelling and accessibility.",
    imageSrc: "/images/The-Noun-Project.jpg",
    altText: "The Noun Project image",
    link: "https://thenounproject.com/search/icons/",
  },
  {
    id: "71",
    title: "Humbleicons",
    question: "Want a clean icon set that feels calm and thoughtful?",
    description:
      "Humbleicons provides simple, outline-style icons made for clarity in modern design systems. Lightweight and elegant.",
    imageSrc: "/images/Humbleicons.jpg",
    altText: "Humbleicons image",
    link: "https://humbleicons.com/",
  },
  {
    id: "72",
    title: "Streamline",
    question: "Need the most complete icon system out there?",
    description:
      "Streamline gives you massive, detailed icon packs in multiple weights and styles — great for teams building full-scale products.",
    imageSrc: "/images/Streamline.jpg",
    altText: "Streamline image",
    link: "https://www.streamlinehq.com/",
  },
  {
    id: "73",
    title: "Pqoqub Icons",
    question: "Want a playful, free icon set with consistent geometry?",
    description:
      "Pqoqub Icons delivers quirky, charming icons perfect for creative web and app projects — simple, fun, and developer-friendly.",
    imageSrc: "/images/Pqoqub-Icons.jpg",
    altText: "Pqoqub Icons image",
    link: "https://icons.pqoqubbw.dev/",
  },
  {
    id: "74",
    title: "FreeConvert",
    question: "Need to convert images, videos, or documents quickly online?",
    description:
      "FreeConvert supports a wide range of formats with no installation needed — perfect for quick, on-the-fly file conversions.",
    imageSrc: "/images/Free-Convert.jpg",
    altText: "FreeConvert image",
    link: "https://www.freeconvert.com/",
  },
  {
    id: "75",
    title: "Rive",
    question:
      "Want to design and animate in one tool, then ship straight to your app?",
    description:
      "Rive lets you create real-time animations with interactivity baked in-perfect for adding life to interfaces, games, or onboarding flows.",
    imageSrc: "/images/Rive.jpg",
    altText: "Rive image",
    link: "https://rive.app/",
  },
  {
    id: "76",
    title: "Cobe",
    question: "Looking to build lightweight 3D visuals in React?",
    description:
      "Cobe is a tiny WebGL renderer built on React and Three.js-great for smooth, performant globe animations and interactive canvases.",
    imageSrc: "/images/Cobe.jpg",
    altText: "Cobe image",
    link: "https://cobe.vercel.app/",
  },
  {
    id: "77",
    title: "Web Interactions Gallery",
    question: "Need inspiration for clever, expressive UI motion?",
    description:
      "Web Interactions Gallery curates stunning microinteractions and scroll-based animations-a goldmine for modern motion design ideas.",
    imageSrc: "/images/Motion.dev.jpg",
    altText: "Motion.dev image",
    link: "https://www.webinteractions.gallery/",
  },
  {
    id: "78",
    title: "Motion.dev",
    question: "Want to create smooth animations using just utility classes?",
    description:
      "Motion.dev brings motion design into your HTML workflow with simple, tailwind-like syntax-great for developers who love clean, declarative tools.",
    imageSrc: "/images/Motion.dev.jpg",
    altText: "Motion.dev image",
    link: "https://motion.dev/",
  },
  {
    id: "79",
    title: "Motion Primitives",
    question:
      "Looking for animation components that feel native to your design system?",
    description:
      "Motion Primitives offers composable animation building blocks for React-ideal for creating meaningful motion without over-engineering.",
    imageSrc: "/images/Motion-Primitives.jpg",
    altText: "Motion Primitives image",
    link: "https://motion-primitives.com/",
  },
];

export default function FrontendUiUx() {
  return (
    <div className="py-4 my-30">
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
