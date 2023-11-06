import { type ClassValue, clsx } from 'clsx';
import { type LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export type Icon = LucideIcon;
