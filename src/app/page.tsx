import bgHeaderDesktop from "@/assets/images/bg-header-desktop.webp";
import bgHeaderMobile from "@/assets/images/bg-header-mobile.webp";
import AccessSection from "@/components/access-section";
import CtaSection from "@/components/cta-section";
import DownloadButtons from "@/components/download-buttons";
import { LogoIcon } from "@/components/icons";
import LogosSection from "@/components/logos-section";
import SnippetsSection from "@/components/snippets-section";
import WorkflowSection from "@/components/workflow-section";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <header className="relative isolate pt-30 pb-40 text-center sm:pb-37.5">
        <Image
          src={bgHeaderMobile}
          alt=""
          priority
          sizes="100vw"
          className="absolute inset-x-0 top-0 -z-10 h-auto w-full sm:hidden"
        />
        <Image
          src={bgHeaderDesktop}
          alt=""
          sizes="100vw"
          className="absolute inset-x-0 top-0 -z-10 hidden h-auto w-full sm:block"
        />
        <div className="mx-auto flex max-w-md flex-col items-center px-8 sm:max-w-3xl">
          <LogoIcon
            role="img"
            aria-label="Clipboard"
            className="text-strong-cyan size-31.25"
          />
          <h1 className="tracking-heading mt-18.5 text-[2rem] leading-none font-semibold sm:mt-14 sm:text-[2.87rem]">
            A history of everything you copy
          </h1>
          <p className="text-grayish-blue tracking-body mt-4 text-base leading-6.5 sm:max-w-182.5 sm:text-xl sm:leading-7.5">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <DownloadButtons className="mt-12" />
        </div>
      </header>
      <main className="flex-1">
        <SnippetsSection />
        <AccessSection />
        <WorkflowSection />
        <LogosSection />
        <CtaSection />
      </main>
    </>
  );
}
