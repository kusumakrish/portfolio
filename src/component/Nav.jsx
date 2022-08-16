import "./Home/css.css";
import { Link } from "react-scroll";
const Nav= () =>{
    return(
    <div class="main">
    <h1 class="name">Kalvakollu Kusuma Krishna</h1>
    <nav class="nav">
    <Link activeClass="active" className="home" to="home" spy={true} smooth={true}>Home</Link>
          <Link className="about" to="about"  spy={true} smooth={true}>About</Link>
          <Link className="potfolio" to="portfolio" spy={true} smooth={true}>Portfolio</Link>
          <Link className="resume" to="resume" spy={true} smooth={true}>Resume</Link>
          <Link className="contact" to="Contact" spy={true} smooth={true}>Contact</Link>
    </nav>
    </div>
    )
}

export default Nav;