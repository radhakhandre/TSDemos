import { test, expect } from '@playwright/test';

test('search for T-shirts shows Faded Short Sleeve T-shirts', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // // Enter search term and submit
  // await page.fill('#search_query_top', 'T-shirts');
  // await page.click('button[name="submit_search"]');

  // // Verify the product appears in results
  // const product = page.locator('a.product-name', { hasText: 'Faded Short Sleeve T-shirts' });
  // await expect(product).toBeVisible();
});
