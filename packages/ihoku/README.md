# @intks/ihoku

A collection of useful React hooks built with TypeScript.

## Installation

```bash
npm install @intks/ihoku
# or
yarn add @intks/ihoku
# or
pnpm add @intks/ihoku
```

## Usage

### Import hooks

```ts
// Import from the main entry
import { useDisclosure } from '@intks/ihoku'

// Or import an individual hook subpath
import { useDisclosure } from '@intks/ihoku/useDisclosure'
```

## Hooks

### `useDisclosure`
A hook for managing a boolean state with open, close, and toggle helpers.

```tsx
import { useDisclosure } from '@intks/ihoku'

export default function MyComponent() {
  const { isOpen, open, close, toggle } = useDisclosure()
  return (
    <div>
      <p>Modal is {isOpen ? 'open' : 'closed'}</p>
      <button onClick={open}>Open</button>
      <button onClick={close}>Close</button>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}
```

#### API
- `isOpen`: current boolean state
- `open()`: set `isOpen` to `true`
- `close()`: set `isOpen` to `false`
- `toggle()`: invert `isOpen`

#### Options
- `isOpen?`: initial value (default `false`)
- `onOpen?`: called when opened
- `onClose?`: called when closed

## Peer Dependencies
- `react >= 18`

## License
MIT
