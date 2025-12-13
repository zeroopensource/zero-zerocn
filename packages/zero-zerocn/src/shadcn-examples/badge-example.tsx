import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import { Badge } from "@/registry/bases/radix/ui/badge";
import { Spinner } from "@/registry/bases/radix/ui/spinner";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function BadgeExample() {
  return (
    <ExampleWrapper className="lg:grid-cols-1">
      <BadgeVariants />
      <BadgeWithIconLeft />
      <BadgeWithIconRight />
      <BadgeWithSpinner />
      <BadgeAsLink />
      <BadgeLongText />
      <BadgeCustomColors />
    </ExampleWrapper>
  );
}

function BadgeVariants() {
  return (
    <Example title="Variants">
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>
    </Example>
  );
}

function BadgeWithIconLeft() {
  return (
    <Example className="max-w-fit" title="Icon Left">
      <div className="flex flex-wrap gap-2">
        <Badge>
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CheckmarkBadge02Icon"
            lucide="BadgeCheck"
            tabler="IconRosetteDiscountCheck"
          />
          Default
        </Badge>
        <Badge variant="secondary">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CheckmarkBadge02Icon"
            lucide="BadgeCheck"
            tabler="IconRosetteDiscountCheck"
          />
          Secondary
        </Badge>
        <Badge variant="destructive">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CheckmarkBadge02Icon"
            lucide="BadgeCheck"
            tabler="IconRosetteDiscountCheck"
          />
          Destructive
        </Badge>
        <Badge variant="outline">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CheckmarkBadge02Icon"
            lucide="BadgeCheck"
            tabler="IconRosetteDiscountCheck"
          />
          Outline
        </Badge>
        <Badge variant="ghost">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CheckmarkBadge02Icon"
            lucide="BadgeCheck"
            tabler="IconRosetteDiscountCheck"
          />
          Ghost
        </Badge>
        <Badge variant="link">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CheckmarkBadge02Icon"
            lucide="BadgeCheck"
            tabler="IconRosetteDiscountCheck"
          />
          Link
        </Badge>
      </div>
    </Example>
  );
}

function BadgeWithIconRight() {
  return (
    <Example className="max-w-fit" title="Icon Right">
      <div className="flex flex-wrap gap-2">
        <Badge>
          Default
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Badge>
        <Badge variant="secondary">
          Secondary
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Badge>
        <Badge variant="destructive">
          Destructive
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Badge>
        <Badge variant="outline">
          Outline
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Badge>
        <Badge variant="ghost">
          Ghost
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Badge>
        <Badge variant="link">
          Link
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Badge>
      </div>
    </Example>
  );
}

function BadgeWithSpinner() {
  return (
    <Example className="max-w-fit" title="With Spinner">
      <div className="flex flex-wrap gap-2">
        <Badge>
          <Spinner data-icon="inline-start" />
          Default
        </Badge>
        <Badge variant="secondary">
          <Spinner data-icon="inline-start" />
          Secondary
        </Badge>
        <Badge variant="destructive">
          <Spinner data-icon="inline-start" />
          Destructive
        </Badge>
        <Badge variant="outline">
          <Spinner data-icon="inline-start" />
          Outline
        </Badge>
        <Badge variant="ghost">
          <Spinner data-icon="inline-start" />
          Ghost
        </Badge>
        <Badge variant="link">
          <Spinner data-icon="inline-start" />
          Link
        </Badge>
      </div>
    </Example>
  );
}

function BadgeAsLink() {
  return (
    <Example title="asChild">
      <div className="flex flex-wrap gap-2">
        <Badge asChild>
          <a href="#">
            Link{" "}
            <IconPlaceholder
              data-icon="inline-end"
              hugeicons="ArrowUpRightIcon"
              lucide="ArrowUpRightIcon"
              tabler="IconArrowUpRight"
            />
          </a>
        </Badge>
        <Badge asChild variant="secondary">
          <a href="#">
            Link{" "}
            <IconPlaceholder
              data-icon="inline-end"
              hugeicons="ArrowUpRightIcon"
              lucide="ArrowUpRightIcon"
              tabler="IconArrowUpRight"
            />
          </a>
        </Badge>
        <Badge asChild variant="destructive">
          <a href="#">
            Link{" "}
            <IconPlaceholder
              data-icon="inline-end"
              hugeicons="ArrowUpRightIcon"
              lucide="ArrowUpRightIcon"
              tabler="IconArrowUpRight"
            />
          </a>
        </Badge>
        <Badge asChild variant="outline">
          <a href="#">
            Link{" "}
            <IconPlaceholder
              data-icon="inline-end"
              hugeicons="ArrowUpRightIcon"
              lucide="ArrowUpRightIcon"
              tabler="IconArrowUpRight"
            />
          </a>
        </Badge>
        <Badge asChild variant="ghost">
          <a href="#">
            Link{" "}
            <IconPlaceholder
              data-icon="inline-end"
              hugeicons="ArrowRight02Icon"
              lucide="ArrowUpRightIcon"
              tabler="IconArrowRight"
            />
          </a>
        </Badge>
        <Badge asChild variant="link">
          <a href="#">
            Link{" "}
            <IconPlaceholder
              data-icon="inline-end"
              hugeicons="ArrowRight02Icon"
              lucide="ArrowUpRightIcon"
              tabler="IconArrowUpRight"
            />
          </a>
        </Badge>
      </div>
    </Example>
  );
}

function BadgeLongText() {
  return (
    <Example title="Long Text">
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">
          A badge with a lot of text to see how it wraps
        </Badge>
      </div>
    </Example>
  );
}

function BadgeCustomColors() {
  return (
    <Example className="max-w-fit" title="Custom Colors">
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-blue-600 text-blue-50 dark:bg-blue-600 dark:text-blue-50">
          Blue
        </Badge>
        <Badge className="bg-green-600 text-green-50 dark:bg-green-600 dark:text-green-50">
          Green
        </Badge>
        <Badge className="bg-sky-600 text-sky-50 dark:bg-sky-600 dark:text-sky-50">
          Sky
        </Badge>
        <Badge className="bg-purple-600 text-purple-50 dark:bg-purple-600 dark:text-purple-50">
          Purple
        </Badge>
        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Blue
        </Badge>
        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
          Green
        </Badge>
        <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
          Sky
        </Badge>
        <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
          Purple
        </Badge>
        <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
          Red
        </Badge>
      </div>
    </Example>
  );
}
