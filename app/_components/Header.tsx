import { buttonVariants } from "@/components/ui/button";
import { GitHubIcon } from "./icons/GitHubIcon";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkedIn } from "./icons/LinkedIn";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4  text-center">
      <Section className="flex items-baseline">
        <h1 className="text-4xl font-bold text-primary">Victor.com</h1>

        <div className="flex-1">
          <ul className="flex text-right mr-5 gap-3">
            <Link
              href="https://google.com"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <GitHubIcon size={16} className="text-foreground"></GitHubIcon>
            </Link>

            <Link
              href="https://linkedin.com/in/victor-de-sousa-dev"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <LinkedIn size={16} className="text-foreground" />
            </Link>
          </ul>
        </div>
        <ModeToggle />
      </Section>
    </header>
  );
};
