"use client";

import { useState } from "react";
import { toast } from "sonner";
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/radix/ui/button";
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/registry/bases/radix/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/radix/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/bases/radix/ui/dropdown-menu";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/radix/ui/field";
import { Input } from "@/registry/bases/radix/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/bases/radix/ui/input-group";
import { Kbd, KbdGroup } from "@/registry/bases/radix/ui/kbd";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/bases/radix/ui/popover";
import { Spinner } from "@/registry/bases/radix/ui/spinner";
import { Textarea } from "@/registry/bases/radix/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/radix/ui/tooltip";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function InputGroupExample() {
  const [country, setCountry] = useState("+1");

  return (
    <ExampleWrapper className="min-w-0">
      <InputGroupBasic />
      <InputGroupWithAddons />
      <InputGroupWithButtons />
      <InputGroupWithTooltip country={country} setCountry={setCountry} />
      <InputGroupWithKbd />
      <InputGroupInCard />
      <InputGroupTextareaExamples />
    </ExampleWrapper>
  );
}

function InputGroupBasic() {
  return (
    <Example title="Basic">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-default-01">
            Default (No Input Group)
          </FieldLabel>
          <Input id="input-default-01" placeholder="Placeholder" />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-group-02">Input Group</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-group-02" placeholder="Placeholder" />
          </InputGroup>
        </Field>
        <Field data-disabled="true">
          <FieldLabel htmlFor="input-disabled-03">Disabled</FieldLabel>
          <InputGroup>
            <InputGroupInput
              disabled
              id="input-disabled-03"
              placeholder="This field is disabled"
            />
          </InputGroup>
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="input-invalid-04">Invalid</FieldLabel>
          <InputGroup>
            <InputGroupInput
              aria-invalid="true"
              id="input-invalid-04"
              placeholder="This field is invalid"
            />
          </InputGroup>
        </Field>
      </FieldGroup>
    </Example>
  );
}

function InputGroupWithAddons() {
  return (
    <Example title="With Addons">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-icon-left-05">
            Addon (inline-start)
          </FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-icon-left-05" />
            <InputGroupAddon>
              <IconPlaceholder
                className="text-muted-foreground"
                hugeicons="SearchIcon"
                lucide="SearchIcon"
                tabler="IconSearch"
              />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-icon-right-07">
            Addon (inline-end)
          </FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-icon-right-07" />
            <InputGroupAddon align="inline-end">
              <IconPlaceholder
                hugeicons="ViewOffIcon"
                lucide="EyeOffIcon"
                tabler="IconEyeClosed"
              />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-icon-both-09">
            Addon (inline-start and inline-end)
          </FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-icon-both-09" />
            <InputGroupAddon>
              <IconPlaceholder
                className="text-muted-foreground"
                hugeicons="VoiceIcon"
                lucide="MicIcon"
                tabler="IconMicrophone"
              />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <IconPlaceholder
                className="animate-pulse text-red-500"
                hugeicons="RecordIcon"
                lucide="RadioIcon"
                tabler="IconPlayerRecordFilled"
              />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-addon-20">Addon (block-start)</FieldLabel>
          <InputGroup className="h-auto">
            <InputGroupInput id="input-addon-20" />
            <InputGroupAddon align="block-start">
              <InputGroupText>First Name</InputGroupText>
              <IconPlaceholder
                className="ml-auto text-muted-foreground"
                hugeicons="AlertCircleIcon"
                lucide="InfoIcon"
                tabler="IconInfoCircle"
              />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-addon-21">Addon (block-end)</FieldLabel>
          <InputGroup className="h-auto">
            <InputGroupInput id="input-addon-21" />
            <InputGroupAddon align="block-end">
              <InputGroupText>20/240 characters</InputGroupText>
              <IconPlaceholder
                className="ml-auto text-muted-foreground"
                hugeicons="AlertCircleIcon"
                lucide="InfoIcon"
                tabler="IconInfoCircle"
              />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-icon-both-10">Multiple Icons</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-icon-both-10" />
            <InputGroupAddon align="inline-end">
              <IconPlaceholder
                hugeicons="StarIcon"
                lucide="StarIcon"
                tabler="IconStar"
              />
              <InputGroupButton
                onClick={() => toast("Copied to clipboard")}
                size="icon-xs"
              >
                <IconPlaceholder
                  hugeicons="CopyIcon"
                  lucide="CopyIcon"
                  tabler="IconCopy"
                />
              </InputGroupButton>
            </InputGroupAddon>
            <InputGroupAddon>
              <IconPlaceholder
                className="animate-pulse text-red-500"
                hugeicons="RecordIcon"
                lucide="RadioIcon"
                tabler="IconPlayerRecordFilled"
              />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-description-10">Description</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-description-10" />
            <InputGroupAddon align="inline-end">
              <IconPlaceholder
                hugeicons="AlertCircleIcon"
                lucide="InfoIcon"
                tabler="IconInfoCircle"
              />
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            This is a description of the input group.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-label-10">Label</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <FieldLabel htmlFor="input-label-10">Label</FieldLabel>
            </InputGroupAddon>
            <InputGroupInput id="input-label-10" />
          </InputGroup>
          <InputGroup>
            <InputGroupInput aria-label="Optional" id="input-optional-12" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>(optional)</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </FieldGroup>
    </Example>
  );
}

function InputGroupWithButtons() {
  return (
    <Example title="With Buttons">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-button-13">Button</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-button-13" />
            <InputGroupAddon>
              <InputGroupButton>Default</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput id="input-button-14" />
            <InputGroupAddon>
              <InputGroupButton variant="outline">Outline</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput id="input-button-15" />
            <InputGroupAddon>
              <InputGroupButton variant="secondary">Secondary</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput id="input-button-16" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton variant="secondary">Button</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput id="input-button-17" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs">
                <IconPlaceholder
                  hugeicons="CopyIcon"
                  lucide="CopyIcon"
                  tabler="IconCopy"
                />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput id="input-button-18" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" variant="secondary">
                <IconPlaceholder
                  hugeicons="DeleteIcon"
                  lucide="TrashIcon"
                  tabler="IconTrash"
                />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </FieldGroup>
    </Example>
  );
}

function InputGroupWithTooltip({
  country,
  setCountry,
}: {
  country: string;
  setCountry: (value: string) => void;
}) {
  return (
    <Example title="With Tooltip, Dropdown, Popover">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-tooltip-20">Tooltip</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-tooltip-20" />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton className="rounded-full" size="icon-xs">
                    <IconPlaceholder
                      hugeicons="AlertCircleIcon"
                      lucide="InfoIcon"
                      tabler="IconInfoCircle"
                    />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>This is content in a tooltip.</TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            This is a description of the input group.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-dropdown-21">Dropdown</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-dropdown-21" />
            <InputGroupAddon>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <InputGroupButton className="text-muted-foreground tabular-nums">
                    {country}{" "}
                    <IconPlaceholder
                      hugeicons="ArrowDownIcon"
                      lucide="ChevronDownIcon"
                      tabler="IconChevronDown"
                    />
                  </InputGroupButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  alignOffset={-8}
                  className="min-w-16"
                  sideOffset={10}
                >
                  <DropdownMenuItem onClick={() => setCountry("+1")}>
                    +1
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setCountry("+44")}>
                    +44
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setCountry("+46")}>
                    +46
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            This is a description of the input group.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-secure-19">Popover</FieldLabel>
          <InputGroup>
            <Popover>
              <PopoverTrigger asChild>
                <InputGroupAddon>
                  <InputGroupButton size="icon-xs" variant="secondary">
                    <IconPlaceholder
                      hugeicons="AlertCircleIcon"
                      lucide="InfoIcon"
                      tabler="IconInfoCircle"
                    />
                  </InputGroupButton>
                </InputGroupAddon>
              </PopoverTrigger>
              <PopoverContent align="start">
                <PopoverHeader>
                  <PopoverTitle>Your connection is not secure.</PopoverTitle>
                  <PopoverDescription>
                    You should not enter any sensitive information on this site.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
            <InputGroupAddon className="pl-1 text-muted-foreground">
              https://
            </InputGroupAddon>
            <InputGroupInput id="input-secure-19" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                onClick={() => toast("Added to favorites")}
                size="icon-xs"
              >
                <IconPlaceholder
                  hugeicons="StarIcon"
                  lucide="StarIcon"
                  tabler="IconStar"
                />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            This is a description of the input group.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="url">Button Group</FieldLabel>
          <ButtonGroup>
            <ButtonGroupText>https://</ButtonGroupText>
            <InputGroup>
              <InputGroupInput id="url" />
              <InputGroupAddon align="inline-end">
                <IconPlaceholder
                  hugeicons="AlertCircleIcon"
                  lucide="InfoIcon"
                  tabler="IconInfoCircle"
                />
              </InputGroupAddon>
            </InputGroup>
            <ButtonGroupText>.com</ButtonGroupText>
          </ButtonGroup>
          <FieldDescription>
            This is a description of the input group.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </Example>
  );
}

function InputGroupWithKbd() {
  return (
    <Example title="With Kbd">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-kbd-22">Input Group with Kbd</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-kbd-22" />
            <InputGroupAddon>
              <Kbd>⌘K</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput id="input-kbd-23" />
            <InputGroupAddon align="inline-end">
              <Kbd>⌘K</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput
              id="input-search-apps-24"
              placeholder="Search for Apps..."
            />
            <InputGroupAddon align="inline-end">Ask AI</InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Kbd>Tab</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput
              id="input-search-type-25"
              placeholder="Type to search..."
            />
            <InputGroupAddon align="inline-start">
              <IconPlaceholder
                hugeicons="SparklesIcon"
                lucide="SparklesIcon"
                tabler="IconServerSpark"
              />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>C</Kbd>
              </KbdGroup>
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-username-26">Username</FieldLabel>
          <InputGroup>
            <InputGroupInput defaultValue="shadcn" id="input-username-26" />
            <InputGroupAddon align="inline-end">
              <div className="flex size-4 items-center justify-center rounded-full bg-green-500 dark:bg-green-800">
                <IconPlaceholder
                  className="size-3 text-white"
                  hugeicons="Tick02Icon"
                  lucide="CheckIcon"
                  tabler="IconCheck"
                />
              </div>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription className="text-green-700">
            This username is available.
          </FieldDescription>
        </Field>
        <InputGroup>
          <InputGroupInput
            id="input-search-docs-27"
            placeholder="Search documentation..."
          />
          <InputGroupAddon>
            <IconPlaceholder
              hugeicons="SearchIcon"
              lucide="SearchIcon"
              tabler="IconSearch"
            />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
        </InputGroup>
        <InputGroup data-disabled="true">
          <InputGroupInput
            disabled
            id="input-search-disabled-28"
            placeholder="Search documentation..."
          />
          <InputGroupAddon>
            <IconPlaceholder
              hugeicons="SearchIcon"
              lucide="SearchIcon"
              tabler="IconSearch"
            />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">Disabled</InputGroupAddon>
        </InputGroup>
        <FieldGroup className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="input-group-11">First Name</FieldLabel>
            <InputGroup>
              <InputGroupInput id="input-group-11" placeholder="First Name" />
              <InputGroupAddon align="inline-end">
                <IconPlaceholder
                  hugeicons="AlertCircleIcon"
                  lucide="InfoIcon"
                  tabler="IconInfoCircle"
                />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="input-group-12">Last Name</FieldLabel>
            <InputGroup>
              <InputGroupInput id="input-group-12" placeholder="Last Name" />
              <InputGroupAddon align="inline-end">
                <IconPlaceholder
                  hugeicons="AlertCircleIcon"
                  lucide="InfoIcon"
                  tabler="IconInfoCircle"
                />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
        <Field data-disabled="true">
          <FieldLabel htmlFor="input-group-29">
            Loading (&quot;data-disabled=&quot;true&quot;)
          </FieldLabel>
          <InputGroup>
            <InputGroupInput
              defaultValue="shadcn"
              disabled
              id="input-group-29"
            />
            <InputGroupAddon align="inline-end">
              <Spinner />
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            This is a description of the input group.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </Example>
  );
}

function InputGroupInCard() {
  return (
    <Example title="In Card">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Card with Input Group</CardTitle>
          <CardDescription>This is a card with an input group.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email-input">Email Address</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="email-input"
                  placeholder="you@example.com"
                  type="email"
                />
                <InputGroupAddon align="inline-end">
                  <IconPlaceholder
                    hugeicons="MailIcon"
                    lucide="MailIcon"
                    tabler="IconMail"
                  />
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="website-input">Website URL</FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput id="website-input" placeholder="example.com" />
                <InputGroupAddon align="inline-end">
                  <IconPlaceholder
                    hugeicons="LinkSquare02Icon"
                    lucide="ExternalLinkIcon"
                    tabler="IconExternalLink"
                  />
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="feedback-textarea">
                Feedback & Comments
              </FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  className="min-h-[100px]"
                  id="feedback-textarea"
                  placeholder="Share your thoughts..."
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText>0/500 characters</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </Example>
  );
}

function InputGroupTextareaExamples() {
  return (
    <Example title="Textarea">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="textarea-header-footer-12">
            Default Textarea (No Input Group)
          </FieldLabel>
          <Textarea
            id="textarea-header-footer-12"
            placeholder="Enter your text here..."
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="textarea-header-footer-13">
            Input Group
          </FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              id="textarea-header-footer-13"
              placeholder="Enter your text here..."
            />
          </InputGroup>
          <FieldDescription>
            This is a description of the input group.
          </FieldDescription>
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="textarea-header-footer-14">Invalid</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              aria-invalid="true"
              id="textarea-header-footer-14"
              placeholder="Enter your text here..."
            />
          </InputGroup>
          <FieldDescription>
            This is a description of the input group.
          </FieldDescription>
        </Field>
        <Field data-disabled="true">
          <FieldLabel htmlFor="textarea-header-footer-15">Disabled</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              disabled
              id="textarea-header-footer-15"
              placeholder="Enter your text here..."
            />
          </InputGroup>
          <FieldDescription>
            This is a description of the input group.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="prompt-31">Addon (block-start)</FieldLabel>
          <InputGroup>
            <InputGroupTextarea id="prompt-31" />
            <InputGroupAddon align="block-start">
              <InputGroupText>Ask, Search or Chat...</InputGroupText>
              <IconPlaceholder
                className="ml-auto text-muted-foreground"
                hugeicons="AlertCircleIcon"
                lucide="InfoIcon"
                tabler="IconInfoCircle"
              />
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            This is a description of the input group.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="textarea-header-footer-30">
            Addon (block-end)
          </FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              id="textarea-header-footer-30"
              placeholder="Enter your text here..."
            />
            <InputGroupAddon align="block-end">
              <InputGroupText>0/280 characters</InputGroupText>
              <InputGroupButton
                className="ml-auto rounded-full"
                size="icon-xs"
                variant="default"
              >
                <IconPlaceholder
                  hugeicons="ArrowUpIcon"
                  lucide="ArrowUpIcon"
                  tabler="IconArrowUp"
                />
                <span className="sr-only">Send</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="textarea-comment-31">Addon (Buttons)</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              className="min-h-[120px]"
              id="textarea-comment-31"
              placeholder="Share your thoughts..."
            />
            <InputGroupAddon align="block-end">
              <InputGroupButton className="ml-auto" size="sm" variant="ghost">
                Cancel
              </InputGroupButton>
              <InputGroupButton size="sm" variant="default">
                Post Comment
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="textarea-code-32">Code Editor</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              className="min-h-[300px] py-3"
              id="textarea-code-32"
              placeholder="console.log('Hello, world!');"
            />
            <InputGroupAddon align="block-start" className="border-b">
              <InputGroupText className="font-medium font-mono">
                <IconPlaceholder
                  hugeicons="CodeIcon"
                  lucide="CodeIcon"
                  tabler="IconBrandJavascript"
                />
                script.js
              </InputGroupText>
              <InputGroupButton className="ml-auto" size="icon-xs">
                <IconPlaceholder
                  hugeicons="RefreshIcon"
                  lucide="RefreshCwIcon"
                  tabler="IconRefresh"
                />
              </InputGroupButton>
              <InputGroupButton size="icon-xs" variant="ghost">
                <IconPlaceholder
                  hugeicons="CopyIcon"
                  lucide="CopyIcon"
                  tabler="IconCopy"
                />
              </InputGroupButton>
            </InputGroupAddon>
            <InputGroupAddon align="block-end" className="border-t">
              <InputGroupText>Line 1, Column 1</InputGroupText>
              <InputGroupText className="ml-auto">JavaScript</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </FieldGroup>
    </Example>
  );
}
