import Link from "next/link";
import Balance from "react-wrap-balancer";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-20 lg:pb-16 -mt-10",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-center text-3xl font-gilroy font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]",
        className,
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn("max-w-2xl text-center text-lg font-light text-foreground", className)}
      {...props}
    />
  );
}

function PageActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex w-full items-center justify-center space-x-4 py-4 md:pb-10", className)}
      {...props}
    >
      <Button asChild className="px-6 text-sm py-2 rounded-full">
        <Link href="/login">Start for free</Link>
      </Button>
      <Button asChild className="px-6 text-sm py-2 rounded-full" variant="outline">
        <Link href="/contact">Talk to sales</Link>
      </Button>
    </div>
  );
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
