# EQ Software Cloud Landing Page

## Overview

<p align="justify">
The official landing page for **EQ Software Cloud**, a professional software development studio. This project is a high-performance, responsive web application designed with a **mobile-first approach**, showcasing the studio's expertise in web/mobile development, UI/UX design, and cloud solutions. It emphasizes clean architectural patterns, seamless internationalization (i18n), and high-quality visual interactions using Tailwind CSS and Vanilla JavaScript.
</p>


## Features

- **Internationalization (i18n)**: Fully integrated English/Spanish switcher with `localStorage` persistence and dynamic DOM updates.
- **Responsive Design**: Tailored experiences for mobile, tablet, and desktop using Tailwind CSS's utility-first breakpoints.
- **Infinite Brand Carousel**: A dual-row logo track with synchronized reverse-motion animations for client partnerships.
- **Interactive Project Portfolios**: Auto-advancing image carousels for each project, featuring dot indicators and smooth transitions.
- **Modern Visual Identity**: Implementation of custom gradients, subtle shadows for depth (glassmorphism touches), and professional typography.
- **Experience Navigation**: Horizontal scroll system for mobile users with dynamic progress indicators.

## Project Structure

The repository follows a clean asset separation pattern to ensure maintainability and scalability:

```text
eqsc-landing-page/
├── assets/
│   ├── images/
│   │   ├── icons/             # SVG icons for services
│   │   ├── logos/             # Brand and client webp assets
│   │   └── projects/          # Screenshots categorized by system
│   ├── js/
│   │   └── main.js            # Core logic (Carousels, i18n, Mobile Menu)
│   └── styles/
│       ├── base.css           # CSS resets and base variables
│       └── styles.css         # Custom animations and complex gradients
├── index.html                 # Main entry point with Tailwind configuration
└── README.md                  # Project documentation
```

## Technical Implementation

### 1. Internationalization System
<p align="justify">
The logic uses a centralized <code>translations</code> object and <code>data-i18n</code> attributes. It automatically detects saved preferences and updates the UI without page reloads.
</p>

### 2. Carousel Architecture
- **Clients**: Uses CSS keyframe animations (`scroll` and `scroll-reverse`) for high-performance infinite loops.
- **Projects**: JavaScript-managed intervals with pause-on-hover functionality and manual dot navigation.

### 3. Responsive Breakpoints
Optimized for:
- **Mobile (< 768px)**: Condensed layouts, hamburger menu, and touch-friendly sliders.
- **Tablet (768px - 1024px)**: Transitionary grid layouts.
- **Desktop (> 1024px)**: Full 4-column experience grids and expanded navigation.

## Guides

1.  **Adding a Project**: To add a new creation, place images in `assets/images/projects/your-project/` and update the `Projects Grid` in `index.html`.
2.  **Extending Languages**: Add a new key to the `translations` object in `assets/js/main.js` and apply the corresponding `data-i18n="key"` attribute in the HTML.
3.  **Customizing Theme**: Modify the `@theme` section within the `<style>` tag in `index.html` to update brand colors globally.

## Reference Documentation

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs - Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [WebP Image Format](https://developers.google.com/speed/webp)