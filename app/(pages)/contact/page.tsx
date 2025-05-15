"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  comment: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submitted:", formData); // Replace with API call
    setFormData({ fullName: "", email: "", comment: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="pt-20">
      {/* Comment Form */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
              Post a comment
            </h2>
          </div>

          {/* Card */}
          <div className="mt-5 p-4 relative z-10 bg-white border border-gray-200 rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="hs-feedback-post-comment-name-1"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="hs-feedback-post-comment-name-1"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Full name"
                  required
                />
              </div>

              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="hs-feedback-post-comment-email-1"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="hs-feedback-post-comment-email-1"
                  value={formData.email}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Email address"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="hs-feedback-post-comment-textarea-1"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Comment
                </label>
                <div className="mt-1">
                  <textarea
                    id="hs-feedback-post-comment-textarea-1"
                    name="comment"
                    rows={3}
                    value={formData.comment}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Leave your comment here..."
                    required
                  />
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Comment Form */}
    </div>
  );
}
