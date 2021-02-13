// Page Not Found

import { Link } from 'react-router-dom';

const PageNotFound = () => (

	<main>
		<section>
			<div className="page-info">
				<h2>404 - Page Not Found</h2>
			</div>
			<div className="page-text">
				<p>
					We can't seem to find the page you're looking for.
				</p>
				<Link to={'/'}>
					<button>Back to Home</button>
				</Link>
			</div>
		</section>
	</main>

);

export default PageNotFound;