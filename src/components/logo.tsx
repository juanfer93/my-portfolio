import { cn } from "../lib/utils";

type LogoProps = {
  className?: string;
  animated?: boolean;
};

const Logo = ({ className, animated = false }: LogoProps) => {
  return (
    <svg
      className={cn("logo-mark h-auto w-32", animated && "logo-mark--animated", className)}
      viewBox="0 0 440 100"
      role="img"
      aria-label="JFPI"
      focusable="false"
    >
      <g className="logo-mark__art">
        <path className="logo-mark__path logo-mark__path--j" pathLength="1" d="M 20 73 H 111 C 132 73 143 62 143 43 V 20" />
        <circle className="logo-mark__path logo-mark__path--j-terminal" pathLength="1" cx="20" cy="73" r="10" />

        <path className="logo-mark__path logo-mark__path--f" pathLength="1" d="M 178 73 V 20 H 260" />
        <path className="logo-mark__path logo-mark__path--f-cross" pathLength="1" d="M 193 51 H 245" />

        <path className="logo-mark__path logo-mark__path--p" pathLength="1" d="M 292 73 V 20 H 353 C 373 20 383 29 383 40 C 383 51 373 57 353 57 H 292" />

        <path className="logo-mark__path logo-mark__path--i" pathLength="1" d="M 414 73 V 20" />
        <circle className="logo-mark__path logo-mark__path--i-terminal" pathLength="1" cx="414" cy="11" r="10" />
      </g>
    </svg>
  );
};

export default Logo;
