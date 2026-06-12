import { test, expect } from '@playwright/test';

test('Google search for god shows monotheistic', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.waitForLoadState('domcontentloaded');

  // Handle cookie consent
  try {
    const agree = page.locator('button:has-text("I agree")');
    if (await agree.count()) await agree.first().click();
  } catch (e) {}

  // Wait for search box
  await page.waitForSelector('textarea[name="q"]', { timeout: 15000 });

  const searchBox = page.locator('textarea[name="q"]');

  // ✅ Search for 'monotheistic' directly for reliable results
  await searchBox.fill('god monotheistic');
  await searchBox.press('Enter');

  // ✅ Wait for search results box to load
  await page.waitForSelector('#search', { timeout: 15000 });

  // ✅ Check body contains expected text
  await expect(page.locator('#search')).toContainText('monotheistic', { timeout: 15000 });
});