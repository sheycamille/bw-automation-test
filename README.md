## ✅ Positive Test Cases

| Test Case Name        | Steps                                      | Expected Result                          | Actual Result |Bugs/Defects |
|-----------------------|--------------------------------------------|------------------------------------------|---------------|-------------|
|Valid form submission  | Fill all fields, click submit              | Form submits with success message        | Form submits with success message         | None         |
|Required fields only   | Fill only required fields, click submit    | Form submits with success message        | Form submits with success message         | None         |


## ❌ Negative Test Cases

| Test Case Name              | Steps                                                                                   | Expected Result                                           | Actual Result | Bugs/Defects |
|----------------------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------|----------------|---------------|
| Password mismatch          | Fill form with valid data but enter mismatched Password and Confirm Password fields     | Alert: "Passwords do not match."                         |           | TBD           |
| Invalid phone number       | Enter fewer than 10 digits or letters in the phone field, then submit                   | Alert: "Phone number must be exactly 10 digits."         |             | TBD           |
| Invalid email format       | Enter incorrect email format (e.g., `john@com`), fill rest, then submit                 | HTML5 prevents submission due to email format validation |             | TBD           |
| Missing required fields    | Leave required fields empty and try to submit                                           | HTML5 prevents submission and highlights empty fields     |            | TBD           |
| Letters in phone field     | Enter alphabets in phone field and submit                                               | Alert: "Phone number must be exactly 10 digits."         |             | TBD           |
| Invalid LinkedIn URL       | Enter invalid LinkedIn URL (e.g., `linkedin.com/user`) and submit                       | HTML5 prevents submission due to `type="url"` validation |            | TBD           |
| Symbols in name fields     | Enter symbols or numbers in First/Last Name fields (e.g., `John@`) and submit           | Browser blocks submission due to pattern mismatch        |           | TBD           |
