import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Helpers/Header'
import Main from './components/Layout/Main'
import Footer from './components/Helpers/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <Header/>
      <Main/>
     <Footer/>
    </section>
  )
}

export default App
