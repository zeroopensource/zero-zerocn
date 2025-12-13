import Image from "next/image";
import { AspectRatio } from "@/registry/bases/radix/ui/aspect-ratio";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function AspectRatioExample() {
  return (
    <ExampleWrapper className="max-w-4xl 2xl:max-w-4xl">
      <AspectRatio16x9 />
      <AspectRatio21x9 />
      <AspectRatio1x1 />
      <AspectRatio9x16 />
    </ExampleWrapper>
  );
}

function AspectRatio16x9() {
  return (
    <Example className="items-center justify-center" title="16:9">
      <AspectRatio className="rounded-lg bg-muted" ratio={16 / 9}>
        <Image
          alt="Photo"
          className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
          fill
          src="https://avatar.vercel.sh/shadcn1"
        />
      </AspectRatio>
    </Example>
  );
}

function AspectRatio1x1() {
  return (
    <Example className="items-start" title="1:1">
      <AspectRatio className="rounded-lg bg-muted" ratio={1 / 1}>
        <Image
          alt="Photo"
          className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
          fill
          src="https://avatar.vercel.sh/shadcn1"
        />
      </AspectRatio>
    </Example>
  );
}

function AspectRatio9x16() {
  return (
    <Example className="items-center justify-center" title="9:16">
      <AspectRatio className="rounded-lg bg-muted" ratio={9 / 16}>
        <Image
          alt="Photo"
          className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
          fill
          src="https://avatar.vercel.sh/shadcn1"
        />
      </AspectRatio>
    </Example>
  );
}

function AspectRatio21x9() {
  return (
    <Example className="items-center justify-center" title="21:9">
      <AspectRatio className="rounded-lg bg-muted" ratio={21 / 9}>
        <Image
          alt="Photo"
          className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
          fill
          src="https://avatar.vercel.sh/shadcn1"
        />
      </AspectRatio>
    </Example>
  );
}
