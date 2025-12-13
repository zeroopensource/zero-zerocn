import { Button } from "@/registry/bases/radix/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/radix/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/radix/ui/field";
import { Input } from "@/registry/bases/radix/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/bases/radix/ui/popover";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function PopoverExample() {
  return (
    <ExampleWrapper>
      <PopoverBasic />
      <PopoverWithForm />
      <PopoverAlignments />
      <PopoverInDialog />
    </ExampleWrapper>
  );
}

function PopoverBasic() {
  return (
    <Example title="Basic">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </Example>
  );
}

function PopoverWithForm() {
  return (
    <Example title="With Form">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-64">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldLabel className="w-1/2" htmlFor="width">
                Width
              </FieldLabel>
              <Input defaultValue="100%" id="width" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel className="w-1/2" htmlFor="height">
                Height
              </FieldLabel>
              <Input defaultValue="25px" id="height" />
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </Example>
  );
}

function PopoverAlignments() {
  return (
    <Example title="Alignments">
      <div className="flex gap-6">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm" variant="outline">
              Start
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-40">
            Aligned to start
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm" variant="outline">
              Center
            </Button>
          </PopoverTrigger>
          <PopoverContent align="center" className="w-40">
            Aligned to center
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm" variant="outline">
              End
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-40">
            Aligned to end
          </PopoverContent>
        </Popover>
      </div>
    </Example>
  );
}

function PopoverInDialog() {
  return (
    <Example title="In Dialog">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Popover Example</DialogTitle>
            <DialogDescription>
              Click the button below to see the popover.
            </DialogDescription>
          </DialogHeader>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-fit" variant="outline">
                Open Popover
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <PopoverHeader>
                <PopoverTitle>Popover in Dialog</PopoverTitle>
                <PopoverDescription>
                  This popover appears inside a dialog. Click the button to open
                  it.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </DialogContent>
      </Dialog>
    </Example>
  );
}
