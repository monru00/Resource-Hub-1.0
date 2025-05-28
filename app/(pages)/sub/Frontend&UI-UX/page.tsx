import ResourceCard from "../../../components/ResourceCard";

interface Resource {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  link: string;
}

const resources: Resource[] = [
  {
    id: "1",
    title: "Figma",
    description:
      "A powerful, browser-based design tool for UI/UX design and prototyping. Join our Telegram for tips!",
    imageSrc: "/images/figma.jpg",
    altText: "Figma logo",
    link: "https://t.me/figma_community",
  },
  {
    id: "2",
    title: "UI Coach",
    description:
      "Daily UI challenges, color palettes, and font pairings to improve design. Join our Telegram!",
    imageSrc: "/images/ui-coach.jpg",
    altText: "UI Coach logo",
    link: "https://t.me/uicoach",
  },
  {
    id: "3",
    title: "Designercize",
    description:
      "Random UX design prompts to flex your problem-solving muscles. Join our Telegram!",
    imageSrc: "/images/designsize.jpg",
    altText: "Designercize logo",
    link: "https://t.me/designercize",
  },
];

export default function FrontendUIUXPage() {
  return (
    <div className="py-4">
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Frontend & UI/UX Resources
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
