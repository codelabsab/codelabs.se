import Image from "next/image";
import Link from "next/link";
import RadioEgg from "@/app/components/site/chrome/RadioEgg";
import { PageCrewButton, TerminalButton } from "@/app/components/site/chrome/triggers";
import { contactEmail, contactHref, primaryNavItems, socialLinks } from "@/app/components/site/site-data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-night-900 py-16">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image src="/assets/logo/codelabs_white.svg" alt="Code Labs" width={150} height={28} className="h-7 w-auto" />
            <p className="display mt-6 text-3xl">
              A Code Labs production
              <span className="block text-sunset-pink">Stockholm</span>
            </p>
            <p className="mono mt-4 text-xs text-ink-300">Built with Next.js, deployed with care.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/careers" className="btn-neon btn-sm">
                Press start to join
              </Link>
              <PageCrewButton className="btn-hud btn-sm" />
            </div>
          </div>

          <div>
            <p className="kicker">Credits</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="link-neon text-sm">
                  Home
                </Link>
              </li>
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-neon text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker">Comms</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={contactHref} className="link-neon text-sm">
                  {contactEmail}
                </a>
              </li>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="link-neon text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <RadioEgg />
          </div>
        </div>

        <div className="mono mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Code Labs AB · Platform engineering, SRE, DevOps and AI engineering in Stockholm</p>
          <TerminalButton className="text-left text-neon-cyan hover:text-sand-50">
            Press <kbd className="border border-white/30 px-1">~</kbd> for console
          </TerminalButton>
        </div>
      </div>
    </footer>
  );
}
