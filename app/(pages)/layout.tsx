import Image from "next/image";
import Link from "next/link";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* HEADER  */}
      <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full">
        <nav className="w-full h-20 flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto fixed z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm">
          <div className="lg:col-span-3 flex items-center">
            {/* Logo */}
            <Link href="/" className="pr-3">
              <Image src="/images/logo.svg" alt="" width={60} height={60} />
            </Link>
            <Link href="/" className="text-xl font-medium cursor-pointer">
              Resource Hub
            </Link>
            {/* End Logo */}

            <div className="ms-1 sm:ms-2"></div>
          </div>

          {/* Button Group */}
          <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
            <Link href="/">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white h-10 cursor-pointer"
              >
                Sign in
              </button>
            </Link>
            <Link href="/">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden  transition disabled:opacity-50 disabled:pointer-events-none h-9 cursor-pointer"
              >
                Bootmarks
              </button>
            </Link>

            <div className="lg:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-navbar-hcail-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-hcail"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-hcail"
              >
                <Image
                  src="/images/menu.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="hs-collapse-open:hidden shrink-0 size-4"
                />
                <Image
                  src="images/close.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                />
              </button>
            </div>
          </div>
          {/* End Button Group */}

          {/* Collapse */}
          <div
            id="hs-navbar-hcail"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
            aria-labelledby="hs-navbar-hcail-collapse"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
              <div>
                <Link
                  className="inline-block text-black  hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="/"
                  aria-current="page"
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block text-black hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="/resources"
                >
                  Resources
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block text-black hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="faq"
                >
                  FAQ
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block text-black hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
      {/* END HEADER */}
      <main className="flex-1">{children}</main>
      {/* footer */}
      <footer
        className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t border-t-gray-300 bg-blue-50
"
      >
        {/* Grid */}
        <div className="text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-black dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
          </div>
          {/* End Col */}

          <div className="mt-3">
            <p className="text-gray-500 dark:text-neutral-500">
              We're part of the{" "}
              <a
                className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                href="#"
              >
                Htmlstream
              </a>{" "}
              family.
            </p>
            <p className="text-gray-500 dark:text-neutral-500">
              © 2025 Preline Labs.
            </p>
          </div>

          {/* Social Brands */}
          <div className="mt-3 space-x-2">
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="#"
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="#"
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="#"
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="#"
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
              </svg>
            </a>
          </div>
          {/* End Social Brands */}
        </div>
        {/* End Grid */}
      </footer>
      {/* END FOOTER */}
    </div>
  );
}
