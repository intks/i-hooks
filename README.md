# ihoku-monorepo

Monorepo containing the hooks package and documentation site.

- `packages/ihoku` – publishable package `@intks/ihoku`
- `apps/docs` – docs site (Next.js + Nextra)

## Quick Start

```bash
# install dependencies for all workspaces
yarn install

# run docs locally
yarn dev:docs

# build all workspaces
yarn build
```

## Package: @intks/ihoku

Install:
```bash
npm install @intks/ihoku
# or
yarn add @intks/ihoku
# or
pnpm add @intks/ihoku
```

Usage:
```ts
import { useDisclosure } from '@intks/ihoku'
```

Peer dependencies:
- react >= 18

## Docs App
- Located at `apps/docs`
- Built with Next.js + Nextra

Run locally:
```bash
yarn dev:docs
```

## Scripts (root)
- `yarn build` – build all workspaces
- `yarn build:pkg` – build hooks package
- `yarn build:docs` – build docs site
- `yarn dev:docs` – start docs site
- `yarn lint` – run ESLint

## Release Flow
1. Update version in `packages/ihooks/package.json`
2. Build package: `yarn build:pkg`
3. Publish from `packages/ihooks`: `npm publish --access public`

## License
MIT
