# Hezekiah Shem Baling — Portfolio & Client Engineering Portal

Modern, responsive portfolio and client-inquiry portal for **Hezekiah Shem Baling**, Full-Stack Web Developer & Data Analyst. Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router, Server & Client Components)
- **Library**: React 19
- **Type Safety**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 (Design Tokens, Dark/Light Mode with `next-themes`)
- **AI Engine**: Google Gemini API via Vercel AI SDK (`@ai-sdk/google`, streaming responses)
- **Email Delivery**: Web3Forms direct browser submission + Resend / Gmail SMTP serverless fallback
- **Data & Telemetry**: Dynamic live visitor verification and local recovery ledger

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/bry-port.git
cd bry-port
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Copy `.env.example` to `.env.local` and add your keys:
```bash
cp .env.example .env.local
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | (Optional) Client-side direct browser email submission key via Web3Forms |
| `WEB3FORMS_ACCESS_KEY` | Server-side Web3Forms access key |
| `RESEND_API_KEY` | (Optional) Resend API key for automated serverless email delivery |
| `GMAIL_USER` / `GMAIL_APP_PASSWORD` | (Optional) Gmail App Password for SMTP delivery |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI Studio API key for the personal AI assistant |
| `CONTACT_EMAIL` | Destination email where client inquiries arrive (default: `shemcena@gmail.com`) |

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## Production Build & Vercel Deployment

### Build locally:
```bash
npm run build
npm run start
```

### Deploy to Vercel:
1. Push this repository to GitHub.
2. Import the project into your [Vercel Dashboard](https://vercel.com/new).
3. Under **Environment Variables**, add:
   - `GOOGLE_GENERATIVE_AI_API_KEY`
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (or your chosen email provider keys)
   - `CONTACT_EMAIL`
4. Click **Deploy**. Vercel will automatically build the static assets and serverless functions.
