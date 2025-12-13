import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/radix/ui/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/radix/ui/radio-group";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function RadioGroupExample() {
  return (
    <ExampleWrapper>
      <RadioGroupBasic />
      <RadioGroupWithDescriptions />
      <RadioGroupWithFieldSet />
      <RadioGroupGrid />
      <RadioGroupDisabled />
      <RadioGroupInvalid />
    </ExampleWrapper>
  );
}

function RadioGroupBasic() {
  return (
    <Example title="Basic">
      <RadioGroup defaultValue="comfortable">
        <Field orientation="horizontal">
          <RadioGroupItem id="r1" value="default" />
          <FieldLabel className="font-normal" htmlFor="r1">
            Default
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="r2" value="comfortable" />
          <FieldLabel className="font-normal" htmlFor="r2">
            Comfortable
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="r3" value="compact" />
          <FieldLabel className="font-normal" htmlFor="r3">
            Compact
          </FieldLabel>
        </Field>
      </RadioGroup>
    </Example>
  );
}

function RadioGroupWithDescriptions() {
  return (
    <Example title="With Descriptions">
      <RadioGroup defaultValue="plus">
        <FieldLabel htmlFor="plus-plan">
          <Field orientation="horizontal">
            <FieldContent>
              <div className="font-medium">Plus</div>
              <FieldDescription>
                For individuals and small teams
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem id="plus-plan" value="plus" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="pro-plan">
          <Field orientation="horizontal">
            <FieldContent>
              <div className="font-medium">Pro</div>
              <FieldDescription>For growing businesses</FieldDescription>
            </FieldContent>
            <RadioGroupItem id="pro-plan" value="pro" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="enterprise-plan">
          <Field orientation="horizontal">
            <FieldContent>
              <div className="font-medium">Enterprise</div>
              <FieldDescription>
                For large teams and enterprises
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem id="enterprise-plan" value="enterprise" />
          </Field>
        </FieldLabel>
      </RadioGroup>
    </Example>
  );
}

function RadioGroupWithFieldSet() {
  return (
    <Example title="With FieldSet">
      <FieldSet>
        <FieldLegend>Battery Level</FieldLegend>
        <FieldDescription>
          Choose your preferred battery level.
        </FieldDescription>
        <RadioGroup defaultValue="medium">
          <Field orientation="horizontal">
            <RadioGroupItem id="battery-high" value="high" />
            <FieldLabel className="font-normal" htmlFor="battery-high">
              High
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem id="battery-medium" value="medium" />
            <FieldLabel className="font-normal" htmlFor="battery-medium">
              Medium
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem id="battery-low" value="low" />
            <FieldLabel className="font-normal" htmlFor="battery-low">
              Low
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </Example>
  );
}

function RadioGroupGrid() {
  return (
    <Example title="Grid Layout">
      <RadioGroup className="grid grid-cols-2 gap-2" defaultValue="medium">
        <FieldLabel htmlFor="size-small">
          <Field orientation="horizontal">
            <RadioGroupItem id="size-small" value="small" />
            <div className="font-medium">Small</div>
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="size-medium">
          <Field orientation="horizontal">
            <RadioGroupItem id="size-medium" value="medium" />
            <div className="font-medium">Medium</div>
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="size-large">
          <Field orientation="horizontal">
            <RadioGroupItem id="size-large" value="large" />
            <div className="font-medium">Large</div>
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="size-xlarge">
          <Field orientation="horizontal">
            <RadioGroupItem id="size-xlarge" value="xlarge" />
            <div className="font-medium">X-Large</div>
          </Field>
        </FieldLabel>
      </RadioGroup>
    </Example>
  );
}

function RadioGroupDisabled() {
  return (
    <Example title="Disabled">
      <RadioGroup defaultValue="option2" disabled>
        <Field orientation="horizontal">
          <RadioGroupItem id="disabled-1" value="option1" />
          <FieldLabel className="font-normal" htmlFor="disabled-1">
            Option 1
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="disabled-2" value="option2" />
          <FieldLabel className="font-normal" htmlFor="disabled-2">
            Option 2
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="disabled-3" value="option3" />
          <FieldLabel className="font-normal" htmlFor="disabled-3">
            Option 3
          </FieldLabel>
        </Field>
      </RadioGroup>
    </Example>
  );
}

function RadioGroupInvalid() {
  return (
    <Example title="Invalid">
      <FieldSet>
        <FieldLegend>Notification Preferences</FieldLegend>
        <FieldDescription>
          Choose how you want to receive notifications.
        </FieldDescription>
        <RadioGroup defaultValue="email">
          <Field data-invalid orientation="horizontal">
            <RadioGroupItem aria-invalid id="invalid-email" value="email" />
            <FieldLabel className="font-normal" htmlFor="invalid-email">
              Email only
            </FieldLabel>
          </Field>
          <Field data-invalid orientation="horizontal">
            <RadioGroupItem aria-invalid id="invalid-sms" value="sms" />
            <FieldLabel className="font-normal" htmlFor="invalid-sms">
              SMS only
            </FieldLabel>
          </Field>
          <Field data-invalid orientation="horizontal">
            <RadioGroupItem aria-invalid id="invalid-both" value="both" />
            <FieldLabel className="font-normal" htmlFor="invalid-both">
              Both Email & SMS
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </Example>
  );
}
