import { test, expect } from '@playwright/test';

/**
 * Login - Ingreso exitoso con credenciales validas
 * TestLink ID: 458 | Version: 1
 * Precondicion: El usuario debe tener una cuenta activa en el sistema.
 */
test('Login - Ingreso exitoso con credenciales validas', async ({ page }) => {

  // Paso 1: Navegar a la URL de login
  await page.goto('https://app.godoworks.com/es/base/Login/index');

  // Validar que la página de login cargó correctamente
  await expect(page.locator('input[id="accountID"]')).toBeVisible();
  await expect(page.locator('input[id="userID"]')).toBeVisible();
  await expect(page.locator('input[id="password"]')).toBeVisible();
  await expect(page.locator('button[id="button-load"]')).toBeVisible();

  // Paso 2: Ingresar número de cuenta
  await page.locator('input[id="accountID"]').fill('750');

  // Paso 3: Ingresar usuario
  await page.locator('input[id="userID"]').fill('admin_85989');

  // Paso 4: Ingresar contraseña
  await page.locator('input[id="password"]').fill('{I,Q%U6tWLH7a;o}');

  // Paso 5: Hacer clic en el botón Ingresar
  await page.locator('button[id="button-load"]').click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(5000); // 5 segundos

  // Validar redirección al dashboard
  await expect(page.locator('h5.card-title')).toHaveText('Filtros de Búsqueda');
  await page.locator('a[href="/es/dashboard/list/boards"]').first().hover();
  await page.locator('a[href="/es/dashboard/list/boards"]').first().click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(6000); // 5 segundos
  await expect(page).toHaveURL('https://app.godoworks.com/es/dashboard/list/boards');
  await page.waitForTimeout(6000);
  await page.locator('button[aria-label="Cerrar tour"]').click();
  await page.waitForTimeout(6000);

  // Validar que el menú de navegación es visible
  await expect(page.locator('nav')).toBeVisible();

});








