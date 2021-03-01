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
						I collaborated remotely in a team of three to produce ETOILE, a fictional apparel e-commerce store, whose mission is to combine minimalist designs with high quality fabrics. It enables users to purchase from various designer collections, as well as adding customizations, such as uploading their own images and adding embroidery.
					</p>
					<p>
						The website was created using WordPress, PHP, JavaScript, Sass and GitHub. My role was to build an attractive UI design for the client's Wordpress interface, as well as for customers visiting the site.
                    </p>
					<ul className="project-technologies">

						<li>WordPress</li>
						<li>WooCommerce</li>
						<li>PHP</li>
						<li>Sass</li>
						<li>JavaScript</li>
						<li>GitHub</li>
					</ul>
				</div>
				<div className="project-detail">
					<h3>How It Works</h3>

				</div>
				<div className="project-detail">
					<h3>Biggest Challenges</h3>
					<p>
						The challenges in this project were not so technically based. Our main focus as a team was not only to write code that was clean and readable for one another, but to create a WordPress interface that would be easy to use for the fictional client and customer base. This required a lot of communication and reflection, and we scheduled frequent meetings to discuss what kinds of Advanced Custom Fields would be created and why.
                    </p>
					<p>
						One thing that all WordPress developers know is how many PHP files are required to create a WordPress site. Relying on Github to monitor changes was important in the development process. This is where creating the development plan was so important; we relied heavily on our detailed information architecture map and high-fidelity wireframes.
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