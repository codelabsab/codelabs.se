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
    <div className="border-b border-[rgba(226,232,240,0.72)] bg-[rgba(252,253,255,0.82)] px-4 py-4 backdrop-blur-xl">
      <div className="site-container flex items-center justify-between px-0">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(226,232,240,0.92)] bg-[rgba(255,255,255,0.9)] text-[var(--color-ink-900)] shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
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
          className="site-card mt-4 rounded-[24px] p-5 shadow-[0_24px_48px_rgba(15,23,42,0.12)]"
        >
          <nav aria-label="Mobile navigation">
            <ul className="space-y-2">
              {primaryNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-full px-4 py-3 text-base font-medium text-[var(--color-ink-700)] transition hover:bg-[rgba(243,247,255,0.95)] hover:text-[var(--color-brand-blue)]"
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
              Contact
            </a>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/code-labs-ab/"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-soft)] p-3"
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
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-soft)] p-3"
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
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-soft)] p-3"
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
