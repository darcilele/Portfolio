import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefixes a root-relative `/public` asset path with the app's basePath
 * (e.g. "/Portfolio" on GitHub Pages, "" locally).
 *
 * Needed because `next/image` does NOT automatically prepend basePath to
 * `src` when `images.unoptimized: true` is set (required for `output: 'export'`).
 * Without this, hardcoded paths like `/images/foo.jpg` resolve to the domain
 * root instead of `/Portfolio/images/foo.jpg` and 404 on GitHub Pages.
 */
export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
