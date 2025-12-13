"use client";

import * as React from "react";
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/bases/radix/ui/alert-dialog";
import { Badge } from "@/registry/bases/radix/ui/badge";
import { Button } from "@/registry/bases/radix/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/radix/ui/card";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/bases/radix/ui/combobox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/bases/radix/ui/dropdown-menu";
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/radix/ui/field";
import { Input } from "@/registry/bases/radix/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/radix/ui/select";
import { Textarea } from "@/registry/bases/radix/ui/textarea";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export function ComponentExample() {
  return (
    <ExampleWrapper>
      <CardExample />
      <FormExample />
    </ExampleWrapper>
  );
}

function CardExample() {
  return (
    <Example className="items-center justify-center" title="Card">
      <Card className="relative w-full max-w-sm overflow-hidden pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-primary opacity-50 mix-blend-color" />
        <img
          alt="Photo by mymind on Unsplash"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
          src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Photo by mymind on Unsplash"
        />
        <CardHeader>
          <CardTitle>Observability Plus is replacing Monitoring</CardTitle>
          <CardDescription>
            Switch to the improved way to explore your data, with natural
            language. Monitoring will no longer be available on the Pro plan in
            November, 2025
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>
                <IconPlaceholder
                  data-icon="inline-start"
                  hugeicons="PlusSignIcon"
                  lucide="PlusIcon"
                  tabler="IconPlus"
                />
                Show Dialog
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <IconPlaceholder
                    hugeicons="BluetoothIcon"
                    lucide="BluetoothIcon"
                    tabler="IconBluetooth"
                  />
                </AlertDialogMedia>
                <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
                <AlertDialogDescription>
                  Do you want to allow the USB accessory to connect to this
                  device?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
                <AlertDialogAction>Allow</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Badge className="ml-auto" variant="secondary">
            Warning
          </Badge>
        </CardFooter>
      </Card>
    </Example>
  );
}

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const;

function FormExample() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    sms: false,
    push: true,
  });
  const [theme, setTheme] = React.useState("light");

  return (
    <Example title="Form">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <CardDescription>Please fill in your details below</CardDescription>
          <CardAction>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                  <IconPlaceholder
                    hugeicons="MoreVerticalCircle01Icon"
                    lucide="MoreVerticalIcon"
                    tabler="IconDotsVertical"
                  />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>File</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <IconPlaceholder
                      hugeicons="FileIcon"
                      lucide="FileIcon"
                      tabler="IconFile"
                    />
                    New File
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconPlaceholder
                      hugeicons="FolderIcon"
                      lucide="FolderIcon"
                      tabler="IconFolder"
                    />
                    New Folder
                    <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <IconPlaceholder
                        hugeicons="FolderOpenIcon"
                        lucide="FolderOpenIcon"
                        tabler="IconFolderOpen"
                      />
                      Open Recent
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Recent Projects</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <IconPlaceholder
                              hugeicons="CodeIcon"
                              lucide="FileCodeIcon"
                              tabler="IconFileCode"
                            />
                            Project Alpha
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconPlaceholder
                              hugeicons="CodeIcon"
                              lucide="FileCodeIcon"
                              tabler="IconFileCode"
                            />
                            Project Beta
                          </DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <IconPlaceholder
                                hugeicons="MoreHorizontalCircle01Icon"
                                lucide="MoreHorizontalIcon"
                                tabler="IconDots"
                              />
                              More Projects
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                  <IconPlaceholder
                                    hugeicons="CodeIcon"
                                    lucide="FileCodeIcon"
                                    tabler="IconFileCode"
                                  />
                                  Project Gamma
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <IconPlaceholder
                                    hugeicons="CodeIcon"
                                    lucide="FileCodeIcon"
                                    tabler="IconFileCode"
                                  />
                                  Project Delta
                                </DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <IconPlaceholder
                              hugeicons="SearchIcon"
                              lucide="FolderSearchIcon"
                              tabler="IconFolderSearch"
                            />
                            Browse...
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <IconPlaceholder
                      hugeicons="FloppyDiskIcon"
                      lucide="SaveIcon"
                      tabler="IconDeviceFloppy"
                    />
                    Save
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconPlaceholder
                      hugeicons="DownloadIcon"
                      lucide="DownloadIcon"
                      tabler="IconDownload"
                    />
                    Export
                    <DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>View</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={notifications.email}
                    onCheckedChange={(checked) =>
                      setNotifications({
                        ...notifications,
                        email: checked === true,
                      })
                    }
                  >
                    <IconPlaceholder
                      hugeicons="EyeIcon"
                      lucide="EyeIcon"
                      tabler="IconEye"
                    />
                    Show Sidebar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={notifications.sms}
                    onCheckedChange={(checked) =>
                      setNotifications({
                        ...notifications,
                        sms: checked === true,
                      })
                    }
                  >
                    <IconPlaceholder
                      hugeicons="LayoutIcon"
                      lucide="LayoutIcon"
                      tabler="IconLayout"
                    />
                    Show Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <IconPlaceholder
                        hugeicons="PaintBoardIcon"
                        lucide="PaletteIcon"
                        tabler="IconPalette"
                      />
                      Theme
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                          <DropdownMenuRadioGroup
                            onValueChange={setTheme}
                            value={theme}
                          >
                            <DropdownMenuRadioItem value="light">
                              <IconPlaceholder
                                hugeicons="SunIcon"
                                lucide="SunIcon"
                                tabler="IconSun"
                              />
                              Light
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="dark">
                              <IconPlaceholder
                                hugeicons="MoonIcon"
                                lucide="MoonIcon"
                                tabler="IconMoon"
                              />
                              Dark
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="system">
                              <IconPlaceholder
                                hugeicons="ComputerIcon"
                                lucide="MonitorIcon"
                                tabler="IconDeviceDesktop"
                              />
                              System
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <IconPlaceholder
                      hugeicons="UserIcon"
                      lucide="UserIcon"
                      tabler="IconUser"
                    />
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconPlaceholder
                      hugeicons="CreditCardIcon"
                      lucide="CreditCardIcon"
                      tabler="IconCreditCard"
                    />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <IconPlaceholder
                        hugeicons="SettingsIcon"
                        lucide="SettingsIcon"
                        tabler="IconSettings"
                      />
                      Settings
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <IconPlaceholder
                              hugeicons="KeyboardIcon"
                              lucide="KeyboardIcon"
                              tabler="IconKeyboard"
                            />
                            Keyboard Shortcuts
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconPlaceholder
                              hugeicons="LanguageCircleIcon"
                              lucide="LanguagesIcon"
                              tabler="IconLanguage"
                            />
                            Language
                          </DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <IconPlaceholder
                                hugeicons="NotificationIcon"
                                lucide="BellIcon"
                                tabler="IconBell"
                              />
                              Notifications
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                <DropdownMenuGroup>
                                  <DropdownMenuLabel>
                                    Notification Types
                                  </DropdownMenuLabel>
                                  <DropdownMenuCheckboxItem
                                    checked={notifications.push}
                                    onCheckedChange={(checked) =>
                                      setNotifications({
                                        ...notifications,
                                        push: checked === true,
                                      })
                                    }
                                  >
                                    <IconPlaceholder
                                      hugeicons="NotificationIcon"
                                      lucide="BellIcon"
                                      tabler="IconBell"
                                    />
                                    Push Notifications
                                  </DropdownMenuCheckboxItem>
                                  <DropdownMenuCheckboxItem
                                    checked={notifications.email}
                                    onCheckedChange={(checked) =>
                                      setNotifications({
                                        ...notifications,
                                        email: checked === true,
                                      })
                                    }
                                  >
                                    <IconPlaceholder
                                      hugeicons="MailIcon"
                                      lucide="MailIcon"
                                      tabler="IconMail"
                                    />
                                    Email Notifications
                                  </DropdownMenuCheckboxItem>
                                </DropdownMenuGroup>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <IconPlaceholder
                              hugeicons="ShieldIcon"
                              lucide="ShieldIcon"
                              tabler="IconShield"
                            />
                            Privacy & Security
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <IconPlaceholder
                      hugeicons="HelpCircleIcon"
                      lucide="HelpCircleIcon"
                      tabler="IconHelpCircle"
                    />
                    Help & Support
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconPlaceholder
                      hugeicons="File01Icon"
                      lucide="FileTextIcon"
                      tabler="IconFileText"
                    />
                    Documentation
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem variant="destructive">
                    <IconPlaceholder
                      hugeicons="LogoutIcon"
                      lucide="LogOutIcon"
                      tabler="IconLogout"
                    />
                    Sign Out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="small-form-name">Name</FieldLabel>
                  <Input
                    id="small-form-name"
                    placeholder="Enter your name"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="small-form-role">Role</FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="small-form-role">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="small-form-framework">
                  Framework
                </FieldLabel>
                <Combobox items={frameworks}>
                  <ComboboxInput
                    id="small-form-framework"
                    placeholder="Select a framework"
                    required
                  />
                  <ComboboxContent>
                    <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item) => (
                        <ComboboxItem key={item} value={item}>
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </Field>
              <Field>
                <FieldLabel htmlFor="small-form-comments">Comments</FieldLabel>
                <Textarea
                  id="small-form-comments"
                  placeholder="Add any additional comments"
                />
              </Field>
              <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </Example>
  );
}
