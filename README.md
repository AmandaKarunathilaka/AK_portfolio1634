# Personal Portfolio Website

A responsive, high-performance personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop viewports.
- **Dynamic Theme Switching:** Supports Light and Dark modes.
- **Multilingual Support:** Built-in language switcher supporting multiple languages.
- **Hero Section:** Interactive hero section with dynamic typing effect.
- **About & Skills:** Highlights personal background, technical skills, and tools.
- **Work Experience:** Structured timeline detailing work history and roles.
- **Projects Showcase:** Interactive project showcase with dynamic detail pages (`/projects/[id]`).
- **Contact Form:** Interactive contact section with social links and input form.
- **Smooth Animations:** UI transitions and micro-interactions powered by Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion, React Type Animation
- **Theme Management:** next-themes
- **Icons:** Lucide React, React Icons, Carbon Icons

## Project Structure

```text
portfolio/
├── app/                  # Next.js App Router pages and layouts
│   ├── projects/[id]/    # Dynamic project detail pages
│   ├── globals.css       # Global styles and Tailwind configuration
│   ├── layout.tsx        # Root layout with context providers
│   └── page.tsx          # Main homepage component
├── components/           # UI components
│   ├── LanguageToggle.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── project.tsx
│   └── skills.tsx
├── context/              # React Context (Language / Internationalization)
│   └── LanguageContext.tsx
├── data/                 # Data sources for projects and skills
├── public/               # Static assets (images, icons)
├── package.json
└── tsconfig.json
```


