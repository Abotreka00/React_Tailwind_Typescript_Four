
import './App.css'
import About from './component/About'
import Blog from './component/Blog'
import Footer from './component/Footer'
import Landing from './component/Landing'
import Navbar from './component/Navbar'
import Newspaper from './component/Newspaper'
import Products from './component/Products'
import Services from './component/Services'

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Services />
      <About />
      <Products />
      <Blog />
      <Newspaper />
      <Footer />
    </>
  )
}

export default App
