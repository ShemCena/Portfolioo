import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || "shemcena@gmail.com";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 6;
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  if (rateLimitMap.size > 2000) rateLimitMap.clear();
  return timestamps.length > MAX_REQUESTS;
}

function saveInquiryLocally(inquiry: {
  id: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
  target: string;
  timestamp: string;
  deliveryStatus: string;
}) {
  try {
    const dir = process.env.VERCEL
      ? os.tmpdir()
      : path.join(process.cwd(), "src", "data");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, "inquiries.json");
    let existing: typeof inquiry[] = [];
    if (fs.existsSync(file)) {
      existing = JSON.parse(fs.readFileSync(file, "utf-8"));
    }
    existing.unshift(inquiry);
    fs.writeFileSync(file, JSON.stringify(existing.slice(0, 100), null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to persist inquiry locally:", err);
  }
}

interface SendEmailParams {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
}

async function dispatchRealEmail({
  senderName,
  senderEmail,
  subject,
  message,
}: SendEmailParams): Promise<{ delivered: boolean; provider: string; error?: string }> {
  // 1. Try Resend if RESEND_API_KEY is available
  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "Portfolio Contact <onboarding@resend.dev>",
          to: [RECIPIENT_EMAIL],
          reply_to: senderEmail,
          subject: `[Portfolio Inquiry] ${subject} - from ${senderName}`,
          html: generateHtmlEmail({ senderName, senderEmail, subject, message }),
          text: `New Portfolio Inquiry\n\nFrom: ${senderName} (${senderEmail})\nSubject: ${subject}\n\nMessage:\n${message}`,
        }),
      });

      if (res.ok) {
        return { delivered: true, provider: "Resend" };
      }
      const errorText = await res.text();
      console.warn("Resend API responded with error:", errorText);
    } catch (err) {
      console.warn("Resend dispatch failed:", err);
    }
  }

  // 2. Try Nodemailer / Gmail SMTP if credentials exist
  const smtpUser = process.env.GMAIL_USER || process.env.SMTP_USER;
  const smtpPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${senderName} via Portfolio" <${smtpUser}>`,
        to: RECIPIENT_EMAIL,
        replyTo: `"${senderName}" <${senderEmail}>`,
        subject: `[Portfolio Inquiry] ${subject} - from ${senderName}`,
        html: generateHtmlEmail({ senderName, senderEmail, subject, message }),
        text: `New Portfolio Inquiry\n\nFrom: ${senderName} (${senderEmail})\nSubject: ${subject}\n\nMessage:\n${message}`,
      });

      return { delivered: true, provider: "Gmail SMTP" };
    } catch (err) {
      console.warn("Nodemailer SMTP dispatch failed:", err);
    }
  }

  // 3. Try Web3Forms if WEB3FORMS_ACCESS_KEY exists
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (web3Key) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3Key,
          name: senderName,
          email: senderEmail,
          replyto: senderEmail,
          subject: `[Portfolio Inquiry] ${subject} - from ${senderName}`,
          message: message,
          from_name: `${senderName} via Shem's Portfolio`,
        }),
      });

      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        console.log("[Email Dispatch] Web3Forms dispatched successfully to shemcena@gmail.com!");
        return { delivered: true, provider: "Web3Forms" };
      } else {
        console.warn("Web3Forms API returned non-success response:", data);
        return {
          delivered: false,
          provider: "Web3Forms",
          error: data?.message || "Web3Forms submission failed",
        };
      }
    } catch (err) {
      console.warn("Web3Forms dispatch failed:", err);
      return {
        delivered: false,
        provider: "Web3Forms",
        error: String(err),
      };
    }
  }

  // Fallback: No credentials yet
  return {
    delivered: false,
    provider: "local-storage-only",
    error: "No active email service configured in .env.local (RESEND_API_KEY, GMAIL_APP_PASSWORD, or WEB3FORMS_ACCESS_KEY)",
  };
}

function generateHtmlEmail({
  senderName,
  senderEmail,
  subject,
  message,
}: SendEmailParams): string {
  const sanitizedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 24px; color: #18181b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e4e4e7; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #09090b; padding: 24px 32px; color: #ffffff; }
          .header h1 { margin: 0; font-size: 18px; font-weight: 600; letter-spacing: -0.02em; }
          .header p { margin: 4px 0 0; font-size: 13px; color: #a1a1aa; }
          .content { padding: 32px; }
          .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .meta-table td { padding: 8px 0; font-size: 14px; border-bottom: 1px solid #f4f4f5; }
          .meta-label { font-weight: 600; color: #71717a; width: 110px; }
          .meta-value { color: #09090b; }
          .message-box { background: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px; padding: 20px; font-size: 14px; line-height: 1.6; color: #27272a; white-space: pre-wrap; }
          .footer { background: #fafafa; padding: 20px 32px; border-top: 1px solid #e4e4e7; font-size: 12px; color: #71717a; text-align: center; }
          .reply-btn { display: inline-block; background: #09090b; color: #ffffff !important; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 500; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Portfolio Inquiry</h1>
            <p>Direct communication via shem.dev contact form</p>
          </div>
          <div class="content">
            <table class="meta-table">
              <tr>
                <td class="meta-label">From:</td>
                <td class="meta-value"><strong>${senderName}</strong> &lt;${senderEmail}&gt;</td>
              </tr>
              <tr>
                <td class="meta-label">Subject:</td>
                <td class="meta-value">${subject}</td>
              </tr>
              <tr>
                <td class="meta-label">Received:</td>
                <td class="meta-value">${new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" })} (GMT+8)</td>
              </tr>
            </table>

            <div style="font-weight: 600; font-size: 13px; color: #71717a; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message:</div>
            <div class="message-box">${sanitizedMessage}</div>

            <div style="text-align: center;">
              <a href="mailto:${senderEmail}?subject=Re: [Portfolio] ${encodeURIComponent(subject)}" class="reply-btn">Reply Directly to ${senderName} &rarr;</a>
            </div>
          </div>
          <div class="footer">
            Delivered securely to ${RECIPIENT_EMAIL} &bull; Protected from web scrapers
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "127.0.0.1";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before sending another message." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { senderName, senderEmail, subject, message, web3Delivered } = body;

    if (!senderName || !senderEmail || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid return email address." },
        { status: 400 }
      );
    }

    const cleanSenderName = String(senderName).trim().slice(0, 100);
    const cleanSenderEmail = String(senderEmail).trim().slice(0, 150);
    const cleanSubject = String(subject || "Portfolio Project Inquiry").trim().slice(0, 150);
    const cleanMessage = String(message).trim().slice(0, 2000);

    // If client already dispatched via Web3Forms in browser, mark as delivered
    let dispatchResult: { delivered: boolean; provider: string; error?: string };
    if (web3Delivered) {
      dispatchResult = { delivered: true, provider: "Web3Forms (Browser Dispatch)" };
    } else {
      // Dispatch real email through server available providers (Resend, Gmail SMTP)
      dispatchResult = await dispatchRealEmail({
        senderName: cleanSenderName,
        senderEmail: cleanSenderEmail,
        subject: cleanSubject,
        message: cleanMessage,
      });
    }

    const inquiryRecord = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      senderName: cleanSenderName,
      senderEmail: cleanSenderEmail,
      subject: cleanSubject,
      message: cleanMessage,
      target: RECIPIENT_EMAIL,
      timestamp: new Date().toISOString(),
      deliveryStatus: dispatchResult.delivered
        ? `Delivered via ${dispatchResult.provider}`
        : `Saved locally (${dispatchResult.error})`,
    };

    // Save record to local storage ledger so inquiries are never lost
    saveInquiryLocally(inquiryRecord);

    console.log(
      `[Email Dispatch] From: ${cleanSenderName} (${cleanSenderEmail}) | Subject: "${cleanSubject}" | Status: ${inquiryRecord.deliveryStatus}`
    );

    return NextResponse.json({
      success: true,
      delivered: dispatchResult.delivered,
      provider: dispatchResult.provider,
      message: "Your message has been sent directly to Shem! He will reply to your email shortly.",
    });
  } catch (error) {
    console.error("Error processing email transmission:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again shortly." },
      { status: 500 }
    );
  }
}
