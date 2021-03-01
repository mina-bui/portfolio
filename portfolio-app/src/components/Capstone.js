// Capstone

import { Link } from 'react-router-dom';

const Capstone = () => (

	<main>
		<section>
			<div className="page-info">
				<Link to={'/'}>Home</Link> &#x2013; Capstone
				<br /><br />
				<h2>Etoile &#x2014; Capstone Project</h2>
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
					<a href="https://www.etoile.bcitwebdeveloper.ca/" target="_blank" >
						<button>Live Site &#129125;</button>
					</a>
				</div>
				<div className="project-contact-me">
					<p>
						Questions about the process? <a href="mailto:hello@minabui.com" title="hello@minabui.com" target="_blank">Let's talk. &#129125;</a>					</p>
				</div>
			</div>
		</section>
	</main>

);

export default Capstone;