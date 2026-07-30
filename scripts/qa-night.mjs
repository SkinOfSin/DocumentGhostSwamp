import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.waitForFunction(() => {
  const btn = [...document.querySelectorAll("button")].find((b) => b.textContent?.includes("Enter the bayou"));
  return btn && !btn.disabled;
}, { timeout: 15000 });
await page.click("button:has-text('Enter the bayou')");
await page.waitForTimeout(600);
// dusk
await page.evaluate(() => window.__bayouGame?.setDayProgress?.(0.6));
await page.waitForTimeout(400);
await page.screenshot({ path: "/workspace/screenshots/dusk.png" });
// night
await page.evaluate(() => window.__bayouGame?.setDayProgress?.(0.85));
await page.waitForTimeout(500);
await page.screenshot({ path: "/workspace/screenshots/night.png" });
const snap = await page.evaluate(() => window.__bayouGame?.getSnapshot?.());
console.log(JSON.stringify({ snap, errors }, null, 2));
await browser.close();
