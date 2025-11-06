# @intks/hooks

A collection of useful React hooks built with TypeScript.

## Installation

```bash
npm install @intks/hooks
# or
yarn add @intks/hooks
# or
pnpm add @intks/hooks
```

## Usage

### Import hooks

```typescript
// Import all hooks from the main entry
import { useCounter, useToggle } from '@intks/hooks'

// Or import individual hooks (recommended for tree-shaking)
import { useCounter } from '@intks/hooks/useCounter'
import { useToggle } from '@intks/hooks/useToggle'
```

## Hooks

### `useCounter`

A hook for managing a counter state with increment, decrement, reset, and set functionality.

```typescript
import { useCounter } from '@intks/hooks'

const MyComponent = () => {
  const [count, { increment, decrement, reset, set }] = useCounter(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => set(10)}>Set to 10</button>
    </div>
  )
}
```

#### API

- **Parameters:**
  - `initialValue` (optional): The initial counter value. Defaults to `0`.

- **Returns:**
  - `[count, actions]` - A tuple containing:
    - `count`: The current counter value
    - `actions`: An object with the following methods:
      - `increment()`: Increments the counter by 1
      - `decrement()`: Decrements the counter by 1
      - `reset()`: Resets the counter to the initial value
      - `set(value)`: Sets the counter to a specific value

---

### `useToggle`

A hook for managing boolean state with toggle, setTrue, and setFalse functionality.

```typescript
import { useToggle } from '@intks/hooks'

const MyComponent = () => {
  const [isOpen, { toggle, setTrue, setFalse }] = useToggle(false)

  return (
    <div>
      <p>Modal is {isOpen ? 'open' : 'closed'}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Open</button>
      <button onClick={setFalse}>Close</button>
    </div>
  )
}
```

#### API

- **Parameters:**
  - `initialValue` (optional): The initial boolean value. Defaults to `false`.

- **Returns:**
  - `[value, actions]` - A tuple containing:
    - `value`: The current boolean value
    - `actions`: An object with the following methods:
      - `toggle()`: Toggles the boolean value
      - `setTrue()`: Sets the value to `true`
      - `setFalse()`: Sets the value to `false`

## Development

This project uses Vite for development and building.

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build the library
yarn build

# Lint the code
yarn lint

# Preview production build
yarn preview
```

## License

MIT
