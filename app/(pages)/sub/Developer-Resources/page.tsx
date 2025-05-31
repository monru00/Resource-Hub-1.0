import ResourceCard from "../../../components/ResourceCard";

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
    title: "Logopony",
    question: "Need a quick logo without hiring a designer?",
    description:
      "Logopony uses AI to help you generate professional logos in minutes — perfect for MVPs, landing pages, or side projects.",
    imageSrc: "/images/Logopony.jpg",
    altText: "Logopony image",
    link: "https://app.logopony.com/en/details/",
  },
  {
    id: "2",
    title: "Languine",
    question: "Want to build your own AI tutor or educational app?",
    description:
      "Languine lets you create interactive learning experiences using GPT models — great for edtech tools, courses, or knowledge assistants.",
    imageSrc: "/images/Languine.jpg",
    altText: "Languine image",
    link: "https://languine.ai/en",
  },
  {
    id: "3",
    title: "TinyWow",
    question: "Tired of installing heavy software for simple tasks?",
    description:
      "TinyWow gives you fast, free tools for PDFs, videos, images, and more — all browser-based, no signup.",
    imageSrc: "/images/TinyWow.jpg",
    altText: "TinyWow",
    link: "https://tinywow.com/",
  },
  {
    id: "4",
    title: "Unsplash",
    question: "Need beautiful, free stock images for your site or app?",
    description:
      "Unsplash offers high-quality visuals from a massive open community — ideal for design, blogging, and presentations.",
    imageSrc: "/images/Unsplash.jpg",
    altText: "Unsplash image",
    link: "https://unsplash.com/",
  },
  {
    id: "5",
    title: "Lummi AI",
    question: "Looking to turn long-form content into short, visual summaries?",
    description:
      "Lummi helps you generate bite-sized slideshows from articles, PDFs, and videos — great for learning or sharing ideas fast.",
    imageSrc: "/images/Lummi AI.jpg",
    altText: "Lummi AI image",
    link: "https://www.lummi.ai/",
  },
  {
    id: "6",
    title: "Z-Library",
    question: "Need access to a wide range of books and research material?",
    description:
      "Z-Library offers an extensive collection of academic and general reading resources.",
    imageSrc: "/images/Z-Library.jpg",
    altText: "Z-Library image",
    link: "https://z-lib.id/",
  },
  {
    id: "7",
    title: "Anna’s Archive",
    question: "Can’t find that one textbook or research paper?",
    description:
      "Anna’s Archive is a shadow library meta-search that indexes books, papers, and more — a powerful fallback when access hits a paywall.",
    imageSrc: "/images/Annas Archive.jpg",
    altText: "Anna’s Archive image",
    link: "https://annas-archive.org/",
  },
  {
    id: "8",
    title: "Zen Browser",
    question: "Want a minimal, privacy-focused browsing experience?",
    description:
      "Zen Browser strips out clutter and trackers — ideal for focused reading or research.",
    imageSrc: "/images/Zen Browser.jpg",
    altText: "Zen Browser image",
    link: "https://zen-browser.app/",
  },
  {
    id: "9",
    title: "Arcjet",
    question:
      "Building apps that need rate-limiting, authentication, or bot protection?",
    description:
      "Arcjet gives you developer-first security APIs with minimal setup.",
    imageSrc: "/images/Arcjet.jpg",
    altText: "Arcjet image",
    link: "https://arcjet.com/",
  },
  {
    id: "10",
    title: "Responsively",
    question:
      "Tired of resizing your browser window to test responsive layouts?",
    description:
      "Responsively helps you preview your site on multiple devices at once — a must-have for front-end devs.",
    imageSrc: "/images/Responsively.jpg",
    altText: "Responsively image",
    link: "https://responsively.app/",
  },
  {
    id: "11",
    title: "Cap",
    question:
      "Looking to turn screenshots into clean, beautiful presentations?",
    description:
      "Cap lets you annotate, crop, and style screenshots instantly — great for team sharing or product updates.",
    imageSrc: "/images/Cap.jpg",
    altText: "Cap image",
    link: "https://cap.so/",
  },
  {
    id: "12",
    title: "Loom",
    question: "Need to explain something quickly without a meeting?",
    description:
      "Loom helps you record your screen, voice, and face — perfect for walkthroughs, bug reports, or async collaboration.",
    imageSrc: "/images/Loom.jpg",
    altText: "Loom image",
    link: "https://www.loom.com/",
  },
  {
    id: "13",
    title: "ScreenRec",
    question: "Looking for a simple, free screen recording tool?",
    description:
      "ScreenRec lets you capture your screen with instant share links — no watermarks, no time limits.",
    imageSrc: "/images/ScreenRec.jpg",
    altText: "ScreenRec image",
    link: "https://screenrec.com/",
  },
  {
    id: "14",
    title: "Session Buddy",
    question: "Have too many tabs open?",
    description:
      "Session Buddy saves and organizes your browser sessions so you can close tabs without losing your workflow.",
    imageSrc: "/images/Session Buddy.jpg",
    altText: "Session Buddy image",
    link: "https://chromewebstore.google.com/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko?hl=en",
  },
];

export default function DeveloperResourcesPage() {
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
