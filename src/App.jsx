import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Helpers/Header'
import Main from './components/Layout/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <Header/>
      <Main/>

    
    </section>
  )
}

export default App
