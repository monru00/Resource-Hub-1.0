"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

// Add explicit type for children
interface PagesLayoutProps {
  children: ReactNode;
}

export default function PagesLayout({ children }: PagesLayoutProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  // Responsive: Track window width
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const toggleNav = () => setIsNavOpen((prev) => !prev);

  // Close nav on link click for mobile
  const handleNavLinkClick = () => {
    if (isMobile && isNavOpen) {
      toggleNav();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) setIsCartOpen(false);
      if (e.key === "Escape" && isNavOpen) setIsNavOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isCartOpen, isNavOpen]);

  // Use original size for buttons always (not full width on mobile)
  const NavButtons = () => (
    <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-2 w-full lg:w-auto">
      <button
        type="button"
        onClick={() => {
          toggleCart();
          handleNavLinkClick(); // Close nav on mobile
        }}
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white h-10 cursor-pointer"
        style={{ width: "auto" }}
      >
        Sign in
      </button>
      <button
        type="button"
        onClick={() => {
          toggleCart();
          handleNavLinkClick(); // Close nav on mobile
        }}
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none transition disabled:opacity-50 disabled:pointer-events-none h-9 cursor-pointer"
        style={{ width: "auto" }}
      >
        Bookmarks
      </button>
    </div>
  );

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
                <span className="mb-4 inline-flex justify-center items-center rounded-full size-20 border-4 border-green-50 bg-green-100 text-green-500 dark:bg-green-700 dark:border-green-600 dark:text-green-100">
                  <Image src="/images/soon.svg" alt="" width={40} height={40} />
                </span>
                <h3
                  id="cart-label"
                  className="mb-2 text-xl font-bold text-gray-800 dark:text-neutral-200"
                >
                  Soon !!
                </h3>
                <p className="text-gray-500 dark:text-neutral-500 text-center">
                  This feature is not available now <br />
                  will be available soon !!
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
            <Link href="/" className="pr-3">
              <Image src="/images/logo.svg" alt="" width={60} height={60} />
            </Link>
            <Link href="/" className="text-xl font-medium cursor-pointer">
              Resource Hub
            </Link>
            <div className="ms-1 sm:ms-2"></div>
          </div>

          {/* Collapse */}
          <div
            className={`
              ${
                isNavOpen && isMobile
                  ? "block absolute left-0 top-0 w-full bg-white dark:bg-neutral-900 z-[1000] pt-20 px-4 h-auto"
                  : isMobile
                  ? "hidden"
                  : "block static bg-transparent p-0 dark:bg-transparent"
              }
              overflow-y-auto transition-all duration-300 basis-full grow lg:block lg:static lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6
            `}
            style={
              isNavOpen && isMobile
                ? {
                    background: isMobile && !isNavOpen ? "#fff" : "",
                    minHeight: "100dvh",
                  }
                : {}
            }
          >
            {/* Mobile Close Icon */}
            {isMobile && isNavOpen && (
              <button
                type="button"
                className="absolute top-5 right-5 size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 z-[1001]"
                aria-label="Close navigation"
                onClick={toggleNav}
                style={{
                  top: "1.25rem",
                  right: "1rem",
                }}
              >
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
            )}
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
              <Link
                href="/"
                onClick={handleNavLinkClick}
                className={`inline-block text-lg font-medium ${
                  pathname === "/"
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-black max-lg:dark:text-gray-400 dark:text-white"
                } hover:text-blue-600 dark:hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-neutral-300`}
              >
                Home
              </Link>
              <Link
                href="/resources"
                onClick={handleNavLinkClick}
                className={`inline-block text-lg font-medium ${
                  pathname === "/resources"
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-black max-lg:dark:text-gray-400 dark:text-white"
                } hover:text-blue-600 dark:hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-neutral-300`}
              >
                Resources
              </Link>
              <Link
                href="/faq"
                onClick={handleNavLinkClick}
                className={`inline-block text-lg font-medium ${
                  pathname === "/faq"
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-black max-lg:dark:text-gray-400 dark:text-white"
                } hover:text-blue-600 dark:hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-neutral-300`}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                onClick={handleNavLinkClick}
                className={`inline-block text-lg font-medium ${
                  pathname === "/contact"
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-black max-lg:dark:text-gray-400 dark:text-white"
                } hover:text-blue-600 dark:hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-neutral-300`}
              >
                Contact
              </Link>

              {/* On mobile, show the nav buttons inside menu */}
              {isMobile && (
                <div className="mt-4 mb-2 flex flex-col gap-2 w-full">
                  <NavButtons />
                </div>
              )}
            </div>
          </div>
          {/* End Collapse */}

          {/* Button Group */}
          {/* On desktop, show the nav buttons to the right */}
          {!isMobile && (
            <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
              <NavButtons />
            </div>
          )}

          {/* Hamburger for mobile */}
          <div className="lg:hidden ms-auto">
            {!isNavOpen && (
              <button
                type="button"
                className="size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                aria-expanded={isNavOpen}
                aria-label="Toggle navigation"
                onClick={toggleNav}
                style={{
                  top: "1.25rem",
                  right: "1rem",
                  position: "absolute",
                }}
              >
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </nav>
      </header>
      {/* END HEADER */}

      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t border-t-gray-300 bg-blue-50">
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
              href="/"
              className="text-2xl font-semibold text-black dark:text-white ml-3"
            >
              Resource Hub
            </Link>
          </div>
          <div className="mt-3">
            <p className="text-gray-500 dark:text-neutral-500">
              Share what you know !!
            </p>
            <p className="text-gray-500 dark:text-neutral-500">
              © 2025 Resource Hub. All rights reserved.
            </p>
          </div>
          <div className="mt-3 space-x-2">
            <Link
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="https://x.com/monru00"
              target="_blank"
            >
              <Image
                src="/images/x.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0 size-5"
              />
            </Link>
            <Link
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="https://www.linkedin.com/in/mohammed-nesru-a16543309/"
              target="_blank"
            >
              <Image
                src="/images/linkedin.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0 size-5"
              />
            </Link>
            <Link
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="https://github.com/monru00"
              target="_blank"
            >
              <Image
                src="/images/github.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0 size-5"
              />
            </Link>
          </div>
        </div>
      </footer>
      {/* END FOOTER */}

      {/* Umami Analytics Script */}
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="73c152c3-dac4-4188-842d-814c64ff4b8b"
      />
    </div>
  );
}
