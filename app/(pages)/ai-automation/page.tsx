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
    title: "There's an AI For That",
    question: "Exploring what AI can do across fields?",
    description:
      "This directory curates thousands of AI tools for design, productivity, development, and niche workflows — great for discovering new solutions or testing what’s possible.",
    imageSrc: "/images/There's an AI For That.jpg",
    altText: "There's an AI For That image",
    link: "https://theresanaiforthat.com/",
  },
  {
    id: "2",
    title: "Toolify",
    question: "Want to find and compare AI-powered tools in one place?",
    description:
      "Toolify aggregates daily updated AI tools across dozens of categories — handy for staying current in the fast-evolving AI landscape.",
    imageSrc: "/images/Toolify.jpg",
    altText: "Toolify image",
    link: "https://www.toolify.ai/",
  },
  {
    id: "3",
    title: "Deep ML",
    question:
      "Need high-quality, vetted resources in machine learning and deep learning?",
    description:
      "Deep ML curates tutorials, libraries, datasets, and tools — perfect for building serious AI projects or learning from trusted sources.",
    imageSrc: "/images/Deep ML.jpg",
    altText: "Deep ML image",
    link: "https://www.deep-ml.com/",
  },
  {
    id: "4",
    title: "Warp Terminal",
    question:
      "Looking for a modern terminal with AI and collaboration built in?",
    description:
      "Warp reimagines the developer terminal with command auto-complete, AI assistance, and team workflows — ideal for fast-paced engineering teams.",
    imageSrc: "/images/Warp Terminal.jpg",
    altText: "Warp Terminal image",
    link: "https://www.warp.dev/",
  },
  {
    id: "5",
    title: "Kapa.ai",
    question:
      "Need to turn your documentation or community into an AI chatbot?",
    description:
      "Kapa.ai creates helpful, accurate AI support agents using your own content — great for dev platforms, startups, and open source tools.",
    imageSrc: "/images/Kapa.jpg",
    altText: "Kapa.ai image",
    link: "https://www.kapa.ai/",
  },
  {
    id: "6",
    title: "Composio Docs",
    question: "Want to add no-hassle integrations to your SaaS app?",
    description:
      "Composio helps you plug into 100s of APIs with minimal setup — saving time on authentication, rate-limiting, and logic wiring.",
    imageSrc: "/images/Composio Docs.jpg",
    altText: "Composio Docs image",
    link: "https://docs.composio.dev/getting-started/welcome",
  },
  {
    id: "7",
    title: "CopilotKit",
    question: "Building an AI copilot into your web app?",
    description:
      "CopilotKit gives you open-source building blocks to add LLM-native UX like smart sidebars, chat, or autocomplete.",
    imageSrc: "/images/CopilotKit.jpg",
    altText: "CopilotKit image",
    link: "https://docs.copilotkit.ai/",
  },
  {
    id: "8",
    title: "Liveblocks",
    question:
      "Need real-time collaboration features like multiplayer cursors or shared states?",
    description:
      "Liveblocks provides drop-in tools for building collaborative apps — ideal for anything from design tools to document editors.",
    imageSrc: "/images/Liveblocks.jpg",
    altText: "Liveblocks image",
    link: "https://liveblocks.io/",
  },
  {
    id: "9",
    title: "Void Editor",
    question:
      "Want a visual playground for building and running generative AI prompts?",
    description:
      "Void Editor gives you a canvas-based interface for chaining prompts and testing models — useful for prototyping AI workflows visually.",
    imageSrc: "/images/Void Editor.jpg",
    altText: "Void Editor image",
    link: "https://voideditor.com/",
  },
  {
    id: "10",
    title: "Agora",
    question: "Adding live voice, video, or real-time engagement to your apps?",
    description:
      "Agora provides developer-friendly APIs for real-time communication — scalable, cross-platform, and production-ready.",
    imageSrc: "/images/Agora.jpg",
    altText: "Agora image",
    link: "https://www.agora.io/en/",
  },
  {
    id: "11",
    title: "Bolt",
    question: "Need a fast way to prototype UIs and logic in your browser?",
    description:
      "Bolt is a powerful notebook-style environment to create, test, and deploy frontend apps — perfect for rapid iterations and experiments.",
    imageSrc: "/images/Bolt.jpg",
    altText: "Bolt image",
    link: "https://bolt.new/",
  },
  {
    id: "12",
    title: "Modal",
    question: "Deploying Python functions as cloud-native microservices?",
    description:
      "Modal abstracts away infra so you can run serverless AI, data, or backend tasks — great for scaling compute-heavy workloads with minimal boilerplate.",
    imageSrc: "/images/Modal.jpg",
    altText: "Modal image",
    link: "https://modal.com/",
  },
  {
    id: "13",
    title: "Beam",
    question: "Want a platform to deploy AI apps without touching ops?",
    description:
      "Beam lets you run Python, ML models, and GPU workloads via a simple interface — ideal for launching AI prototypes or production-ready pipelines.",
    imageSrc: "/images/Beam.jpg",
    altText: "Beam image",
    link: "https://www.beam.cloud/",
  },
  {
    id: "14",
    title: "Unreal Speech",
    question: "Looking for ultra-realistic text-to-speech at scale?",
    description:
      "Unreal Speech offers affordable, high-quality voice synthesis — great for apps that rely on audio output or narration.",
    imageSrc: "/images/Unreal Speech.jpg",
    altText: "Unreal Speech image",
    link: "https://unrealspeech.com/",
  },
  {
    id: "15",
    title: "Mistral Chat",
    question: "Trying out open-weight, fast local AI chat?",
    description:
      "Mistral's demo offers fast inference, advanced models, and privacy-friendly setups — a serious OpenAI alternative for chat UX.",
    imageSrc: "/images/Mistral Chat.jpg",
    altText: "Mistral Chat image",
    link: "https://chat.mistral.ai/chat",
  },
  {
    id: "16",
    title: "LM Studio",
    question: "Running LLMs locally on your own machine?",
    description:
      "LM Studio lets you use models like Mistral or LLaMA without cloud dependencies — great for private, offline experimentation.",
    imageSrc: "/images/LM Studio.jpg",
    altText: "LM Studio image",
    link: "https://lmstudio.ai/",
  },
  {
    id: "17",
    title: "Cartesia Sonic",
    question: "Want to visually explore how models respond to prompts?",
    description:
      "Cartesia Sonic gives you dynamic insights into how LLMs behave — useful for tuning, debugging, or designing prompt structures.",
    imageSrc: "/images/Cartesia Sonic.jpg",
    altText: "Cartesia Sonic image",
    link: "https://cartesia.ai/sonic",
  },
  {
    id: "18",
    title: "Firecrawl",
    question: "Need to pull and process data from websites at scale?",
    description:
      "Firecrawl is a powerful programmable web crawler and scraper — great for enriching LLMs, indexing content, or automation.",
    imageSrc: "/images/Firecrawl.jpg",
    altText: "Firecrawl image",
    link: "https://www.firecrawl.dev/",
  },
  {
    id: "19",
    title: "Kimi",
    question: "Searching the web through an LLM-enhanced interface?",
    description:
      "Kimi brings an AI-native browsing experience where answers come enriched with sources — smooth, fast, and context-aware.",
    imageSrc: "/images/Kimi.jpg",
    altText: "Kimi image",
    link: "https://www.kimi.com/",
  },
  {
    id: "20",
    title: "LLM Stats",
    question: "Tracking open-weight models and benchmarks in one place?",
    description:
      " LLM Stats offers clean visualizations and up-to-date comparisons for popular LLMs — ideal for researchers and builders keeping score.",
    imageSrc: "/images/LLM Stats.jpg",
    altText: "LLM Stats image",
    link: "https://llm-stats.com/",
  },
  {
    id: "21",
    title: "Mastra",
    question: "Looking to automate workflows using AI and data triggers?",
    description:
      "Mastra lets you create flows powered by LLMs, APIs, and custom logic — great for AI-infused automation without reinventing the stack.",
    imageSrc: "/images/Mastra.jpg",
    altText: "Mastra image",
    link: "https://mastra.ai/",
  },
  {
    id: "22",
    title: "SpinAI",
    question: "Building open-source AI apps that can self-update?",
    description:
      "SpinAI helps you deploy, track, and auto-update AI-based tools — especially useful for rapidly evolving feature sets.",
    imageSrc: "/images/SpinAI.jpg",
    altText: "SpinAI image",
    link: "https://www.spinai.dev/",
  },
  {
    id: "23",
    title: "A0.dev",
    question: "Testing prompts across multiple models at once?",
    description:
      "A0.dev gives you a fast, clean interface to compare LLM outputs side-by-side — handy for tuning prompts or choosing models.",
    imageSrc: "/images/A0.dev.jpg",
    altText: "A0.dev image",
    link: "https://a0.dev/",
  },
  {
    id: "24",
    title: "Rork",
    question: "Want a native-feeling LLM app for the terminal?",
    description:
      "Rork is a slick CLI assistant powered by local or remote models — ideal for devs who want fast answers inside their shell.",
    imageSrc: "/images/Rork.jpg",
    altText: "Rorki mage",
    link: "https://rork.com/",
  },
  {
    id: "25",
    title: "Kiki.dev",
    question: "Need an open-source chatbot framework with great UX?",
    description:
      "Kiki provides a prebuilt interface, backend, and integrations — perfect for deploying personal AI assistants or SaaS copilots.",
    imageSrc: "/images/Kiki.dev.jpg",
    altText: "Kiki.dev image",
    link: "https://www.kiki.dev/",
  },
  {
    id: "26",
    title: "Repomix",
    question: "Discovering developer tools and projects, curated and ranked?",
    description:
      "Repomix tracks trending GitHub repos across tech stacks — great for finding hidden gems and staying ahead in the ecosystem.",
    imageSrc: "/images/Repomix.jpg",
    altText: "Repomix image",
    link: "https://repomix.com/",
  },
  {
    id: "27",
    title: "PromptKit",
    question: "Creating prompt-powered apps quickly?",
    description:
      "PromptKit helps you assemble reusable, composable prompt workflows with a visual builder — no need to manage raw API calls.",
    imageSrc: "/images/PromptKit.jpg",
    altText: "PromptKit image",
    link: "https://www.prompt-kit.com/",
  },
  {
    id: "28",
    title: "Groq",
    question: "Want blazing-fast inference for LLMs?",
    description:
      "Groq's chips run models like LLaMA at record speeds — useful for latency-critical apps like search, agents, or live chat.",
    imageSrc: "/images/Groq.jpg",
    altText: "Groq image",
    link: "https://groq.com/",
  },
  {
    id: "29",
    title: "OpenRouter",
    question: "Routing your prompts to different LLMs via one API?",
    description:
      "OpenRouter makes it easy to experiment with various models (OpenAI, Claude, Mistral, and more) under one endpoint.",
    imageSrc: "/images/OpenRouter.jpg",
    altText: "OpenRouter image",
    link: "https://openrouter.ai/",
  },
  {
    id: "30",
    title: "Mem0.ai",
    question: "Organizing your learning with spaced repetition and AI?",
    description:
      "Mem0 combines smart note-taking with memory-friendly review systems — great for devs, students, and lifelong learners.",
    imageSrc: "/images/Mem0.jpg",
    altText: "Mem0.ai image",
    link: "https://mem0.ai/",
  },

  {
    id: "31",
    title: "Presenti",
    question: "Turning ideas or briefs into presentations with AI?",
    description:
      "Presenti uses LLMs to generate slides and outlines in seconds — perfect for pitches, project decks, and team meetings.",
    imageSrc: "/images/Presenti.jpg",
    altText: "Presenti image",
    link: "https://presenti.ai/",
  },
  {
    id: "32",
    title: "LLM’s Text Hub",
    question: "Searching and archiving LLM outputs and prompts?",
    description:
      "This tool organizes prompt history, inputs, and outputs in a central place — great for workflow optimization or reproducibility.",
    imageSrc: "/images/LLM’s Text Hub.jpg",
    altText: "LLM’s Text Hub image",
    link: "https://llmstxthub.com/",
  },
  {
    id: "33",
    title: "SecondMe",
    question: "Deploying personal AI agents with memory and context?",
    description:
      "SecondMe allows you to clone workflows, personalities, and tasks into intelligent assistants — perfect for scaling your productivity.",
    imageSrc: "/images/SecondMe.jpg",
    altText: "SecondMe image",
    link: "https://www.secondme.io/",
  },
  {
    id: "34",
    title: "Firebase Studio",
    question: "Firebase StudioVisually manage your Firebase Firestore data?",
    description:
      "Firebase Studio gives you a clean UI for viewing, editing, and querying — a big step up from the default console.",
    imageSrc: "/images/Firebase Studio.jpg",
    altText: "Firebase Studio image",
    link: "https://firebase.studio/",
  },
  {
    id: "35",
    title: "OpenCode AI",
    question: "Open-source platform to build, test, and deploy AI apps?",
    description:
      "OpenCode AI streamlines development of LLM-powered tools — flexible, extensible, and made for builders who want control.",
    imageSrc: "/images/OpenCode AI.jpg",
    altText: "OpenCode AI image",
    link: "https://github.com/opencode-ai/opencode",
  },
  {
    id: "36",
    title: "OpenAI Image Generation API",
    question: "Need to generate images programmatically from text?",
    description:
      " This API lets you create high-quality visuals using OpenAI’s image models — great for design automation, creativity, or product features.",
    imageSrc: "/images/OpenAI Image Generation API.jpg",
    altText: "OpenAI Image Generation API image",
    link: "https://openai.com/index/image-generation-api/",
  },
];

export default function AiAutomationPage() {
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
