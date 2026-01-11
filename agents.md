# Documentación del Proyecto: Mi Portafolio

Este documento sirve como guía para agentes de IA y desarrolladores, describiendo la arquitectura, tecnologías y estructura del proyecto.

## Descripción General
Este es un proyecto de portafolio personal moderno y responsivo, construido con **Next.js** y **TypeScript**. Se enfoca en una experiencia de usuario fluida y estética, utilizando animaciones y componentes de UI reutilizables. También integra capacidades de IA y backend a través de Firebase y Google Genkit.

## Stack Tecnológico

### Core
- **Framework**: [Next.js](https://nextjs.org/) (v15.3.8) - App Router.
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) (v5).
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) (v3.4.1) con `tailwindcss-animate` y `tailwind-merge`.
- **Gestor de Paquetes**: pnpm.

### UI & Componentes
- **Librería de Componentes**: [Shadcn UI](https://ui.shadcn.com/) (basado en `@radix-ui`).
- **Iconos**: [Lucide React](https://lucide.dev/).
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/).
- **Carruseles**: `embla-carousel-react`.
- **Gráficos**: `recharts`.

### Backend & AI
- **Backend as a Service**: [Firebase](https://firebase.google.com/) (v11.9.1).
- **AI Toolkit**: [Google Genkit](https://firebase.google.com/docs/genkit) (`@genkit-ai/*`) para integración de IA generativa.
- **Validación**: `zod` y `react-hook-form`.

## Estructura del Proyecto

El código fuente principal se encuentra en la carpeta `src/`.

### Directorios Principales
- **`src/app`**: Contiene las rutas de la aplicación (App Router).
  - `page.tsx`: Página principal.
  - `layout.tsx`: Layout raíz.
  - `globals.css`: Estilos globales.
  - `actions.ts`: Server Actions (probablemente para formularios o lógica de backend).
- **`src/components`**: Componentes de React.
  - `ui/`: Componentes base de Shadcn UI (botones, inputs, dialogs, etc.).
  - `sections/`: Secciones de página completas (probablemente Hero, About, Projects, etc.).
  - `layout/`: Componentes de estructura como Header o Footer.
  - `animated-section.tsx`: Componente para secciones con animaciones.
- **`src/lib`**: Utilidades y configuraciones compartidas.
- **`src/hooks`**: Custom React hooks.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo (usa Turbopack).
- `npm run build`: Construye la aplicación para producción.
- `npm run start`: Inicia la aplicación en modo producción.
- `npm run lint`: Ejecuta el linter.
- `npm run genkit:dev`: Inicia el entorno de desarrollo de Genkit AI.

## Configuración
- **Variables de Entorno**: Gestionadas via `.env` (usando `dotenv`).
- **Tailwind**: Configurado en `tailwind.config.js`.
- **TypeScript**: Configurado en `tsconfig.json`.

## Notas Adicionales
- El proyecto utiliza `pnpm` como gestor de paquetes (evidenciado por `pnpm-lock.yaml`).
- Configuración de workspace definida en `pnpm-workspace.yaml`.
