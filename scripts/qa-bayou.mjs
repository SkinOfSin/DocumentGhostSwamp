import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

// Wait for Enter button enabled
await page.waitForFunction(() => {
  const btn = [...document.querySelectorAll("button")].find((b) =>
    b.textContent?.includes("Enter the bayou"),
  );
  return btn && !btn.disabled;
}, { timeout: 15000 });

await page.click("button:has-text('Enter the bayou')");
await page.waitForTimeout(800);
await page.screenshot({ path: "/workspace/screenshots/playing-morning.png" });

// Move with WASD via controls test
const moveTest = await page.evaluate(async () => {
  const ct = window.__controlsTest;
  if (!ct) return { ok: false, reason: "no controls probe" };
  const x0 = ct.getX();
  const y0 = ct.getY();
  // Hold D (right) for ~500ms via setKeys each frame simulation
  ct.setKeys(["KeyD"]);
  await new Promise((r) => setTimeout(r, 500));
  const x1 = ct.getX();
  const y1 = ct.getY();
  ct.setKeys([]);
  // Hold A (left)
  ct.setKeys(["KeyA"]);
  await new Promise((r) => setTimeout(r, 500));
  const x2 = ct.getX();
  ct.setKeys([]);
  // Hold W (up = -y)
  ct.setKeys(["KeyW"]);
  await new Promise((r) => setTimeout(r, 400));
  const y2 = ct.getY();
  ct.setKeys([]);
  return {
    ok: true,
    dMovesRight: x1 > x0 + 10,
    aMovesLeft: x2 < x1 - 10,
    wMovesUp: y2 < y1 - 5,
    x0, x1, x2, y0, y1, y2,
  };
});

// Advance day for night screenshot via engine internals if available
await page.evaluate(() => {
  // @ts-ignore
  const g = window.__bayouGame;
  // force day progress by manipulating engine through canvas? not exposed
});

// document nearest if any
await page.keyboard.press("KeyE");
await page.waitForTimeout(300);

// open journal
await page.keyboard.press("KeyJ");
await page.waitForTimeout(400);
await page.screenshot({ path: "/workspace/screenshots/journal.png" });
await page.keyboard.press("Escape");
await page.waitForTimeout(200);

// play a bit more and move around
for (const code of ["KeyW", "KeyA", "KeyS", "KeyD"]) {
  await page.keyboard.down(code);
  await page.waitForTimeout(300);
  await page.keyboard.up(code);
}
await page.screenshot({ path: "/workspace/screenshots/playing-move.png" });

// Mobile viewport
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(300);
await page.screenshot({ path: "/workspace/screenshots/mobile.png" });

const bodyText = await page.locator("body").innerText();
const snap = await page.evaluate(() => window.__bayouGame?.getSnapshot?.());

console.log(JSON.stringify({ moveTest, errors, snap, bodyTextLen: bodyText.length }, null, 2));
await browser.close();
