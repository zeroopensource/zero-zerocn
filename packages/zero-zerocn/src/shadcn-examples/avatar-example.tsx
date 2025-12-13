import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/radix/ui/avatar";
import { Button } from "@/registry/bases/radix/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/radix/ui/empty";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function AvatarExample() {
  return (
    <ExampleWrapper>
      <AvatarSizes />
      <AvatarWithBadge />
      <AvatarWithBadgeIcon />
      <AvatarGroupExample />
      <AvatarGroupWithCount />
      <AvatarGroupWithIconCount />
      <AvatarInEmpty />
    </ExampleWrapper>
  );
}

function AvatarSizes() {
  return (
    <Example title="Sizes">
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </Example>
  );
}

function AvatarWithBadge() {
  return (
    <Example title="Badge">
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarImage
            alt="@jorgezreik"
            src="https://github.com/jorgezreik.png"
          />
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="@jorgezreik"
            src="https://github.com/jorgezreik.png"
          />
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            alt="@jorgezreik"
            src="https://github.com/jorgezreik.png"
          />
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar>
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
    </Example>
  );
}

function AvatarWithBadgeIcon() {
  return (
    <Example title="Badge with Icon">
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarImage
            alt="@pranathip"
            src="https://github.com/pranathip.png"
          />
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <IconPlaceholder
              hugeicons="PlusSignIcon"
              lucide="PlusIcon"
              tabler="IconPlus"
            />
          </AvatarBadge>
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="@pranathip"
            src="https://github.com/pranathip.png"
          />
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <IconPlaceholder
              hugeicons="PlusSignIcon"
              lucide="PlusIcon"
              tabler="IconPlus"
            />
          </AvatarBadge>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            alt="@pranathip"
            src="https://github.com/pranathip.png"
          />
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <IconPlaceholder
              hugeicons="PlusSignIcon"
              lucide="PlusIcon"
              tabler="IconPlus"
            />
          </AvatarBadge>
        </Avatar>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <IconPlaceholder
              hugeicons="Tick02Icon"
              lucide="CheckIcon"
              tabler="IconCheck"
            />
          </AvatarBadge>
        </Avatar>
        <Avatar>
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <IconPlaceholder
              hugeicons="Tick02Icon"
              lucide="CheckIcon"
              tabler="IconCheck"
            />
          </AvatarBadge>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <IconPlaceholder
              hugeicons="Tick02Icon"
              lucide="CheckIcon"
              tabler="IconCheck"
            />
          </AvatarBadge>
        </Avatar>
      </div>
    </Example>
  );
}

function AvatarGroupExample() {
  return (
    <Example title="Group">
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            alt="@maxleiter"
            src="https://github.com/maxleiter.png"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="@maxleiter"
            src="https://github.com/maxleiter.png"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            alt="@maxleiter"
            src="https://github.com/maxleiter.png"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </Example>
  );
}

function AvatarGroupWithCount() {
  return (
    <Example title="Group with Count">
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            alt="@maxleiter"
            src="https://github.com/maxleiter.png"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="@maxleiter"
            src="https://github.com/maxleiter.png"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            alt="@maxleiter"
            src="https://github.com/maxleiter.png"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </Example>
  );
}

function AvatarGroupWithIconCount() {
  return (
    <Example title="Group with Icon Count">
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            alt="@maxleiter"
            src="https://github.com/maxleiter.png"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <IconPlaceholder
            hugeicons="PlusSignIcon"
            lucide="PlusIcon"
            tabler="IconPlus"
          />
        </AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="@maxleiter"
            src="https://github.com/maxleiter.png"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <IconPlaceholder
            hugeicons="PlusSignIcon"
            lucide="PlusIcon"
            tabler="IconPlus"
          />
        </AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarImage
            alt="@shadcn"
            className="grayscale"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            alt="@maxleiter"
            className="grayscale"
            src="https://github.com/maxleiter.png"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            alt="@evilrabbit"
            className="grayscale"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <IconPlaceholder
            hugeicons="PlusSignIcon"
            lucide="PlusIcon"
            tabler="IconPlus"
          />
        </AvatarGroupCount>
      </AvatarGroup>
    </Example>
  );
}

function AvatarInEmpty() {
  return (
    <Example title="In Empty">
      <Empty className="w-full flex-none border">
        <EmptyHeader>
          <EmptyMedia>
            <AvatarGroup>
              <Avatar size="lg">
                <AvatarImage
                  alt="@shadcn"
                  className="grayscale"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage
                  alt="@maxleiter"
                  className="grayscale"
                  src="https://github.com/maxleiter.png"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage
                  alt="@evilrabbit"
                  className="grayscale"
                  src="https://github.com/evilrabbit.png"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>
                <IconPlaceholder
                  hugeicons="PlusSignIcon"
                  lucide="PlusIcon"
                  tabler="IconPlus"
                />
              </AvatarGroupCount>
            </AvatarGroup>
          </EmptyMedia>
          <EmptyTitle>No Team Members</EmptyTitle>
          <EmptyDescription>
            Invite your team to collaborate on this project.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>
            <IconPlaceholder
              hugeicons="PlusSignIcon"
              lucide="PlusIcon"
              tabler="IconPlus"
            />
            Invite Members
          </Button>
        </EmptyContent>
      </Empty>
    </Example>
  );
}
