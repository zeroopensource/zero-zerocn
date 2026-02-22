import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  render,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {
  username?: string;
  company?: string;
}

export const EmailTemplate = ({
  username = "User",
  company = "Our Company",
}: Props) => {
  const previewText = `Welcome to ${company}, ${username}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="m-auto bg-black font-sans">
          <Container className="mx-auto mb-10 max-w-[465px] p-5">
            <Section className="mt-10">
              <Img
                alt="Logo Example"
                className="mx-auto my-0"
                height="60"
                src={"https://example.com/brand/example-logo.png"}
                width="60"
              />
            </Section>
            <Heading className="mx-0 my-8 p-0 text-center font-normal text-2xl text-white">
              Welcome to <strong>{company}</strong>, {username}!
            </Heading>
            <Text className="text-start text-sm text-white">
              Hello {username},
            </Text>
            <Text className="text-start text-sm text-white leading-relaxed">
              We're excited to have you onboard at <strong>{company}</strong>.
              We hope you enjoy your journey with us. If you have any questions
              or need assistance, feel free to reach out.
            </Text>
            <Section className="mt-[32px] mb-[32px] text-center">
              <Button
                className="rounded-md bg-white px-5 py-2.5 text-center font-semibold text-black text-sm no-underline"
                href={"https://example.com/get-started"}
              >
                Get Started
              </Button>
            </Section>
            <Text className="text-start text-sm text-white">
              Cheers,
              <br />
              The {company} Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export const renderEmailTemplate = ({
  username,
  company,
}: {
  username: string;
  company: string;
}) =>
  render(<EmailTemplate company={company} username={username} />, {
    pretty: true,
  });
