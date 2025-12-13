import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/radix/ui/button";
import { Toggle } from "@/registry/bases/radix/ui/toggle";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function ToggleExample() {
  return (
    <ExampleWrapper>
      <ToggleBasic />
      <ToggleOutline />
      <ToggleSizes />
      <ToggleWithButtonText />
      <ToggleWithButtonIcon />
      <ToggleWithButtonIconText />
      <ToggleDisabled />
      <ToggleWithIcon />
    </ExampleWrapper>
  );
}

function ToggleBasic() {
  return (
    <Example title="Basic">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="Toggle bold" defaultPressed>
          <IconPlaceholder
            hugeicons="TextBoldIcon"
            lucide="BoldIcon"
            tabler="IconBold"
          />
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <IconPlaceholder
            hugeicons="TextItalicIcon"
            lucide="ItalicIcon"
            tabler="IconItalic"
          />
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <IconPlaceholder
            hugeicons="TextUnderlineIcon"
            lucide="UnderlineIcon"
            tabler="IconUnderline"
          />
        </Toggle>
      </div>
    </Example>
  );
}

function ToggleOutline() {
  return (
    <Example title="Outline">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="Toggle italic" variant="outline">
          <IconPlaceholder
            hugeicons="TextItalicIcon"
            lucide="ItalicIcon"
            tabler="IconItalic"
          />
          Italic
        </Toggle>
        <Toggle aria-label="Toggle bold" variant="outline">
          <IconPlaceholder
            hugeicons="TextBoldIcon"
            lucide="BoldIcon"
            tabler="IconBold"
          />
          Bold
        </Toggle>
      </div>
    </Example>
  );
}

function ToggleSizes() {
  return (
    <Example title="Sizes">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="Toggle small" size="sm" variant="outline">
          Small
        </Toggle>
        <Toggle aria-label="Toggle default" size="default" variant="outline">
          Default
        </Toggle>
        <Toggle aria-label="Toggle large" size="lg" variant="outline">
          Large
        </Toggle>
      </div>
    </Example>
  );
}

function ToggleWithButtonText() {
  return (
    <Example title="With Button Text">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
            Button
          </Button>
          <Toggle aria-label="Toggle sm" size="sm" variant="outline">
            Toggle
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button size="default" variant="outline">
            Button
          </Button>
          <Toggle aria-label="Toggle default" size="default" variant="outline">
            Toggle
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button size="lg" variant="outline">
            Button
          </Button>
          <Toggle aria-label="Toggle lg" size="lg" variant="outline">
            Toggle
          </Toggle>
        </div>
      </div>
    </Example>
  );
}

function ToggleWithButtonIcon() {
  return (
    <Example title="With Button Icon">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Button size="icon-sm" variant="outline">
            <IconPlaceholder
              hugeicons="TextBoldIcon"
              lucide="BoldIcon"
              tabler="IconBold"
            />
          </Button>
          <Toggle aria-label="Toggle sm icon" size="sm" variant="outline">
            <IconPlaceholder
              hugeicons="TextBoldIcon"
              lucide="BoldIcon"
              tabler="IconBold"
            />
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="TextItalicIcon"
              lucide="ItalicIcon"
              tabler="IconItalic"
            />
          </Button>
          <Toggle
            aria-label="Toggle default icon"
            size="default"
            variant="outline"
          >
            <IconPlaceholder
              hugeicons="TextItalicIcon"
              lucide="ItalicIcon"
              tabler="IconItalic"
            />
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon-lg" variant="outline">
            <IconPlaceholder
              hugeicons="TextUnderlineIcon"
              lucide="UnderlineIcon"
              tabler="IconUnderline"
            />
          </Button>
          <Toggle aria-label="Toggle lg icon" size="lg" variant="outline">
            <IconPlaceholder
              hugeicons="TextUnderlineIcon"
              lucide="UnderlineIcon"
              tabler="IconUnderline"
            />
          </Toggle>
        </div>
      </div>
    </Example>
  );
}

function ToggleWithButtonIconText() {
  return (
    <Example title="With Button Icon + Text">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
            <IconPlaceholder
              data-icon="inline-start"
              hugeicons="TextBoldIcon"
              lucide="BoldIcon"
              tabler="IconBold"
            />
            Button
          </Button>
          <Toggle aria-label="Toggle sm icon text" size="sm" variant="outline">
            <IconPlaceholder
              hugeicons="TextBoldIcon"
              lucide="BoldIcon"
              tabler="IconBold"
            />
            Toggle
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button size="default" variant="outline">
            <IconPlaceholder
              data-icon="inline-start"
              hugeicons="TextItalicIcon"
              lucide="ItalicIcon"
              tabler="IconItalic"
            />
            Button
          </Button>
          <Toggle
            aria-label="Toggle default icon text"
            size="default"
            variant="outline"
          >
            <IconPlaceholder
              hugeicons="TextItalicIcon"
              lucide="ItalicIcon"
              tabler="IconItalic"
            />
            Toggle
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button size="lg" variant="outline">
            <IconPlaceholder
              data-icon="inline-start"
              hugeicons="TextUnderlineIcon"
              lucide="UnderlineIcon"
              tabler="IconUnderline"
            />
            Button
          </Button>
          <Toggle aria-label="Toggle lg icon text" size="lg" variant="outline">
            <IconPlaceholder
              hugeicons="TextUnderlineIcon"
              lucide="UnderlineIcon"
              tabler="IconUnderline"
            />
            Toggle
          </Toggle>
        </div>
      </div>
    </Example>
  );
}

function ToggleDisabled() {
  return (
    <Example title="Disabled">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="Toggle disabled" disabled>
          Disabled
        </Toggle>
        <Toggle aria-label="Toggle disabled outline" disabled variant="outline">
          Disabled
        </Toggle>
      </div>
    </Example>
  );
}

function ToggleWithIcon() {
  return (
    <Example title="With Icon">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="Toggle bookmark" defaultPressed>
          <IconPlaceholder
            className="group-data-[state=on]/toggle:fill-accent-foreground"
            hugeicons="BookmarkIcon"
            lucide="BookmarkIcon"
            tabler="IconBookmark"
          />
        </Toggle>
        <Toggle aria-label="Toggle bookmark outline" variant="outline">
          <IconPlaceholder
            className="group-data-[state=on]/toggle:fill-accent-foreground"
            hugeicons="BookmarkIcon"
            lucide="BookmarkIcon"
            tabler="IconBookmark"
          />
          Bookmark
        </Toggle>
      </div>
    </Example>
  );
}
