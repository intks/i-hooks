import { useState } from 'react'
import { useToggle } from '../src/hooks/useToggle'
import { useCounter } from '../src/hooks/useCounter'

const App = () => {
  const [count, setCount] = useState(0)
  const [isOpen, { toggle, setTrue, setFalse }] = useToggle(false)
  const [counter, { increment, decrement, reset }] = useCounter(0)

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>i-hooks Library Development Playground</h1>

      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>useToggle Hook</h2>
        <p>State: {isOpen ? 'Open' : 'Closed'}</p>
        <button onClick={toggle}>Toggle</button>
        <button onClick={setTrue}>Set True</button>
        <button onClick={setFalse}>Set False</button>
      </section>

      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>useCounter Hook</h2>
        <p>Count: {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>

      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Components</h2>
      </section>

      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Default Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      </section>
    </div>
  )
}

export default App
