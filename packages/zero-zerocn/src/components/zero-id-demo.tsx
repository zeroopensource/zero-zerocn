"use client";

import { AudioLinesIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { generateZeroId } from "@/lib/zero-id";

export const ZeroIdDemo = () => {
  const [zeroId, setZeroId] = useState(generateZeroId());
  return (
    <ButtonGroup>
      <ButtonGroup className="flex-1">
        <InputGroup>
          <InputGroupInput className="w-100" defaultValue={zeroId} />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                  onClick={() => setZeroId(generateZeroId())}
                >
                  generate
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>Click to Generate</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
};
