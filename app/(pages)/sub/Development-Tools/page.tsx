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
    title: "GitHub Roast",
    question: "Want to see your GitHub profile get brutally roasted (for fun)?",
    description:
      "GitHub Roast delivers a lighthearted critique of your profile with AI-generated jokes — great for laughs and self-awareness.",
    imageSrc: "/images/GitHub Roast.jpg",
    altText: "GitHub Roast image",
    link: "https://github-roast.pages.dev/",
  },
  {
    id: "2",
    title: "GitHub Battle",
    question: "Curious how your GitHub profile stacks up against a friend’s?",
    description:
      "GitHub Battle lets you compare stats like commits, stars, and contributions — a fun way to fuel friendly competition.",
    imageSrc: "/images/GitHub Battle.jpg",
    altText: "GitHub Battle image",
    link: "https://github.com/kalebalebachew/github-battle",
  },
  {
    id: "3",
    title: "asciinema",
    question: "Want to record and share your terminal sessions the right way?",
    description:
      "asciinema lets you capture CLI interactions as lightweight, text-based replays — perfect for demos, tutorials, and docs that stay crisp and copyable.",
    imageSrc: "/images/asciinema.jpg",
    altText: "asciinema image",
    link: "https://asciinema.org/",
  },
  {
    id: "4",
    title: "Super Productivity",
    question:
      "Need a powerful to-do app that actually helps you get stuff done?",
    description:
      "Super Productivity combines tasks, time tracking, and note-taking — perfect for developers managing deep work.",
    imageSrc: "/images/Super Productivity.jpg",
    altText: "Super Productivity image",
    link: "https://super-productivity.com/",
  },
  {
    id: "5",
    title: "Plane",
    question:
      "Need a developer-friendly tool to manage product planning and issues?",
    description:
      "Plane is an open-source alternative to Jira or Linear — built for teams that want flexibility, transparency, and full control over their workflow.",
    imageSrc: "/images/Plane.jpg",
    altText: "Plane image",
    link: "https://plane.dev/",
  },
  {
    id: "6",
    title: "ActivityWatch",
    question: "Want automatic time tracking without spying?",
    description:
      "ActivityWatch runs locally and shows how you spend time on apps and websites — great for boosting awareness and productivity.",
    imageSrc: "/images/ActivityWatch.jpg",
    altText: "ActivityWatch image",
    link: "https://activitywatch.net/",
  },
  {
    id: "7",
    title: "Screenshot Monitor",
    question: "Need to track remote work time with proof?",
    description:
      "Screenshot Monitor logs work hours and captures periodic screenshots — useful for teams needing transparent time reporting.",
    imageSrc: "/images/Screenshot Monitor.jpg",
    altText: "Screenshot Monitor image",
    link: "https://screenshotmonitor.com/",
  },
  {
    id: "8",
    title: "Phoenix Framework",
    question: "Looking to build scalable, real-time apps with Elixir?",
    description:
      "Phoenix delivers high performance, live updates, and a productive developer experience — perfect for modern web apps.",
    imageSrc: "/images/Phoenix Framework.jpg",
    altText: "Phoenix Framework image",
    link: "https://www.phoenixframework.org/",
  },
  {
    id: "9",
    title: "WakaTime",
    question: "Want to track your programming activity across editors?",
    description:
      "WakaTime automatically logs time spent by language, project, or file — ideal for insights into how you actually code.",
    imageSrc: "/images/WakaTime.jpg",
    altText: "WakaTime image",
    link: "https://wakatime.com/",
  },
  {
    id: "10",
    title: "Tauri",
    question:
      "Building a desktop app but want something lighter than Electron?",
    description:
      "Tauri lets you create secure, tiny desktop apps using web tech — great for performance-focused cross-platform development.",
    imageSrc: "/images/Tauri.jpg",
    altText: "Tauri image",
    link: "https://tauri.app/",
  },
  {
    id: "11",
    title: "Hono",
    question: "Want a fast, minimal web framework for the Edge?",
    description:
      "Hono runs on platforms like Cloudflare Workers and Deno — ideal for lightweight APIs and fast delivery at the edge.",
    imageSrc: "/images/Hono.jpg",
    altText: "Hono image",
    link: "https://hono.dev/",
  },
  {
    id: "12",
    title: "Elysia",
    question: "Looking for a full-featured Bun-based web framework?",
    description:
      "Elysia offers type safety, plugins, and performance — a great pick for building scalable backends with Bun.",
    imageSrc: "/images/Elysia.jpg",
    altText: "Elysia image",
    link: "https://elysiajs.com/",
  },
  {
    id: "13",
    title: "Meteor",
    question: "Need an all-in-one framework for real-time web apps?",
    description:
      "Meteor combines frontend and backend logic in one package — perfect for building fast, reactive apps without boilerplate.",
    imageSrc: "/images/Meteor.jpg",
    altText: "Meteor image",
    link: "https://v3-docs.meteor.com/",
  },
  {
    id: "14",
    title: "SolidJS",
    question: "Want fine-grained reactivity without a virtual DOM?",
    description:
      "SolidJS delivers fast, efficient UI updates with a lightweight feel — great for performance-focused frontend development.",
    imageSrc: "/images/SolidJS.jpg",
    altText: "SolidJS image",
    link: "https://www.solidjs.com/",
  },
  {
    id: "15",
    title: "Next Forge",
    question: "Want an AI-enhanced dashboard for your Next.js projects?",
    description:
      "Next Forge provides insights, previews, and tools to optimize and organize your Next.js workflows — great for faster iteration.",
    imageSrc: "/images/Next Forge.jpg",
    altText: "Next Forge image",
    link: "https://www.next-forge.com/",
  },
];

export default function DevelopmentToolsPage() {
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
