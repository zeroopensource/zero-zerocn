"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    trigger: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    value: "item-3",
    trigger: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    value: "item-4",
    trigger: "Item 4",
    content: (
      <>
        <p>
          Our flagship product combines cutting-edge technology with sleek
          design. Built with premium materials, it offers unparalleled
          performance and reliability.
        </p>
        <p>
          Key features include advanced processing capabilities, and an
          intuitive user interface designed for both beginners and experts.
        </p>
      </>
    ),
  },
];

export const AccordionExample1 = () => {
  return (
    <div className="not-prose flex">
      <Accordion
        className="w-full"
        collapsible
        defaultValue="item-1"
        type="single"
      >
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
