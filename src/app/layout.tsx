import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '../components/ui/toaster';

export const metadata: Metadata = {
  title: 'Juan Fernando Pacheco Ibañez | Desarrollador Full Stack & Especialista en Automatización con IA',
  description: 'Portafolio de Juan Fernando Pacheco Ibañez, Desarrollador Full Stack & Especialista en Automatización con IA. Especializado en TypeScript, Python, NestJS, React y orquestación de procesos con n8n, GoHighLevel e IA.',
  keywords: ['Full Stack Developer', 'AI Automation', 'TypeScript', 'Python', 'NestJS', 'React', 'n8n', 'GoHighLevel', 'Juan Fernando Pacheco Ibañez'],
  authors: [{ name: 'Juan Fernando Pacheco Ibañez' }],
  creator: 'Juan Fernando Pacheco Ibañez',
  icons: {
    icon: [{ url: '/jfpi-logo.svg', type: 'image/svg+xml' }],
    shortcut: ['/jfpi-logo.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" href="/jfpi-logo.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
