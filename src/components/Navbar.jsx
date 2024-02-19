import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
  return (
    <div className="navbar">
       <div className='icons'>
        <a href="https://github.com/BalazsGergo">
       <span className='icon'><FontAwesomeIcon icon={faGithub}/></span>
       </a>
       <a href="https://www.linkedin.com/in/gerg%C5%91-bal%C3%A1zs-9877012b1/">
       <span className='icon'><FontAwesomeIcon icon={faLinkedin}/></span>
       </a>
       </div>
       <button>Home</button>
       <button>About</button>
       <button>Skills</button>
       <button>Projects</button>
    </div>
  )
}

export default Navbar