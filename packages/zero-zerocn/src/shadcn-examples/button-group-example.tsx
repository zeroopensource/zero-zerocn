"use client";

import { useState } from "react";
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/radix/ui/button";
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/registry/bases/radix/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/radix/ui/dropdown-menu";
import { Field, FieldGroup } from "@/registry/bases/radix/ui/field";
import { Input } from "@/registry/bases/radix/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/radix/ui/input-group";
import { Label } from "@/registry/bases/radix/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/radix/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/radix/ui/tooltip";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function ButtonGroupExample() {
  return (
    <ExampleWrapper>
      <ButtonGroupBasic />
      <ButtonGroupWithInput />
      <ButtonGroupWithText />
      <ButtonGroupWithDropdown />
      <ButtonGroupWithSelect />
      <ButtonGroupWithIcons />
      <ButtonGroupWithInputGroup />
      <ButtonGroupWithFields />
      <ButtonGroupWithLike />
      <ButtonGroupWithSelectAndInput />
      <ButtonGroupNested />
      <ButtonGroupPagination />
      <ButtonGroupPaginationSplit />
      <ButtonGroupNavigation />
      <ButtonGroupTextAlignment />
      <ButtonGroupVertical />
      <ButtonGroupVerticalNested />
    </ExampleWrapper>
  );
}

function ButtonGroupBasic() {
  return (
    <Example title="Basic">
      <div className="flex flex-col gap-4">
        <ButtonGroup>
          <Button variant="outline">Button</Button>
          <Button variant="outline">Another Button</Button>
        </ButtonGroup>
      </div>
    </Example>
  );
}

function ButtonGroupWithInput() {
  return (
    <Example title="With Input">
      <div className="flex flex-col gap-4">
        <ButtonGroup>
          <Button variant="outline">Button</Button>
          <Input placeholder="Type something here..." />
        </ButtonGroup>
        <ButtonGroup>
          <Input placeholder="Type something here..." />
          <Button variant="outline">Button</Button>
        </ButtonGroup>
      </div>
    </Example>
  );
}

function ButtonGroupWithText() {
  return (
    <Example title="With Text">
      <div className="flex flex-col gap-4">
        <ButtonGroup>
          <ButtonGroupText>Text</ButtonGroupText>
          <Button variant="outline">Another Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <ButtonGroupText asChild>
            <Label htmlFor="input-text">GPU Size</Label>
          </ButtonGroupText>
          <Input id="input-text" placeholder="Type something here..." />
        </ButtonGroup>
      </div>
    </Example>
  );
}

function ButtonGroupWithDropdown() {
  return (
    <Example title="With Dropdown">
      <div className="flex flex-col gap-4">
        <ButtonGroup>
          <Button variant="outline">Update</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <IconPlaceholder
                  hugeicons="ArrowDown01Icon"
                  lucide="ChevronDownIcon"
                  tabler="IconChevronDown"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Disable</DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                Uninstall
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Follow</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <IconPlaceholder
                  hugeicons="ArrowDown01Icon"
                  lucide="ChevronDownIcon"
                  tabler="IconChevronDown"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-50">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <IconPlaceholder
                    hugeicons="VolumeOffIcon"
                    lucide="VolumeOffIcon"
                    tabler="IconVolume"
                  />
                  Mute Conversation
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder
                    hugeicons="Tick02Icon"
                    lucide="CheckIcon"
                    tabler="IconCheck"
                  />
                  Mark as Read
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder
                    hugeicons="AlertCircleIcon"
                    lucide="AlertTriangleIcon"
                    tabler="IconAlertTriangle"
                  />
                  Report Conversation
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder
                    hugeicons="UserRemove01Icon"
                    lucide="UserRoundXIcon"
                    tabler="IconUserX"
                  />
                  Block User
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder
                    hugeicons="Share03Icon"
                    lucide="ShareIcon"
                    tabler="IconShare"
                  />
                  Share Conversation
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder
                    hugeicons="Copy01Icon"
                    lucide="CopyIcon"
                    tabler="IconCopy"
                  />
                  Copy Conversation
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <IconPlaceholder
                    hugeicons="Delete02Icon"
                    lucide="TrashIcon"
                    tabler="IconTrash"
                  />
                  Delete Conversation
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </div>
    </Example>
  );
}

function ButtonGroupWithSelect() {
  const [currency, setCurrency] = useState("$");

  return (
    <Example title="With Select">
      <Field>
        <Label htmlFor="amount">Amount</Label>
        <ButtonGroup>
          <Select onValueChange={setCurrency} value={currency}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="start">
              <SelectItem value="$">$</SelectItem>
              <SelectItem value="€">€</SelectItem>
              <SelectItem value="£">£</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Enter amount to send" />
          <Button variant="outline">
            <IconPlaceholder
              hugeicons="ArrowRight01Icon"
              lucide="ArrowRightIcon"
              tabler="IconArrowRight"
            />
          </Button>
        </ButtonGroup>
      </Field>
    </Example>
  );
}

function ButtonGroupWithIcons() {
  return (
    <Example title="With Icons">
      <div className="flex flex-col gap-4">
        <ButtonGroup>
          <Button variant="outline">
            <IconPlaceholder
              hugeicons="FlipHorizontalIcon"
              lucide="FlipHorizontalIcon"
              tabler="IconFlipHorizontal"
            />
          </Button>
          <Button variant="outline">
            <IconPlaceholder
              hugeicons="FlipVerticalIcon"
              lucide="FlipVerticalIcon"
              tabler="IconFlipVertical"
            />
          </Button>
          <Button variant="outline">
            <IconPlaceholder
              hugeicons="Rotate01Icon"
              lucide="RotateCwIcon"
              tabler="IconRotateClockwise2"
            />
          </Button>
        </ButtonGroup>
      </div>
    </Example>
  );
}

function ButtonGroupWithInputGroup() {
  return (
    <Example title="With Input Group">
      <div className="flex flex-col gap-4">
        <InputGroup>
          <InputGroupInput placeholder="Type to search..." />
          <InputGroupAddon
            align="inline-start"
            className="text-muted-foreground"
          >
            <IconPlaceholder
              hugeicons="Search01Icon"
              lucide="SearchIcon"
              tabler="IconSearch"
            />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </Example>
  );
}

function ButtonGroupWithFields() {
  return (
    <Example title="With Fields">
      <FieldGroup className="grid grid-cols-3 gap-4">
        <Field className="col-span-2">
          <Label htmlFor="width">Width</Label>
          <ButtonGroup>
            <InputGroup>
              <InputGroupInput id="width" />
              <InputGroupAddon className="text-muted-foreground">
                W
              </InputGroupAddon>
              <InputGroupAddon
                align="inline-end"
                className="text-muted-foreground"
              >
                px
              </InputGroupAddon>
            </InputGroup>
            <Button size="icon" variant="outline">
              <IconPlaceholder
                hugeicons="MinusSignIcon"
                lucide="MinusIcon"
                tabler="IconMinus"
              />
            </Button>
            <Button size="icon" variant="outline">
              <IconPlaceholder
                hugeicons="PlusSignIcon"
                lucide="PlusIcon"
                tabler="IconPlus"
              />
            </Button>
          </ButtonGroup>
        </Field>
      </FieldGroup>
    </Example>
  );
}

function ButtonGroupWithLike() {
  return (
    <Example title="With Like">
      <ButtonGroup>
        <Button variant="outline">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="Notification02Icon"
            lucide="HeartIcon"
            tabler="IconBell"
          />{" "}
          Like
        </Button>
        <Button asChild className="w-12" size="icon" variant="outline">
          <span>1.2K</span>
        </Button>
      </ButtonGroup>
    </Example>
  );
}

function ButtonGroupWithSelectAndInput() {
  return (
    <Example title="With Select and Input">
      <ButtonGroup>
        <Select defaultValue="hours">
          <SelectTrigger id="duration">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectItem value="hours">Hours</SelectItem>
            <SelectItem value="days">Days</SelectItem>
            <SelectItem value="weeks">Weeks</SelectItem>
          </SelectContent>
        </Select>
        <Input />
      </ButtonGroup>
    </Example>
  );
}

function ButtonGroupNested() {
  return (
    <Example title="Nested">
      <ButtonGroup>
        <ButtonGroup>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="PlusSignIcon"
              lucide="PlusIcon"
              tabler="IconPlus"
            />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <InputGroup>
            <InputGroupInput placeholder="Send a message..." />
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupAddon align="inline-end">
                  <IconPlaceholder
                    hugeicons="AudioWave01Icon"
                    lucide="AudioLinesIcon"
                    tabler="IconHeadphones"
                  />
                </InputGroupAddon>
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroup>
        </ButtonGroup>
      </ButtonGroup>
    </Example>
  );
}

function ButtonGroupPagination() {
  return (
    <Example title="Pagination">
      <ButtonGroup>
        <Button size="sm" variant="outline">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="ArrowLeft01Icon"
            lucide="ArrowLeftIcon"
            tabler="IconArrowLeft"
          />
          Previous
        </Button>
        <Button size="sm" variant="outline">
          1
        </Button>
        <Button size="sm" variant="outline">
          2
        </Button>
        <Button size="sm" variant="outline">
          3
        </Button>
        <Button size="sm" variant="outline">
          4
        </Button>
        <Button size="sm" variant="outline">
          5
        </Button>
        <Button size="sm" variant="outline">
          Next
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="ArrowRight01Icon"
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
          />
        </Button>
      </ButtonGroup>
    </Example>
  );
}

function ButtonGroupPaginationSplit() {
  return (
    <Example title="Pagination Split">
      <ButtonGroup>
        <ButtonGroup>
          <Button size="sm" variant="outline">
            1
          </Button>
          <Button size="sm" variant="outline">
            2
          </Button>
          <Button size="sm" variant="outline">
            3
          </Button>
          <Button size="sm" variant="outline">
            4
          </Button>
          <Button size="sm" variant="outline">
            5
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="icon-xs" variant="outline">
            <IconPlaceholder
              hugeicons="ArrowLeft01Icon"
              lucide="ArrowLeftIcon"
              tabler="IconArrowLeft"
            />
          </Button>
          <Button size="icon-xs" variant="outline">
            <IconPlaceholder
              hugeicons="ArrowRight01Icon"
              lucide="ArrowRightIcon"
              tabler="IconArrowRight"
            />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </Example>
  );
}

function ButtonGroupNavigation() {
  return (
    <Example title="Navigation">
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">
            <IconPlaceholder
              hugeicons="ArrowLeft01Icon"
              lucide="ArrowLeftIcon"
              tabler="IconArrowLeft"
            />
          </Button>
          <Button variant="outline">
            <IconPlaceholder
              hugeicons="ArrowRight01Icon"
              lucide="ArrowRightIcon"
              tabler="IconArrowRight"
            />
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Single navigation button">
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="ArrowLeft01Icon"
              lucide="ArrowLeftIcon"
              tabler="IconArrowLeft"
            />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </Example>
  );
}

function ButtonGroupTextAlignment() {
  return (
    <Example title="Text Alignment">
      <Field>
        <Label id="alignment-label">Text Alignment</Label>
        <ButtonGroup aria-labelledby="alignment-label">
          <Button size="sm" variant="outline">
            Left
          </Button>
          <Button size="sm" variant="outline">
            Center
          </Button>
          <Button size="sm" variant="outline">
            Right
          </Button>
          <Button size="sm" variant="outline">
            Justify
          </Button>
        </ButtonGroup>
      </Field>
    </Example>
  );
}

function ButtonGroupVertical() {
  return (
    <Example title="Vertical">
      <div className="flex gap-6">
        <ButtonGroup
          aria-label="Media controls"
          className="h-fit"
          orientation="vertical"
        >
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="PlusSignIcon"
              lucide="PlusIcon"
              tabler="IconPlus"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="MinusSignIcon"
              lucide="MinusIcon"
              tabler="IconMinus"
            />
          </Button>
        </ButtonGroup>
      </div>
    </Example>
  );
}

function ButtonGroupVerticalNested() {
  return (
    <Example title="Vertical Nested">
      <ButtonGroup aria-label="Design tools palette" orientation="vertical">
        <ButtonGroup orientation="vertical">
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Search01Icon"
              lucide="SearchIcon"
              tabler="IconSearch"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Copy01Icon"
              lucide="CopyIcon"
              tabler="IconCopy"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Share03Icon"
              lucide="ShareIcon"
              tabler="IconShare"
            />
          </Button>
        </ButtonGroup>
        <ButtonGroup orientation="vertical">
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="FlipHorizontalIcon"
              lucide="FlipHorizontalIcon"
              tabler="IconFlipHorizontal"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="FlipVerticalIcon"
              lucide="FlipVerticalIcon"
              tabler="IconFlipVertical"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Rotate01Icon"
              lucide="RotateCwIcon"
              tabler="IconRotateClockwise2"
            />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Delete02Icon"
              lucide="TrashIcon"
              tabler="IconTrash"
            />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </Example>
  );
}
