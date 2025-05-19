// tests/userProfileForm.spec.js
const { test, expect } = require('@playwright/test');
const { UserProfileFormPage } = require('../pages/userProfilePage');

test.describe('User Profile Form Tests', () => {
  let formPage;

  test.beforeEach(async ({ page }) => {
    formPage = new UserProfileFormPage(page);
    await formPage.navigate();
  });

  test('Valid form submission', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Valid form test' });
    await formPage.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'Password123!',
      confirmPassword: 'Password123!',
      gender: 'male',
      dob: '1990-01-01',
      phone: '1234567890',
      address: '123 Main St',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    });
    await formPage.submitForm();
    await expect(page).not.toHaveURL(/.*error/);
  });

  test('Required fields only', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Required fields only test' });
    await formPage.fillRequiredFields({
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      password: 'Password123!',
      confirmPassword: 'Password123!',
    });
    await formPage.submitForm();
    await expect(page).not.toHaveURL(/.*error/);
  });
});