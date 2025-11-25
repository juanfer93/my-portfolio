import { Briefcase } from 'lucide-react';
import AnimatedSection from '../animated-section';

const experienceData = [
  { date: 'Actualidad', title: 'Freelance Software Developer', description: 'Desarrollo Full Stack & Consultoría IA.' },
  { date: 'Anterior', title: 'Wow Desarrollos Digitales', description: 'Mantenimiento y desarrollo de sistemas.' },
  { date: 'Anterior', title: 'Fundación Estudiar y Trabajar', description: 'Desarrollo de aplicaciones web.' },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 md:py-28 lg:py-32">
      <AnimatedSection>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experiencia Laboral</h2>
            <p className="mt-4 max-w-xl text-foreground/80 md:text-xl/relaxed">
              Mi trayectoria profesional a lo largo de los años.
            </p>
          </div>
          <div className="relative mt-16 max-w-3xl mx-auto">
            <div className="absolute left-3 top-3 h-full w-px bg-border" aria-hidden="true"></div>
            <ul className="space-y-12">
              {experienceData.map((item, index) => (
                <li key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                    <Briefcase className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-primary">{item.date}</p>
                  <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-base text-foreground/80">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Experience;
