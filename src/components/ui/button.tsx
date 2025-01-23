import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50",
        {
          'primary': 'bg-rose-600 text-white hover:bg-rose-700',
          'secondary': 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
          'outline': 'border border-neutral-200 bg-white hover:bg-neutral-100',
        }[variant],
        {
          'sm': 'h-8 px-3 text-sm',
          'md': 'h-10 px-4',
          'lg': 'h-12 px-6 text-lg',
        }[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});