"use client";

import { ReactNode } from "react";

export function Breadcrumbs({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const baseClass = "flex items-center gap-2 text-sm text-ink/60";

  return (
    <nav
      aria-label="breadcrumb"
      className={className ? `${baseClass} ${className}` : baseClass}
    >
      <ol className="flex items-center gap-2">
        {children}
      </ol>
    </nav>
  );
}