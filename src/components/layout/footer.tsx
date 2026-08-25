import Link from 'next/link';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container relative mx-auto flex flex-col items-center justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 md:min-h-24">
        <p className="text-center text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} Juan Fernando Pacheco Ibañez. <br className="sm:hidden" />Todos los derechos reservados.
        </p>
        <div className="flex items-center justify-center gap-4 md:absolute md:right-6 lg:right-8">
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
