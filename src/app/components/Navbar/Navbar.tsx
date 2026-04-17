import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/app/components/Navbar/MobileMenu";
import {
  contactHref,
  primaryNavItems,
} from "@/app/components/site/site-data";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(255,255,255,0.88)] backdrop-blur-xl">
      <div className="block md:hidden">
        <MobileMenu />
      </div>

      <div className="hidden md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 lg:px-8">
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

          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[rgba(241,244,247,0.84)] px-3 py-2 shadow-[0_12px_24px_-18px_rgba(0,0,0,0.18)]"
          >
            {primaryNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-ink-800)] transition hover:bg-white hover:text-[var(--color-accent)]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contactHref}
              className="stripe-button-primary inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
