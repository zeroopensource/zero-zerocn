import Image from "next/image";
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/radix/ui/avatar";
import { Button } from "@/registry/bases/radix/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/radix/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/radix/ui/field";
import { Input } from "@/registry/bases/radix/ui/input";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function CardExample() {
  return (
    <ExampleWrapper>
      <CardDefault />
      <CardSmall />
      <CardHeaderWithBorder />
      <CardFooterWithBorder />
      <CardHeaderWithBorderSmall />
      <CardFooterWithBorderSmall />
      <CardWithImage />
      <CardWithImageSmall />
      <CardLogin />
      <CardMeetingNotes />
    </ExampleWrapper>
  );
}

function CardLogin() {
  return (
    <Example title="Login">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    className="ml-auto inline-block underline-offset-4 hover:underline"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" required type="password" />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full" type="submit">
            Login
          </Button>
          <Button className="w-full" variant="outline">
            Login with Google
          </Button>
          <div className="mt-4 style-nova:mt-2 text-center">
            Don&apos;t have an account?{" "}
            <a className="underline underline-offset-4" href="#">
              Sign up
            </a>
          </div>
        </CardFooter>
      </Card>
    </Example>
  );
}

function CardMeetingNotes() {
  return (
    <Example title="Meeting Notes">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle>Meeting Notes</CardTitle>
          <CardDescription>
            Transcript from the meeting with the client.
          </CardDescription>
          <CardAction>
            <Button size="sm" variant="outline">
              <IconPlaceholder
                data-icon="inline-start"
                hugeicons="TextCheckIcon"
                lucide="CaptionsIcon"
                tabler="IconTextCaption"
              />
              Transcribe
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>
            Client requested dashboard redesign with focus on mobile
            responsiveness.
          </p>
          <ol className="mt-4 flex list-decimal flex-col gap-2 pl-6">
            <li>New analytics widgets for daily/weekly metrics</li>
            <li>Simplified navigation menu</li>
            <li>Dark mode support</li>
            <li>Timeline: 6 weeks</li>
            <li>Follow-up meeting scheduled for next Tuesday</li>
          </ol>
        </CardContent>
        <CardFooter>
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
            <AvatarGroupCount>+8</AvatarGroupCount>
          </AvatarGroup>
        </CardFooter>
      </Card>
    </Example>
  );
}

function CardWithImage() {
  return (
    <Example title="With Image">
      <Card className="relative mx-auto w-full max-w-sm pt-0" size="default">
        <div className="absolute inset-0 z-30 aspect-video bg-primary opacity-50 mix-blend-color" />
        <img
          alt="Photo by mymind on Unsplash"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
          src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Photo by mymind on Unsplash"
        />
        <CardHeader>
          <CardTitle>Beautiful Landscape</CardTitle>
          <CardDescription>
            A stunning view that captures the essence of natural beauty.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">
            <IconPlaceholder
              data-icon="inline-start"
              hugeicons="Add01Icon"
              lucide="PlusIcon"
              tabler="IconPlus"
            />
            Button
          </Button>
        </CardFooter>
      </Card>
    </Example>
  );
}

function CardWithImageSmall() {
  return (
    <Example title="With Image (Small)">
      <Card className="relative mx-auto w-full max-w-sm pt-0" size="sm">
        <div className="absolute inset-0 z-30 aspect-video bg-primary opacity-50 mix-blend-color" />
        <img
          alt="Photo by mymind on Unsplash"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
          src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Photo by mymind on Unsplash"
        />
        <CardHeader>
          <CardTitle>Beautiful Landscape</CardTitle>
          <CardDescription>
            A stunning view that captures the essence of natural beauty.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full" size="sm">
            <IconPlaceholder
              data-icon="inline-start"
              hugeicons="Add01Icon"
              lucide="PlusIcon"
              tabler="IconPlus"
            />
            Button
          </Button>
        </CardFooter>
      </Card>
    </Example>
  );
}

function CardHeaderWithBorder() {
  return (
    <Example title="Header with Border">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="border-b">
          <CardTitle>Header with Border</CardTitle>
          <CardDescription>
            This is a card with a header that has a bottom border.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The header has a border-b class applied, creating a visual
            separation between the header and content sections.
          </p>
        </CardContent>
      </Card>
    </Example>
  );
}

function CardFooterWithBorder() {
  return (
    <Example title="Footer with Border">
      <Card className="mx-auto w-full max-w-sm">
        <CardContent>
          <p>
            The footer has a border-t class applied, creating a visual
            separation between the content and footer sections.
          </p>
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full" variant="outline">
            Footer with Border
          </Button>
        </CardFooter>
      </Card>
    </Example>
  );
}

function CardDefault() {
  return (
    <Example title="Default Size">
      <Card className="mx-auto w-full max-w-sm" size="default">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>
            This card uses the default size variant.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The card component supports a size prop that defaults to
            &quot;default&quot; for standard spacing and sizing.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            Action
          </Button>
        </CardFooter>
      </Card>
    </Example>
  );
}

function CardSmall() {
  return (
    <Example title="Small Size">
      <Card className="mx-auto w-full max-w-sm" size="sm">
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
          <CardDescription>
            This card uses the small size variant.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The card component supports a size prop that can be set to
            &quot;sm&quot; for a more compact appearance.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="sm" variant="outline">
            Action
          </Button>
        </CardFooter>
      </Card>
    </Example>
  );
}

function CardHeaderWithBorderSmall() {
  return (
    <Example title="Header with Border (Small)">
      <Card className="mx-auto w-full max-w-sm" size="sm">
        <CardHeader className="border-b">
          <CardTitle>Header with Border</CardTitle>
          <CardDescription>
            This is a small card with a header that has a bottom border.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The header has a border-b class applied, creating a visual
            separation between the header and content sections.
          </p>
        </CardContent>
      </Card>
    </Example>
  );
}

function CardFooterWithBorderSmall() {
  return (
    <Example title="Footer with Border (Small)">
      <Card className="mx-auto w-full max-w-sm" size="sm">
        <CardContent>
          <p>
            The footer has a border-t class applied, creating a visual
            separation between the content and footer sections.
          </p>
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full" size="sm" variant="outline">
            Footer with Border
          </Button>
        </CardFooter>
      </Card>
    </Example>
  );
}
