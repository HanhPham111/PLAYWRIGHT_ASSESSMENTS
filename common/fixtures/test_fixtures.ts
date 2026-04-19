import { test as base } from '@playwright/test';

export const test = base.extend<{init_test: void}>({
  init_test: async ({ page }, use) => {
    await page.goto("");
    await use(); 
  },
});