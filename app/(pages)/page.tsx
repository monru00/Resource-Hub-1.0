import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    // Hero
    <div className="relative overflow-hidden pt-35 pb-35">
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-linear-to-r from-violet-300/50 to-purple-100 blur-3xl w-100 h-175 rotate-[-60deg] transform -translate-x-40 dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-linear-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[1440px] h-200 rounded-fulls origin-top-left -rotate-12 -translate-x-60 dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>
      {/* End Gradients */}

      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            {/* Title */}
            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                Get the access what you want need
              </h1>
            </div>
            {/* End Title */}

            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-neutral-400">
                Preline UI is an open-source set of prebuilt UI components,
                ready-to-use examples and Figma design system based on the
                utility-first Tailwind CSS framework.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 gap-3 flex justify-center">
              <Link
                href="/resources"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Get started
                <Image
                  src="/images/greaterthan.svg"
                  alt=""
                  width={12}
                  height={12}
                />
              </Link>
              <Link
                href="/contact"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <Image
                  src="/images/feedback.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                Feed back
              </Link>
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
    </div>
    // End Hero
  );
}
