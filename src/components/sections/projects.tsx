import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { PlaceHolderImages } from '../../lib/placeholder-images';
import AnimatedSection from '../animated-section';

const projectsData = [
  {
    title: 'Snake Game',
    description: 'Una recreación moderna del clásico juego con lógica optimizada en JavaScript y React.',
    stack: ['React', 'NextJs', 'TypeScript', 'TailwindCSS'],
    link: 'https://github.com/juanfer93/snake-game',
    image: PlaceHolderImages.find(img => img.id === 'project-snake-game'),
  },
  {
    title: 'King Electric Home',
    description: 'Sitio web profesional para servicios eléctricos residenciales y comerciales.',
    stack: ['React', 'NextJs', 'TypeScript', 'TailwindCSS'],
    link: 'https://www.kingelectrichome.com/',
    image: PlaceHolderImages.find(img => img.id === 'project-king-electric'),
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/10">
      <AnimatedSection>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos Destacados</h2>
            <p className="mt-4 max-w-xl text-foreground/80 md:text-xl/relaxed">
              Una selección de mis trabajos que demuestra mis habilidades y mi pasión por el desarrollo.
            </p>
          </div>
          <div className="mt-12 max-w-xl mx-auto">
            {projectsData.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
                <CardHeader className="p-0">
                  {project.image && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.image.imageHint}
                      />
                    </div>
                  )}
                </CardHeader>
                <div className="p-6 flex flex-col flex-grow">
                  <CardTitle>{project.title}</CardTitle>
                  <CardContent className="p-0 pt-4 flex-grow">
                    <p className="text-foreground/80">{project.description}</p>
                  </CardContent>
                  <CardFooter className="p-0 pt-6 flex flex-col items-start gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="rounded-md">{tech}</Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full sm:w-auto rounded-full">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.link.includes('github.com') ? (
                          <>
                            <Github className="mr-2 h-4 w-4" />
                            Ver en GitHub
                          </>
                        ) : (
                          <>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visitar Sitio
                          </>
                        )}
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects;
