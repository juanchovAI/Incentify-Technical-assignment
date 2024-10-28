# Incentify Technical Assignment

This repository contains the solution to the frontend technical assignment provided by Incentify. The objective was to build a responsive web application based on a Figma design, utilizing modern frontend technologies and best practices for UI/UX consistency and performance.

## 🖥️ Project Overview

The project is a **single-page application (SPA)** built using [Vite - TypeScript] to replicate the design and functionalities outlined in the Figma mockup. Key features include responsive layout adjustments, optimized performance, and component reusability to ensure maintainability and scalability.

## 📐 Requirements & Design

The web app closely follows the **Figma design specifications**, covering:
- Visual fidelity: Accurate use of colors, typography, spacing, and layouts
- Responsive design: Adjustments for desktop, tablet, and mobile screen sizes
- Accessibility enhancements for improved user experience

## 🚀 Tech Stack

- **React**
- **Tailwind CSS**
- **TypeScript**
- **React router dom**
  
## 📂 Project Structure

The codebase is organized as follows:

```plaintext
├── src/
│   ├── assets/                         # Static assets (images, icons)
│   ├── components/                     # Reusable components
│   │   ├── elements/                   # UI elements specific to the Pokemon feature
│   │   │   ├── PokemonHeaderSection.tsx   # Header section for displaying Pokemon image with gradietn background
│   │   │   ├── PokemonMainInfo.tsx        # Main section for primary Pokemon details
│   │   │   ├── PokemonStansInfo.tsx       # Section for  Pokemon stats
│   │   │   └── TypeElement.tsx            # Component for displaying Pokemon types
│   │   ├── layout/                     # Layout components for page structure
│   │   │   ├── ErrorPage.tsx              # Error handling page component
│   │   │   ├── ListContainer.tsx          # Container for lists
│   │   │   └── PokemonInformationSection.tsx # Section for displaying Pokemon information
│   ├── declarations/                  # TypeScript declaration files
│   ├── fetchers/                      # Functions to handle data fetching
│   ├── helpers/                       # Helper functions for various utilities
│   ├── App.tsx                        # Main application component
│   ├── index.css                      # Global CSS styles
│   ├── main.tsx                       # Main entry file for the application
│   └── vite-env.d.ts                  # Vite environment definitions
└── README.md
