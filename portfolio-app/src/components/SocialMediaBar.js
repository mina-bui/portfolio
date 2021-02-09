// SocialMediaBar

import { Link } from 'react-router-dom';

const SocialMediaBar = ({ hideNav }) => (

    <nav onClick={hideNav}>
        <ul>
            <li><Link to={'/'}>Linkedin</Link></li>
            <li><Link to={'/'}>Github</Link></li>
            <li><Link to={'/'}>Email</Link></li>
            <li><Link to={'/'}>Codepen</Link></li>
            <li><Link to={'/'}>Twitter</Link></li>
        </ul>
    </nav>

);

export default SocialMediaBar;