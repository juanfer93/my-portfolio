import Link from 'next/link';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative mx-auto flex flex-col items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="outline" className="border-primary/50 text-primary py-1 px-3 rounded-full">Backend</Badge>
            <Badge variant="outline" className="border-primary/50 text-primary py-1 px-3 rounded-full">Frontend</Badge>
            <Badge variant="outline" className="border-primary/50 text-primary py-1 px-3 rounded-full">AI Automation</Badge>
          </div>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Desarrollador de software,</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">especialista en automatizacion IA y desarrollo con IA</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl">
            Hola, soy Juan Fernando Pacheco Ibañez. Transformo ideas complejas en aplicaciones escalables, flujos de trabajo automatizados y desarrollo con IA.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#projects">Ver Proyectos</Link>
            </Button>
          </div>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
         <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce" />
          </Link>
      </div>
    </section>
  );
};

export default Hero;
