'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  contactHref,
  primaryNavItems,
} from "@/app/components/site/site-data";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-[var(--color-line)] bg-[rgba(255,255,255,0.92)] px-4 py-4 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Code Labs home">
          <Image
            className="h-9 w-auto"
            src="/assets/logo/codelabs.svg"
            width={640}
            height={640}
            priority
            alt="Code Labs Logo"
          />
        </Link>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-900)] shadow-[0_12px_24px_-18px_rgba(0,0,0,0.18)]"
        >
          <Image
            src="/assets/icons/hamburger.svg"
            alt=""
            width={18}
            height={18}
            priority
            className="h-5 w-5"
          />
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="mt-4 rounded-[24px] border border-[var(--color-line)] bg-white p-5 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.24),0_10px_18px_-10px_rgba(0,0,0,0.18)]"
        >
          <nav aria-label="Mobile navigation">
            <ul className="space-y-2">
              {primaryNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-full px-4 py-3 text-base font-medium text-[var(--color-ink-800)] transition hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-5 border-t border-[var(--color-line)] pt-5">
            <a
              href={contactHref}
              className="stripe-button-primary inline-flex w-full items-center justify-center px-5 py-3 text-sm font-medium transition"
            >
              Contact
            </a>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/code-labs-ab/"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-[var(--color-line)] p-3"
              >
                <Image
                  src="/assets/social/linkedin.svg"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                  priority
                />
              </a>
              <a
                href="https://www.instagram.com/codelabsab/"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-[var(--color-line)] p-3"
              >
                <Image
                  src="/assets/social/instagram.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                  priority
                />
              </a>
              <a
                href="https://github.com/codelabsab/"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-[var(--color-line)] p-3"
              >
                <Image
                  src="/assets/social/github.svg"
                  alt="GitHub"
                  width={18}
                  height={18}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileMenu;
