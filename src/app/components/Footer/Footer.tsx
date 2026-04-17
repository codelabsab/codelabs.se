import Link from "next/link";
import Image from "next/image";
import {
  contactEmail,
  contactHref,
  primaryNavItems,
} from "@/app/components/site/site-data";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(24,25,23,0.08)] bg-[linear-gradient(180deg,#1b211d_0%,#101310_100%)] text-white">
      <div className="site-orb-blue left-[-5rem] top-10 h-44 w-44" />
      <div className="site-orb-coral bottom-10 right-10 h-36 w-36" />
      <div className="site-container py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl">
            <p className="site-kicker text-[var(--color-brand-sky)]">Code Labs</p>
            <Link href="/" aria-label="Code Labs home">
              <Image
                className="mt-5 h-11 w-auto"
                src="/assets/logo/codelabs_white.svg"
                alt="Code Labs"
                width={640}
                height={480}
                priority
              />
            </Link>
            <p className="mt-6 text-base leading-8 text-white/72">
              Platform engineering, DevOps, cloud infrastructure, internal
              tooling, reliability, and the kind of hands-on delivery work that
              keeps engineers learning.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/56">
              The blog and Code Labs by make the company visible between
              assignments: conferences, experiments, dinners, and the things we
              actually do together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={contactHref}
                className="site-button-secondary inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[var(--color-ink-900)]"
              >
                {contactEmail}
              </a>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-medium text-white/88 hover:bg-white/10"
              >
                Careers
              </Link>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="site-kicker text-[var(--color-brand-sky)]">
                Explore
              </h2>
              <ul className="mt-5 space-y-3">
                {primaryNavItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/72 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="site-kicker text-[var(--color-brand-sky)]">
                Follow
              </h2>
              <div className="mt-5 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/code-labs-ab/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-white/12 bg-white/8 p-3 transition hover:bg-white/12"
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
                  className="rounded-full border border-white/12 bg-white/8 p-3 transition hover:bg-white/12"
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
                  className="rounded-full border border-white/12 bg-white/8 p-3 transition hover:bg-white/12"
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
              <div className="mt-6 text-sm leading-7 text-white/56">
                <p>Code Labs AB</p>
                <p>Org.nr: 559064-2442</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
