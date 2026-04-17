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
    <div className="site-container">
      <div className="site-card px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" aria-label="Code Labs home">
            <Image
              className="h-8 w-auto"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[var(--color-brand-blue)] text-white shadow-[0_18px_30px_-22px_rgba(29,107,87,0.78)]"
          >
            <Image
              src="/assets/icons/hamburger_white.svg"
              alt=""
              width={18}
              height={18}
              priority
              className="h-5 w-5"
            />
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="site-card mt-4 rounded-[28px] p-5 shadow-[0_28px_54px_-32px_rgba(24,25,23,0.6)]"
        >
          <nav aria-label="Mobile navigation">
            <ul className="space-y-2">
              {primaryNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-full px-4 py-3 text-base font-medium text-[var(--color-ink-700)] hover:bg-[rgba(29,107,87,0.08)] hover:text-[var(--color-ink-900)]"
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
              className="site-button-primary inline-flex w-full items-center justify-center px-5 py-3 text-sm font-medium"
            >
              Talk to us
            </a>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/code-labs-ab/"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-[rgba(24,25,23,0.08)] bg-[rgba(255,253,248,0.78)] p-3"
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
                className="rounded-full border border-[rgba(24,25,23,0.08)] bg-[rgba(255,253,248,0.78)] p-3"
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
                className="rounded-full border border-[rgba(24,25,23,0.08)] bg-[rgba(255,253,248,0.78)] p-3"
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
