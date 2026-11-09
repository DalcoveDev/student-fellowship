import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const attrs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ArrowRight(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <path d="M5 3h3l2 5-2.5 1.5a15 15 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Calendar(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

export function BookOpen(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <path d="M12 6.5C10.5 5 8.5 4.5 4 4.5v13c4.5 0 6.5.5 8 2 1.5-1.5 3.5-2 8-2v-13c-4.5 0-6.5.5-8 2Z" />
      <path d="M12 6.5v13" />
    </svg>
  );
}

export function Users(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 4.5a3 3 0 0 1 0 6M18 20a6 6 0 0 0-3-5.2" />
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8.5 5.5 3.5L10 15.5Z" />
    </svg>
  );
}

export function Heart(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 21l8.8-8a5.2 5.2 0 0 0 0-7.4Z" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function YouTube(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5Z" />
    </svg>
  );
}

export function WhatsApp(props: IconProps) {
  return (
    <svg {...attrs} {...props}>
      <path d="M20.5 11.6a8.4 8.4 0 0 1-12.3 7.5L3.5 20.5l1.5-4.6A8.4 8.4 0 1 1 20.5 11.6Z" />
      <path d="M8.8 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.5l-.5.6c-.1.1-.2.3 0 .5.4.7 1.1 1.4 1.9 1.8.2.1.4.1.5 0l.6-.7c.1-.2.3-.2.5-.1l1.6.7c.3.1.4.3.4.5 0 .5-.2 1.3-.7 1.6-.5.3-1.2.4-1.9.2-1.4-.4-2.7-1.1-3.7-2.2-1-1-1.7-2.2-1.9-3.3-.1-.6 0-1.3.2-1.6Z" />
    </svg>
  );
}

