import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ channel: "msedge" });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  
  // Find the theme toggle button and click it
  const themeToggle = page.locator('button[aria-label="Toggle theme"]');
  await themeToggle.first().click();
  
  // Wait a moment for theme transition
  await page.waitForTimeout(500);
  
  // Capture light theme full page screenshot
  await page.screenshot({ path: "screenshot-light-theme.png", fullPage: true });
  
  // Click Floating CTA to test the popover
  const floatingCta = page.locator('button:has-text("Work with Shem")');
  if (await floatingCta.count() > 0) {
    await floatingCta.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: "screenshot-cta-popover.png" });
  }

  await browser.close();
  console.log("Screenshots captured successfully!");
}

main().catch(console.error);
