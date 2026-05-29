# Runna Landing Page 🏃‍♂️

A modern, responsive landing page for Runna - the comprehensive activity tracking and fitness management application. Built with Next.js 16, React 19, and TypeScript for optimal performance and user experience.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building & Deployment](#building--deployment)

## ✨ Features

- **Hero Section**: Eye-catching hero with call-to-action
- **Stats Showcase**: Display key metrics and achievements
- **Features Section**: Highlight Runna's core capabilities
- **How It Works**: Step-by-step guide to using the app
- **Download Section**: Quick access to app stores
- **FAQ**: Answer common user questions
- **Responsive Design**: Mobile-first, works on all devices
- **Dark/Light Theme**: Automatic theme switching with next-themes
- **Modern UI**: Built with Tailwind CSS and Material-UI components
- **Accessible**: WCAG compliant components and navigation

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16.2.6
- **Runtime**: React 19.2.4 & React DOM 19.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with PostCSS
- **Component Library**: Material-UI (MUI) 9
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **Utilities**: clsx, tailwind-merge
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm / yarn / pnpm / bun

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd runna-landing-page
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

The page will auto-update as you make changes to files.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Landing page (home)
└── shared/
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx    # Navigation header
    │   │   └── Footer.tsx    # Footer component
    │   ├── sections/         # Page sections
    │   │   ├── Hero.tsx
    │   │   ├── Stats.tsx
    │   │   ├── Features.tsx
    │   │   ├── HowItWorks.tsx
    │   │   ├── Download.tsx
    │   │   └── FAQ.tsx
    │   ├── ui/               # Reusable UI components
    │   │   ├── Badge.tsx
    │   │   ├── Card.tsx
    │   │   ├── Column.tsx
    │   │   ├── Row.tsx
    │   │   └── Icon.tsx
    │   └── ThemeProvider.tsx # Theme context provider
    ├── constants/
    │   └── constants.ts      # App constants
    ├── hooks/                # Custom React hooks
    └── utils/
        ├── cn.ts            # Utility for class names
        └── utils.ts         # General utilities
```

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Editing

Start editing by modifying files in `src/app/page.tsx` or component files in `src/shared/components/`. The page will automatically reflect your changes.

### Theme Customization

The project uses Tailwind CSS 4 with a theme provider. Customize colors and styles in:

- `tailwind.config.ts` - Tailwind configuration
- `src/shared/components/ThemeProvider.tsx` - Theme logic
- `src/app/globals.css` - Global styles

## 🔨 Building & Deployment

### Production Build

```bash
npm run build
npm start
```

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Your site will be live at a Vercel URL

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Deployment Options

- [Netlify](https://netlify.com) - Connect your Git repo
- [AWS Amplify](https://aws.amazon.com/amplify/) - AWS hosting
- [Docker](https://www.docker.com/) - Containerized deployment
- Any Node.js hosting platform

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [React Documentation](https://react.dev) - React concepts
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling guide
- [Material-UI](https://mui.com/material-ui/getting-started/) - Component library

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is part of the Runna fitness tracking application.
