// Portfolio

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const Portfolio = () => (
	<Fragment>
		<Helmet>
			<title>React Portfolio Details &#x007C; Mina Bui &#x2013; Web Developer in Vancouver, BC</title>
			<meta name="description"
				content="Mina Bui designed and developed a portfolio site to showcase the websites she built during the BCIT Front End Developer program. It was created using ReactJS, NPM, node.js, HTML, Sass, and Github." />
			<meta name="keywords"
				content="JavaScript developer, React developer, remote web developer, web redesign services, Front end web developer Vancouver, web designer Vancouver, responsive user interfaces, interactive web applications, site designs, BCIT front end developer, Vancouver web design, hire web designer Vancouver, BCIT TWD, BCIT FED" />
		</Helmet>
		<main>
			<section>
				<div className="page-info">
					<div className="breadcrumb">
						<Link to={'/'}>Home</Link> &#x2013; React Portfolio
					</div>

					<br /><br />
					<h2 className="project-detail-title">React Portfolio</h2>
					<h2 className="project-detail-subtitle">Showcasing my BCIT projects.</h2>
				</div>
				<div className="page-text">
					<div className="project-detail">
						<h3 className="project-detail-title">Project Overview</h3>
						<p>
							I worked alone to produce my portfolio site, whose main goal is to showcase the projects I've designed and developed during my time in the BCIT Front End Developer program. The website was created using ReactJS by first installing NPM, node,js, and <code>create-react-app</code>, and then adding in the HTML, Sass, and JS files. I wanted to create an enjoyable, seamless user experience where I could show my love for design and coding.
						</p>
						<ul className="project-technologies">
							<li>JavaScript</li>
							<li>ReactJS</li>
							<li>Sass</li>
							<li>HTML5</li>
							<li>GitHub</li>
						</ul>
					</div>


					<div className="project-detail">
						<h3 className="project-detail-title">Biggest Challenges</h3>
						<p>
							The biggest challenge was figuring out which parts in each project I wanted to showcase. For instance, upon dozens and dozens of pages of code, which small code snippets stuck out to me? How would I show this in an informative, entertaining but digestable format? I decided ultimately to focus on providing more visual elements, such as code snippets, screenshots, and videos, to accompany snippets of text.
						</p>
						<p>
							In the future, alongside adding more projects to my portfolio, I hope to add more interactive elements to my site, such a small JavaScript game and more animations.
						</p>
					</div>
					<div className="project-detail">
						<h3 className="project-detail-title">Links</h3>
						<div className="project-detail-links">
							<a href="https://www.github.com/mina-bui/portfolio" target="_blank" rel="noopener" >
								<button className="project-detail-links-buttons">Github &#129125;</button>
							</a>
						</div>
					</div>
					<div className="project-contact-me">
						<p>
							Questions about the process? <a href="mailto:hello@minabui.com" title="hello@minabui.com" target="_blank" rel="noopener" >Let's talk. &#129125;</a>
						</p>
					</div>
				</div>
			</section>
		</main>
	</Fragment>
);

export default Portfolio;