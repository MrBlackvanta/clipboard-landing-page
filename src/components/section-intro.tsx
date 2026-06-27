import { cn } from "@/utils/cn";

type SectionIntroProps = {
  id: string;
  title: string;
  description: string;
  className?: string;
};

export default function SectionIntro({
  id,
  title,
  description,
  className,
}: SectionIntroProps) {
  return (
    <div className={cn("mx-auto max-w-182.5 text-center", className)}>
      <h2
        id={id}
        className="tracking-heading text-[1.75rem] leading-none font-semibold lg:text-[2.25rem]"
      >
        {title}
      </h2>
      <p className="text-grayish-blue tracking-body mt-4 text-base lg:mt-4.75 lg:text-lg">
        {description}
      </p>
    </div>
  );
}
