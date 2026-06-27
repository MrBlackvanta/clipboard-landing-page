import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  TwitterIcon,
} from "@/components/icons";

const navLinks = [
  { label: "FAQs", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Press Kit", href: "#" },
  { label: "Install Guide", href: "#" },
];

const socialLinks = [
  { label: "Clipboard on Facebook", href: "#", Icon: FacebookIcon },
  { label: "Clipboard on Twitter", href: "#", Icon: TwitterIcon },
  { label: "Clipboard on Instagram", href: "#", Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="bg-grayish-blue/10 py-12 lg:py-14">
      <div className="mx-auto flex max-w-277.5 flex-col items-center gap-12 px-8 lg:flex-row lg:justify-between lg:gap-0 lg:px-0">
        <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:items-start lg:gap-x-24">
          <LogoIcon
            aria-hidden="true"
            className="text-strong-cyan size-13.75"
          />

          <nav aria-label="Footer">
            <ul
              role="list"
              className="grid gap-y-5 text-center lg:grid-flow-col lg:grid-rows-2 lg:gap-x-20 lg:gap-y-4 lg:text-left"
            >
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-strong-cyan motion-safe:transition-colors motion-safe:duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <ul role="list" className="flex items-center gap-x-10 lg:gap-x-6">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="hover:text-strong-cyan motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon className="size-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
