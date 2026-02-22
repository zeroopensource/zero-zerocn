import nodemailer from "nodemailer";
import "dotenv/config";
import { ENV } from "@/lib/env";

export const SMTP_HOST = ENV.SMTP_HOST || "smtp.gmail.com";
export const SMTP_PORT = ENV.SMTP_PORT || 465;
export const SMTP_SERVICE = ENV.SMTP_SERVICE || "gmail";
export const SMTP_PASSWORD = ENV.SMTP_PASSWORD || "";
export const SMTP_NAME = ENV.SMTP_NAME || "";
export const SMTP_EMAIL = ENV.SMTP_EMAIL || "";

export const MailTransporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  service: SMTP_SERVICE,
  auth: {
    user: SMTP_EMAIL || "",
    pass: SMTP_PASSWORD || "",
  },
});

export const sendEmail = ({
  recipientEmail,
  subject,
  html,
}: {
  recipientEmail: string;
  subject: string;
  html: string;
}) => {
  const mailOptions = {
    from: `${SMTP_NAME} <${SMTP_EMAIL}>`,
    to: recipientEmail,
    subject: `${SMTP_NAME}: ${subject}`,
    html,
  };

  return MailTransporter.sendMail(
    mailOptions,
    (
      error
      // ,info
    ) => {
      if (error) {
        throw new Error("Failed to send email", {
          cause: {
            inputs: {
              recipientEmail,
              subject,
            },
            error,
          },
        });
      }
    }
  );
};
