import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

function Content() {
  return (
    <>
    <div className='content'>
      <Home id='home' />
      <About id='about' />
      <Skills id='skills' />
      <Projects id='projects' />
    </div>
    
    </>
  )
}

export default Content