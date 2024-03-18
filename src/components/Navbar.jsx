import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOpen = () => setIsOpen(false);

  return (
    <div className="navbar">
      <Link to="home" smooth={true} duration={200}>
        Home
      </Link>
      <Link to="about" smooth={true} duration={200}>
        About
      </Link>
      <Link to="skills" smooth={true} duration={200}>
        Skills
      </Link>
      <Link to="projects" smooth={true} duration={200}>
        Projects
      </Link>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {isOpen ? (
        <div className="toggle-menu">
          <ul>
            <li>
              <Link onClick={handleOpen} to="home" smooth={true} duration={200}>
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOpen}
                to="about"
                smooth={true}
                duration={200}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOpen}
                to="skills"
                smooth={true}
                duration={200}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOpen}
                to="projects"
                smooth={true}
                duration={200}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
