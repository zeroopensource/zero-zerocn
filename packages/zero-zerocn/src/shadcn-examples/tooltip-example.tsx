"use client";

import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/radix/ui/button";
import { Kbd } from "@/registry/bases/radix/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/radix/ui/tooltip";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function TooltipExample() {
  return (
    <ExampleWrapper>
      <TooltipBasic />
      <TooltipSides />
      <TooltipWithIcon />
      <TooltipLongContent />
      <TooltipDisabled />
      <TooltipWithKeyboard />
      <TooltipOnLink />
      <TooltipFormatted />
    </ExampleWrapper>
  );
}

function TooltipBasic() {
  return (
    <Example title="Basic">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="w-fit" variant="outline">
            Show Tooltip
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </Example>
  );
}

function TooltipSides() {
  return (
    <Example title="Sides">
      <div className="flex flex-wrap gap-2">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button className="w-fit capitalize" variant="outline">
                {side}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Example>
  );
}

function TooltipWithIcon() {
  return (
    <Example title="With Icon">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost">
            <IconPlaceholder
              hugeicons="AlertCircleIcon"
              lucide="InfoIcon"
              tabler="IconInfoCircle"
            />
            <span className="sr-only">Info</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Additional information</p>
        </TooltipContent>
      </Tooltip>
    </Example>
  );
}

function TooltipLongContent() {
  return (
    <Example title="Long Content">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="w-fit" variant="outline">
            Show Tooltip
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          To learn more about how this works, check out the docs. If you have
          any questions, please reach out to us.
        </TooltipContent>
      </Tooltip>
    </Example>
  );
}

function TooltipDisabled() {
  return (
    <Example title="Disabled">
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block w-fit">
            <Button disabled variant="outline">
              Disabled
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>This feature is currently unavailable</p>
        </TooltipContent>
      </Tooltip>
    </Example>
  );
}

function TooltipWithKeyboard() {
  return (
    <Example title="With Keyboard Shortcut">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon-sm" variant="outline">
            <IconPlaceholder
              hugeicons="FloppyDiskIcon"
              lucide="SaveIcon"
              tabler="IconDeviceFloppy"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="pr-1.5">
          <div className="flex items-center gap-2">
            Save Changes <Kbd>S</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>
    </Example>
  );
}

function TooltipOnLink() {
  return (
    <Example title="On Link">
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            className="w-fit text-primary text-sm underline-offset-4 hover:underline"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Learn more
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to read the documentation</p>
        </TooltipContent>
      </Tooltip>
    </Example>
  );
}

function TooltipFormatted() {
  return (
    <Example title="Formatted Content">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="w-fit" variant="outline">
            Status
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Active</p>
            <p className="text-xs opacity-80">Last updated 2 hours ago</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </Example>
  );
}
