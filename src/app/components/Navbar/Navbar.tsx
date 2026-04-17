import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/app/components/Navbar/MobileMenu";
import {
  contactHref,
  primaryNavItems,
} from "@/app/components/site/site-data";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      <div className="block md:hidden">
        <MobileMenu />
      </div>

      <div className="hidden md:block">
        <div className="site-container">
          <div className="site-card flex items-center justify-between gap-6 px-5 py-3.5 shadow-[0_26px_45px_-34px_rgba(24,25,23,0.62)]">
            <div className="flex items-center gap-5">
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
              <div className="hidden 2xl:block border-l border-[rgba(24,25,23,0.08)] pl-5">
                <p className="site-kicker">Stockholm consultancy</p>
                <p className="mt-1 text-sm text-[var(--color-ink-700)]">
                  Platform, cloud, DevOps, and delivery work that holds up in
                  production.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <nav
                aria-label="Primary navigation"
                className="flex items-center gap-1"
              >
                {primaryNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-ink-700)] hover:bg-[rgba(29,107,87,0.08)] hover:text-[var(--color-ink-900)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <a
                href={contactHref}
                className="site-button-primary inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
