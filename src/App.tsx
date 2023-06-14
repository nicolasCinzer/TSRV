import Heading from './components/Heading'
import { Section } from './components/Section'
import { Counter } from './components/Counter'
import List from './components/List'

import { useState } from 'react'

function App() {
  const [Count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={`Lol`} />
      <Section>Foo</Section>
      <Counter setCount={setCount}>Count is {Count}</Counter>
      <List
        items={['foo', 'bar']}
        render={(item: string) => <span>{item}</span>}
      />
    </>
  )
}

export default App
