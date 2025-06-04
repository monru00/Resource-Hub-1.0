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
    title: "Supabase",
    question: "Want a backend that just works — with a Postgres core?",
    description:
      "Supabase gives you authentication, real-time, storage, and edge functions built on open standards — ideal for full-stack projects without backend hassle.",
    imageSrc: "/images/Supabase.jpg",
    altText: "Supabase image",
    link: "https://supabase.com/",
  },
  {
    id: "2",
    title: "MongoDB Atlas",
    question: "Need a flexible, scalable NoSQL database in the cloud?",
    description:
      "MongoDB Atlas handles performance, backups, and scaling for you — perfect for teams building document-based apps at any size",
    imageSrc: "/images/MongoDB Atlas.jpg",
    altText: "MongoDB Atlas image",
    link: "https://www.mongodb.com/products/platform/atlas-database",
  },
  {
    id: "3",
    title: "Neon",
    question:
      "Want serverless Postgres with branching, autoscaling, and zero downtime? ",
    description:
      "Neon reimagines Postgres for the cloud — perfect for modern developers who want to build fast, test safely, and scale effortlessly.",
    imageSrc: "/images/Neon.jpg",
    altText: "Neon image",
    link: "https://neon.com/",
  },
  {
    id: "4",
    title: "Firebase",
    question: "Want to build apps fast with a powerful backend-as-a-service?",
    description:
      "Firebase covers auth, database, storage, analytics, and hosting — great for mobile and web developers who want to ship fast.",
    imageSrc: "/images/Firebase.jpg",
    altText: "Firebase",
    link: "https://firebase.google.com/",
  },
  {
    id: "5",
    title: "Instagres",
    question: "Looking to manage Postgres without the headaches?",
    description:
      "Instagres offers serverless PostgreSQL with autoscaling, instant branching, and deep observability — perfect for startups and solo devs.",
    imageSrc: "/images/Instagres.jpg",
    altText: "Instagres",
    link: "https://www.instagres.com/",
  },
  {
    id: "6",
    title: "Xata",
    question:
      "Need a database that feels like a spreadsheet, with the power of SQL?",
    description:
      "Xata blends search, analytics, and branching — making it perfect for product teams who want fast workflows and clean APIs.",
    imageSrc: "/images/Xata.jpg",
    altText: "Xata image",
    link: "https://xata.io/",
  },
  {
    id: "7",
    title: "Azimutt",
    question: "Want to visualize and explore your database schema instantly?",
    description:
      "Azimutt lets you map and query database structures interactively — ideal for understanding complex relationships or planning migrations.",
    imageSrc: "/images/Azimutt.jpg",
    altText: "Azimutt image",
    link: "https://azimutt.app/",
  },
  {
    id: "8",
    title: "Neurelo",
    question: "Tired of writing boilerplate for backend APIs?",
    description:
      "Neurelo generates REST and GraphQL endpoints directly from your data models — perfect for teams building data-heavy apps at speed.",
    imageSrc: "/images/Neurelo.jpg",
    altText: "Neurelo",
    link: "https://www.neurelo.com/",
  },
  {
    id: "9",
    title: "DBeaver",
    question: "Need a powerful, universal database GUI?",
    description:
      "DBeaver supports nearly every DB engine with advanced tools — great for developers, analysts, and DBAs who need control and clarity.",
    imageSrc: "/images/DBeaver.jpg",
    altText: "DBeaver image",
    link: "https://dbeaver.io/",
  },
  {
    id: "10",
    title: "Beekeeper Studio",
    question: "Looking for a slick, open-source SQL editor?",
    description:
      "Beekeeper Studio makes querying, managing, and debugging databases smooth — perfect for developers who want a lightweight, cross-platform alternative.",
    imageSrc: "/images/Beekeeper Studio.jpg",
    altText: "Beekeeper Studio image",
    link: "https://www.beekeeperstudio.io/",
  },
  {
    id: "11",
    title: "Metabase",
    question: "Want team-friendly dashboards without writing SQL?",
    description:
      "Metabase helps you turn raw data into visual answers — ideal for startups and teams who want fast insights from their databases.",
    imageSrc: "/images/Metabase.jpg",
    altText: "Metabase image",
    link: "https://www.metabase.com/",
  },
  {
    id: "12",
    title: "DrawDB",
    question: "Need to sketch and export database schemas quickly?",
    description:
      "DrawDB is a visual schema designer built for speed — great for modeling relational databases and generating SQL instantly.",
    imageSrc: "/images/DrawDB.jpg",
    altText: "DrawDB image",
    link: "https://www.drawdb.app/",
  },
  {
    id: "13",
    title: "Qdrant",
    question: "Working with vector embeddings and similarity search?",
    description:
      "Qdrant is a high-performance vector database built for AI use cases — ideal for powering semantic search, recommendation, or LLM apps.",
    imageSrc: "/images/Qdrant.jpg",
    altText: "Qdrant image",
    link: "https://qdrant.tech/",
  },
  {
    id: "14",
    title: "Chroma",
    question: "Need a lightweight vector store for your LLM projects?",
    description:
      "Chroma offers simple APIs and local-first storage — perfect for rapid prototyping or embedding-based search without extra ops.",
    imageSrc: "/images/Chroma.jpg",
    altText: "Chroma image",
    link: "https://www.trychroma.com/",
  },
  {
    id: "15",
    title: "ChartDB",
    question: "Want to track metrics in a dev-friendly way?",
    description:
      "ChartDB turns SQL queries into shareable charts and dashboards — great for engineers who prefer querying over drag-and-drop BI tools.",
    imageSrc: "/images/ChartDB.jpg",
    altText: "ChartDB image",
    link: "https://chartdb.io/",
  },
  {
    id: "16",
    title: "Tembo",
    question: "Looking for a Postgres that scales with your team’s data needs?",
    description:
      "Tembo brings observability, AI integrations, and Postgres extensions together — ideal for teams building analytics-heavy or AI-native apps.",
    imageSrc: "/images/Tembo.jpg",
    altText: "Tembo image",
    link: "https://www.tembo.io/",
  },
  {
    id: "17",
    title: "MotherDuck",
    question: "Want DuckDB’s speed with cloud-native power?",
    description:
      "MotherDuck lets you query big data like it's local — great for modern data workflows that need performance, simplicity, and portability.",
    imageSrc: "/images/MotherDuck.jpg",
    altText: "MotherDuck image",
    link: "https://motherduck.com/",
  },
  {
    id: "18",
    title: "Vercel",
    question: "Want instant deployment and edge performance for your frontend?",
    description:
      "Vercel makes it seamless to deploy Next.js and modern web apps — perfect for teams who value speed, simplicity, and scalability.",
    imageSrc: "/images/Vercel.jpg",
    altText: "Vercel image",
    link: "https://vercel.com/",
  },
  {
    id: "19",
    title: "Netlify",
    question: "Need to deploy static sites and full-stack apps effortlessly?",
    description:
      "Netlify handles builds, functions, and hosting with powerful CI/CD — great for frontend devs shipping fast and often.",
    imageSrc: "/images/Netlify.jpg",
    altText: "Netlify image",
    link: "https://www.netlify.com/",
  },
  {
    id: "20",
    title: "Coolify",
    question: "Looking for Heroku-style simplicity with self-hosted control?",
    description:
      "Coolify lets you spin up apps, databases, and services in one dashboard — ideal for devs who want the cloud without vendor lock-in.",
    imageSrc: "/images/Coolify.jpg",
    altText: "Coolify image",
    link: "https://coolify.io/",
  },
  {
    id: "21",
    title: "Koyeb",
    question:
      "Want to deploy globally with serverless containers and zero config? ",
    description:
      "Koyeb gives you high-performance deployment across regions — perfect for apps that need fast, reliable backend compute.",
    imageSrc: "/images/Koyeb.jpg",
    altText: "Koyeb image",
    link: "https://www.koyeb.com/",
  },
  {
    id: "22",
    title: "Serverion",
    question:
      "Need reliable cloud, VPS, or dedicated hosting with full control?",
    description:
      "Serverion offers powerful, customizable hosting solutions — perfect for developers, agencies, and businesses that need robust infrastructure with global reach.",
    imageSrc: "/images/Serverion.jpg",
    altText: "Serverion image",
    link: "https://www.serverion.com/nginx-config/",
  },
  {
    id: "23",
    title: "Elest.io",
    question: "Need to run open-source stacks with managed convenience?",
    description:
      "Elest.io lets you deploy full app environments in minutes — great for teams who want dev freedom and enterprise-grade reliability.",
    imageSrc: "/images/Elest.io.jpg",
    altText: "Elest.io image",
    link: "https://elest.io/",
  },
  {
    id: "24",
    title: "Zeabur",
    question: "Want one-click deployment with smart service discovery?",
    description:
      "Zeabur automates your app’s runtime setup — perfect for monorepos, microservices, and side projects that need frictionless hosting.",
    imageSrc: "/images/Zeabur.jpg",
    altText: "Zeabur image",
    link: "https://zeabur.com/",
  },
  {
    id: "25",
    title: "Nhost",
    question:
      "Looking for a full-stack backend like Firebase, but with Postgres?",
    description:
      "Nhost combines auth, database, GraphQL, and storage — ideal for Jamstack and full-stack developers building apps fast with open standards.",
    imageSrc: "/images/Nhost.jpg",
    altText: "Nhost image",
    link: "https://nhost.io/pricing",
  },
  {
    id: "26",
    title: "Genezio",
    question: "Want to deploy TypeScript backends without managing servers?",
    description:
      "Genezio lets you define cloud functions and deploy instantly — great for devs who want scalable logic without the DevOps overhead.",
    imageSrc: "/images/Genezio.jpg",
    altText: "Genezio",
    link: "https://genezio.com/",
  },
  {
    id: "27",
    title: "Restack",
    question:
      "Need to run open-source dev tools in your own cloud, effortlessly?",
    description:
      "Restack offers one-click deployment and scaling for popular stacks — perfect for teams who want production-ready infra with zero setup pain.",
    imageSrc: "/images/Restack.jpg",
    altText: "Restack image",
    link: "https://www.restack.io/",
  },
  {
    id: "28",
    title: "PocketHost",
    question: "Want to host multiplayer or game-related backends with ease?",
    description:
      "PocketHost gives you fast server hosting with real-time capabilities — ideal for game devs and real-time apps needing plug-and-play backend power.",
    imageSrc: "/images/PocketHost.jpg",
    altText: " image",
    link: "https://pockethost.io/",
  },
  {
    id: "29",
    title: "Ethio Telecom Hosting",
    question: "Need local hosting within Ethiopia’s network?",
    description:
      "Ethio Telecom provides domain registration, shared hosting, and cloud services — suitable for individuals and businesses targeting local audiences.",
    imageSrc: "/images/Ethio Telecom Hosting.jpg",
    altText: "Ethio Telecom Hosting image",
    link: "https://myportal.ethiotelecom.et/cart.php?currency=1",
  },
  {
    id: "30",
    title: "Awesome Self-Hosted",
    question:
      "Looking to run your own tools instead of relying on third-party services?",
    description:
      "Awesome Self-Hosted is a curated list of open-source software you can host yourself — perfect for developers, makers, and privacy-first teams who want full control over their stack.",
    imageSrc: "/images/Awesome Self-Hosted.jpg",
    altText: "Awesome Self-Hosted image",
    link: "https://awesome-selfhosted.net/",
  },
];

export default function DatabasePage() {
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
