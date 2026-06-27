import logoGoogle from "@/assets/images/logo-google.png";
import logoHp from "@/assets/images/logo-hp.png";
import logoIbm from "@/assets/images/logo-ibm.png";
import logoMicrosoft from "@/assets/images/logo-microsoft.png";
import logoVectorGraphics from "@/assets/images/logo-vector-graphics.png";
import Image, { type StaticImageData } from "next/image";

type Logo = {
  src: StaticImageData;
  alt: string;
};

const logos: Logo[] = [
  { src: logoGoogle, alt: "Google" },
  { src: logoIbm, alt: "IBM" },
  { src: logoMicrosoft, alt: "Microsoft" },
  { src: logoHp, alt: "Hewlett Packard Enterprise" },
  { src: logoVectorGraphics, alt: "Vector Graphics" },
];

export default function LogosSection() {
  return (
    <section
      aria-label="Companies that use Clipboard"
      className="pb-32 lg:pb-36"
    >
      <ul
        role="list"
        className="mx-auto flex max-w-277.5 flex-col items-center gap-14.25 px-8 lg:flex-row lg:justify-between lg:gap-0"
      >
        {logos.map(({ src, alt }) => (
          <li key={alt}>
            <Image src={src} alt={alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
