
import Navbar from './Navbar.tsx'
//import Hero from './Hero.tsx' <Hero />
import About from './About.tsx'
import Technology from './Technology.tsx'
import Projects from './Projects.tsx'
import Footer from './Footer.tsx'

function App() {
  //const { data } = useFruits()

  return (
    <>
      <div className="app">
        <Navbar />
        <About />
        <Technology />
        <Projects />
        <Footer />
      </div>
    </>
  )
}
export default App
