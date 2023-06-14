import { ReactNode } from 'react'

type CounterProps = {
  children: ReactNode
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export const Counter = ({ children, setCount }: CounterProps) => {
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </>
  )
}
