import { cn } from "../lib/utils";

type LogoProps = {
  className?: string;
  animated?: boolean;
};

const Logo = ({ className, animated = false }: LogoProps) => {
  return (
    <svg
      className={cn(
        "logo-mark h-auto w-32",
        animated ? "logo-mark--animated" : "logo-mark--pending",
        className,
      )}
      viewBox="0 0 280 100"
      role="img"
      aria-label="JFPI"
      focusable="false"
    >
      <g className="logo-mark__art" transform="scale(0.64 1)">
        <path className="logo-mark__path logo-mark__path--j" d="M 29.38 73 H 82 C 96 73 104 62 104 43 V 20" />
        <ellipse className="logo-mark__path logo-mark__path--j-terminal" cx="20" cy="73" rx="9.375" ry="6" />

        <path className="logo-mark__path logo-mark__path--f" d="M 140 73 V 30 C 140 24 148 20 160 20 H 230" />
        <path className="logo-mark__path logo-mark__path--f-cross" d="M 153 46 H 215" />

        <path className="logo-mark__path logo-mark__path--p" d="M 270 73 V 20 H 350 C 366 20 375 25 375 31.5 C 375 38.5 366 43 350 43 H 270" />

        <path className="logo-mark__path logo-mark__path--i" d="M 414 73 V 20" />
        <ellipse className="logo-mark__path logo-mark__path--i-terminal" cx="414" cy="11" rx="9.375" ry="6" />
      </g>
    </svg>
  );
};

export default Logo;
