import Image from "next/image";
import Link from "next/link";

export default function ResourcesPage() {
  const categories = [
    {
      href: "/frontend-ui-ux",
      title: "Frontend & UI/UX",
      description:
        "Build beautiful UI and learn UI/UX faster with the right tools and inspirations.",
      icon: "/images/ui.svg",
    },
    {
      href: "/backend-api",
      title: "Backend & API",
      description:
        "Power your apps with robust backends, APIs, and server-side solutions.",
      icon: "/images/backend.svg",
    },
    {
      href: "/database",
      title: "Database",
      description:
        "Store, manage, and query data with ease using the best database resources.",
      icon: "/images/database.svg",
    },
    {
      href: "/technical-skills",
      title: "Technical Skills",
      description:
        "Sharpen your toolkit with practical skills, tips, and deep dives to DSA and job preparation.",
      icon: "/images/algorithm.svg",
    },
    {
      href: "/learn-programming",
      title: "Learn Programming",
      description:
        "Start coding from scratch or level up with curated learning paths and resources.",
      icon: "/images/programming.svg",
    },
    {
      href: "/educational-repos",
      title: "Educational Repos & Analytics",
      description:
        "Explore real projects and insights to learn how developers build at scale.",
      icon: "/images/repo.svg",
    },
    {
      href: "/development-tools",
      title: "Development Tools",
      description:
        "Streamline your workflow with must-have tools, extensions, and utilities.",
      icon: "/images/tools.svg",
    },
    {
      href: "/ai-automation",
      title: "AI & Automation",
      description:
        "Boost productivity with AI tools, scripts, and smart automation hacks.",
      icon: "/images/ai.svg",
    },
    {
      href: "/developer-resources",
      title: "Developer Resources",
      description:
        "From docs to communities — everything you need to grow as a developer.",
      icon: "/images/resources.svg",
    },
  ];

  return (
    <div className="py-4">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10 my-20">
          {categories.map(({ href, title, description, icon }) => (
            <Link key={href} href={href} className="size-full">
              <div className="bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                    <Image
                      src={icon}
                      width={30}
                      height={30}
                      alt={`${title} icon`}
                    />
                  </div>
                  <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-neutral-400 mb-4">
                  {description}
                </p>
                <span className="inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400">
                  Visit Page
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
