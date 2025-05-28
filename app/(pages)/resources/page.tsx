// // import Image from "next/image";
// // import Link from "next/link";

// // // Define TypeScript interface for categories
// // interface Category {
// //   id: string;
// //   title: string;
// //   description: string;
// //   imageSrc: string;
// //   altText: string;
// //   slug: string;
// // }

// // // Sample category data
// // const categories: Category[] = [
// //   {
// //     id: "1",
// //     title: "Frontend & UI/UX",
// //     description:
// //       "Build beautiful UI and learn UI/UX faster with the right tools and inspirations.",
// //     imageSrc: "/images/ui.svg",
// //     altText: "Frontend and UI/UX icon",
// //     slug: "frontend-ui-ux",
// //   },
// //   {
// //     id: "2",
// //     title: "Backend & API",
// //     description:
// //       "Power your apps with robust backends, APIs, and server-side solutions.",
// //     imageSrc: "/images/backend.svg",
// //     altText: "Backend and API icon",
// //     slug: "backend-api",
// //   },
// //   {
// //     id: "3",
// //     title: "Database",
// //     description:
// //       "Store, manage, and query data with ease using the best database resources.",
// //     imageSrc: "/images/database.svg",
// //     altText: "Database icon",
// //     slug: "database",
// //   },
// //   {
// //     id: "4",
// //     title: "Technical Skills",
// //     description:
// //       "Sharpen your toolkit with practical skills, tips, and deep dives to DSA and job preparation.",
// //     imageSrc: "/images/algorithm.svg",
// //     altText: "Technical Skills icon",
// //     slug: "technical-skills",
// //   },
// //   {
// //     id: "5",
// //     title: "Learn Programming",
// //     description:
// //       "Start coding from scratch or level up with curated learning paths and resources.",
// //     imageSrc: "/images/programming.svg",
// //     altText: "Learn Programming icon",
// //     slug: "learn-programming",
// //   },
// //   {
// //     id: "6",
// //     title: "Educational Repos & Analytics",
// //     description:
// //       "Explore real projects and insights to learn how developers build at scale.",
// //     imageSrc: "/images/repo.svg",
// //     altText: "Educational Repos icon",
// //     slug: "educational-repos",
// //   },
// //   {
// //     id: "7",
// //     title: "Development Tools",
// //     description:
// //       "Streamline your workflow with must-have tools, extensions, and utilities.",
// //     imageSrc: "/images/tools.svg",
// //     altText: "Development Tools icon",
// //     slug: "development-tools",
// //   },
// //   {
// //     id: "8",
// //     title: "AI & Automation",
// //     description:
// //       "Boost productivity with AI tools, scripts, and smart automation hacks.",
// //     imageSrc: "/images/ai.svg",
// //     altText: "AI and Automation icon",
// //     slug: "ai-automation",
// //   },
// //   {
// //     id: "9",
// //     title: "Developer Resources",
// //     description:
// //       "From docs to communities — everything you need to grow as a developer.",
// //     imageSrc: "/images/resources.svg",
// //     altText: "Developer Resources icon",
// //     slug: "developer-resources",
// //   },
// // ];

// // export default function ResourcesPage() {
// //   return (
// //     <div className="py-30">
// //       {/* Icon Blocks */}
// //       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
// //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
// //           {categories.map((category) => (
// //             <Link
// //               key={category.id}
// //               href={`/resources/${category.slug}`}
// //               className="block"
// //             >
// //               <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
// //                 <div className="flex items-center gap-x-4 mb-3">
// //                   <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
// //                     <Image
// //                       src={category.imageSrc}
// //                       width={30}
// //                       height={30}
// //                       alt={category.altText}
// //                     />
// //                   </div>
// //                   <div className="shrink-0">
// //                     <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
// //                       {category.title}
// //                     </h3>
// //                   </div>
// //                 </div>
// //                 <p className="text-gray-600 dark:text-neutral-400">
// //                   {category.description}
// //                 </p>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //       {/* End Icon Blocks */}
// //     </div>
// //   );
// // }

// import Image from "next/image";
// import Link from "next/link";

// // Define TypeScript interface for categories
// interface Category {
//   id: string;
//   title: string;
//   description: string;
//   imageSrc: string;
//   altText: string;
//   slug: string;
// }

// // Sample category data
// const categories: Category[] = [
//   {
//     id: "1",
//     title: "Frontend & UI/UX",
//     description:
//       "Build beautiful UI and learn UI/UX faster with the right tools and inspirations.",
//     imageSrc: "/images/ui.svg",
//     altText: "Frontend and UI/UX icon",
//     slug: "frontend-ui-ux",
//   },
//   {
//     id: "2",
//     title: "Backend & API",
//     description:
//       "Power your apps with robust backends, APIs, and server-side solutions.",
//     imageSrc: "/images/backend.svg",
//     altText: "Backend and API icon",
//     slug: "backend-api",
//   },
//   {
//     id: "3",
//     title: "Database",
//     description:
//       "Store, manage, and query data with ease using the best database resources.",
//     imageSrc: "/images/database.svg",
//     altText: "Database icon",
//     slug: "database",
//   },
//   {
//     id: "4",
//     title: "Technical Skills",
//     description:
//       "Sharpen your toolkit with practical skills, tips, and deep dives to DSA and job preparation.",
//     imageSrc: "/images/algorithm.svg",
//     altText: "Technical Skills icon",
//     slug: "technical-skills",
//   },
//   {
//     id: "5",
//     title: "Learn Programming",
//     description:
//       "Start coding from scratch or level up with curated learning paths and resources.",
//     imageSrc: "/images/programming.svg",
//     altText: "Learn Programming icon",
//     slug: "learn-programming",
//   },
//   {
//     id: "6",
//     title: "Educational Repos & Analytics",
//     description:
//       "Explore real projects and insights to learn how developers build at scale.",
//     imageSrc: "/images/repo.svg",
//     altText: "Educational Repos icon",
//     slug: "educational-repos",
//   },
//   {
//     id: "7",
//     title: "Development Tools",
//     description:
//       "Streamline your workflow with must-have tools, extensions, and utilities.",
//     imageSrc: "/images/tools.svg",
//     altText: "Development Tools icon",
//     slug: "development-tools",
//   },
//   {
//     id: "8",
//     title: "AI & Automation",
//     description:
//       "Boost productivity with AI tools, scripts, and smart automation hacks.",
//     imageSrc: "/images/ai.svg",
//     altText: "AI and Automation icon",
//     slug: "ai-automation",
//   },
//   {
//     id: "9",
//     title: "Developer Resources",
//     description:
//       "From docs to communities — everything you need to grow as a developer.",
//     imageSrc: "/images/resources.svg",
//     altText: "Developer Resources icon",
//     slug: "developer-resources",
//   },
// ];

// export default function ResourcesPage() {
//   return (
//     <div className="py-4">
//       {/* Icon Blocks */}
//       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
//           {categories.map((category) => (
//             <Link
//               key={category.id}
//               href={`/sub/${category.slug}`}
//               className="block"
//             >
//               <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
//                 <div className="flex items-center gap-x-4 mb-3">
//                   <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
//                     <Image
//                       src={category.imageSrc}
//                       width={30}
//                       height={30}
//                       alt={category.altText}
//                     />
//                   </div>
//                   <div className="shrink-0">
//                     <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
//                       {category.title}
//                     </h3>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 dark:text-neutral-400">
//                   {category.description}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       {/* End Icon Blocks */}
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";

// Define TypeScript interface for categories
interface Category {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  slug: string;
}

// Sample category data
const categories: Category[] = [
  {
    id: "1",
    title: "Frontend & UI/UX",
    description:
      "Build beautiful UI and learn UI/UX faster with the right tools and inspirations.",
    imageSrc: "/images/ui.svg",
    altText: "Frontend and UI/UX icon",
    slug: "frontend-ui-ux",
  },
  {
    id: "2",
    title: "Backend & API",
    description:
      "Power your apps with robust backends, APIs, and server-side solutions.",
    imageSrc: "/images/backend.svg",
    altText: "Backend and API icon",
    slug: "backend-api",
  },
  {
    id: "3",
    title: "Database",
    description:
      "Store, manage, and query data with ease using the best database resources.",
    imageSrc: "/images/database.svg",
    altText: "Database icon",
    slug: "database",
  },
  {
    id: "4",
    title: "Technical Skills",
    description:
      "Sharpen your toolkit with practical skills, tips, and deep dives to DSA and job preparation.",
    imageSrc: "/images/algorithm.svg",
    altText: "Technical Skills icon",
    slug: "technical-skills",
  },
  {
    id: "5",
    title: "Learn Programming",
    description:
      "Start coding from scratch or level up with curated learning paths and resources.",
    imageSrc: "/images/programming.svg",
    altText: "Learn Programming icon",
    slug: "learn-programming",
  },
  {
    id: "6",
    title: "Educational Repos & Analytics",
    description:
      "Explore real projects and insights to learn how developers build at scale.",
    imageSrc: "/images/repo.svg",
    altText: "Educational Repos icon",
    slug: "educational-repos",
  },
  {
    id: "7",
    title: "Development Tools",
    description:
      "Streamline your workflow with must-have tools, extensions, and utilities.",
    imageSrc: "/images/tools.svg",
    altText: "Development Tools icon",
    slug: "development-tools",
  },
  {
    id: "8",
    title: "AI & Automation",
    description:
      "Boost productivity with AI tools, scripts, and smart automation hacks.",
    imageSrc: "/images/ai.svg",
    altText: "AI and Automation icon",
    slug: "ai-automation",
  },
  {
    id: "9",
    title: "Developer Resources",
    description:
      "From docs to communities — everything you need to grow as a developer.",
    imageSrc: "/images/resources.svg",
    altText: "Developer Resources icon",
    slug: "developer-resources",
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-4">
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/resources/sub/${category.slug}`}
              className="block"
            >
              <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                    <Image
                      src={category.imageSrc}
                      width={30}
                      height={30}
                      alt={category.altText}
                    />
                  </div>
                  <div className="shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-neutral-400">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* End Icon Blocks */}
    </div>
  );
}
