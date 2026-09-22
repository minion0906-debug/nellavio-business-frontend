<div id="user-content-toc" align="center">
  <ul align="center" style="list-style: none;">
    <summary>
      <h1>Nellavio Layout</h1>
    </summary>
  </ul>
</div>

<div align="center">
  <a href="https://github.com/nellavio/nellavio-layout/blob/main/CHANGELOG.md" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/%20-changelog-blue?logo=readme&logoColor=white&labelColor=grey" alt="Changelog" />
  </a>
  <a href="https://github.com/nellavio/nellavio-layout/blob/main/license" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/license-MIT-blue" alt="License" />
  </a>
  <a href="https://github.com/nellavio/nellavio-layout/releases" style="text-decoration: none;">
    <img src="https://img.shields.io/github/package-json/v/nellavio/nellavio-layout?color=green" alt="Version" />
  </a>
</div>

<h4 align="center">Foundation and bricks for your Next.js dashboard </h4>
<br />

<div align="center">
  <img src="https://github.com/user-attachments/assets/4589a284-89d4-41f7-8eab-a1135338fbb9" alt="Nellavio Layout" width="800" />
</div>

## Overview

Nellavio Layout is a lightweight, open-source dashboard starter - a stripped down version of [Nellavio](https://github.com/nellavio/nellavio). It provides the core layout shell (sidebar, navbar, settings drawer, theming, i18n) along with a collection of ready-to-use UI components, forms, tables and charts, which you can you use for building modern SaaS products, internal tools and data-rich admin panels.

An ideal starting point when you need a polished dashboard layout to build on top of, without the overhead of a full-featured starter. The layout is fully responsive and built with accessibility in mind.

## Tech stack

React 19, Next.js 16, TypeScript, Tailwind 4, Shadcn UI, Zustand, Recharts, Vitest

## Features

- **Core dashboard layout** - Collapsible sidebar, settings drawer and navbar with search field, notifications and theme toggle
- **Auth forms** - Login, register and forgot password pages with Yup validation (UI only, no backend)
- **Error pages** - 401 (Unauthorized), 404 (Not Found) and 500 (Server Error)
- **Collection of 90+ reusable components** - Built on top of Shadcn UI and Radix primitives
- **60+ chart variations** - Powered by Recharts library
- **Themes** - Dark/light mode made with next-themes and CSS variables
- **i18n** - Multi-language support via next-intl
- **Security** - OWASP-aligned security headers (CSP, HSTS, X-Frame-Options) configured out of the box
- **Accessibility** - Keyboard navigation, clear focus indicators and ARIA support

## Pre-configured tooling

- **Storybook** - Component documentation and visual testing
- **Testing** - Unit tests with Vitest + React Testing Library
- **CI Pipeline** - Automated linting, type checking and testing via GitHub Actions
- **Code quality** - Prettier (formatter), Eslint (linter) and Husky (pre-commit hooks)

## Quickstart

You can get started with Nellavio Layout by cloning the repository:

```bash
git clone https://github.com/nellavio/nellavio-layout.git
cd nellavio-layout
npm install
npm run dev
```

🎉 **That's it!** Navigate to [http://localhost:3000](http://localhost:3000) to explore the dashboard. No backend or environment variables needed.

## Links

#### Live demo: [https://layout.nellavio.com/](https://layout.nellavio.com/)

#### Storybook: [https://storybook.nellavio.com/](https://storybook.nellavio.com/)

#### Full version

Looking for authentication, API integration, and more pages? Check out the full [Nellavio](https://github.com/nellavio/nellavio) starter.

## Project structure

```shell
├── src
│   ├── app                       # Next.js pages (App Router)
│   │   └── [locale]              # Dynamic locale folder for i18n
│   │       └── (auth)            # Auth & error pages
│   ├── assets                    # Static assets
│   │   └── icons                 # Icon components
│   ├── components                # Main components folder
│   │   ├── auth                  # Auth form components (UI only)
│   │   ├── common                # Reusable components
│   │   ├── layout                # Layout components
│   │   └── views                 # Page-specific components
│   ├── hooks                     # Custom reusable hooks
│   ├── i18n                      # Internationalization config
│   ├── services                  # Providers
│   ├── store                     # Zustand stores
│   ├── styles                    # Themes and global styles
│   │   ├── themes                # Colors for themes
│   │   └── overrides             # Style overrides
│   ├── tests                     # Test files
│   ├── utils                     # Utility functions
│   └── proxy.ts                  # Next.js proxy configuration
└── package.json                  # Project dependencies and scripts
```

## Pages

| Path               | Description                                                                                                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                | Dashboard homepage with a sample card component.                                                                                                                                                                                                                    |
| `/ui-elements`     | Showcase of styled Shadcn UI components displayed in a responsive two-column grid: buttons, command palette, avatars, tooltips, alerts, toasts, skeletons, dialogs, dropdown menus, badges, popovers, progress bars, breadcrumbs, tabs, separators, and pagination. |
| `/forms`           | Collection of form components in a responsive two-column grid: input fields, select inputs, textareas, color picker, form validation, checkboxes, radio buttons, toggle switches, date picker, file upload, and sliders.                                            |
| `/tables`          | Four TanStack Table variants demonstrating different table configurations: basic table, advanced table with filtering and sorting, user management table, and inventory tracking table.                                                                             |
| `/charts`          | Gallery of Recharts chart types displayed in a responsive grid: area, scatter, pie, radar, composed, stacked bar, radial bar, two-axis line, mixed line, vertical bar, area fill by value, gradient pie, and a full-width line chart.                               |
| `/login`           | Sign-in page with email/password form validated by react-hook-form and Yup, show/hide password toggle, "Remember me" checkbox and error tooltips.                                                                                                                   |
| `/register`        | Registration page with sign-up form, Yup schema validation and accessible error handling.                                                                                                                                                                           |
| `/forgot-password` | Password reset page with email input form, Yup validation and success state.                                                                                                                                                                                        |
| `/error-401`       | Showcase error page for 401 Unauthorized.                                                                                                                                                                                                                           |
| `/error-404`       | Showcase error page for 404 Not Found.                                                                                                                                                                                                                              |
| `/error-500`       | Showcase error page for 500 Server Error.                                                                                                                                                                                                                           |

## How to customize

#### Add a new page

1. Create a folder in `src/app/[locale]/` with a `page.tsx` file
2. Add an entry to `src/config/navigationConfig.ts` to show it in the sidebar
3. Wrap your content with `<PageWrapper pageName="YourPage">` for breadcrumbs and layout

#### Add a new color token

1. Add the CSS variable to both `src/styles/themes/light.css` and `dark.css`
2. For consistency, consider placing it in one of the existing groups (Texts, Icons, Backgrounds or Borders) following the naming convention
3. Tailwind 4 auto-generates utility classes from the `--color-` prefix - use `bg-yourToken`, `text-yourToken` etc.

#### Add a new language

1. Create a new JSON file in `messages/` (e.g. `de.json`) based on `en.json`
2. Add the locale to `src/i18n/routing.ts` in the `locales` array
3. Add a language option in `UserMenuDropdown.tsx`

#### Change default settings

Edit `src/config/appDefaults.ts` to change the default theme, font, sidebar state, chart animations, toast duration and other global defaults. These values are used by Zustand stores on first visit.

## One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nellavio/nellavio-layout)

## ⌨Accessibility

- Keyboard navigation with Tab and arrow buttons across all interactive elements
- Visible focus indicators (focus-visible) with single CSS variable for consistent outline color
- ARIA attributes wherever needed across components
- UI components are built on top of Radix UI primitives which provide core accessibility support
- Tested with Storybook a11y addon and Chrome Lighthouse (95+)

### Keyboard shortcuts

Desktop-only shortcuts (active above 1280px). Disabled when focus is inside a text input (except `Ctrl+K`).

| Shortcut   | Action         |
| ---------- | -------------- |
| `Ctrl + K` | Focus search   |
| `Ctrl + \` | Toggle sidebar |
| `Ctrl + /` | Toggle theme   |

On macOS use `Cmd` instead of `Ctrl`.

## Available commands

| Command                | Action                                |
| :--------------------- | :------------------------------------ |
| `npm install`          | Installs dependencies                 |
| `npm run dev`          | Starts dev server at `localhost:3000` |
| `npm run build`        | Builds your production site           |
| `npm start`            | Starts server at `localhost:3000`     |
| `npm run lint`         | Runs ESLint to check code quality     |
| `npm run lint:fix`     | Runs ESLint and auto-fixes issues     |
| `npm run type-check`   | Runs TypeScript type checking         |
| `npm run test`         | Runs Vitest tests                     |
| `npm run test:watch`   | Runs Vitest tests in watch mode       |
| `npm run storybook`    | Starts Storybook at `localhost:6006`  |
| `npm run format`       | Formats code with Prettier            |
| `npm run format:check` | Checks if code is properly formatted  |

## Community and support

Check out [CONTRIBUTING.md](https://github.com/nellavio/nellavio-layout/blob/main/CONTRIBUTING.md) to learn how to get started with contributions.

All forms of project support are valued and appreciated, including code contributions, issue reporting, and sponsorship through GitHub Sponsors or [Buy Me A Coffee](https://buymeacoffee.com/matt765) service.

## License

This project is open source and available under the MIT License. Feel free to use it to build any personal or commercial applications (SaaS, internal tools etc.). Although the license allows redistribution, I would greatly appreciate it if you did not repackage or resell this project as a standalone UI kit or a template.

## Stay updated

Subscribe to the [Nellavio newsletter](https://nellavio.kit.com/) to get notified about major updates and new features.

## Author

Made by [matt765](https://github.com/matt765/)
