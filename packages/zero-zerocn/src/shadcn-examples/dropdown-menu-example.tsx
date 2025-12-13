"use client";

import * as React from "react";
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/radix/ui/avatar";
import { Button } from "@/registry/bases/radix/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/radix/ui/dialog";
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
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function DropdownMenuExample() {
  return (
    <ExampleWrapper>
      <DropdownMenuBasic />
      <DropdownMenuComplex />
      <DropdownMenuWithIcons />
      <DropdownMenuWithShortcuts />
      <DropdownMenuWithSubmenu />
      <DropdownMenuWithCheckboxes />
      <DropdownMenuWithCheckboxesIcons />
      <DropdownMenuWithRadio />
      <DropdownMenuWithRadioIcons />
      <DropdownMenuWithDestructive />
      <DropdownMenuWithAvatar />
      <DropdownMenuInDialog />
    </ExampleWrapper>
  );
}

function DropdownMenuBasic() {
  return (
    <Example title="Basic">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit" variant="outline">
            Open
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Example>
  );
}

function DropdownMenuWithIcons() {
  return (
    <Example title="With Icons">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit" variant="outline">
            Open
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <IconPlaceholder
                hugeicons="UserIcon"
                lucide="UserIcon"
                tabler="IconUser"
              />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder
                hugeicons="CreditCardIcon"
                lucide="CreditCardIcon"
                tabler="IconCreditCard"
              />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder
                hugeicons="SettingsIcon"
                lucide="SettingsIcon"
                tabler="IconSettings"
              />
              Settings
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
              Log out
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Example>
  );
}

function DropdownMenuWithShortcuts() {
  return (
    <Example title="With Shortcuts">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit" variant="outline">
            Open
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Example>
  );
}

function DropdownMenuWithSubmenu() {
  return (
    <Example title="With Submenu">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit" variant="outline">
            Open
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Example>
  );
}

function DropdownMenuWithCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <Example title="With Checkboxes">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit" variant="outline">
            Checkboxes
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-40">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              <IconPlaceholder
                hugeicons="LayoutIcon"
                lucide="LayoutIcon"
                tabler="IconLayout"
              />
              Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showActivityBar}
              disabled
              onCheckedChange={setShowActivityBar}
            >
              <IconPlaceholder
                hugeicons="ActivityIcon"
                lucide="ActivityIcon"
                tabler="IconActivity"
              />
              Activity Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              <IconPlaceholder
                hugeicons="LayoutLeftIcon"
                lucide="PanelLeftIcon"
                tabler="IconLayoutSidebar"
              />
              Panel
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Example>
  );
}

function DropdownMenuWithRadio() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <Example title="With Radio Group">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit" variant="outline">
            Radio Group
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              onValueChange={setPosition}
              value={position}
            >
              <DropdownMenuRadioItem value="top">
                <IconPlaceholder
                  hugeicons="ArrowUp01Icon"
                  lucide="ArrowUpIcon"
                  tabler="IconArrowUp"
                />
                Top
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                <IconPlaceholder
                  hugeicons="ArrowDown01Icon"
                  lucide="ArrowDownIcon"
                  tabler="IconArrowDown"
                />
                Bottom
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem disabled value="right">
                <IconPlaceholder
                  hugeicons="ArrowRight01Icon"
                  lucide="ArrowRightIcon"
                  tabler="IconArrowRight"
                />
                Right
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Example>
  );
}

function DropdownMenuWithCheckboxesIcons() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    sms: false,
    push: true,
  });

  return (
    <Example title="Checkboxes with Icons">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit" variant="outline">
            Notifications
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-56">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Notification Preferences</DropdownMenuLabel>
            <DropdownMenuCheckboxItem
              checked={notifications.email}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, email: checked === true })
              }
            >
              <IconPlaceholder
                hugeicons="MailIcon"
                lucide="MailIcon"
                tabler="IconMail"
              />
              Email notifications
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={notifications.sms}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, sms: checked === true })
              }
            >
              <IconPlaceholder
                hugeicons="MessageIcon"
                lucide="MessageSquareIcon"
                tabler="IconMessage"
              />
              SMS notifications
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={notifications.push}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, push: checked === true })
              }
            >
              <IconPlaceholder
                hugeicons="NotificationIcon"
                lucide="BellIcon"
                tabler="IconBell"
              />
              Push notifications
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Example>
  );
}

function DropdownMenuWithRadioIcons() {
  const [paymentMethod, setPaymentMethod] = React.useState("card");

  return (
    <Example title="Radio with Icons">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Payment Method</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-56">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Select Payment Method</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              onValueChange={setPaymentMethod}
              value={paymentMethod}
            >
              <DropdownMenuRadioItem value="card">
                <IconPlaceholder
                  hugeicons="CreditCardIcon"
                  lucide="CreditCardIcon"
                  tabler="IconCreditCard"
                />
                Credit Card
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="paypal">
                <IconPlaceholder
                  hugeicons="WalletIcon"
                  lucide="WalletIcon"
                  tabler="IconWallet"
                />
                PayPal
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bank">
                <IconPlaceholder
                  hugeicons="BankIcon"
                  lucide="Building2Icon"
                  tabler="IconBuildingBank"
                />
                Bank Transfer
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Example>
  );
}

function DropdownMenuWithDestructive() {
  return (
    <Example title="With Destructive Items">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit" variant="outline">
            Actions
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <IconPlaceholder
                hugeicons="EditIcon"
                lucide="PencilIcon"
                tabler="IconPencil"
              />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconPlaceholder
                hugeicons="ShareIcon"
                lucide="ShareIcon"
                tabler="IconShare"
              />
              Share
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <IconPlaceholder
                hugeicons="Archive02Icon"
                lucide="ArchiveIcon"
                tabler="IconArchive"
              />
              Archive
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <IconPlaceholder
                hugeicons="DeleteIcon"
                lucide="TrashIcon"
                tabler="IconTrash"
              />
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Example>
  );
}

function DropdownMenuWithAvatar() {
  const menuContent = (
    <>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <IconPlaceholder
            hugeicons="CheckmarkBadgeIcon"
            lucide="BadgeCheckIcon"
            tabler="IconRosetteDiscountCheck"
          />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconPlaceholder
            hugeicons="CreditCardIcon"
            lucide="CreditCardIcon"
            tabler="IconCreditCard"
          />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconPlaceholder
            hugeicons="NotificationIcon"
            lucide="BellIcon"
            tabler="IconBell"
          />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <IconPlaceholder
            hugeicons="LogoutIcon"
            lucide="LogOutIcon"
            tabler="IconLogout"
          />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </>
  );

  return (
    <Example title="With Avatar">
      <div className="flex items-center justify-between gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="h-12 justify-start px-2 md:max-w-[200px]"
              variant="outline"
            >
              <Avatar>
                <AvatarImage alt="Shadcn" src="https://github.com/shadcn.png" />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">shadcn</span>
                <span className="truncate text-muted-foreground text-xs">
                  shadcn@example.com
                </span>
              </div>
              <IconPlaceholder
                className="ml-auto text-muted-foreground"
                hugeicons="UnfoldMoreIcon"
                lucide="ChevronsUpDownIcon"
                tabler="IconSelector"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56">
            {menuContent}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <Avatar>
                <AvatarImage alt="shadcn" src="https://github.com/shadcn.png" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="top">
            {menuContent}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Example>
  );
}

function DropdownMenuInDialog() {
  return (
    <Example title="In Dialog">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dropdown Menu Example</DialogTitle>
            <DialogDescription>
              Click the button below to see the dropdown menu.
            </DialogDescription>
          </DialogHeader>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-fit" variant="outline">
                Open Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <IconPlaceholder
                    hugeicons="CopyIcon"
                    lucide="CopyIcon"
                    tabler="IconCopy"
                  />
                  Copy
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder
                    hugeicons="ScissorIcon"
                    lucide="ScissorsIcon"
                    tabler="IconCut"
                  />
                  Cut
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconPlaceholder
                    hugeicons="ClipboardIcon"
                    lucide="ClipboardPasteIcon"
                    tabler="IconClipboard"
                  />
                  Paste
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Save Page...</DropdownMenuItem>
                      <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
                      <DropdownMenuItem>Name Window...</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Developer Tools</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <IconPlaceholder
                    hugeicons="DeleteIcon"
                    lucide="TrashIcon"
                    tabler="IconTrash"
                  />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </DialogContent>
      </Dialog>
    </Example>
  );
}

function DropdownMenuComplex() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    sms: false,
    push: true,
  });
  const [theme, setTheme] = React.useState("light");

  return (
    <Example title="Complex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit" variant="outline">
            Complex Menu
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="style-lyra:w-48 style-maia:w-56 style-mira:w-48 style-nova:w-48 style-vega:w-56">
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
                setNotifications({ ...notifications, email: checked === true })
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
                setNotifications({ ...notifications, sms: checked === true })
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
    </Example>
  );
}
