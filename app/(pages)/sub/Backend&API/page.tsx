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
    title: "Postman",
    description:
      "A popular tool for testing and building APIs. Join our Telegram for tips!",
    imageSrc: "/images/postman.jpg",
    altText: "Postman logo",
    link: "https://t.me/postman_community",
  },
  {
    id: "2",
    title: "REST API Guide",
    description: "Learn REST API design and best practices. Join our Telegram!",
    imageSrc: "/images/rest-api.jpg",
    altText: "REST API image",
    link: "https://t.me/restapi",
  },
];

export default function BackendAPIPage() {
  return (
    <div className="py-4">
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Backend & API Resources
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
