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
                Con más de 2 años de experiencia, combino la ingeniería de software tradicional con potentes herramientas de IA. poseo un conocimiento profundo del código que me permite auditar, optimizar y estructurar lo que la IA genera. Utilizo la inteligencia artificial como un motor de velocidad, pero mi expertise técnico garantiza la calidad, seguridad y escalabilidad de cada solución que entrego para mis clientes.
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
