import Image from 'next/image';
import {
  SiJavascript, SiTypescript, SiPython,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiHtml5, SiCss3,
  SiNodedotjs, SiNestjs, SiFlask, SiDjango, SiPostgresql,
  SiDocker, SiGit
} from 'react-icons/si';
// Re-integrating TechStack with SkillsCarousel
import { Bot, Terminal, Cpu, Database, Globe, Layers, Workflow, Brain } from 'lucide-react';
import AnimatedSection from '../../components/animated-section';
import SkillsCarousel from '../../components/ui/skills-carousel';

const backendSkills = [
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'NestJS', icon: <SiNestjs /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Git', icon: <SiGit /> },
];

const frontendSkills = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
];

const aiSkills = [
  { name: 'Antigravity', icon: <Image src="/tech-icons/antigravity.svg" alt="Antigravity" width={40} height={40} className="w-8 h-8 object-contain" /> },
  { name: 'Cursor & Codex', icon: <Terminal /> },
  { name: 'Stitch AI', icon: <Image src="/tech-icons/stitch-ai.svg" alt="Stitch AI" width={40} height={40} className="w-8 h-8 object-contain" /> },
  { name: 'N8n', icon: <Image src="/tech-icons/n8n.svg" alt="N8n" width={40} height={40} className="w-8 h-8 object-contain" /> },
  { name: 'LLM Integration', icon: <Brain /> },
  { name: 'MCP', icon: <Image src="/tech-icons/mcp.svg" alt="MCP" width={40} height={40} className="w-8 h-8 object-contain" /> },
  { name: 'RetellAI', icon: <Image src="/tech-icons/retell-ai.svg" alt="Retell AI" width={40} height={40} className="w-8 h-8 object-contain" /> },
  { name: 'GoHighLevel', icon: <Image src="/tech-icons/gohighlevel.svg" alt="GoHighLevel" width={40} height={40} className="w-8 h-8 object-contain" /> },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/10 overflow-hidden">
      <AnimatedSection>
        <div className="container px-4 md:px-6 mx-auto mb-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mi Stack Tecnológico</h2>
            <p className="mt-4 max-w-2xl text-foreground/80 md:text-xl/relaxed">
              Las herramientas y tecnologías que uso para construir soluciones digitales modernas y eficientes.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12 w-full max-w-[1400px] mx-auto px-4">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-center text-primary/80">Backend Development</h3>
            <SkillsCarousel skills={backendSkills} direction="left" speed={40} />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-center text-primary/80">Frontend Development</h3>
            <SkillsCarousel skills={frontendSkills} direction="right" speed={45} />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-center text-primary/80">AI & Automation</h3>
            <SkillsCarousel skills={aiSkills} direction="left" speed={50} />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default TechStack;
