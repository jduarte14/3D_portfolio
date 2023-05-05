import { BrowserRouter } from "react-router-dom"
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Tech from './components/Tech';
import FeedBacks from './components/Feedbacks';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Works from './components/works';
import StarsCanvas from './components/canvas/Stars'
function App() {
  return (
    <>
    <BrowserRouter>
      <div className="relative z-p bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Hero />

        </div>
        <About />
        <Experience />
        <Tech />
        <FeedBacks />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
