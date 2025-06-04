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
    title: "Google Advanced Search",
    question: "Want more control over your search queries?",
    description:
      "Google Advanced Search lets you fine-tune results using filters like region, file type, and exact phrases — ideal for research or finding niche info fast.",
    imageSrc: "/images/Google Advanced Search.jpg",
    altText: "Google Advanced Search image",
    link: "https://www.google.com/advanced_search",
  },
  {
    id: "2",
    title: "Dub.co",
    question: "Looking to shorten and track your links?",
    description:
      "Dub offers a clean, open-source link shortener with detailed analytics, custom domains, and simple UI — great for marketing or dev use.",
    imageSrc: "/images/Dub-co.jpg",
    altText: "Dub.co image",
    link: "https://dub.co/",
  },
  {
    id: "3",
    title: "Google Scholar",
    question: "Need reliable academic sources?",
    description:
      "Google Scholar helps you explore peer-reviewed papers, theses, and citations — essential for writing research-backed content.",
    imageSrc: "/images/Google Scholar.jpg",
    altText: "Google Scholar image",
    link: "https://scholar.google.com/",
  },
  {
    id: "4",
    title: "Ethiopian Birr Exchange Rate",
    question: "Tracking currency changes?",
    description:
      "This page gives up-to-date exchange rates for the Ethiopian Birr against global currencies — useful for finance, business, or travel planning.",
    imageSrc: "/images/Ethiopian Birr Exchange Rate.jpg",
    altText: "Ethiopian Birr Exchange Rate image",
    link: "https://banksethiopia.com/ethiopian-birr-exchange-rate/",
  },
  {
    id: "5",
    title: "Code Planner",
    question: "Planning your software projects better?",
    description:
      "Code Planner helps you structure, prioritize, and build a clear roadmap — ideal for solo developers or small teams.",
    imageSrc: "/images/Code Planner.jpg",
    altText: "Code Planner image",
    link: "https://www.codeplanner.co/",
  },
  {
    id: "6",
    title: "Tree of Thought",
    question: "Tired of cluttered mind maps?",
    description:
      "This interactive ASCII-based tree lets you organize ideas hierarchically with keyboard shortcuts — minimal, fast, and distraction-free.",
    imageSrc: "/images/Tree of Thought.jpg",
    altText: "Tree of Thought image",
    link: "https://tree.nathanfriend.com/",
  },
  {
    id: "7",
    title: "Up For Grabs",
    question: "Want to contribute to open source but not sure where to start?",
    description:
      " Up For Grabs curates beginner-friendly issues across projects — a solid entry point into real-world development.",
    imageSrc: "/images/Up For Grabs.jpg",
    altText: "Up For Grabs image",
    link: "https://up-for-grabs.net/#/filters?date=1week",
  },
  {
    id: "8",
    title: "Starlight",
    question: "Building a documentation site?",
    description:
      "Starlight, built on Astro, gives you a fast, customizable way to launch feature-rich docs with great DX and performance.",
    imageSrc: "/images/Starlight.jpg",
    altText: "Starlight image",
    link: "https://starlight.astro.build/",
  },
  {
    id: "9",
    title: "Hosting Express API in CPanel",
    question: "Deploying a TypeScript + Prisma backend on shared hosting?",
    description:
      "This guide walks you through hosting an Express API using CPanel-budget-friendly and beginner-accessible.",
    imageSrc: "/images/Hosting Express API in CPanel.jpg",
    altText: "Hosting Express API in CPanel image",
    link: "https://medium.com/@mohammedibrahim4641/hosting-express-api-in-cpanel-typescript-prisma-8c42d6cbd55a",
  },
  {
    id: "10",
    title: "Git Practices for Microservices",
    question: "Working with microservices?",
    description:
      "Learn smart Git repo structures and versioning strategies for clean collaboration and service independence.",
    imageSrc: "/images/Git Practices for Microservices.jpg",
    altText: "Git Practices for Microservices image",
    link: "https://kyiv-tech.medium.com/git-practices-for-microservices-independent-repositories-and-version-control-4c7a58aea7dd",
  },
  {
    id: "11",
    title: "Write a Kickass README",
    question: "Looking to make your project stand out? ",
    description:
      "This beginner-friendly guide shows how to write engaging READMEs that inform, impress, and convert visitors into users.",
    imageSrc: "/images/Write a Kickass README.jpg",
    altText: "Write a Kickass README image",
    link: "https://meakaakka.medium.com/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3",
  },
  {
    id: "12",
    title: "Readme-Driven Development",
    question: "Want to code with clarity?",
    description:
      "Learn why writing the README before the code can lead to better software design and communication.",
    imageSrc: "/images/Readme-Driven Development.jpg",
    altText: "Readme-Driven Development image",
    link: "https://tom.preston-werner.com/2010/08/23/readme-driven-development.html",
  },
  {
    id: "13",
    title: "GitHub Formatting Basics",
    question: "New to GitHub?",
    description:
      "This official guide helps you master Markdown formatting-essential for clean issues, PRs, and documentation.",
    imageSrc: "/images/GitHub Formatting Basics.jpg",
    altText: "GitHub Formatting Basics image",
    link: "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",
  },
  {
    id: "14",
    title: "GitHub Markup Reference",
    question: "Curious what formats GitHub renders?",
    description:
      "This repo outlines all supported markup syntaxes-handy for customizing your docs.",
    imageSrc: "/images/GitHub Markup Reference.jpg",
    altText: "GitHub Markup Reference image",
    link: "https://github.com/github/markup/blob/master/README.md",
  },
  {
    id: "15",
    title: "MikroORM + NestJS RealWorld Example App",
    question: "Want to learn how to structure a production-grade backend?",
    description:
      "This RealWorld example app shows how to build a modular, scalable API using NestJS, MikroORM, and PostgreSQL-a great full-stack reference for clean architecture in TypeScript.",
    imageSrc: "/images/NestJS RealWorld App.jpg",
    altText: "MikroORM + NestJS RealWorld Example App image",
    link: "https://github.com/mikro-orm/nestjs-realworld-example-app",
  },
  {
    id: "16",
    title: "System Design Primer",
    question: "Studying for tech interviews or building complex systems?",
    description:
      "This repo breaks down key system design concepts with practical examples and diagrams-one of the most popular resources for backend and architecture fundamentals.",
    imageSrc: "/images/System Design Primer.jpg",
    altText: "System Design Primer image",
    link: "https://github.com/donnemartin/system-design-primer?tab=readme-ov-file#system-design-topics-start-here",
  },
  {
    id: "17",
    title: "Awesome Design Patterns",
    question: "Looking to master software design patterns?",
    description:
      "This curated repo compiles examples from real codebases in multiple languages-great for understanding reusable solutions to common architectural problems.",
    imageSrc: "/images/Awesome Design Patterns.jpg",
    altText: "Awesome Design Patterns image",
    link: "https://github.com/DovAmir/awesome-design-patterns?tab=readme-ov-file",
  },
  {
    id: "18",
    title: "Background Remover",
    question: "Interested in applying computer vision to real problems?",
    description:
      "This project shows how to build an AI-powered background removal tool locally-a great hands-on way to learn about image segmentation and model inference.",
    imageSrc: "/images/Background Remover.jpg",
    altText: "Background Remover image",
    link: "https://github.com/nadermx/backgroundremover",
  },
];

export default function EducationalReposPage() {
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
