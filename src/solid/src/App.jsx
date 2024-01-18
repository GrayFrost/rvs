import { createSignal } from 'solid-js'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div className='text-solid'>
        hello solid
      </div>
    </>
  )
}

export default App
