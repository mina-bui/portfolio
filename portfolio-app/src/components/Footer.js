// Footer

import { makeYear } from '../utilities/dateMaker';
import { Link } from 'react-router-dom';
// importing social media icon images
import email from '../images/email-icon.png';
import github from '../images/github-icon.png';
import codepen from '../images/codepen-icon.png';
import linkedin from '../images/linkedin-icon.png';
import twitter from '../images/twitter-icon.png';


const Footer = () => (

    <footer className="header">
        <div className="footer-column">
            <b>Mina Bui</b> &#x2014; Copyright &copy; {makeYear()}
        </div>
        <div className="footer-column">
            <div className="social-media-column">
                <span>
                    <Link to={'mailto:webdevmina@gmail.com'}>
                        <img src={email}
                            alt="Email"
                            title="Email" />
                    </Link>
                </span>
                <span>
                    <Link to={'https://www.github.com/mina-bui'}>
                        <img src={github}
                            alt="Github"
                            title="Github" />
                    </Link>
                </span>
                <span>
                    <Link to={'https://codepen.io/mina-bui'}>
                        <img src={codepen}
                            alt="Codepen"
                            title="Codepen" />
                    </Link>
                </span>
                <span>
                    <Link to={'https://www.linkedin.com/in/mina-bui/'}>
                        <img src={linkedin}
                            alt="Linkedin"
                            title="Linkedin" />
                    </Link>
                </span>
                <span>
                    <Link to={'https://twitter.com/webdevmina'}>
                        <img src={twitter}
                            alt="Twitter"
                            title="Twitter"
                            className="twitter-icon" />
                    </Link>
                </span>
            </div>
        </div>
    </footer>

);

export default Footer;