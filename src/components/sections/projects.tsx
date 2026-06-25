'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Maximize2, Eye, Download } from 'lucide-react';
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
    image: '/projects/ghl-automation/telefono-capturado.png', // Corregido según estructura de archivos
    title: 'Detección Automática de Leads',
    description: 'Workflow que identifica automáticamente cuando se captura un nuevo teléfono o lead, este workflow al identificar el nuevo lead retira el contacto del seguimiento cada 2 horas.'
  },
  {
    image: '/projects/ghl-automation/llamada-ia.png',
    title: 'Integración con RetellAI para Llamadas',
    description: 'Sistema de llamadas automatizadas con IA conectado mediante webhooks a RetellAI, con integración flexible a múltiples calendarios (Cal.com y otros).'
  }
];

const jotaDeliverySlides = [
  {
    image: '/projects/jota-delivery/1-login.png',
    title: 'Inicio de Sesión Seguro',
    description: 'Pantalla de acceso para administradores y domiciliarios.'
  },
  {
    image: '/projects/jota-delivery/2-panel-admin.png',
    title: 'Panel de Administración',
    description: 'Gestión centralizada para administradores con acceso a opciones y configuración de la cuenta privada.'
  },
  {
    image: '/projects/jota-delivery/3-directorio.png',
    title: 'Directorio de Usuarios y Comercios',
    description: 'Control y búsqueda de comercios aliados y domiciliarios activos en la plataforma.'
  },
  {
    image: '/projects/jota-delivery/4-pedidos-admin.png',
    title: 'Gestión de Pedidos',
    description: 'Creación y asignación de órdenes de entrega con seguimiento y filtrado.'
  },
  {
    image: '/projects/jota-delivery/5-pedidos-domiciliario.png',
    title: 'Panel del Domiciliario',
    description: 'Interfaz dedicada para que el repartidor reciba, acepte y actualice el estado de los pedidos disponibles.'
  }
];

const projectsData = [
  {
    title: 'Jota Delivery',
    description: 'Aplicación privada para gestión interna de pedidos y entregas. Cuenta con un panel administrativo para la creación y asignación de órdenes, y una interfaz de domiciliario para aceptar y actualizar el estado de los envíos.',
    stack: ['React Native', 'TypeScript', 'Firebase', 'Node.js'],
    link: 'https://expo.dev/artifacts/eas/namHSRjAijuNg8T4dzBk6DKvQ7sNqJK2bHiuG6FaNLg.apk',
    image: PlaceHolderImages.find(img => img.id === 'project-jota-delivery'),
    logo: '/projects/jota-delivery/logo.png',
    hasCarousel: true,
    carouselSlides: jotaDeliverySlides,
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectsData.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 h-full">
                {project.hasCarousel && project.carouselSlides ? (
                  <div className="flex flex-col h-full">
                    <CardHeader className="p-0">
                      <div className="p-6 pb-2">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {project.carouselSlides.map((slide, index) => (
                              <CarouselItem key={index}>
                                <div className="flex flex-col gap-4">
                                  <div
                                    className="aspect-video relative overflow-hidden rounded-lg bg-secondary/20 cursor-pointer group shadow-sm border border-border/50"
                                    onClick={() => setSelectedImage(slide)}
                                  >
                                    <Image
                                      src={slide.image}
                                      alt={slide.title}
                                      fill
                                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                      <div className="bg-background/90 text-foreground px-4 py-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 text-sm font-medium">
                                        <Maximize2 className="w-4 h-4" /> Ampliar
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-center space-y-3 px-1">
                                    <h4 className="font-semibold text-lg leading-tight">{slide.title}</h4>
                                    <Button
                                      variant="secondary"
                                      size="sm"
                                      className="w-full sm:w-auto gap-2"
                                      onClick={() => setSelectedImage(slide)}
                                    >
                                      <Eye className="w-4 h-4" /> Ver descripción completa
                                    </Button>
                                  </div>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-2 bg-background/80 hover:bg-background" />
                          <CarouselNext className="right-2 bg-background/80 hover:bg-background" />
                        </Carousel>
                      </div>
                    </CardHeader>
                    <div className="p-6 pt-2 mt-auto">
                      <div className="flex items-center gap-3 mb-2">
                        {project.logo && (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-border/50 bg-white">
                            <Image src={project.logo} alt={`${project.title} logo`} fill className="object-contain" />
                          </div>
                        )}
                        <CardTitle className="text-xl m-0">{project.title}</CardTitle>
                      </div>
                      <CardContent className="p-0 pt-2 pb-4">
                        <p className="text-foreground/80 text-sm">{project.description}</p>
                      </CardContent>
                      <CardFooter className="p-0 pt-6 flex flex-col items-start gap-4 mt-4">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <Badge key={tech} variant="outline" className="rounded-md bg-secondary/10">{tech}</Badge>
                          ))}
                        </div>
                        <Button asChild variant="outline" className="w-full sm:w-auto rounded-full group">
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.link.includes('github.com') ? (
                              <>
                                <Github className="mr-2 h-4 w-4" />
                                Ver en GitHub
                              </>
                            ) : project.link.endsWith('.apk') ? (
                              <>
                                <Download className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                                Descargar APK
                              </>
                            ) : (
                              <>
                                <ExternalLink className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                                Visitar Sitio
                              </>
                            )}
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                ) : (
                  <>
                    <CardHeader className="p-0">
                      {project.image && (
                        <div className="aspect-video relative overflow-hidden group">
                          <Image
                            src={project.image.imageUrl}
                            alt={project.image.description}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                    </CardHeader>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        {project.logo && (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-border/50 bg-white">
                            <Image src={project.logo} alt={`${project.title} logo`} fill className="object-contain" />
                          </div>
                        )}
                        <CardTitle className="text-xl m-0">{project.title}</CardTitle>
                      </div>
                      <CardContent className="p-0 pt-2 flex-grow">
                        <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                      </CardContent>
                      <CardFooter className="p-0 pt-6 flex flex-col items-start gap-4">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="rounded-md">{tech}</Badge>
                          ))}
                        </div>
                        <Button asChild variant="outline" className="w-full sm:w-auto rounded-full group">
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.link.includes('github.com') ? (
                              <>
                                <Github className="mr-2 h-4 w-4" />
                                Ver en GitHub
                              </>
                            ) : project.link.endsWith('.apk') ? (
                              <>
                                <Download className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                                Descargar APK
                              </>
                            ) : (
                              <>
                                <ExternalLink className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                                Visitar Sitio
                              </>
                            )}
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-card border-border shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedImage && (
              <motion.div
                key={selectedImage.image}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col lg:flex-row min-h-[50vh] max-h-[90vh]"
              >
                <div className="relative w-full lg:w-2/3 min-h-[300px] lg:h-auto bg-muted/30 flex items-center justify-center p-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      fill
                      className="object-contain drop-shadow-xl"
                      unoptimized={true}
                      priority
                    />
                  </motion.div>
                </div>

                <div className="w-full lg:w-1/3 p-6 lg:p-10 flex flex-col bg-background/60 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-border/50 overflow-y-auto">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="flex flex-col h-full"
                  >
                    <DialogHeader className="mb-6">
                      <DialogTitle className="text-xl md:text-2xl font-bold leading-tight bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                        {selectedImage.title}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="flex-grow">
                      <div className="text-sm md:text-base leading-relaxed text-foreground/90 mb-6">
                        {selectedImage.description}
                      </div>

                      <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10 space-y-3">
                        <h5 className="font-semibold text-sm flex items-center gap-2 text-primary">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                          Detalles del flujo
                        </h5>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Esta automatización se ejecuta en tiempo real dentro de GoHighLevel, conectando múltiples puntos de contacto y optimizando la conversión de leads mediante IA.
                        </p>
                      </div>
                    </div>

                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;