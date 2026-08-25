import { cn } from "../lib/utils";

type LogoProps = {
  className?: string;
  animated?: boolean;
};

const Logo = ({ className, animated = false }: LogoProps) => {
  return (
    <svg
      className={cn("logo-mark h-auto w-32", animated && "logo-mark--animated", className)}
      viewBox="0 0 280 100"
      role="img"
      aria-label="JFPI"
      focusable="false"
    >
      <g className="logo-mark__art" transform="scale(0.64 1)">
        <path className="logo-mark__path logo-mark__path--j" d="M 20 73 H 111 C 132 73 143 62 143 43 V 20" />
        <circle className="logo-mark__path logo-mark__path--j-terminal" cx="20" cy="73" r="10" />

        <path className="logo-mark__path logo-mark__path--f" d="M 178 73 V 20 H 260" />
        <path className="logo-mark__path logo-mark__path--f-cross" d="M 193 51 H 245" />

        <path className="logo-mark__path logo-mark__path--p" d="M 292 73 V 20 H 353 C 373 20 383 29 383 40 C 383 51 373 57 353 57 H 292" />

        <path className="logo-mark__path logo-mark__path--i" d="M 414 73 V 20" />
        <circle className="logo-mark__path logo-mark__path--i-terminal" cx="414" cy="11" r="10" />
      </g>
    </svg>
  );
};

export default Logo;
