import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/bases/radix/ui/field";
import { Label } from "@/registry/bases/radix/ui/label";
import { Switch } from "@/registry/bases/radix/ui/switch";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function SwitchExample() {
  return (
    <ExampleWrapper>
      <SwitchBasic />
      <SwitchWithDescription />
      <SwitchDisabled />
      <SwitchSizes />
    </ExampleWrapper>
  );
}

function SwitchBasic() {
  return (
    <Example title="Basic">
      <Field orientation="horizontal">
        <Switch id="switch-basic" />
        <FieldLabel htmlFor="switch-basic">Airplane Mode</FieldLabel>
      </Field>
    </Example>
  );
}

function SwitchWithLabel() {
  return (
    <Example title="With Label">
      <div className="flex items-center gap-2">
        <Switch defaultChecked id="switch-bluetooth" />
        <Label htmlFor="switch-bluetooth">Bluetooth</Label>
      </div>
    </Example>
  );
}

function SwitchWithDescription() {
  return (
    <Example title="With Description">
      <FieldLabel htmlFor="switch-focus-mode">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Share across devices</FieldTitle>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-focus-mode" />
        </Field>
      </FieldLabel>
    </Example>
  );
}

function SwitchDisabled() {
  return (
    <Example title="Disabled">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-2">
          <Switch disabled id="switch-disabled-unchecked" />
          <Label htmlFor="switch-disabled-unchecked">
            Disabled (Unchecked)
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch defaultChecked disabled id="switch-disabled-checked" />
          <Label htmlFor="switch-disabled-checked">Disabled (Checked)</Label>
        </div>
      </div>
    </Example>
  );
}

function SwitchSizes() {
  return (
    <Example title="Sizes">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-2">
          <Switch id="switch-size-sm" size="sm" />
          <Label htmlFor="switch-size-sm">Small</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="switch-size-default" size="default" />
          <Label htmlFor="switch-size-default">Default</Label>
        </div>
      </div>
    </Example>
  );
}
