
import Navbar from './Navbar.tsx'
import About from './About.tsx'
import Technology from './Technology.tsx'
import Projects from './Projects.tsx'
import Contact from './Contact.tsx'
import Footer from './Footer.tsx'

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <About />
        <Technology />
        <Projects />
        <Contact/>
        <Footer />
      </div>
    </>
  )
}
export default App
