import Link from "next/link";
import { Button } from "@/components/ui/button";

export const SupportCard = () => {
  return (
    <Link href="https://github.com/sponsors/zeroopensource" target="_blank">
      <Button className="w-full">Support our Open Source projects ❤️</Button>
    </Link>
  );
};
