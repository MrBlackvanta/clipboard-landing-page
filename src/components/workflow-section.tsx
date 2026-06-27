import { BlacklistIcon, PreviewIcon, TextIcon } from "@/components/icons";
import SectionIntro from "@/components/section-intro";

type Tool = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  title: string;
  description: string;
};

const tools: Tool[] = [
  {
    Icon: BlacklistIcon,
    title: "Create blacklists",
    description:
      "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },
  {
    Icon: TextIcon,
    title: "Plain text snippets",
    description:
      "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    Icon: PreviewIcon,
    title: "Sneak preview",
    description:
      "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

export default function WorkflowSection() {
  return (
    <section aria-labelledby="workflow-heading" className="pb-32.75 lg:pb-37.5">
      <div className="mx-auto max-w-277.5 px-8 lg:px-0">
        <SectionIntro
          id="workflow-heading"
          title="Supercharge your workflow"
          description="We've got the tools to boost your productivity."
        />

        <ul
          role="list"
          className="mt-22.5 grid gap-14 lg:mt-18 lg:grid-cols-3 lg:gap-x-7.5"
        >
          {tools.map(({ Icon, title, description }) => (
            <li
              key={title}
              className="mx-auto flex max-w-70 flex-col items-center text-center lg:max-w-full"
            >
              <span className="text-grayish-blue flex h-10 items-center justify-center">
                <Icon className="size-11" />
              </span>
              <h3 className="tracking-heading mt-10 text-2xl font-semibold">
                {title}
              </h3>
              <p className="text-grayish-blue tracking-body mt-4.5 text-base lg:mt-4">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
