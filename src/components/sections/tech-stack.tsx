import { Code, Server, Palette, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import AnimatedSection from '../../components/animated-section';

const techCategories = [
  {
    title: 'Lenguajes',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    title: 'Frontend',
    icon: <Palette className="h-8 w-8 text-primary" />,
    skills: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5 & CSS3'],
  },
  {
    title: 'Backend',
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: ['Node.js', 'NestJs', 'Flask', 'Django', 'Integración de APIs', 'SQL'],
  },
  {
    title: 'AI Engineering & Tools',
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    skills: ['Antigravity (Agentic)', 'Cursor & Codex', 'Stitch AI (Design)', 'N8n', 'GoHighLevel', 'Integración de LLMs', 'MCP', 'RetellAI'],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/10">
      <AnimatedSection>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mi Stack Tecnológico</h2>
            <p className="mt-4 max-w-2xl text-foreground/80 md:text-xl/relaxed">
              Las herramientas y tecnologías que uso para construir soluciones digitales modernas y eficientes.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {techCategories.map((category) => (
              <Card key={category.title} className="bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center text-center pb-4">
                  {category.icon}
                  <CardTitle className="mt-4">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-center text-foreground/80">
                    {category.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default TechStack;
