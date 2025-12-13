"use client";

import * as React from "react";
import { Label } from "@/registry/bases/radix/ui/label";
import { Slider } from "@/registry/bases/radix/ui/slider";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function SliderExample() {
  return (
    <ExampleWrapper>
      <SliderBasic />
      <SliderRange />
      <SliderMultiple />
      <SliderVertical />
      <SliderControlled />
      <SliderDisabled />
    </ExampleWrapper>
  );
}

function SliderBasic() {
  return (
    <Example title="Basic">
      <Slider defaultValue={[50]} max={100} step={1} />
    </Example>
  );
}

function SliderRange() {
  return (
    <Example title="Range">
      <Slider defaultValue={[25, 50]} max={100} step={5} />
    </Example>
  );
}

function SliderMultiple() {
  return (
    <Example title="Multiple Thumbs">
      <Slider defaultValue={[10, 20, 70]} max={100} step={10} />
    </Example>
  );
}

function SliderVertical() {
  return (
    <Example title="Vertical">
      <div className="flex items-center gap-6">
        <Slider
          className="h-40"
          defaultValue={[50]}
          max={100}
          orientation="vertical"
          step={1}
        />
        <Slider
          className="h-40"
          defaultValue={[25]}
          max={100}
          orientation="vertical"
          step={1}
        />
      </div>
    </Example>
  );
}

function SliderControlled() {
  const [value, setValue] = React.useState([0.3, 0.7]);

  return (
    <Example title="Controlled">
      <div className="grid w-full gap-3">
        <div className="flex items-center justify-between gap-2">
          <Label htmlFor="slider-demo-temperature">Temperature</Label>
          <span className="text-muted-foreground text-sm">
            {value.join(", ")}
          </span>
        </div>
        <Slider
          id="slider-demo-temperature"
          max={1}
          min={0}
          onValueChange={setValue}
          step={0.1}
          value={value}
        />
      </div>
    </Example>
  );
}

function SliderDisabled() {
  return (
    <Example title="Disabled">
      <Slider defaultValue={[50]} disabled max={100} step={1} />
    </Example>
  );
}
