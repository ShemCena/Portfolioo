import { chromium } from "playwright";

async function verify() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });
  page.on("pageerror", (err) => {
    consoleErrors.push(err.toString());
  });

  console.log("Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  await page.screenshot({ path: "screenshot-desktop.png", fullPage: true });
  console.log("Screenshot saved to screenshot-desktop.png");

  const title = await page.title();
  console.log("Page Title:", title);

  const sections = await page.$$eval("section", (els) =>
    els.map((s) => ({ id: s.id, heading: s.querySelector("h2, h1")?.innerText }))
  );
  console.log("Sections found:", JSON.stringify(sections, null, 2));

  console.log("Console errors count:", consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.log("Console errors:", consoleErrors);
  }

  await browser.close();
}

verify().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
