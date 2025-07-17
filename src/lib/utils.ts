import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '');    // Trim hyphens from start/end
}

export function deslugify(slug: string) {
  // Replace hyphens with spaces and capitalize each word
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    // Handle common patterns like "2024/25" or "2024-25"
    .replace(/(\d{4})\s+(\d{2})/g, '$1/$2')
    // Handle acronyms and abbreviations (NBC, SC, etc.)
    .replace(/\b(nbc|sc|fc|ltd|inc|llc)\b/gi, (match) => match.toUpperCase())
}

// Alternative deslugify function with more sophisticated handling
export function deslugifyAdvanced(slug: string) {
  const words = slug.split('-')
  
  return words
    .map(word => {
      // Handle years and numbers
      if (/^\d{4}$/.test(word)) return word
      if (/^\d{2}$/.test(word) && words.indexOf(word) > 0) {
        const prevWord = words[words.indexOf(word) - 1]
        if (/^\d{4}$/.test(prevWord)) return `/${word}`
      }
      
      // Handle common acronyms
      if (['nbc', 'sc', 'fc', 'ltd', 'inc', 'llc', 'usa', 'uk'].includes(word.toLowerCase())) {
        return word.toUpperCase()
      }
      
      // Capitalize first letter
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
    .replace(/\s+/g, ' ') // Clean up extra spaces
    .trim()
}