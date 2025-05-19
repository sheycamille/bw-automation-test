// pages/UserProfileFormPage.js
const { expect } = require('@playwright/test');

class UserProfileFormPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-testid="first-name"]');
    this.lastNameInput = page.locator('[data-testid="last-name"]');
    this.emailInput = page.locator('[data-testid="email"]');
    this.passwordInput = page.locator('[data-testid="password"]');
    this.confirmPasswordInput = page.locator('[data-testid="confirm-password"]');
    this.genderRadio = gender => page.locator(`[data-testid="gender-${gender}"]`);
    this.dobInput = page.locator('[data-testid="dob"]');
    this.phoneInput = page.locator('[data-testid="phone"]');
    this.addressInput = page.locator('[data-testid="address"]');
    this.linkedinInput = page.locator('[data-testid="linkedin"]');
    this.githubInput = page.locator('[data-testid="github"]');
    this.submitButton = page.locator('[data-testid="submit-button"]');
  }

  async navigate() {
    await this.page.goto('http://127.0.0.1:5500/index.html');
  }

  async fillForm(data) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.passwordInput.fill(data.password);
    await this.confirmPasswordInput.fill(data.confirmPassword);
    if (data.gender) await this.genderRadio(data.gender).check();
    if (data.dob) await this.dobInput.fill(data.dob);
    if (data.phone) await this.phoneInput.fill(data.phone);
    if (data.address) await this.addressInput.fill(data.address);
    if (data.linkedin) await this.linkedinInput.fill(data.linkedin);
    if (data.github) await this.githubInput.fill(data.github);
  }

  async fillRequiredFields(data) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.passwordInput.fill(data.password);
    await this.confirmPasswordInput.fill(data.confirmPassword);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}

module.exports = { UserProfileFormPage };
