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
    title: "ZenStack",
    question: "Want to simplify full-stack development?",
    description:
      "ZenStack builds on Prisma to handle access control, data validation, and API generation — great for teams shipping fast without writing boilerplate.",
    imageSrc: "/images/ZenStack.jpg",
    altText: "ZenStack image",
    link: "https://zenstack.dev/",
  },
  {
    id: "2",
    title: "Cloudflare R2",
    question: "Tired of egress fees from object storage?",
    description:
      "Cloudflare R2 gives you S3-compatible storage with zero egress costs — ideal for modern apps needing affordable, fast file storage.",
    imageSrc: "/images/Cloudflare R2.jpg",
    altText: "Cloudflare R2 image",
    link: "https://www.cloudflare.com/en-gb/developer-platform/products/r2/",
  },
  {
    id: "3",
    title: "Restate",
    question:
      "Need reliable background jobs and workflows across microservices?",
    description:
      "Restate simplifies durable execution with fast state handling — great for building resilient async systems without the glue mess.",
    imageSrc: "/images/Restate.jpg",
    altText: "Restate image",
    link: "https://restate.dev/",
  },
  {
    id: "4",
    title: "zrok",
    question: "Want to share local apps or services instantly — securely?",
    description:
      "zrok is an open-source reverse proxy that lets you expose local servers to the web — perfect for demos, testing, or peer collaboration.",
    imageSrc: "/images/zrok.jpg",
    altText: "zrok image",
    link: "https://zrok.io/",
  },
  {
    id: "5",
    title: "Better SSE",
    question: "Looking for a simple, flexible alternative to WebSockets?",
    description:
      "Better SSE provides a cleaner way to manage server-sent events in modern apps — ideal for one-way real-time updates.",
    imageSrc: "/images/Better SSE.jpg",
    altText: "Better SSE image",
    link: "https://matthewwid.github.io/better-sse/",
  },
  {
    id: "6",
    title: "Nitro",
    question:
      "Want to deploy full-stack JavaScript apps with maximum flexibility?",
    description:
      "Nitro powers Nuxt’s backend but works standalone too — deployable anywhere from Vercel to Node, Cloudflare, or Deno.",
    imageSrc: "/images/Nitro.jpg",
    altText: "Nitro image",
    link: "https://nitro.build/",
  },
  {
    id: "7",
    title: "Appwrite",
    question: "Need a secure, open-source Firebase alternative?",
    description:
      "Appwrite handles auth, storage, databases, and more out of the box — a solid choice for building full-stack apps with ease and control.",
    imageSrc: "/images/Appwrite.jpg",
    altText: "Appwrite image",
    link: "https://appwrite.io/",
  },
  {
    id: "8",
    title: "Soketi",
    question:
      "Want a blazing-fast WebSocket server that speaks Pusher's protocol?",
    description:
      "Soketi is built in Rust for real-time apps — ideal for scaling notifications, chats, and events without vendor lock-in.",
    imageSrc: "/images/Soketi.jpg",
    altText: "Soketi image",
    link: "https://soketi.app/",
  },
  {
    id: "9",
    title: "BullMQ",
    question: "Need robust background job queues with Redis?",
    description:
      "BullMQ gives you advanced job handling for Node.js — ideal for scheduling, retries, concurrency, and distributed task execution.",
    imageSrc: "/images/BullMQ.jpg",
    altText: "BullMQ image",
    link: "https://docs.bullmq.io/",
  },
  {
    id: "10",
    title: "Apidog",
    question: "Looking for an all-in-one API development platform?",
    description:
      "Apidog combines Postman-style testing, Swagger-style documentation, and mock server capabilities — great for full API lifecycle work.",
    imageSrc: "/images/Apidog.jpg",
    altText: "Apidog image",
    link: "https://apidog.com/",
  },
  {
    id: "11",
    title: "ApyHub",
    question: "Want plug-and-play APIs for everyday dev tasks?",
    description:
      "ApyHub offers simple APIs for things like QR codes, PDFs, IP info, and more — great for speeding up small backend features.",
    imageSrc: "/images/ApyHub.jpg",
    altText: "ApyHub image",
    link: "https://apyhub.com/",
  },
  {
    id: "12",
    title: "Zudoku",
    question: "Need a minimalist, local-first database for quick experiments?",
    description:
      "Zudoku is a fast, in-memory JSON database with a clean query API — great for prototyping, CLIs, or local-first apps.",
    imageSrc: "/images/Zudoku.jpg",
    altText: "Zudoku image",
    link: "https://zudoku.dev/",
  },
  {
    id: "13",
    title: "Scalar",
    question: "Want to document and manage your APIs with developer-first UX?",
    description:
      "Scalar helps you build clean, interactive API docs with Markdown + OpenAPI — perfect for teams that care about dev experience.",
    imageSrc: "/images/Scalar.jpg",
    altText: "Scalar image",
    link: "https://scalar.com/",
  },
  {
    id: "14",
    title: "Unkey",
    question: "Need a secure, rate-limited API key management solution?",
    description:
      "Unkey gives you instant API key issuance, validation, and analytics — perfect for SaaS APIs that need control without complexity.",
    imageSrc: "/images/Unkey.jpg",
    altText: "Unkey image",
    link: "https://www.unkey.com/",
  },
];

export default function BackendAPIPage() {
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
