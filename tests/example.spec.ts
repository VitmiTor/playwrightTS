import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  
  // Expect a title "to contain" a substring.
  await page.getByPlaceholder('Username').fill("standard_user")
  await page.getByPlaceholder('Password').fill("secret_sauce")
  await page.getByRole('button',{name: 'LOGIN'}).click()

  await expect(page.locator("div[class='product_label']")).toHaveText("Products")

  //await page.getByRole('button',{name: 'ADD TO CART'}).all()

  for(const li of await page.locator(".btn_inventory").all()){
    await li.click()
  }
});


