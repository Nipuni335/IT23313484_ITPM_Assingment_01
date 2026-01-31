import { test, expect } from '@playwright/test';
import testCases from '../data/testCases.json';

const URL = 'https://www.swifttranslator.com/';

testCases.forEach(tc => {
  test(`${tc.TC_ID} - ${tc.Test_Name}`, async ({ page }) => {
    await page.goto(URL);

    await page.fill('textarea', tc.Input);

    const output = page.locator('#sinhalaText');

    if (tc.Type === 'positive') {
      await expect(output).toContainText(tc.Expected_Output);
    }

    if (tc.Type === 'negative') {
      await expect(output).not.toBeEmpty();
    }

    if (tc.Type === 'ui') {
      await expect(output).toContainText(tc.Expected_Output);
    }
  });
});