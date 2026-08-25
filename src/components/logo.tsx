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
        <path className="logo-mark__path logo-mark__path--j" d="M 34 73 H 76 C 90 73 100 62 100 43 V 20" />
        <ellipse className="logo-mark__path logo-mark__path--j-terminal" cx="20" cy="73" rx="14.06" ry="9" />

        <path className="logo-mark__path logo-mark__path--f" d="M 140 73 V 30 C 140 24 148 20 160 20 H 222" />
        <path className="logo-mark__path logo-mark__path--f-cross" d="M 155 51 H 207" />

        <path className="logo-mark__path logo-mark__path--p" d="M 292 73 V 20 H 353 C 372 20 380 26 380 34 C 380 42 372 47 353 47 H 292" />

        <path className="logo-mark__path logo-mark__path--i" d="M 414 73 V 20" />
        <ellipse className="logo-mark__path logo-mark__path--i-terminal" cx="414" cy="11" rx="14.06" ry="9" />
      </g>
    </svg>
  );
};

export default Logo;
