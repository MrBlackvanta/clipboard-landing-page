import imageDevices from "@/assets/images/image-devices.webp";
import SectionIntro from "@/components/section-intro";
import Image from "next/image";

export default function AccessSection() {
  return (
    <section aria-labelledby="access-heading" className="pb-32.75 lg:pb-40.25">
      <div className="mx-auto max-w-280 px-8">
        <SectionIntro
          id="access-heading"
          title="Access Clipboard anywhere"
          description="Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
        />

        <Image
          src={imageDevices}
          alt="The Clipboard app open on a phone and a tablet"
          sizes="(min-width: 1024px) 45rem, calc(100vw - 4rem)"
          className="mx-auto mt-16.25 w-full max-w-203 lg:mt-27.75"
        />
      </div>
    </section>
  );
}
