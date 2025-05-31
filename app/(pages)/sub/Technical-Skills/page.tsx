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
    title: "VisuAlgo",
    question: "Struggling to grasp data structures and algorithms?",
    description:
      "VisuAlgo brings them to life with clear, animated visuals — perfect for learners who want to see how things work step by step.",
    imageSrc: "/images/VisuAlgo.jpg",
    altText: "VisuAlgo image",
    link: "https://visualgo.net/en",
  },
  {
    id: "2",
    title: "Algorithms and Data Structures Cheat Sheet",
    question: "Brushing up on algorithms and data structures?",
    description:
      "This cheat sheet offers concise, practical explanations and visuals — perfect for quick reviews, interviews, or deepening your core CS understanding.",
    imageSrc: "/images/Algorithms and Data Structures Cheat Sheet.jpg",
    altText: "Algorithms and Data Structures Cheat Sheet image",
    link: "https://github.com/tajpouria/algorithms-and-data-structures-cheat-sheet",
  },
  {
    id: "3",
    title: "Component Party",
    question: "Curious how different frontend frameworks handle components?",
    description:
      "Component Party lets you compare syntax across React, Vue, Svelte, and more — great for learning or picking your next stack.",
    imageSrc: "/images/Component Party.jpg",
    altText: "Component Party image",
    link: "https://component-party.dev/",
  },
  {
    id: "4",
    title: "Pramp",
    question: "Looking to level up your interview game?",
    description:
      "Pramp offers free peer-to-peer technical interviews so you can practice coding questions and improve your communication under pressure.",
    imageSrc: "/images/Pramp.jpg",
    altText: "Pramp image",
    link: "https://www.pramp.com/#/",
  },
  {
    id: "5",
    title: "GreatFrontEnd",
    question: "Want real-world frontend interview prep?",
    description:
      "GreatFrontEnd guides you through design-to-code tasks, system design, and UI logic challenges — exactly what top companies test for.",
    imageSrc: "/images/GreatFrontEnd.jpg",
    altText: "GreatFrontEnd image",
    link: "https://www.greatfrontend.com/",
  },
  {
    id: "6",
    title: "Frontend Interview Handbook",
    question: "Not sure what to expect in frontend interviews? ",
    description:
      "This handbook breaks down everything from coding questions to system design and soft skills — curated by engineers who've been through it.",
    imageSrc: "/images/Frontend Interview Handbook.jpg",
    altText: "Frontend Interview Handbook image",
    link: "https://www.frontendinterviewhandbook.com/",
  },
  {
    id: "7",
    title: "LockedIn",
    question: "Tired of distractions killing your flow?",
    description:
      "LockedIn uses AI to block interruptions and help you stay laser-focused while you code or study.",
    imageSrc: "/images/LockedIn.jpg",
    altText: "LockedIn image",
    link: "https://www.lockedinai.com/",
  },
  {
    id: "8",
    title: "Teal",
    question: "Job hunting?",
    description:
      "Teal helps you organize applications, track progress, and tailor your resume — all in one smart workspace built for job seekers.",
    imageSrc: "/images/Teal.jpg",
    altText: "Teal image",
    link: "https://www.tealhq.com/",
  },
  {
    id: "9",
    title: "Resume.lol",
    question: "Want a clean, developer-friendly resume fast?",
    description:
      "Resume.lol turns your GitHub profile into a beautifully designed resume you can share anywhere.",
    imageSrc: "/images/Resume-lol.jpg",
    altText: "Resume.lol image",
    link: "https://www.resume.lol/",
  },
];

export default function ThechnicalSkillsPage() {
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
