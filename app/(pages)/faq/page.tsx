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
      question: "Can I cancel at anytime?",
      answer:
        "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
    },
    {
      question: "My team has credits. How do we use them?",
      answer:
        "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.",
    },
    {
      question: "How does Preline’s pricing work?",
      answer:
        "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.",
    },
    {
      question: "How secure is Preline?",
      answer:
        "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
    },
    {
      question: "How do I get access to a theme I purchased?",
      answer:
        "If you lose the link for a theme you purchased, don’t panic! We’ve got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases.",
    },
    {
      question: "Upgrade License Type",
      answer:
        "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.",
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
