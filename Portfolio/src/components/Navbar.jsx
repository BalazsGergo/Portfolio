import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
  return (
    <div className="Navbar">
       <h4>Balazs Gergo Frontend Developer</h4>
       <button>Home</button>
       <button>Tech</button>
       <button>Projects</button>

       <FontAwesomeIcon icon={faGithub}/>
       <FontAwesomeIcon icon={faLinkedin}/>
   
    </div>
  )
}

export default Navbar