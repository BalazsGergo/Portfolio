import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
        <div className='footer'>
            <div className='icons'>
                <a href="https://github.com/BalazsGergo">
                <span className='icon'><FontAwesomeIcon icon={faGithub}/></span>
                </a>
                <a href="https://www.linkedin.com/in/gerg%C5%91-bal%C3%A1zs-9877012b1/">
                <span className='icon'><FontAwesomeIcon icon={faLinkedin}/></span>
                </a>
            </div>

        <p>© 2024 Balazs Gergo All rights reserved.</p>
       <a href="mailto:gergobalazs98@gmail.com">Contact</a>
        </div>
  )
  
}

export default Footer