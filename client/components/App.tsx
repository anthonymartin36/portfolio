<<<<<<< HEAD
//import { useFruits } from '../hooks/useFruits.ts'
import Navbar from './Navbar.tsx'
import Hero from './Hero.tsx'
import About from './About.tsx'
import Project1 from './Project1.tsx'
import Project2 from './Project2.tsx'
import Project3 from './Project3.tsx'
import Footer from './Footer.tsx'
=======
import { useFruits } from '../hooks/useFruits.ts'
>>>>>>> ddf4ccb (feat: migrated boilerplate-fullstack-query)

function App() {
  //const { data } = useFruits()

  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Project1 />
        <Project2 />
        <Project3 />
        <Footer />
      </div>
    </>
  )
}
// <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
export default App
