
import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => (
    <textarea
      ref={ref}
      className="border rounded px-3 py-2 w-full"
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
