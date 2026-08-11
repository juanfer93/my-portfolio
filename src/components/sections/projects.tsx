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

const dealerPilotPlatformObjective = 'DealerPilot es una plataforma operativa para concesionarios que centraliza inventario, detecta oportunidades de publicación, coordina publicaciones en Facebook Marketplace, mejora fotos con IA y asiste conversaciones con compradores. Su objetivo es reducir trabajo manual, acelerar la salida de vehículos al mercado y dar seguimiento comercial desde un dashboard conectado al backend y a extensiones Chrome.';
const dealerPilotPageUrl = 'https://dealerpilot-para-dealers.pixelmediacolombia.chatgpt.site/';

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

const dealerPilotSlides = [
  {
    image: '/projects/dealerpilot-ai-operator/command-dashboard.png',
    title: 'Command Dashboard',
    description: 'Dashboard principal de DealerPilot con oportunidades del día, estado de extensión, conexión con Facebook, métricas operativas y línea de tiempo del sistema.',
    context: 'Me integré a una plataforma existente para fortalecer módulos críticos, mejorar mantenibilidad y preservar flujos operativos ya activos.'
  },
  {
    image: '/projects/dealerpilot-ai-operator/publishing-cockpit.png',
    title: 'Publishing Cockpit',
    description: 'Módulo de publicación en Marketplace donde se gestionan vehículos listos para publicar, estrategias de publicación, estados live, fallidos y programados.',
    context: 'Refactoricé y estabilicé rutas críticas de publicación cuidando contratos existentes y reduciendo riesgo de regresiones.'
  },
  {
    image: '/projects/dealerpilot-ai-operator/vehicle-catalog.png',
    title: 'Vehicle Catalog',
    description: 'Catálogo de inventario con vehículos, estados, precios, kilometraje y controles para preparar unidades para publicación.',
    context: 'Ayudé a organizar responsabilidades entre inventario, publicaciones y dashboard para que el sistema fuera más claro de mantener.'
  },
  {
    image: '/projects/dealerpilot-ai-operator/ai-photo-studio.png',
    title: 'AI Photo Studio',
    description: 'Módulo de mejora de imágenes con IA para optimizar fotos de vehículos antes de publicarlas en Marketplace.',
    context: 'Participé en la integración y mejora de módulos relacionados con automatización IA dentro del flujo operativo del producto.'
  },
  {
    image: '/projects/dealerpilot-ai-operator/sales-ai-command-inbox.png',
    title: 'Sales AI / Command Inbox',
    description: 'Bandeja de conversaciones asistida por IA para responder compradores, revisar intención del cliente y manejar respuestas automáticas o asistidas.',
    context: 'Trabajé sobre Messenger AI y flujos de respuesta asistida, validando comportamiento real conectado a backend y Facebook Marketplace.'
  },
  {
    image: '/projects/dealerpilot-ai-operator/dealer-dna.png',
    title: 'Dealer DNA',
    description: 'Configuración de identidad visual del concesionario, colores de marca y preview para materiales generados por DealerPilot.',
    context: 'Fortalecí módulos de configuración y frontend manteniendo el diseño existente y separando responsabilidades sin reescrituras innecesarias.'
  },
  {
    image: '/projects/dealerpilot-ai-operator/ai-publisher-extension.png',
    title: 'DealerPilot AI Publisher Extension',
    description: 'Extensión Chrome conectada a Facebook Marketplace y al backend de DealerPilot para validar sesión, recibir trabajos aprobados y ejecutar publicaciones asistidas o automáticas.',
    context: 'Participé en la estabilización de la extensión de publicación y en la separación de responsabilidades frente al módulo de Messenger AI.'
  },
  {
    image: '/projects/dealerpilot-ai-operator/messenger-ai-extension.png',
    title: 'DealerPilot Messenger AI Extension',
    description: 'Extensión Chrome independiente para conversaciones de Marketplace, conectada al backend de DealerPilot, con lectura de contexto del DOM, dry-run, auto-reply y respuestas asistidas por IA.',
    context: 'Separé y estabilicé la experiencia de Messenger AI como módulo independiente para reducir acoplamiento con la publicación en Marketplace.'
  }
];

const dealerPilotLinkSlides = [
  {
    image: '',
    title: 'DealerPilot para dealers',
    description: 'Conoce para qué sirve DealerPilot y cómo ayuda a los concesionarios a organizar inventario, publicaciones, fotos con IA y conversaciones con compradores.',
    externalUrl: dealerPilotPageUrl,
  }
];

const projectsData = [
  {
    title: 'Dealer Pilot AI',
    description: 'DealerPilot no fue una idea original mía: me integré a una plataforma existente y la modifiqué para centralizar inventario, publicaciones en Facebook Marketplace, mejora de fotos con IA y seguimiento de compradores.',
    platformObjective: dealerPilotPlatformObjective,
    role: 'Software Developer & AI Automation Specialist',
    roleSubtitle: 'Mi aporte: refactorización técnica, arquitectura, automatización IA y estabilización de flujos existentes.',
    stack: ['Python', 'Chrome Extensions', 'OpenAI API', 'Meta API'],
    link: dealerPilotPageUrl,
    image: undefined,
    hasCarousel: true,
    carouselSlides: dealerPilotLinkSlides,
    featured: true,
  },
  {
    title: 'King Electric Home',
    description: 'Sitio web profesional para servicios eléctricos residenciales y comerciales.',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://www.kingelectrichome.com/',
    image: PlaceHolderImages.find(img => img.id === 'project-king-electric'),
    hasCarousel: false,
  },
  {
    title: 'JotaDelivery',
    description: 'Aplicación privada para gestión interna de pedidos y entregas. Cuenta con un panel administrativo para la creación y asignación de órdenes, y una interfaz de domiciliario para aceptar y actualizar el estado de los envíos.',
    stack: ['React Native', 'Expo', 'NestJS', 'Supabase'],
    link: 'https://expo.dev/artifacts/eas/namHSRjAijuNg8T4dzBk6DKvQ7sNqJK2bHiuG6FaNLg.apk',
    image: PlaceHolderImages.find(img => img.id === 'project-jota-delivery'),
    logo: '/projects/jota-delivery/logo.png',
    hasCarousel: true,
    carouselSlides: jotaDeliverySlides,
  },
  {
    title: 'QuillaMap - En Desarrollo',
    description: 'Aplicación móvil y plataforma interactiva de geolocalización e información turística y urbana en tiempo real.',
    stack: ['Expo', 'NestJS', 'Supabase', 'Geolocation APIs'],
    link: '#contact',
    image: PlaceHolderImages.find(img => img.id === 'project-quillamap'),
    logo: '/projects/quillamap/logo.png',
    imageFit: 'contain',
    hasCarousel: false,
  },
  {
    title: 'RW Martin Design',
    description: 'Sitio web de diseño y arquitectura con portafolio de proyectos y servicios profesionales.',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://rw-martin-design.vercel.app/',
    image: PlaceHolderImages.find(img => img.id === 'project-rw-martin'),
    hasCarousel: false,
  },
  {
    title: 'Automatizaciones Go High Level',
    description: 'Sistema de automatización inteligente con agentes de IA para seguimiento de leads, detección automática de contactos e integración con RetellAI.',
    stack: ['Go High Level', 'RetellAI', 'AI Agents', 'Webhooks', 'Automation', 'Facebook Messenger'],
    link: '#contact',
    image: PlaceHolderImages.find(img => img.id === 'project-ghl-automation'),
    hasCarousel: true,
    carouselSlides: automationSlides,
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; description: string; context?: string; platformObjective?: string; externalUrl?: string } | null>(null);

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
              <Card key={project.title} className={`flex flex-col overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 h-full ${project.featured ? 'border-primary/30 shadow-lg shadow-primary/10' : ''}`}>
                {project.hasCarousel && project.carouselSlides ? (
                  <div className="flex flex-col h-full">
                    <CardHeader className="p-0">
                      <div className="p-6 pb-2">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {project.carouselSlides.map((slide, index) => (
                              <CarouselItem key={index}>
                                <div className="flex flex-col gap-4">
                                  {'externalUrl' in slide ? (
                                    <button
                                      type="button"
                                      className="aspect-video relative overflow-hidden rounded-lg bg-secondary/20 cursor-pointer group shadow-sm border border-border/50 w-full"
                                      onClick={() => setSelectedImage({ ...slide, platformObjective: project.platformObjective })}
                                    >
                                      <div className="absolute inset-0 bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10" />
                                      <div className="relative flex h-full flex-col items-center justify-center gap-3 text-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
                                          <ExternalLink className="h-5 w-5" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">Abrir detalle de DealerPilot</span>
                                        <span className="text-xs text-muted-foreground">Conoce para qué sirve</span>
                                      </div>
                                    </button>
                                  ) : (
                                    <div
                                      className="aspect-video relative overflow-hidden rounded-lg bg-secondary/20 cursor-pointer group shadow-sm border border-border/50"
                                      onClick={() => setSelectedImage({ ...slide, platformObjective: project.platformObjective })}
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
                                  )}
                                  <div className="text-center space-y-3 px-1">
                                    <h4 className="font-semibold text-lg leading-tight">{slide.title}</h4>
                                    <Button
                                      variant="secondary"
                                      size="sm"
                                      className="w-full sm:w-auto gap-2"
                                      onClick={() => setSelectedImage({ ...slide, platformObjective: project.platformObjective })}
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
                        <div className="flex flex-col gap-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <CardTitle className="text-xl m-0">{project.title}</CardTitle>
                            {project.featured && (
                              <Badge variant="secondary" className="rounded-md bg-primary/10 text-primary border border-primary/20">
                                Proyecto destacado
                              </Badge>
                            )}
                          </div>
                          {project.role && (
                            <p className="text-sm font-medium text-primary">{project.role}</p>
                          )}
                        </div>
                      </div>
                      <CardContent className="p-0 pt-2 pb-4">
                        {!project.featured && (
                          <p className="text-foreground/80 text-sm">{project.description}</p>
                        )}
                        {!project.featured && project.roleSubtitle && (
                          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{project.roleSubtitle}</p>
                        )}
                      </CardContent>
                      <CardFooter className="p-0 pt-6 flex flex-col items-start gap-4 mt-4">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <Badge key={tech} variant="outline" className="rounded-md bg-secondary/10">{tech}</Badge>
                          ))}
                        </div>
                        <Button asChild variant="outline" className="w-full sm:w-auto rounded-full group">
                          <Link href={project.link} target={project.link.startsWith('#') ? undefined : '_blank'} rel={project.link.startsWith('#') ? undefined : 'noopener noreferrer'}>
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
                                {project.link.startsWith('#') ? 'Contactar' : 'Visitar Sitio'}
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
                      {project.platformObjective ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Abrir la página de DealerPilot"
                          className="group relative flex aspect-video items-center justify-center overflow-hidden bg-secondary/20"
                        >
                          <div className="absolute inset-0 bg-primary/5 transition-colors duration-200 group-hover:bg-primary/10" />
                          <div className="relative flex flex-col items-center gap-3 text-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
                              <ExternalLink className="h-5 w-5" />
                            </div>
                            <span className="text-sm font-medium text-foreground">Abrir página de DealerPilot</span>
                            <span className="text-xs text-muted-foreground">Conoce el producto y cómo funciona</span>
                          </div>
                        </a>
                      ) : project.image && (
                        <div className="aspect-video relative overflow-hidden group bg-secondary/10">
                          <Image
                            src={project.image.imageUrl}
                            alt={project.image.description}
                            fill
                            className={`${project.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
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
                        <div className="flex flex-col gap-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <CardTitle className="text-xl m-0">{project.title}</CardTitle>
                            {project.featured && (
                              <Badge variant="secondary" className="rounded-md bg-primary/10 text-primary border border-primary/20">
                                Proyecto destacado
                              </Badge>
                            )}
                          </div>
                          {project.role && (
                            <p className="text-sm font-medium text-primary">{project.role}</p>
                          )}
                        </div>
                      </div>
                      <CardContent className="p-0 pt-2 flex-grow">
                        <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                        {project.platformObjective && (
                          <details className="group mt-4 rounded-lg border border-border/50 bg-secondary/20 px-4 py-3">
                            <summary className="cursor-pointer list-none text-sm font-semibold text-foreground">
                              Qué hace DealerPilot
                              <span className="ml-2 text-xs font-normal text-muted-foreground group-open:hidden">Ver detalles</span>
                            </summary>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.platformObjective}</p>
                          </details>
                        )}
                        {project.roleSubtitle && (
                          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{project.roleSubtitle}</p>
                        )}
                      </CardContent>
                      <CardFooter className="p-0 pt-6 flex flex-col items-start gap-4">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="rounded-md">{tech}</Badge>
                          ))}
                        </div>
                        <Button asChild variant="outline" className="w-full sm:w-auto rounded-full group">
                          <Link href={project.link} target={project.link.startsWith('#') ? undefined : '_blank'} rel={project.link.startsWith('#') ? undefined : 'noopener noreferrer'}>
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
                                {project.platformObjective ? 'Abrir página de DealerPilot' : project.link.startsWith('#') ? 'Contactar' : 'Visitar Sitio'}
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
                  {selectedImage.externalUrl ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex h-full min-h-[300px] w-full flex-col items-center justify-center gap-5 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                        <ExternalLink className="h-7 w-7" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">DealerPilot para dealers</h3>
                        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                          Abre la página dedicada para conocer el producto, su utilidad y los flujos que ayudé a refactorizar.
                        </p>
                      </div>
                      <Button asChild className="gap-2 rounded-full">
                        <a href={selectedImage.externalUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" /> Abrir página de DealerPilot
                        </a>
                      </Button>
                    </motion.div>
                  ) : (
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
                  )}
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

                      {selectedImage.platformObjective && (
                        <div className="bg-secondary/20 p-5 rounded-2xl border border-border/50 space-y-3 mb-4">
                          <h5 className="font-semibold text-sm text-foreground">Qué hace DealerPilot</h5>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {selectedImage.platformObjective}
                          </p>
                        </div>
                      )}

                      {selectedImage.externalUrl && (
                        <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10 space-y-3">
                          <h5 className="font-semibold text-sm flex items-center gap-2 text-primary">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Mi aporte al proyecto
                          </h5>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            DealerPilot ya era una plataforma existente. Me integré para refactorizar módulos críticos, mejorar su mantenibilidad y estabilizar los flujos de inventario, publicación y conversaciones asistidas por IA.
                          </p>
                        </div>
                      )}

                      {selectedImage.image.startsWith('/projects/ghl-automation/') && (
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
                      )}

                      {selectedImage.image.startsWith('/projects/dealerpilot-ai-operator/') && selectedImage.context && (
                        <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10 space-y-3">
                          <h5 className="font-semibold text-sm flex items-center gap-2 text-primary">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Alcance del trabajo
                          </h5>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {selectedImage.context}
                          </p>
                        </div>
                      )}
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
