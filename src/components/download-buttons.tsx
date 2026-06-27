import { cn } from "@/utils/cn";

type DownloadButtonsProps = {
  className?: string;
};

export default function DownloadButtons({ className }: DownloadButtonsProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-6 sm:w-auto sm:flex-row sm:justify-center",
        className,
      )}
    >
      <a
        href="#"
        className="btn w-full bg-strong-cyan shadow-cyan hover:bg-strong-cyan-light sm:w-auto"
      >
        Download for iOS
      </a>
      <a
        href="#"
        className="btn w-full bg-light-blue shadow-blue hover:bg-light-blue-light sm:w-auto"
      >
        Download for Mac
      </a>
    </div>
  );
}
