import Link from "next/link";
import Image from "next/image";
import {
  contactEmail,
  contactHref,
  primaryNavItems,
} from "@/app/components/site/site-data";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(247,244,255,0.28)_100%)]">
      <div className="site-container py-14">
        <div className="site-card-tint grid gap-10 border-[rgba(91,91,214,0.08)] p-8 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
          <div className="max-w-md">
            <Link href="/" aria-label="Code Labs home">
              <Image
                className="h-10 w-auto"
                src="/assets/logo/codelabs.svg"
                alt="Code Labs"
                width={640}
                height={480}
                priority
              />
            </Link>
            <p className="mt-5 text-sm leading-7 text-[var(--color-ink-700)]">
              Code Labs is a Swedish consultancy focused on platform engineering,
              DevOps, cloud infrastructure, internal tooling, reliability, and the
              kind of hands-on systems work that helps engineers keep growing.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-600)]">
              The blog and the monthly Code Labs by series make the company
              visible between projects: conferences, activities, experiments,
              and the things we actually do together.
            </p>
            <a
              href={contactHref}
              className="site-link mt-6 inline-flex items-center text-sm font-medium"
            >
              {contactEmail}
            </a>
          </div>

          <div>
            <h2 className="site-kicker text-[var(--color-brand-violet)]">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {primaryNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-ink-700)] transition hover:text-[var(--color-brand-blue)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="site-kicker text-[var(--color-brand-coral)]">
              Follow
            </h2>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/code-labs-ab/"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-[var(--color-line)] bg-white p-3 transition hover:border-[rgba(37,99,235,0.18)]"
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
                className="rounded-full border border-[var(--color-line)] bg-white p-3 transition hover:border-[rgba(249,115,96,0.18)]"
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
                className="rounded-full border border-[var(--color-line)] bg-white p-3 transition hover:border-[rgba(91,91,214,0.18)]"
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
            <div className="mt-6 text-sm leading-7 text-[var(--color-ink-600)]">
              <p>Code Labs AB</p>
              <p>Org.nr: 559064-2442</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
