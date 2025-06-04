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
    title: "MDN Web Docs",
    question: "Need a go-to reference for web standards and best practices?",
    description:
      "MDN offers in-depth documentation on HTML, CSS, JavaScript, and more — essential for both beginners and experienced developers building for the web.",
    imageSrc: "/images/MDN Web Docs.jpg",
    altText: "MDN Web Docs image",
    link: "https://developer.mozilla.org/en-US/",
  },
  {
    id: "2",
    title: "Internet Fundamentals",
    question: "Want a visual, intuitive explanation of how the internet works?",
    description:
      "Internet Fundamentals is a free, interactive guide that walks you through core networking concepts — like DNS, HTTP, TLS, and routing — using animations and real-world metaphors. Perfect for devs who want to build stronger mental models beyond the basics.",
    imageSrc: "/images/Internet Fundamentals.jpg",
    altText: "Internet Fundamentals image",
    link: "https://internetfundamentals.com/",
  },
  {
    id: "3",
    title: "Front-End Handbook",
    question: "Need a current roadmap for frontend development?",
    description:
      "This guide lays out essential skills, tools, and trends — great for planning your learning, tracking progress, or prepping for job roles.",
    imageSrc: "/images/Front-End Handbook.jpg",
    altText: "Front-End Handbook image",
    link: "https://frontendmasters.com/guides/front-end-handbook/2024/",
  },
  {
    id: "4",
    title: "Frontend Mentor Challenges",
    question:
      "Want to sharpen your frontend skills with real-world UI challenges?",
    description:
      "Frontend Mentor provides professional-grade mockups and briefs — ideal for hands-on practice in HTML, CSS, and JavaScript.",
    imageSrc: "/images/Frontend Mentor Challenges.jpg",
    altText: "Frontend Mentor Challenges image",
    link: "https://www.frontendmentor.io/challenges",
  },
  {
    id: "5",
    title: "Coding Challenges FYI",
    question:
      "Craving a mental workout with small, focused programming problems?",
    description:
      "This collection is great for improving logic, syntax fluency, and problem-solving — one bite-sized challenge at a time.",
    imageSrc: "/images/Coding Challenges FYI.jpg",
    altText: "Coding Challenges FYI image",
    link: "https://codingchallenges.fyi/",
  },
  {
    id: "6",
    title: "Full Stack Open",
    question: "Looking to build full-stack web apps with modern tools?",
    description:
      "Full Stack Open dives deep into React, Node.js, GraphQL, TypeScript, and more — perfect for devs ready to level up with real-world tech.",
    imageSrc: "/images/Full Stack Open.jpg",
    altText: "Full Stack Open image",
    link: "https://fullstackopen.com/en/",
  },
  {
    id: "7",
    title: "Codementor Projects",
    question: "Looking to build full-stack web apps with modern tools?",
    description:
      "Full Stack Open dives deep into React, Node.js, GraphQL, TypeScript, and more — perfect for devs ready to level up with real-world tech.",
    imageSrc: "/images/Codementor Projects.jpg",
    altText: "Codementor Projects image",
    link: "https://www.codementor.io/projects",
  },
  {
    id: "8",
    title: "DevChallenges Learn",
    question: "Want a structured path to grow through hands-on projects?",
    description:
      "DevChallenges combines tutorials with real UI tasks — great for learners turning theory into practical frontend and full-stack experience.",
    imageSrc: "/images/DevChallenges Learn.jpg",
    altText: "DevChallenges Learn image",
    link: "https://devchallenges.io/learn",
  },
  {
    id: "9",
    title: "30 Days of JavaScript",
    question: "Looking to master JavaScript in digestible daily lessons?",
    description:
      "30 Days of JavaScript walks you through everything from basics to DOM manipulation — excellent for solidifying your foundation.",
    imageSrc: "/images/30 Days of JavaScript.jpg",
    altText: "30 Days of JavaScript image",
    link: "https://30dayjavascript.js.org/01-day/",
  },
  {
    id: "10",
    title: "Exercism",
    question: "Want to practice programming in your language of choice?",
    description:
      "Exercism offers mentor-reviewed exercises across 60+ languages — perfect for sharpening syntax and deepening your understanding.",
    imageSrc: "/images/Exercism.jpg",
    altText: "Exercism image",
    link: "https://exercism.org/tracks",
  },
  {
    id: "11",
    title: "NodeSchool",
    question: "Want to learn Node.js through interactive, offline lessons?",
    description:
      "NodeSchool delivers hands-on workshops covering JavaScript, async patterns, and backend fundamentals — great for practical learners.",
    imageSrc: "/images/NodeSchool.jpg",
    altText: "NodeSchool image",
    link: "https://nodeschool.io/",
  },
  {
    id: "12",
    title: "Codedex",
    question:
      "Learning programming through quests and interactive storytelling?",
    description:
      "Codedex teaches web and computer science concepts in a gamified style — fun, engaging, and beginner-friendly.",
    imageSrc: "/images/Codedex.jpg",
    altText: "Codedex image",
    link: "https://www.codedex.io/",
  },
  {
    id: "13",
    title: "JavaScript.info",
    question:
      "Need a complete deep-dive into JavaScript, from fundamentals to advanced?",
    description:
      "This site breaks down JS concepts with clarity and depth — perfect for self-taught devs and those refining their frontend mastery.",
    imageSrc: "/images/JavaScript.info.jpg",
    altText: "JavaScript.info image",
    link: "https://javascript.info/",
  },
  {
    id: "14",
    title: "Cognitive Class Courses",
    question:
      "Looking for free, high-quality courses on data science, AI, and cloud?",
    description:
      "Cognitive Class delivers IBM-backed content for developers and data professionals — great for career growth and certifications.",
    imageSrc: "images/Cognitive Class Courses.jpg",
    altText: "Cognitive Class Courses image",
    link: "https://cognitiveclass.ai/courses",
  },
  {
    id: "15",
    title: "100xDevs Projects",
    question: "Want real-world project ideas to build your portfolio?",
    description:
      "100xDevs offers curated challenges from a developer-led community — excellent for practicing full-stack development with purpose.",
    imageSrc: "/images/100xDevs Projects.jpg",
    altText: "100xDevs Projects image",
    link: "https://projects.100xdevs.com/",
  },
  {
    id: "16",
    title: "Hyperskill JavaScript Course",
    question: "Learning JavaScript through project-based, interactive lessons?",
    description:
      "Hyperskill blends small exercises with larger apps — ideal for building practical skills while reinforcing fundamentals.",
    imageSrc: "/images/Hyperskill JavaScript Course.jpg",
    altText: "Hyperskill JavaScript Course image",
    link: "https://hyperskill.org/courses/37",
  },
  {
    id: "17",
    title: "CodeSignal",
    question: "Preparing for technical interviews or competitive assessments?",
    description:
      "CodeSignal offers timed, real-world coding tasks used by top tech companies — great for measuring and improving your readiness.",
    imageSrc: "/images/CodeSignal.jpg",
    altText: "CodeSignal image",
    link: "https://codesignal.com/",
  },
  {
    id: "18",
    title: "MOOC.fi",
    question: "Looking for high-quality, university-level programming courses?",
    description:
      "MOOC.fi offers free CS and web development content from the University of Helsinki — great for foundational and career-ready learning.",
    imageSrc: "/images/MOOC.fi.jpg",
    altText: "MOOC.fi image",
    link: "https://www.mooc.fi/en/",
  },
  {
    id: "19",
    title: "DevOps with Docker",
    question: "Want to understand containerization and automation with Docker?",
    description:
      "This course teaches you DevOps basics and real-world practices — ideal for developers building reliable, scalable apps.",
    imageSrc: "/images/DevOps with Docker.jpg",
    altText: "DevOps with Docker image",
    link: "https://courses.mooc.fi/org/uh-cs/courses/devops-with-docker",
  },
  {
    id: "20",
    title: "DevOps with Kubernetes",
    question: "Ready to take your DevOps skills to orchestration-level?",
    description:
      "Learn how to deploy, manage, and scale applications using Kubernetes — perfect for backend or full-stack devs entering cloud-native workflows.",
    imageSrc: "/images/DevOps with Kubernetes.jpg",
    altText: "DevOps with Kubernetes image",
    link: "https://devopswithkubernetes.com/",
  },
  {
    id: "21",
    title: "DevOps Games",
    question:
      "Want to learn DevOps through interactive puzzles and simulations?",
    description:
      "DevOps Games makes concepts like CI/CD and monitoring fun and engaging — great for visual learners and hands-on practice.",
    imageSrc: "/images/DevOps Games.jpg",
    altText: "DevOps Games image",
    link: "https://devops.games/",
  },
];

export default function LearnProgrammingPage() {
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
