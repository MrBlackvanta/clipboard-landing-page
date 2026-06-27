export default function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 125 125"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="currentColor" strokeWidth={10} fill="none" fillRule="evenodd">
        <circle cx="62.5" cy="62.5" r="57.5" />
        <path
          d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
