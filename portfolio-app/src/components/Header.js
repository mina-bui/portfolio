// Header

import Nav from './Nav';
import { Link } from 'react-router-dom';

const Header = () => {

	return (

		<header>
			<div className="header-row header-row-01">
				<a id="top"></a>
				<h1><Link to={'/'}>Mina Bui</Link></h1>

			</div>
			<div className="header-row header-row-02">
				<Nav />
			</div>
		</header>

	);

}

export default Header;