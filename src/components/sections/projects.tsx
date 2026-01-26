'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Maximize2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { PlaceHolderImages } from '../../lib/placeholder-images';
import AnimatedSection from '../animated-section';

const automationSlides = [
  {
    image: '/projects/ghl-automation/fb-messenger-1.png',
    title: 'Seguimiento Inteligente en Facebook Messenger - Vista General',
    description: 'Sistema de seguimiento automatizado que detecta cuando un cliente no responde en 2 horas y activa un flujo de seguimiento inteligente con IA conversacional.'
  },
  {
    image: '/projects/ghl-automation/fb-messenger-2.png',
    title: 'Lógica de Seguimiento Automático',
    description: 'Flujo condicional que evalúa la respuesta del cliente y ejecuta hasta 3 intentos de seguimiento automático con mensajes personalizados mediante IA.'
  },
  {
    image: '/projects/ghl-automation/fb-messenger-3.png',
    title: 'Gestión de Tiempos de Espera',
    description: 'Sistema de temporizadores que controla los intervalos entre mensajes de seguimiento, optimizando la tasa de respuesta sin ser invasivo.'
  },
  {
    image: '/projects/ghl-automation/fb-messenger-4.png',
    title: 'Finalización del Flujo de Seguimiento',
    description: 'Lógica de cierre que determina cuándo detener el seguimiento automático basándose en la interacción del cliente o el límite de intentos.'
  },
  {
    image: '/projects/ghl-automation/telefono-capturado.png',
    title: 'Detección Automática de Leads',
    description: 'Workflow que identifica automáticamente cuando se captura un nuevo teléfono o lead, activando flujos de bienvenida y asignación inteligente.'
  },
  {
    image: '/projects/ghl-automation/llamada-ia.png',
    title: 'Integración con RetellAI para Llamadas',
    description: 'Sistema de llamadas automatizadas con IA conectado mediante webhooks a RetellAI, con integración flexible a múltiples calendarios (Cal.com y otros).'
  }
];

const projectsData = [
  {
    title: 'Snake Game',
    description: 'Una recreación moderna del clásico juego con lógica optimizada en JavaScript y React.',
    stack: ['React', 'NextJs', 'TypeScript', 'TailwindCSS'],
    link: 'https://github.com/juanfer93/snake-game',
    image: PlaceHolderImages.find(img => img.id === 'project-snake-game'),
    hasCarousel: false,
  },
  {
    title: 'King Electric Home',
    description: 'Sitio web profesional para servicios eléctricos residenciales y comerciales.',
    stack: ['React', 'NextJs', 'TypeScript', 'TailwindCSS'],
    link: 'https://www.kingelectrichome.com/',
    image: PlaceHolderImages.find(img => img.id === 'project-king-electric'),
    hasCarousel: false,
  },
  {
    title: 'RW Martin Design',
    description: 'Sitio web de diseño y arquitectura con portafolio de proyectos y servicios profesionales.',
    stack: ['React', 'NextJs', 'TypeScript', 'TailwindCSS'],
    link: 'https://rw-martin-design.vercel.app/',
    image: PlaceHolderImages.find(img => img.id === 'project-rw-martin'),
    hasCarousel: false,
  },
  {
    title: 'Automatizaciones Go High Level',
    description: 'Sistema de automatización inteligente con agentes de IA para seguimiento de leads, detección automática de contactos e integración con RetellAI.',
    stack: ['Go High Level', 'RetellAI', 'AI Agents', 'Webhooks', 'Automation', 'Facebook Messenger'],
    link: '#contacto',
    image: PlaceHolderImages.find(img => img.id === 'project-ghl-automation'),
    hasCarousel: true,
    carouselSlides: automationSlides,
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; description: string } | null>(null);
  const [showDescription, setShowDescription] = useState(false);

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
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projectsData.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
                <CardHeader className="p-0">
                  {project.hasCarousel && project.carouselSlides ? (
                    <div className="p-6 pb-0">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.carouselSlides.map((slide, index) => (
                            <CarouselItem key={index}>
                              <div className="space-y-4">
                                <div
                                  className="aspect-video relative overflow-hidden rounded-lg bg-secondary/20 cursor-pointer group"
                                  onClick={() => {
                                    setSelectedImage(slide);
                                    setShowDescription(false);
                                  }}
                                >
                                  <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                    <Maximize2 className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <h4 className="font-semibold text-sm leading-tight">{slide.title}</h4>
                                  <p className="text-xs text-foreground/70 leading-relaxed">{slide.description}</p>
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    </div>
                  ) : (
                    project.image && (
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={project.image.imageUrl}
                          alt={project.image.description}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={project.image.imageHint}
                        />
                      </div>
                    )
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
                    {!project.hasCarousel && (
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
                    )}
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Modal para ver imagen completa */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => {
        if (!open) {
          setSelectedImage(null);
          setShowDescription(false);
        }
      }}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-4 sm:p-6">
          {selectedImage && (
            <>
              <DialogHeader className="space-y-3">
                <DialogTitle className="text-base sm:text-lg leading-tight pr-6">{selectedImage.title}</DialogTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDescription(!showDescription)}
                  className="w-fit"
                >
                  {showDescription ? 'Ocultar Descripción' : 'Ver Descripción'}
                </Button>
              </DialogHeader>
              <div className="space-y-4">
                <div className="relative w-full h-[55vh] sm:h-[60vh] bg-secondary/20 rounded-lg overflow-hidden">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
                {showDescription && (
                  <DialogDescription className="text-sm sm:text-base leading-relaxed animate-in slide-in-from-top-2 duration-300">
                    {selectedImage.description}
                  </DialogDescription>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
