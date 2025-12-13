import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/radix/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/radix/ui/dropdown-menu";
import { Input } from "@/registry/bases/radix/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/radix/ui/tabs";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function TabsExample() {
  return (
    <ExampleWrapper>
      <TabsBasic />
      <TabsLine />
      <TabsVariantsComparison />
      <TabsDisabled />
      <TabsWithIcons />
      <TabsIconOnly />
      <TabsMultiple />
      <TabsWithContent />
      <TabsLineWithContent />
      <TabsLineDisabled />
      <TabsWithDropdown />
      <TabsVertical />
      <TabsWithInputAndButton />
    </ExampleWrapper>
  );
}

function TabsBasic() {
  return (
    <Example title="Basic">
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  );
}

function TabsLine() {
  return (
    <Example title="Line">
      <Tabs defaultValue="overview">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  );
}

function TabsVariantsComparison() {
  return (
    <Example title="Variants Alignment">
      <div className="flex gap-4">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs defaultValue="overview">
          <TabsList variant="line">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </Example>
  );
}

function TabsDisabled() {
  return (
    <Example title="Disabled">
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger disabled value="settings">
            Disabled
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  );
}

function TabsWithIcons() {
  return (
    <Example title="With Icons">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">
            <IconPlaceholder
              hugeicons="CursorInWindowIcon"
              lucide="AppWindowIcon"
              tabler="IconAppWindow"
            />
            Preview
          </TabsTrigger>
          <TabsTrigger value="code">
            <IconPlaceholder
              hugeicons="CodeIcon"
              lucide="CodeIcon"
              tabler="IconCode"
            />
            Code
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  );
}

function TabsIconOnly() {
  return (
    <Example title="Icon Only">
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">
            <IconPlaceholder
              hugeicons="HomeIcon"
              lucide="HomeIcon"
              tabler="IconHome"
            />
          </TabsTrigger>
          <TabsTrigger value="search">
            <IconPlaceholder
              hugeicons="SearchIcon"
              lucide="SearchIcon"
              tabler="IconSearch"
            />
          </TabsTrigger>
          <TabsTrigger value="settings">
            <IconPlaceholder
              hugeicons="SettingsIcon"
              lucide="SettingsIcon"
              tabler="IconSettings"
            />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  );
}

function TabsMultiple() {
  return (
    <Example title="Multiple">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  );
}

function TabsWithContent() {
  return (
    <Example title="With Content">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <div className="style-lyra:rounded-none style-maia:rounded-xl style-mira:rounded-md style-nova:rounded-lg style-vega:rounded-lg border style-lyra:p-4 style-maia:p-6 style-mira:p-4 style-nova:p-4 style-vega:p-6">
          <TabsContent value="account">
            Manage your account preferences and profile information.
          </TabsContent>
          <TabsContent value="password">
            Update your password to keep your account secure.
          </TabsContent>
          <TabsContent value="notifications">
            Configure how you receive notifications and alerts.
          </TabsContent>
        </div>
      </Tabs>
    </Example>
  );
}

function TabsLineWithContent() {
  return (
    <Example title="Line With Content">
      <Tabs defaultValue="account">
        <TabsList variant="line">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <div className="style-lyra:rounded-none style-maia:rounded-xl style-mira:rounded-md style-nova:rounded-lg style-vega:rounded-lg border style-lyra:p-4 style-maia:p-6 style-mira:p-4 style-nova:p-4 style-vega:p-6">
          <TabsContent value="account">
            Manage your account preferences and profile information.
          </TabsContent>
          <TabsContent value="password">
            Update your password to keep your account secure.
          </TabsContent>
          <TabsContent value="notifications">
            Configure how you receive notifications and alerts.
          </TabsContent>
        </div>
      </Tabs>
    </Example>
  );
}

function TabsLineDisabled() {
  return (
    <Example title="Line Disabled">
      <Tabs defaultValue="overview">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger disabled value="reports">
            Reports
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  );
}

function TabsWithDropdown() {
  return (
    <Example title="With Dropdown">
      <Tabs defaultValue="overview">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="size-8" size="icon" variant="ghost">
                <IconPlaceholder
                  hugeicons="MoreHorizontalCircle01Icon"
                  lucide="MoreHorizontalIcon"
                  tabler="IconDots"
                />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Archive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="style-lyra:rounded-none style-maia:rounded-xl style-mira:rounded-md style-nova:rounded-lg style-vega:rounded-lg border style-lyra:p-4 style-maia:p-6 style-mira:p-4 style-nova:p-4 style-vega:p-6">
          <TabsContent value="overview">
            View your dashboard metrics and key performance indicators.
          </TabsContent>
          <TabsContent value="analytics">
            Detailed analytics and insights about your data.
          </TabsContent>
          <TabsContent value="reports">
            Generate and view custom reports.
          </TabsContent>
        </div>
      </Tabs>
    </Example>
  );
}

function TabsVertical() {
  return (
    <Example title="Vertical">
      <Tabs defaultValue="account" orientation="vertical">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <div className="style-lyra:rounded-none style-maia:rounded-xl style-mira:rounded-md style-nova:rounded-lg style-vega:rounded-lg border style-lyra:p-4 style-maia:p-6 style-mira:p-4 style-nova:p-4 style-vega:p-6">
          <TabsContent value="account">
            Manage your account preferences and profile information.
          </TabsContent>
          <TabsContent value="password">
            Update your password to keep your account secure. Use a strong
            password with a mix of letters, numbers, and symbols.
          </TabsContent>
          <TabsContent value="notifications">
            Configure how you receive notifications and alerts. Choose which
            types of notifications you want to receive and how you want to
            receive them.
          </TabsContent>
        </div>
      </Tabs>
    </Example>
  );
}

function TabsWithInputAndButton() {
  return (
    <Example containerClassName="col-span-full" title="With Input and Button">
      <Tabs className="mx-auto w-full max-w-lg" defaultValue="overview">
        <div className="flex items-center gap-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <Input className="w-44" placeholder="Search..." />
            <Button>Action</Button>
          </div>
        </div>
        <div className="style-lyra:rounded-none style-maia:rounded-xl style-mira:rounded-md style-nova:rounded-lg style-vega:rounded-lg border style-lyra:p-4 style-maia:p-6 style-mira:p-4 style-nova:p-4 style-vega:p-6">
          <TabsContent value="overview">
            View your dashboard metrics and key performance indicators.
          </TabsContent>
          <TabsContent value="analytics">
            Detailed analytics and insights about your data.
          </TabsContent>
          <TabsContent value="reports">
            Generate and view custom reports.
          </TabsContent>
        </div>
      </Tabs>
    </Example>
  );
}
