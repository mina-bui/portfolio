// Nav

import { NavLink } from 'react-router-dom';

const Nav = ({ hideNav }) => (

    <nav onClick={hideNav}>
        <ul>
            <li><NavLink to={'/about'}>About</NavLink></li>
        </ul>
    </nav>

);

export default Nav;