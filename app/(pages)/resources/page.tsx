import Image from "next/image";

export default function ResourcesPage() {
  return (
    <div className="py-30">
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          {/* Card */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <Image src="/images/ui.svg" width={30} height={30} alt="" />
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Frontend & UI/UX
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-neutral-400">
              Build beautiful UI and learn UI/UX faster with the right tools and
              inspirations.
            </p>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <Image
                  src="/images/backend.svg"
                  width={30}
                  height={30}
                  alt=""
                />
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Backend & API
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-neutral-400">
              Power your apps with robust backends, APIs, and server-side
              solutions.
            </p>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <Image
                  src="/images/database.svg"
                  width={30}
                  height={30}
                  alt=""
                />
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Database
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-neutral-400">
              Store, manage, and query data with ease using the best database
              resources.
            </p>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <Image
                  src="/images/algorithm.svg"
                  width={30}
                  height={30}
                  alt=""
                />
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Technical Skills
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-neutral-400">
              Sharpen your toolkit with practical skills, tips, and deep dives
              to Dsa and job preparation.
            </p>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <Image
                  src="/images/programming.svg"
                  width={30}
                  height={30}
                  alt=""
                />
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Learn Programming
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-neutral-400">
              Start coding from scratch or level up with curated learning paths
              and resources.
            </p>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <Image src="/images/repo.svg" width={30} height={30} alt="" />
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Educational Repos & Analytics
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-neutral-400">
              Explore real projects and insights to learn how developers build
              at scale.
            </p>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <Image src="/images/tools.svg" width={30} height={30} alt="" />
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Development Tools
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-neutral-400">
              Streamline your workflow with must-have tools, extensions, and
              utilities.
            </p>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <Image src="/images/ai.svg" width={30} height={30} alt="" />
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Ai & Automation
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-neutral-400">
              Boost productivity with AI tools, scripts, and smart automation
              hacks.
            </p>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <Image
                  src="/images/resources.svg"
                  width={30}
                  height={30}
                  alt=""
                />
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Developer Resources
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-neutral-400">
              From docs to communities — everything you need to grow as a
              developer.
            </p>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </div>
  );
}
