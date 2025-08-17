import * as React from "react"

export function Avatar({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>{children}</div>
}

export function AvatarImage({ src, alt }: { src: string; alt?: string }) {
  return <img src={src} alt={alt} className="aspect-square h-full w-full" />
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
      {children}
    </span>
  )
}
