// "use client";

// import { useState, FormEvent, ChangeEvent } from "react";

// interface FormData {
//   fullName: string;
//   email: string;
//   comment: string;
// }

// export default function ContactPage() {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     email: "",
//     comment: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     console.log("Form submitted:", formData); // Replace with API call
//     setFormData({ fullName: "", email: "", comment: "" });
//     setIsSubmitting(false);
//   };

//   return (
//     <div className="pt-20">
//       {/* Comment Form */}
//       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//         <div className="mx-auto max-w-2xl">
//           <div className="text-center">
//             <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
//               Share us your feedback here :) <br />
//               we really{" "}
//               <span className="relative inline-block">
//                 <span className="text-gray-500 dark:text-neutral-400">
//                   want
//                 </span>

//                 <span className="absolute left-0 right-0 top-1/2 h-1 bg-blue-300 rounded-sm -translate-y-1/2"></span>
//               </span>{" "}
//               need it
//             </h2>
//           </div>

//           {/* Card */}
//           <div className="mt-5 p-4 relative z-10 bg-white border border-gray-200 rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4 sm:mb-8">
//                 <label
//                   htmlFor="hs-feedback-post-comment-name-1"
//                   className="block mb-2 text-sm font-medium dark:text-white"
//                 >
//                   Full name
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   id="hs-feedback-post-comment-name-1"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
//                   placeholder="Full name"
//                   required
//                 />
//               </div>

//               <div className="mb-4 sm:mb-8">
//                 <label
//                   htmlFor="hs-feedback-post-comment-email-1"
//                   className="block mb-2 text-sm font-medium dark:text-white"
//                 >
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="hs-feedback-post-comment-email-1"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
//                   placeholder="Email address /  Telegram username"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="hs-feedback-post-comment-textarea-1"
//                   className="block mb-2 text-sm font-medium dark:text-white"
//                 >
//                   Feedback
//                 </label>
//                 <div className="mt-1">
//                   <textarea
//                     id="hs-feedback-post-comment-textarea-1"
//                     name="comment"
//                     rows={3}
//                     value={formData.comment}
//                     onChange={handleChange}
//                     className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
//                     placeholder="Drop your feedback here..."
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="mt-6 grid">
//                 <button
//                   type="submit"
//                   className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//           {/* End Card */}
//         </div>
//       </div>
//       {/* End Comment Form */}
//     </div>
//   );
// }

"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validateEmailOrTelegram = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telegramRegex = /^@[A-Za-z0-9_]{5,}$/;
    return emailRegex.test(value) || telegramRegex.test(value);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateEmailOrTelegram(formData.email)) {
      setError(
        "Please enter a valid email address or Telegram username (e.g., @username)."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          fullName: formData.fullName,
          email: formData.email,
          comment: formData.comment,
        },
      ]);

      if (error) {
        console.error("Supabase error details:", error);
        throw new Error(error.message);
      }

      setSuccess("Feedback submitted successfully!");
      setFormData({ fullName: "", email: "", comment: "" });
    } catch (err: unknown) {
      console.error("Submit error:", err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      if (errorMessage.includes("NetworkError")) {
        setError("Network error. Please check your internet connection.");
      } else if (
        errorMessage.includes("Unauthorized") ||
        errorMessage.includes("Invalid")
      ) {
        setError("Invalid Supabase configuration. Please check API keys.");
      } else if (errorMessage.includes('relation "contacts" does not exist')) {
        setError("Contacts table not found. Please create it in Supabase.");
      } else {
        setError("Failed to submit feedback: " + errorMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
              Share us your feedback here :) <br />
              we really{" "}
              <span className="relative inline-block">
                <span className="text-gray-500 dark:text-neutral-400">
                  want
                </span>
                <span className="absolute left-0 right-0 top-1/2 h-1 bg-blue-300 rounded-sm -translate-y-1/2"></span>
              </span>{" "}
              need it
            </h2>
          </div>
          {success && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg flex justify-between items-center">
              <span>{success}</span>
              <button
                onClick={() => setSuccess(null)}
                className="text-green-800 hover:text-green-900"
                aria-label="Close success message"
              >
                <Image
                  src="/images/greaterthan.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="rotate-90"
                />
              </button>
            </div>
          )}
          {error && (
            <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg flex justify-between items-center">
              <span>{error}</span>
              <button
                onClick={() => setError(null)}
                className="text-red-800 hover:text-red-900"
                aria-label="Close error message"
              >
                <Image
                  src="/images/greaterthan.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="rotate-90"
                />
              </button>
            </div>
          )}
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
                  Email or Telegram
                </label>
                <input
                  type="text"
                  name="email"
                  id="hs-feedback-post-comment-email-1"
                  value={formData.email}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Email or Telegram (e.g., @username)"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="hs-feedback-post-comment-textarea-1"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Feedback
                </label>
                <div className="mt-1">
                  <textarea
                    id="hs-feedback-post-comment-textarea-1"
                    name="comment"
                    rows={3}
                    value={formData.comment}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Drop your feedback here..."
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
        </div>
      </div>
    </div>
  );
}
