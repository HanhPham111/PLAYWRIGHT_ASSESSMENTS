# Playwright Automation Project

## 1. Install Node.js

Download and install Node.js from: https://nodejs.org/

Verify installation:

```bash
node -v
npm -v
```

---

## 2. Install Playwright

Install Playwright and required browsers:

```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

---

## 3. Install TypeScript & Type Definitions

```bash
npm install --save-dev typescript
npm install --save-dev @types/node
```

(Optional) Initialize TypeScript config:

```bash
npx tsc --init
```

---

## 4. Update Snapshots (if needed)

Run this when snapshot tests fail and need updating:

```bash
npx playwright test --update-snapshots
```

---

## 5. Run Tests

Execute all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run specific test file:

```bash
npx playwright test tests/example.spec.ts
```

---

## 6. View HTML Report

```bash
npx playwright show-report
```

---

## Project Structure (Example)

```
playwright_assessments/
│
├── tests/                # Test cases
├── common/
│   ├── page/             # Page Object Model
│   ├── locators/         # Locators
│   ├── fixtures/         # Custom fixtures
│   └── constants/        # Enums / constants
│
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

---

## Notes

* Make sure Node.js version >= 20
* Always install browsers after installing Playwright

