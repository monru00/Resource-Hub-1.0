// app/pages/faq/page.jsx
"use client";

import { useState } from "react";

export default function FAQPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0); // First accordion open by default

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Resource Hub?",
      answer:
        "Resource Hub is a platform to easily find resources, including learning materials, AI tools, books, educational  repositories and much more. It’s designed to make your research and journey more efficient.",
    },
    {
      question: "How do I find resources?",
      answer:
        "Navigate through our Resources page to browse categories like AI tools, books, and repos. Use the navigation bar to explore, and stay tuned for our upcoming search feature to find specific resources quickly.",
    },
    {
      question: "How do I share you my feedback",
      answer:
        "we are working on this feature for now share your questions or feedbacks by Visiting our Contact page to send us a message, and we’ll get back to you as soon as possible.",
    },
    {
      question: "Is there more",
      answer:
        "absolutely this is only basic version 1.0 many many features are coming in next features ",
    },
    {
      question: "How can I contribute",
      answer:
        "we are working on it but for now submit your resources via the contact page ",
    },
  ];

  return (
    <div className="py-35">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Your questions, answered
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Answers to the most frequently asked questions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-colors ${
                  activeAccordion === index
                    ? "bg-gray-100 dark:bg-white/10"
                    : "bg-white dark:bg-neutral-800"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-x-3 text-lg font-semibold text-start text-gray-800 hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                  aria-controls={`faq-collapse-${index}`}
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={`faq-collapse-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    activeAccordion === index ? "max-h-96" : "max-h-0"
                  }`}
                  role="region"
                  aria-labelledby={`faq-heading-${index}`}
                >
                  <p className="mt-3 text-gray-800 dark:text-neutral-200">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
