import { cn } from "@/lib/utils";

interface LinkWithArrowProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LinkWithArrow = ({ href, children, className }: LinkWithArrowProps) => {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center text-primary font-semibold hover:underline underline-offset-4 transition-all",
        className
      )}
    >
      {children}
      <svg
        className="ml-2 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
};

export { LinkWithArrow };
