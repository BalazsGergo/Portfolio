import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Navbar() {
 const [isOpen, setIsOpen] = useState(false)

 const toggleMenu = () => {
  setIsOpen(!isOpen)
 }


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

       <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {isOpen ? <div className='toggle-menu'>
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Projects</li>
      </ul>
       </div> : null}
    </div>
  )
}

export default Navbar