import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import ResourceCard from "../../components/ResourceCard";

interface Resource {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  link: string;
}

interface CategoryPageProps {
  params: { category: string };
}

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://qmfjffrnphhvkhducolj.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtZmpmZnJucGhodmtoZHVjb2xqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNzUxMzAsImV4cCI6MjA2MzY1MTEzMH0.B9VkyCXBYgavTz6NKWygt4-BG3OwKg_ZJNUtUBjap3o"
);

export default async function CategoryPage({ params }: CategoryPageProps) {
  // Fetch resources from Supabase
  const { data: resources, error } = await supabase
    .from("resources")
    .select("id, title, description, imageSrc, altText, link")
    .eq("category", params.category);

  if (error || !resources || resources.length === 0) {
    notFound();
  }

  return (
    <div className="py-4">
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-4 mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          {params.category
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
          Resources
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          {resources.map((resource: Resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
