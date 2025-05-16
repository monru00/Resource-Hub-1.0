"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isCartOpen]);

  // Define nav links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Cart Modal */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-80 flex items-center justify-center bg-black/50 transition-opacity duration-500"
          role="dialog"
          aria-labelledby="cart-label"
          tabIndex={-1}
        >
          <div
            className={`mt-7 opacity-100 transition-all duration-500 sm:max-w-lg sm:w-full m-3 sm:mx-auto ${
              isCartOpen ? "modal-open" : "modal-closed"
            }`}
          >
            <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-900">
              <div className="absolute top-2 end-2">
                <button
                  type="button"
                  className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                  aria-label="Close"
                  onClick={toggleCart}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-4 sm:p-10 text-center overflow-y-auto">
                {/* Icon */}
                <span className="mb-4 inline-flex justify-center items-center rounded-full size-20 border-4 border-green-50 bg-green-100 text-green-500 dark:bg-green-700 dark:border-green-600 dark:text-green-100">
                  <Image
                    src="/images/soon.svg"
                    alt=""
                    width={40}
                    height={40}
                    className=""
                  />
                </span>
                {/* End Icon */}

                <h3
                  id="cart-label"
                  className="mb-2 text-xl font-bold text-gray-800 dark:text-neutral-200"
                >
                  Soon !!
                </h3>
                <p
                  className="text-gray-500 dark:text-neutral-500 text-center
"
                >
                  This feature is not available now <br />
                  will be avaliable soon !!
                </p>

                <div className="mt-6 flex justify-center gap-x-4">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-blue-500 text-white shadow-2xs hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-blue-400 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    onClick={toggleCart}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
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
            <button
              type="button"
              onClick={toggleCart}
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white h-10 cursor-pointer"
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none transition disabled:opacity-50 disabled:pointer-events-none h-9 cursor-pointer"
            >
              Bookmarks
            </button>

            <div className="lg:hidden">
              <button
                type="button"
                className="size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                aria-expanded={isNavOpen}
                aria-label="Toggle navigation"
                onClick={toggleNav}
              >
                <svg
                  className={`${
                    isNavOpen ? "hidden" : "block"
                  } shrink-0 size-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className={`${
                    isNavOpen ? "block" : "hidden"
                  } shrink-0 size-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          {/* End Button Group */}

          {/* Collapse */}
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6`}
            aria-labelledby="hs-navbar-hcail-collapse"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <div key={link.href}>
                    <Link
                      className={`inline-block ${
                        isActive
                          ? "text-blue-600 dark:text-blue-500"
                          : "text-black dark:text-white"
                      } hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:hover:text-neutral-300 dark:focus:text-neutral-300`}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
      {/* END HEADER */}
      <main className="flex-1">{children}</main>
      {/* footer */}
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t border-t-gray-300 bg-blue-50">
        {/* Grid */}
        <div className="text-center">
          <div className="flex justify-center items-center mb-1">
            <Image
              src="/images/logo.svg"
              alt="Resource Hub Logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
            <Link
              href="#"
              className="text-2xl font-semibold text-black dark:text-white ml-3"
            >
              Resource Hub
            </Link>
          </div>
          {/* End Col */}

          <div className="mt-3">
            <p className="text-gray-500 dark:text-neutral-500">
              Share what you know !!
            </p>
            <p className="text-gray-500 dark:text-neutral-500">
              © 2025 Resource Hub. All rights reserved.
            </p>
          </div>

          {/* Social Brands */}
          <div className="mt-3 space-x-2">
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="https://x.com/monru00"
              target="blank"
            >
              <Image
                src="/images/x.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0 size-5"
              />
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="https://www.linkedin.com/in/mohammed-nesru-a16543309/"
              target="blank"
            >
              <Image
                src="/images/linkedin.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0 size-5"
              />
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="https://github.com/monru00"
              target="blank"
            >
              <Image
                src="/images/github.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0 size-5"
              />
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
