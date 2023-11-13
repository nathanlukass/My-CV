import { useState } from 'react'
import './assets/css/aos.css'
import './assets/css/bootstrap.min.css'
import './assets/css/main.css'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Education from './components/education/education'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
import Header from './components/Header/header'
import Portfolio from './components/portfolio/portfolio'
import Profile from './components/profile/profile'
import Skill from './components/skill/skill'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header />
    <Profile />
    <About />
    <Skill />
    <Portfolio />
    <Experience />
    <Education />
    <Contact />
    <Footer />
    
    
    </>
    
    
  )
}

export default App
