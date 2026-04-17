import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/app/components/Navbar/MobileMenu";
import {
  contactHref,
  primaryNavItems,
} from "@/app/components/site/site-data";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(226,232,240,0.72)] bg-[rgba(252,253,255,0.78)] backdrop-blur-xl">
      <div className="block md:hidden">
        <MobileMenu />
      </div>

      <div className="hidden md:block">
        <div className="site-container flex items-center justify-between gap-8 py-4">
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
            className="flex items-center gap-2 rounded-full border border-[rgba(226,232,240,0.92)] bg-[rgba(255,255,255,0.72)] px-3 py-2 shadow-[0_12px_24px_rgba(15,23,42,0.05)]"
          >
            {primaryNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-ink-700)] transition hover:bg-[rgba(243,247,255,0.95)] hover:text-[var(--color-brand-blue)]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contactHref}
              className="site-button-primary inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium"
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
