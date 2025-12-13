import { Button } from "@/registry/bases/radix/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/radix/ui/field";
import { Input } from "@/registry/bases/radix/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/bases/radix/ui/native-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/radix/ui/select";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function InputExample() {
  return (
    <ExampleWrapper>
      <InputBasic />
      <InputInvalid />
      <InputWithLabel />
      <InputWithDescription />
      <InputDisabled />
      <InputTypes />
      <InputWithSelect />
      <InputWithButton />
      <InputWithNativeSelect />
      <InputForm />
    </ExampleWrapper>
  );
}

function InputBasic() {
  return (
    <Example title="Basic">
      <Input placeholder="Email" type="email" />
    </Example>
  );
}

function InputInvalid() {
  return (
    <Example title="Invalid">
      <Input aria-invalid="true" placeholder="Error" type="text" />
    </Example>
  );
}

function InputWithLabel() {
  return (
    <Example title="With Label">
      <Field>
        <FieldLabel htmlFor="input-demo-email">Email</FieldLabel>
        <Input
          id="input-demo-email"
          placeholder="name@example.com"
          type="email"
        />
      </Field>
    </Example>
  );
}

function InputWithDescription() {
  return (
    <Example title="With Description">
      <Field>
        <FieldLabel htmlFor="input-demo-username">Username</FieldLabel>
        <Input
          id="input-demo-username"
          placeholder="Enter your username"
          type="text"
        />
        <FieldDescription>
          Choose a unique username for your account.
        </FieldDescription>
      </Field>
    </Example>
  );
}

function InputDisabled() {
  return (
    <Example title="Disabled">
      <Field>
        <FieldLabel htmlFor="input-demo-disabled">Email</FieldLabel>
        <Input
          disabled
          id="input-demo-disabled"
          placeholder="Email"
          type="email"
        />
      </Field>
    </Example>
  );
}

function InputTypes() {
  return (
    <Example title="Input Types">
      <div className="flex w-full flex-col gap-6">
        <Field>
          <FieldLabel htmlFor="input-demo-password">Password</FieldLabel>
          <Input
            id="input-demo-password"
            placeholder="Password"
            type="password"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-demo-tel">Phone</FieldLabel>
          <Input
            id="input-demo-tel"
            placeholder="+1 (555) 123-4567"
            type="tel"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-demo-url">URL</FieldLabel>
          <Input
            id="input-demo-url"
            placeholder="https://example.com"
            type="url"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-demo-search">Search</FieldLabel>
          <Input id="input-demo-search" placeholder="Search" type="search" />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-demo-number">Number</FieldLabel>
          <Input id="input-demo-number" placeholder="123" type="number" />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-demo-date">Date</FieldLabel>
          <Input id="input-demo-date" type="date" />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-demo-time">Time</FieldLabel>
          <Input id="input-demo-time" type="time" />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-demo-file">File</FieldLabel>
          <Input id="input-demo-file" type="file" />
        </Field>
      </div>
    </Example>
  );
}

function InputWithSelect() {
  return (
    <Example title="With Select">
      <div className="flex w-full gap-2">
        <Input className="flex-1" placeholder="Enter amount" type="text" />
        <Select defaultValue="usd">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usd">USD</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
            <SelectItem value="gbp">GBP</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Example>
  );
}

function InputWithButton() {
  return (
    <Example title="With Button">
      <div className="flex w-full gap-2">
        <Input className="flex-1" placeholder="Search..." type="search" />
        <Button>Search</Button>
      </div>
    </Example>
  );
}

function InputWithNativeSelect() {
  return (
    <Example title="With Native Select">
      <div className="flex w-full gap-2">
        <Input className="flex-1" placeholder="(555) 123-4567" type="tel" />
        <NativeSelect defaultValue="+1">
          <NativeSelectOption value="+1">+1</NativeSelectOption>
          <NativeSelectOption value="+44">+44</NativeSelectOption>
          <NativeSelectOption value="+46">+46</NativeSelectOption>
        </NativeSelect>
      </div>
    </Example>
  );
}

function InputForm() {
  return (
    <Example title="Form">
      <form className="w-full">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="form-name">Name</FieldLabel>
            <Input id="form-name" placeholder="John Doe" type="text" />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-email">Email</FieldLabel>
            <Input
              id="form-email"
              placeholder="john@example.com"
              type="email"
            />
            <FieldDescription>
              We&apos;ll never share your email with anyone.
            </FieldDescription>
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
              <Input
                id="form-phone"
                placeholder="+1 (555) 123-4567"
                type="tel"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="form-country">Country</FieldLabel>
              <Select defaultValue="us">
                <SelectTrigger id="form-country">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="form-address">Address</FieldLabel>
            <Input id="form-address" placeholder="123 Main St" type="text" />
          </Field>
          <Field orientation="horizontal">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </Example>
  );
}
