import Link from 'next/link';
import { Github } from 'lucide-react';
import Logo from '../logo';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <Logo />
        </div>
        <p className="text-sm text-foreground/60 text-center">
          &copy; {new Date().getFullYear()} Juan Fernando Pacheco Ibañez. <br className="sm:hidden" />Todos los derechos reservados.
        </p>
        <div className="flex items-center justify-center md:justify-end gap-4">
          <Link href="https://github.com/juanfer93" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-foreground/60 transition-colors hover:text-primary" />
          </Link>
          {/* Email placeholder as requested */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
