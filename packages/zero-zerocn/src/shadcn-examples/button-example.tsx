import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/radix/ui/button";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function ButtonExample() {
  return (
    <ExampleWrapper className="lg:grid-cols-1 2xl:grid-cols-1">
      <ButtonVariantsAndSizes />
      <ButtonIconRight />
      <ButtonIconLeft />
      <ButtonIconOnly />
      <ButtonInvalidStates />
      <ButtonExamples />
    </ExampleWrapper>
  );
}

function ButtonVariantsAndSizes() {
  return (
    <Example title="Variants & Sizes">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs">Default</Button>
        <Button size="xs" variant="secondary">
          Secondary
        </Button>
        <Button size="xs" variant="outline">
          Outline
        </Button>
        <Button size="xs" variant="ghost">
          Ghost
        </Button>
        <Button size="xs" variant="destructive">
          Destructive
        </Button>
        <Button size="xs" variant="link">
          Link
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">Default</Button>
        <Button size="sm" variant="secondary">
          Secondary
        </Button>
        <Button size="sm" variant="outline">
          Outline
        </Button>
        <Button size="sm" variant="ghost">
          Ghost
        </Button>
        <Button size="sm" variant="destructive">
          Destructive
        </Button>
        <Button size="sm" variant="link">
          Link
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="lg">Default</Button>
        <Button size="lg" variant="secondary">
          Secondary
        </Button>
        <Button size="lg" variant="outline">
          Outline
        </Button>
        <Button size="lg" variant="ghost">
          Ghost
        </Button>
        <Button size="lg" variant="destructive">
          Destructive
        </Button>
        <Button size="lg" variant="link">
          Link
        </Button>
      </div>
    </Example>
  );
}

function ButtonIconRight() {
  return (
    <Example title="Icon Right">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs">
          Default{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="xs" variant="secondary">
          Secondary{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="xs" variant="outline">
          Outline{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="xs" variant="ghost">
          Ghost{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="xs" variant="destructive">
          Destructive{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="xs" variant="link">
          Link{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">
          Default
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="sm" variant="secondary">
          Secondary{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="sm" variant="outline">
          Outline{" "}
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="sm" variant="ghost">
          Ghost{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="sm" variant="destructive">
          Destructive{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="sm" variant="link">
          Link{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button>
          Default{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button variant="secondary">
          Secondary{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button variant="outline">
          Outline{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button variant="ghost">
          Ghost{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button variant="destructive">
          Destructive{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button variant="link">
          Link{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="lg">
          Default{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="lg" variant="secondary">
          Secondary{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="lg" variant="outline">
          Outline{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="lg" variant="ghost">
          Ghost{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="lg" variant="destructive">
          Destructive{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="lg" variant="link">
          Link{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
      </div>
    </Example>
  );
}

function ButtonIconLeft() {
  return (
    <Example title="Icon Left">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Default
        </Button>
        <Button size="xs" variant="secondary">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Secondary
        </Button>
        <Button size="xs" variant="outline">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Outline
        </Button>
        <Button size="xs" variant="ghost">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Ghost
        </Button>
        <Button size="xs" variant="destructive">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Destructive
        </Button>
        <Button size="xs" variant="link">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Link
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Default
        </Button>
        <Button size="sm" variant="secondary">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Secondary
        </Button>
        <Button size="sm" variant="outline">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Outline
        </Button>
        <Button size="sm" variant="ghost">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Ghost
        </Button>
        <Button size="sm" variant="destructive">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Destructive
        </Button>
        <Button size="sm" variant="link">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Link
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button>
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Default
        </Button>
        <Button variant="secondary">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Secondary
        </Button>
        <Button variant="outline">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Outline
        </Button>
        <Button variant="ghost">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Ghost
        </Button>
        <Button variant="destructive">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Destructive
        </Button>
        <Button variant="link">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Link
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="lg">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Default
        </Button>
        <Button size="lg" variant="secondary">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Secondary
        </Button>
        <Button size="lg" variant="outline">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Outline
        </Button>
        <Button size="lg" variant="ghost">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Ghost
        </Button>
        <Button size="lg" variant="destructive">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Destructive
        </Button>
        <Button size="lg" variant="link">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="CircleArrowLeft02Icon"
            lucide="ArrowLeftCircleIcon"
            tabler="IconCircleArrowLeft"
          />{" "}
          Link
        </Button>
      </div>
    </Example>
  );
}

function ButtonIconOnly() {
  return (
    <Example title="Icon Only">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="icon-xs">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-xs" variant="secondary">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-xs" variant="outline">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-xs" variant="ghost">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-xs" variant="destructive">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-xs" variant="link">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="icon-sm">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-sm" variant="secondary">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-sm" variant="outline">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-sm" variant="ghost">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-sm" variant="destructive">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-sm" variant="link">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="icon">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon" variant="secondary">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon" variant="outline">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon" variant="ghost">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon" variant="destructive">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon" variant="link">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="icon-lg">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-lg" variant="secondary">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-lg" variant="outline">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-lg" variant="ghost">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-lg" variant="destructive">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
        <Button size="icon-lg" variant="link">
          <IconPlaceholder
            hugeicons="ArrowRight02Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
      </div>
    </Example>
  );
}

function ButtonExamples() {
  return (
    <Example title="Examples">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>
            Submit{" "}
            <IconPlaceholder
              data-icon="inline-end"
              hugeicons="ArrowRight02Icon"
              lucide="ArrowRightIcon"
              tabler="IconArrowRight"
            />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="destructive">Delete</Button>
          <Button size="icon">
            <IconPlaceholder
              data-icon="inline-end"
              hugeicons="ArrowRight02Icon"
              lucide="ArrowRightIcon"
              tabler="IconArrowRight"
            />
          </Button>
        </div>
      </div>
    </Example>
  );
}

function ButtonInvalidStates() {
  return (
    <Example title="Invalid States">
      <div className="flex flex-wrap items-center gap-2">
        <Button aria-invalid="true" size="xs">
          Default
        </Button>
        <Button aria-invalid="true" size="xs" variant="secondary">
          Secondary
        </Button>
        <Button aria-invalid="true" size="xs" variant="outline">
          Outline
        </Button>
        <Button aria-invalid="true" size="xs" variant="ghost">
          Ghost
        </Button>
        <Button aria-invalid="true" size="xs" variant="destructive">
          Destructive
        </Button>
        <Button aria-invalid="true" size="xs" variant="link">
          Link
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button aria-invalid="true" size="sm">
          Default
        </Button>
        <Button aria-invalid="true" size="sm" variant="secondary">
          Secondary
        </Button>
        <Button aria-invalid="true" size="sm" variant="outline">
          Outline
        </Button>
        <Button aria-invalid="true" size="sm" variant="ghost">
          Ghost
        </Button>
        <Button aria-invalid="true" size="sm" variant="destructive">
          Destructive
        </Button>
        <Button aria-invalid="true" size="sm" variant="link">
          Link
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button aria-invalid="true">Default</Button>
        <Button aria-invalid="true" variant="secondary">
          Secondary
        </Button>
        <Button aria-invalid="true" variant="outline">
          Outline
        </Button>
        <Button aria-invalid="true" variant="ghost">
          Ghost
        </Button>
        <Button aria-invalid="true" variant="destructive">
          Destructive
        </Button>
        <Button aria-invalid="true" variant="link">
          Link
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button aria-invalid="true" size="lg">
          Default
        </Button>
        <Button aria-invalid="true" size="lg" variant="secondary">
          Secondary
        </Button>
        <Button aria-invalid="true" size="lg" variant="outline">
          Outline
        </Button>
        <Button aria-invalid="true" size="lg" variant="ghost">
          Ghost
        </Button>
        <Button aria-invalid="true" size="lg" variant="destructive">
          Destructive
        </Button>
        <Button aria-invalid="true" size="lg" variant="link">
          Link
        </Button>
      </div>
    </Example>
  );
}
