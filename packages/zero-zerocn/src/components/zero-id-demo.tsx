"use client";

import { generateZeroId } from "@zeroopensource/zero-id";
import { useState } from "react";
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

export const ZeroIdDemo = () => {
  const [zeroId, setZeroId] = useState<string>(generateZeroId());
  return (
    <ButtonGroup>
      <ButtonGroup className="flex-1">
        <InputGroup>
          <InputGroupInput className="w-100" readOnly value={zeroId} />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                  onClick={() => {
                    setZeroId(generateZeroId());
                  }}
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
