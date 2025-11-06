// Minimal ESM duplicator: duplicates .d.ts as-is, and mirrors .js to .mjs for import field.
// This keeps toolchain simple without additional bundlers.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs'
import { join, dirname, extname } from 'node:path'

const distDir = new URL('../dist', import.meta.url).pathname

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const s = statSync(full)
    if (s.isDirectory()) walk(full, files)
    else files.push(full)
  }
  return files
}

function ensureDir(p) {
  try { mkdirSync(p, { recursive: true }) } catch {}
}

for (const file of walk(distDir)) {
  if (extname(file) !== '.js') continue
  const target = file.replace(/\.js$/, '.mjs')
  ensureDir(dirname(target))
  writeFileSync(target, readFileSync(file))
}

console.log('[copy-esm] Created .mjs mirrors in dist')

