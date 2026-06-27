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
    <footer className="bg-grayish-blue/10 pt-12 lg:pt-14">
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

      <p className="mt-10 px-8 pb-0.5 text-center text-sm lg:mt-8">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="v-footer-link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          target="_blank"
          rel="noopener noreferrer"
          className="v-footer-link"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </p>
    </footer>
  );
}
