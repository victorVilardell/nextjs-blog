import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/");
  await page
    .getByRole("link", {
      name: "The Transformation Journey of Dany Cowboy: A Tale of Sweat and Iron",
    })
    .click();
  expect(
    await page.getByRole("heading", {
      name: "The Transformation Journey of Dany Cowboy: A Tale of Sweat and Iron",
    })
  ).toBeVisible;
});
