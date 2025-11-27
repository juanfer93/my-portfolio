import Image from 'next/image';
import AnimatedSection from '../animated-section';

const About = () => {
  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-32">
      <AnimatedSection>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">Sobre Mí</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Más que código, soluciones.
              </h2>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Con más de 2 años de experiencia en el ecosistema digital, me especializo en crear puentes entre el desarrollo web tradicional y la nueva era de la Inteligencia Artificial. He colaborado con empresas como <em className="text-foreground not-italic font-semibold">Wow Desarrollos Digitales</em> y <em className="text-foreground not-italic font-semibold">Fundación Estudiar y Trabajar</em>, aportando innovación y eficiencia técnica. Actualmente, ayudo a empresas y emprendedores como Freelance Developer a optimizar sus procesos.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"></div>
                 <Image
                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=8"
                   alt="Programación y Desarrollo"
                   width={400}
                   height={400}
                   className="relative rounded-full object-cover border-4 border-background"
                   data-ai-hint="programming code abstract"
                 />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;
