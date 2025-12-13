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
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/bases/radix/ui/hover-card";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function HoverCardExample() {
  return (
    <ExampleWrapper>
      <HoverCardSides />
      <HoverCardInDialog />
    </ExampleWrapper>
  );
}

const HOVER_CARD_SIDES = ["top", "right", "bottom", "left"] as const;

function HoverCardSides() {
  return (
    <Example title="Sides">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {HOVER_CARD_SIDES.map((side) => (
          <HoverCard closeDelay={100} key={side} openDelay={100}>
            <HoverCardTrigger asChild>
              <Button className="capitalize" variant="outline">
                {side}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64" side={side}>
              <div className="flex flex-col style-lyra:gap-1 style-maia:gap-2 style-mira:gap-1 style-nova:gap-1.5 style-vega:gap-2">
                <h4 className="font-medium">Hover Card</h4>
                <p>
                  This hover card appears on the {side} side of the trigger.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </Example>
  );
}

function HoverCardInDialog() {
  return (
    <Example title="In Dialog">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hover Card Example</DialogTitle>
            <DialogDescription>
              Hover over the button below to see the hover card.
            </DialogDescription>
          </DialogHeader>
          <HoverCard closeDelay={100} openDelay={100}>
            <HoverCardTrigger asChild>
              <Button className="w-fit" variant="outline">
                Hover me
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              <div className="flex flex-col style-lyra:gap-1 style-maia:gap-2 style-mira:gap-1 style-nova:gap-1.5 style-vega:gap-2">
                <h4 className="font-medium">Hover Card</h4>
                <p>
                  This hover card appears inside a dialog. Hover over the button
                  to see it.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </DialogContent>
      </Dialog>
    </Example>
  );
}
