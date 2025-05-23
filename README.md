# BW Automation Test

## Project Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/sheycamille/bw-automation-test.git
   cd bw-automation-test
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

## Running Tests

To run all tests:
```sh
npx playwright test
```

## Allure Reporting

1. **Run tests to generate Allure results**
   ```sh
   npx playwright test
   ```

2. **Generate Allure report**
   ```sh
   npm run allure:generate
   ```

3. **Open Allure report**
   ```sh
   npm run allure:open
   ```

## ✅ Positive Test Cases

| Test Case Name        | Steps                                      | Expected Result                          | Actual Result |Bugs/Defects |
|-----------------------|--------------------------------------------|------------------------------------------|---------------|-------------|
|Valid form submission  | Fill all fields, click submit              | Form submits with success message        | Form submits with success message         | None         |
|Required fields only   | Fill only required fields, click submit    | Form submits with success message        | Form submits with success message         | None         |


## ❌ Negative Test Cases

| Test Case Name              | Steps                                                                                   | Expected Result                                           | Actual Result | Bugs/Defects |
|----------------------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------|----------------|---------------|
| Password mismatch          | Fill form with valid data but enter mismatched Password and Confirm Password fields     | Alert: "Passwords do not match."                         | Alert: "Passwords do not match." | None           |
| Invalid phone number       | Enter fewer than 10 digits or letters in the phone field, then submit                   | Alert: "Phone number must be exactly 10 digits."         | Alert: "Phone number must be exactly 10 digits." | None           |
| Invalid email format       | Enter incorrect email format (e.g., `john@com`), fill rest, then submit                 | HTML5 prevents submission due to email format validation | HTML5 prevents submission due to email format validation | None           |
| Missing required fields    | Leave required fields empty and try to submit                                           | HTML5 prevents submission and highlights empty fields     | HTML5 prevents submission and highlights empty fields | None           |
| Letters in phone field     | Enter alphabets in phone field and submit                                               | Alert: "Phone number must be exactly 10 digits."         | Alert: "Phone number must be exactly 10 digits." | None           |
| Invalid LinkedIn URL       | Enter invalid LinkedIn URL (e.g., `linkedin.com/user`) and submit                       | HTML5 prevents submission due to `type="url"` validation | HTML5 prevents submission due to `type="url"` validation | None           |
| Symbols in name fields     | Enter symbols or numbers in First/Last Name fields (e.g., `John@`) and submit           | Browser blocks submission due to pattern mismatch        | Browser blocks submission due to pattern mismatch | None           |
