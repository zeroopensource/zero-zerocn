import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import { Input } from "@/registry/bases/radix/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/radix/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/radix/ui/toggle-group";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function ToggleGroupExample() {
  return (
    <ExampleWrapper>
      <ToggleGroupBasic />
      <ToggleGroupOutline />
      <ToggleGroupOutlineWithIcons />
      <ToggleGroupSizes />
      <ToggleGroupSpacing />
      <ToggleGroupWithIcons />
      <ToggleGroupFilter />
      <ToggleGroupDateRange />
      <ToggleGroupSort />
      <ToggleGroupWithInputAndSelect />
      <ToggleGroupVertical />
      <ToggleGroupVerticalOutline />
      <ToggleGroupVerticalOutlineWithIcons />
      <ToggleGroupVerticalWithSpacing />
    </ExampleWrapper>
  );
}

function ToggleGroupBasic() {
  return (
    <Example title="Basic">
      <ToggleGroup spacing={1} type="multiple">
        <ToggleGroupItem aria-label="Toggle bold" value="bold">
          <IconPlaceholder
            hugeicons="TextBoldIcon"
            lucide="BoldIcon"
            tabler="IconBold"
          />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle italic" value="italic">
          <IconPlaceholder
            hugeicons="TextItalicIcon"
            lucide="ItalicIcon"
            tabler="IconItalic"
          />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle underline" value="underline">
          <IconPlaceholder
            hugeicons="TextUnderlineIcon"
            lucide="UnderlineIcon"
            tabler="IconUnderline"
          />
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}

function ToggleGroupOutline() {
  return (
    <Example title="Outline">
      <ToggleGroup defaultValue="all" type="single" variant="outline">
        <ToggleGroupItem aria-label="Toggle all" value="all">
          All
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle missed" value="missed">
          Missed
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}

function ToggleGroupOutlineWithIcons() {
  return (
    <Example title="Outline With Icons">
      <ToggleGroup size="sm" type="multiple" variant="outline">
        <ToggleGroupItem aria-label="Toggle bold" value="bold">
          <IconPlaceholder
            hugeicons="TextBoldIcon"
            lucide="BoldIcon"
            tabler="IconBold"
          />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle italic" value="italic">
          <IconPlaceholder
            hugeicons="TextItalicIcon"
            lucide="ItalicIcon"
            tabler="IconItalic"
          />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle underline" value="underline">
          <IconPlaceholder
            hugeicons="TextUnderlineIcon"
            lucide="UnderlineIcon"
            tabler="IconUnderline"
          />
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}

function ToggleGroupSizes() {
  return (
    <Example title="Sizes">
      <div className="flex flex-col gap-4">
        <ToggleGroup
          defaultValue="top"
          size="sm"
          type="single"
          variant="outline"
        >
          <ToggleGroupItem aria-label="Toggle top" value="top">
            Top
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle bottom" value="bottom">
            Bottom
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle left" value="left">
            Left
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle right" value="right">
            Right
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup defaultValue="top" type="single" variant="outline">
          <ToggleGroupItem aria-label="Toggle top" value="top">
            Top
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle bottom" value="bottom">
            Bottom
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle left" value="left">
            Left
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="Toggle right" value="right">
            Right
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </Example>
  );
}

function ToggleGroupSpacing() {
  return (
    <Example title="With Spacing">
      <ToggleGroup
        defaultValue="top"
        size="sm"
        spacing={2}
        type="single"
        variant="outline"
      >
        <ToggleGroupItem aria-label="Toggle top" value="top">
          Top
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle bottom" value="bottom">
          Bottom
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle left" value="left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle right" value="right">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}

function ToggleGroupWithIcons() {
  return (
    <Example title="With Icons">
      <ToggleGroup size="sm" spacing={1} type="multiple" variant="outline">
        <ToggleGroupItem
          aria-label="Toggle star"
          className="aria-pressed:bg-transparent aria-pressed:*:[svg]:fill-foreground aria-pressed:*:[svg]:stroke-foregfill-foreground"
          value="star"
        >
          <IconPlaceholder
            hugeicons="StarIcon"
            lucide="StarIcon"
            tabler="IconStar"
          />
          Star
        </ToggleGroupItem>
        <ToggleGroupItem
          aria-label="Toggle heart"
          className="aria-pressed:bg-transparent aria-pressed:*:[svg]:fill-foreground aria-pressed:*:[svg]:stroke-foreground"
          value="heart"
        >
          <IconPlaceholder
            hugeicons="FavouriteIcon"
            lucide="HeartIcon"
            tabler="IconHeart"
          />
          Heart
        </ToggleGroupItem>
        <ToggleGroupItem
          aria-label="Toggle bookmark"
          className="aria-pressed:bg-transparent aria-pressed:*:[svg]:fill-foreground aria-pressed:*:[svg]:stroke-foreground"
          value="bookmark"
        >
          <IconPlaceholder
            hugeicons="BookmarkIcon"
            lucide="BookmarkIcon"
            tabler="IconBookmark"
          />
          Bookmark
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}

function ToggleGroupFilter() {
  return (
    <Example title="Filter">
      <ToggleGroup defaultValue="all" size="sm" type="single" variant="outline">
        <ToggleGroupItem aria-label="All" value="all">
          All
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Active" value="active">
          Active
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Completed" value="completed">
          Completed
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Archived" value="archived">
          Archived
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}

function ToggleGroupDateRange() {
  return (
    <Example title="Date Range">
      <ToggleGroup
        defaultValue="today"
        size="sm"
        spacing={2}
        type="single"
        variant="outline"
      >
        <ToggleGroupItem aria-label="Today" value="today">
          Today
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="This Week" value="week">
          This Week
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="This Month" value="month">
          This Month
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="This Year" value="year">
          This Year
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}

function ToggleGroupSort() {
  return (
    <Example title="Sort">
      <ToggleGroup
        defaultValue="newest"
        size="sm"
        type="single"
        variant="outline"
      >
        <ToggleGroupItem aria-label="Newest" value="newest">
          <IconPlaceholder
            hugeicons="ArrowDownIcon"
            lucide="ArrowDownIcon"
            tabler="IconArrowDown"
          />
          Newest
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Oldest" value="oldest">
          <IconPlaceholder
            hugeicons="ArrowUpIcon"
            lucide="ArrowUpIcon"
            tabler="IconArrowUp"
          />
          Oldest
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Popular" value="popular">
          <IconPlaceholder
            hugeicons="TradeUpIcon"
            lucide="TrendingUpIcon"
            tabler="IconTrendingUp"
          />
          Popular
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}

function ToggleGroupWithInputAndSelect() {
  return (
    <Example title="With Input and Select">
      <div className="flex items-center gap-2">
        <Input className="flex-1" placeholder="Search..." type="search" />
        <Select defaultValue="all">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <ToggleGroup defaultValue="grid" type="single" variant="outline">
          <ToggleGroupItem aria-label="Grid view" value="grid">
            Grid
          </ToggleGroupItem>
          <ToggleGroupItem aria-label="List view" value="list">
            List
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </Example>
  );
}

function ToggleGroupVertical() {
  return (
    <Example title="Vertical">
      <ToggleGroup orientation="vertical" spacing={2} type="multiple">
        <ToggleGroupItem aria-label="Toggle bold" value="bold">
          <IconPlaceholder
            hugeicons="TextBoldIcon"
            lucide="BoldIcon"
            tabler="IconBold"
          />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle italic" value="italic">
          <IconPlaceholder
            hugeicons="TextItalicIcon"
            lucide="ItalicIcon"
            tabler="IconItalic"
          />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle underline" value="underline">
          <IconPlaceholder
            hugeicons="TextUnderlineIcon"
            lucide="UnderlineIcon"
            tabler="IconUnderline"
          />
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}

function ToggleGroupVerticalOutline() {
  return (
    <Example title="Vertical Outline">
      <ToggleGroup
        defaultValue="all"
        orientation="vertical"
        size="sm"
        type="single"
        variant="outline"
      >
        <ToggleGroupItem aria-label="Toggle all" value="all">
          All
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle active" value="active">
          Active
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle completed" value="completed">
          Completed
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle archived" value="archived">
          Archived
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}

function ToggleGroupVerticalOutlineWithIcons() {
  return (
    <Example title="Vertical Outline With Icons">
      <ToggleGroup
        orientation="vertical"
        size="sm"
        type="multiple"
        variant="outline"
      >
        <ToggleGroupItem aria-label="Toggle bold" value="bold">
          <IconPlaceholder
            hugeicons="TextBoldIcon"
            lucide="BoldIcon"
            tabler="IconBold"
          />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle italic" value="italic">
          <IconPlaceholder
            hugeicons="TextItalicIcon"
            lucide="ItalicIcon"
            tabler="IconItalic"
          />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle underline" value="underline">
          <IconPlaceholder
            hugeicons="TextUnderlineIcon"
            lucide="UnderlineIcon"
            tabler="IconUnderline"
          />
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}

function ToggleGroupVerticalWithSpacing() {
  return (
    <Example title="Vertical With Spacing">
      <ToggleGroup
        defaultValue="top"
        orientation="vertical"
        size="sm"
        spacing={2}
        type="single"
        variant="outline"
      >
        <ToggleGroupItem aria-label="Toggle top" value="top">
          Top
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle bottom" value="bottom">
          Bottom
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle left" value="left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle right" value="right">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  );
}
