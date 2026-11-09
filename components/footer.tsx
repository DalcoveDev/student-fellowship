import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, WhatsApp, YouTube } from "@/components/icons";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

const explore = [
  { label: "About us", href: "/about" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Statement of faith", href: "/about/statement-of-faith" },
  { label: "Campuses", href: "/campuses" },
  { label: "Plan your visit", href: "/visit" },
  { label: "Events", href: "/events" },
  { label: "Articles", href: "/articles" },
  { label: "Gallery", href: "/gallery" },
];

const ministries = [
  { label: "Bible study & training", href: "/bible-study" },
  { label: "Online ministry", href: "/online-ministry" },
  { label: "Charity", href: "/charity" },
  { label: "Join a Bible study", href: "/join" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr]">
          <div>
            <Link href="/" aria-label="Christian Students Network home">
              <Image
                src="/images/logo-light.png"
                alt="Christian Students Network"
                width={760}
                height={521}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
              {site.mission} A network of high school and university students
              across Rwanda, rooted in the Word and reaching every campus with
              the gospel.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold-soft">
              <span aria-hidden className="h-px w-8 bg-gold-soft/60" />
              Rooted in the Word
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-cream/65">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Ministries
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-cream/65">
              {ministries.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Connect
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-cream/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                <span>{site.location}</span>
              </li>
              {site.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="flex items-center gap-3 transition-colors hover:text-cream"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-gold-soft" />
                    {phone.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 break-all transition-colors hover:text-cream"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-cream"
                >
                  <WhatsApp className="h-4 w-4 shrink-0 text-gold-soft" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={site.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-cream"
                >
                  <YouTube className="h-4 w-4 shrink-0 text-gold-soft" />
                  The Upside Down Show
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Christian Students Network. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/visit" className="transition-colors hover:text-cream">
              Plan your visit
            </Link>
            <Link
              href="/about/leadership"
              className="transition-colors hover:text-cream"
            >
              Leadership
            </Link>
            <span className="tracking-wide">
              For the glory of God and the good of students.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
