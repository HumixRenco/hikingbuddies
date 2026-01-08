import { LinkWithArrow } from "@/components/ui/link-with-arrow";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  hideLinkOnMobile?: boolean;
  className?: string;
}

const SectionHeader = ({
  title,
  description,
  linkText,
  linkHref,
  hideLinkOnMobile = true,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("mb-8", className)}>
      {linkText && linkHref ? (
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h2>
          <LinkWithArrow
            href={linkHref}
            className={cn(hideLinkOnMobile && "hidden sm:inline-flex")}
          >
            {linkText}
          </LinkWithArrow>
        </div>
      ) : (
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-center">
          {description}
        </p>
      )}
    </div>
  );
};

export { SectionHeader };
