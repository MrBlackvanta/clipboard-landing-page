import imageComputer from "@/assets/images/image-computer.webp";
import SectionIntro from "@/components/section-intro";
import Image from "next/image";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Quick Search",
    description:
      "Easily search your snippets by content, category, web address, application, and more.",
  },
  {
    title: "iCloud Sync",
    description: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    title: "Complete History",
    description:
      "Retrieve any snippets from the first moment you started using the app.",
  },
];

export default function SnippetsSection() {
  return (
    <section
      aria-labelledby="snippets-heading"
      className="pb-46.5 lg:overflow-x-clip lg:pb-37.5"
    >
      <div className="mx-auto max-w-277.5 px-8 lg:px-0">
        <SectionIntro
          id="snippets-heading"
          title="Keep track of your snippets"
          description="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
        />

        <div className="mt-16.25 grid items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-x-27.5">
          <Image
            src={imageComputer}
            alt="The Clipboard app open on a desktop computer"
            sizes="(min-width: 1024px) 47rem, (min-width: 640px) 37.5rem, calc(100vw - 4rem)"
            className="mx-auto w-full max-w-150 lg:mx-0 lg:w-188 lg:max-w-none lg:justify-self-end"
          />

          <ul
            role="list"
            className="grid gap-12 text-center lg:max-w-sm lg:gap-14 lg:text-left"
          >
            {features.map((feature) => (
              <li key={feature.title}>
                <h3 className="tracking-heading text-2xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-grayish-blue tracking-body mt-2.5 text-base lg:mt-2">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
