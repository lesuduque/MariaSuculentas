import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Helpers/Header'
import Footer from './components/Helpers/Footer'
import Main from './components/Layout/Main'

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
