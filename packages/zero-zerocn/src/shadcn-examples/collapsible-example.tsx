"use client";

import * as React from "react";
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/radix/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/radix/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/radix/ui/collapsible";
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/radix/ui/field";
import { Input } from "@/registry/bases/radix/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/registry/bases/radix/ui/tabs";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function CollapsibleExample() {
  return (
    <ExampleWrapper>
      <CollapsibleFileTree />
      <CollapsibleSettings />
    </ExampleWrapper>
  );
}

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] };

function CollapsibleFileTree() {
  const fileTree: FileTreeItem[] = [
    {
      name: "components",
      items: [
        {
          name: "ui",
          items: [
            { name: "button.tsx" },
            { name: "card.tsx" },
            { name: "dialog.tsx" },
            { name: "input.tsx" },
            { name: "select.tsx" },
            { name: "table.tsx" },
          ],
        },
        { name: "login-form.tsx" },
        { name: "register-form.tsx" },
      ],
    },
    {
      name: "lib",
      items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }],
    },
    {
      name: "hooks",
      items: [
        { name: "use-media-query.ts" },
        { name: "use-debounce.ts" },
        { name: "use-local-storage.ts" },
      ],
    },
    {
      name: "types",
      items: [{ name: "index.d.ts" }, { name: "api.d.ts" }],
    },
    {
      name: "public",
      items: [
        { name: "favicon.ico" },
        { name: "logo.svg" },
        { name: "images" },
      ],
    },
    { name: "app.tsx" },
    { name: "layout.tsx" },
    { name: "globals.css" },
    { name: "package.json" },
    { name: "tsconfig.json" },
    { name: "README.md" },
    { name: ".gitignore" },
  ];

  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <CollapsibleTrigger asChild>
            <Button
              className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
              size="sm"
              variant="ghost"
            >
              <IconPlaceholder
                className="transition-transform group-data-[state=open]:rotate-90"
                hugeicons="ArrowRight01Icon"
                lucide="ChevronRightIcon"
                tabler="IconChevronRight"
              />
              <IconPlaceholder
                hugeicons="Folder01Icon"
                lucide="FolderIcon"
                tabler="IconFolder"
              />
              {fileItem.name}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-1 ml-5 style-lyra:ml-4">
            <div className="flex flex-col gap-1">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    }
    return (
      <Button
        className="w-full justify-start gap-2 text-foreground"
        key={fileItem.name}
        size="sm"
        variant="link"
      >
        <IconPlaceholder
          hugeicons="File01Icon"
          lucide="FileIcon"
          tabler="IconFile"
        />
        <span>{fileItem.name}</span>
      </Button>
    );
  };

  return (
    <Example className="items-center" title="File Tree">
      <Card className="mx-auto w-full max-w-[16rem] gap-2" size="sm">
        <CardHeader>
          <Tabs defaultValue="explorer">
            <TabsList className="w-full">
              <TabsTrigger value="explorer">Explorer</TabsTrigger>
              <TabsTrigger value="settings">Outline</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-1">
            {fileTree.map((item) => renderItem(item))}
          </div>
        </CardContent>
      </Card>
    </Example>
  );
}

function CollapsibleSettings() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Example className="items-center" title="Settings">
      <Card className="mx-auto w-full max-w-xs" size="sm">
        <CardHeader>
          <CardTitle>Radius</CardTitle>
          <CardDescription>
            Set the corner radius of the element.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Collapsible
            className="flex items-start gap-2"
            onOpenChange={setIsOpen}
            open={isOpen}
          >
            <FieldGroup className="grid w-full grid-cols-2 gap-2">
              <Field>
                <FieldLabel className="sr-only" htmlFor="radius-x">
                  Radius X
                </FieldLabel>
                <Input defaultValue={0} id="radius" placeholder="0" />
              </Field>
              <Field>
                <FieldLabel className="sr-only" htmlFor="radius-y">
                  Radius Y
                </FieldLabel>
                <Input defaultValue={0} id="radius" placeholder="0" />
              </Field>
              <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
                <Field>
                  <FieldLabel className="sr-only" htmlFor="radius-x">
                    Radius X
                  </FieldLabel>
                  <Input defaultValue={0} id="radius" placeholder="0" />
                </Field>
                <Field>
                  <FieldLabel className="sr-only" htmlFor="radius-y">
                    Radius Y
                  </FieldLabel>
                  <Input defaultValue={0} id="radius" placeholder="0" />
                </Field>
              </CollapsibleContent>
            </FieldGroup>
            <CollapsibleTrigger asChild>
              <Button size="icon" variant="outline">
                {isOpen ? (
                  <IconPlaceholder
                    hugeicons="MinusSignIcon"
                    lucide="MinimizeIcon"
                    tabler="IconMinimize"
                  />
                ) : (
                  <IconPlaceholder
                    hugeicons="PlusSignIcon"
                    lucide="MaximizeIcon"
                    tabler="IconMaximize"
                  />
                )}
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </CardContent>
      </Card>
    </Example>
  );
}
