// Portfolio

import { Link } from 'react-router-dom';

const Portfolio = () => (

	<main>
		<section>
			<div className="page-info">
				<h2>Portfolio</h2>
			</div>
			<div className="page-text">
				<div className="project-detail">
					<h3>Project Overview</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas natus magni dicta, fugiat eaque error sint velit! Minus accusamus quisquam nam possimus! Nostrum hic totam temporibus laudantium dolorem aspernatur doloremque?
                    </p>
				</div>
				<div className="project-detail">
					<h3>Research and Planning</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas natus magni dicta, fugiat eaque error sint velit! Minus accusamus quisquam nam possimus! Nostrum hic totam temporibus laudantium dolorem aspernatur doloremque?
                    </p>
				</div>
				<div className="project-detail">
					<h3>Biggest Challenges</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas natus magni dicta, fugiat eaque error sint velit! Minus accusamus quisquam nam possimus! Nostrum hic totam temporibus laudantium dolorem aspernatur doloremque?
                    </p>
				</div>
				<div className="project-detail">
					<Link to={'http://www.mbui.bcitwebdeveloper.ca'}>
						<button>Link to Live</button>
					</Link>
				</div>
			</div>
		</section>
	</main>

);

export default Portfolio;