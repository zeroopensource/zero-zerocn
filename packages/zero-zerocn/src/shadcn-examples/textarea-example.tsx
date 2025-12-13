import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/radix/ui/field";
import { Textarea } from "@/registry/bases/radix/ui/textarea";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function TextareaExample() {
  return (
    <ExampleWrapper>
      <TextareaBasic />
      <TextareaInvalid />
      <TextareaWithLabel />
      <TextareaWithDescription />
      <TextareaDisabled />
    </ExampleWrapper>
  );
}

function TextareaBasic() {
  return (
    <Example title="Basic">
      <Textarea placeholder="Type your message here." />
    </Example>
  );
}

function TextareaInvalid() {
  return (
    <Example title="Invalid">
      <Textarea aria-invalid="true" placeholder="Type your message here." />
    </Example>
  );
}

function TextareaWithLabel() {
  return (
    <Example title="With Label">
      <Field>
        <FieldLabel htmlFor="textarea-demo-message">Message</FieldLabel>
        <Textarea
          id="textarea-demo-message"
          placeholder="Type your message here."
          rows={6}
        />
      </Field>
    </Example>
  );
}

function TextareaWithDescription() {
  return (
    <Example title="With Description">
      <Field>
        <FieldLabel htmlFor="textarea-demo-message-2">Message</FieldLabel>
        <Textarea
          id="textarea-demo-message-2"
          placeholder="Type your message here."
          rows={6}
        />
        <FieldDescription>
          Type your message and press enter to send.
        </FieldDescription>
      </Field>
    </Example>
  );
}

function TextareaDisabled() {
  return (
    <Example title="Disabled">
      <Field>
        <FieldLabel htmlFor="textarea-demo-disabled">Message</FieldLabel>
        <Textarea
          disabled
          id="textarea-demo-disabled"
          placeholder="Type your message here."
        />
      </Field>
    </Example>
  );
}
