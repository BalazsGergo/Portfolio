import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
  return (
    <div className="navbar">
       <div className='icons'>
       <button><FontAwesomeIcon icon={faGithub}/></button>
       <button><FontAwesomeIcon icon={faLinkedin}/></button>
       </div>
       <button>Home</button>
       <button>About</button>
       <button>Tech</button>
       <button>Projects</button>
    </div>
  )
}

export default Navbar