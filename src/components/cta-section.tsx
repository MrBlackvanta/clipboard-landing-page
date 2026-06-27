import DownloadButtons from "@/components/download-buttons";
import SectionIntro from "@/components/section-intro";

export default function CtaSection() {
  return (
    <section aria-labelledby="cta-heading" className="pb-42.5 lg:pb-37.5">
      <div className="mx-auto flex max-w-277.5 flex-col items-center px-8 lg:px-0">
        <SectionIntro
          id="cta-heading"
          title="Clipboard for iOS and Mac OS"
          description="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."
        />
        <DownloadButtons className="mt-12" />
      </div>
    </section>
  );
}
