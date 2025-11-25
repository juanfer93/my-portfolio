import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '../components/ui/toaster';

export const metadata: Metadata = {
  title: 'Juan Fernando Pacheco Ibañez | Software Developer & AI Specialist',
  description: 'Portfolio of Juan Fernando Pacheco Ibañez, a software developer and AI automation specialist from Colombia. Transforming complex ideas into scalable web applications and automated workflows.',
  keywords: ['Software Developer', 'AI', 'Colombia', 'Freelance', 'React', 'Python', 'Next.js', 'Automation', 'Juan Fernando Pacheco Ibañez'],
  authors: [{ name: 'Juan Fernando Pacheco Ibañez' }],
  creator: 'Juan Fernando Pacheco Ibañez',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
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
