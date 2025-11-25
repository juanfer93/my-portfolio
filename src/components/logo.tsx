import { cn } from "../lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("text-primary font-black text-2xl tracking-tighter font-headline", className)}>
      JFPI
    </div>
  );
};

export default Logo;
