import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Entrar a gdw', async ({ page }) => {
  
  await page.goto('https://app.godoworks.com/es/base/Login/index');

  await page.locator('input[id="accountID"]').fill('750'); 
  await page.locator('input[id="userID"]').fill('admin_85989'); 
  await page.locator('input[id="password"]').fill('{I,Q%U6tWLH7a;o}'); 
  await page.locator ('button[id="button-load"]').click();
  await page.waitForTimeout(5000); // 5 segundos

  await expect(page.locator('h5.card-title')).toHaveText('Filtros de Búsqueda');
  //await expect(page.locator('#user-avatar')).toBeVisible();









});
