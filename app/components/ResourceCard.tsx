import Image from "next/image";
import Link from "next/link";

interface Resource {
  id: string;
  title: string;
  description: string;
  question: string;
  imageSrc: string; // Must start with "/" if it's a local image
  altText: string;
  link: string;
}

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-neutral-800">
      <div className="relative aspect-[16/9]">
        <Image
          src={
            resource.imageSrc.startsWith("/")
              ? resource.imageSrc
              : `/${resource.imageSrc}`
          } // fallback just in case
          alt={resource.altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
          {resource.title}
        </h2>
        <div className="text-gray-600 dark:text-neutral-300 space-y-2 leading-relaxed">
          <p className="font-medium">{resource.question}</p>
          <p>{resource.description}</p>
        </div>
        <div className="mt-6">
          <Link
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform hover:scale-105 duration-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-neutral-800"
            aria-label={`Visit ${resource.title} resource`}
          >
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
