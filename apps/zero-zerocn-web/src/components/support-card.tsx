import Link from "next/link";
import { Button } from "@/components/ui/button";

export const SupportCard = () => {
  return (
    <Link href="https://github.com/sponsors/zeroopensource" target="_blank">
      <Button className="inline-flex h-9 w-full items-center justify-start gap-2 rounded-lg border border-inherit bg-fd-secondary/50 p-1.5 ps-2 text-fd-muted-foreground text-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground">
        <span>❤️</span>
        Support ZeroOpenSource™
      </Button>
    </Link>
  );
};
