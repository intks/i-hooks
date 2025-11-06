# intks-hooks-monorepo

Monorepo containing the hooks package and documentation site.

- `packages/ihooks` – publishable package `@intks/hooks`
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

## Package: @intks/hooks

Install:
```bash
npm install @intks/hooks
# or
yarn add @intks/hooks
# or
pnpm add @intks/hooks
```

Usage:
```ts
import { useDisclosure } from '@intks/hooks'
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
