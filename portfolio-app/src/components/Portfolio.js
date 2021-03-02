// Portfolio

import { Link } from 'react-router-dom';

const Portfolio = () => (

	<main>
		<section>
			<div className="page-info">
				<Link to={'/'}>Home</Link> &#x2013; Portfolio
				<br /><br />
				<h2>Portfolio</h2>
			</div>
			<div className="page-text">
				<div className="project-detail">
					<h3>Project Overview</h3>
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
					<h3>Biggest Challenges</h3>
					<p>
						The biggest challenge was figuring out which parts in each project I wanted to showcase. For instance, upon dozens and dozens of pages of code, which small code snippets stuck out to me? How would I show this in an informative, entertaining but digestable format? I decided ultimately to focus on providing more visual elements, such as code snippets, screenshots, and videos, to accompany snippets of text.
                    </p>
					<p>
						In the future, alongside adding more projects to my portfolio, I hope to add more interactive elements to my site, such a small JavaScript game and more animations.
					</p>
				</div>
				<div className="project-detail">
					<h3>Links</h3>
					<div classname="project-detail-links">
						<a href="https://www.github.com/mina-bui/portfolio" target="_blank" rel="noopener" >
							<button className="project-detail-links-buttons">Github &#129125;</button>
						</a>
					</div>
				</div>
				<div className="project-contact-me">
					<p>
						Questions about the process? <a href="mailto:hello@minabui.com" title="hello@minabui.com" target="_blank" rel="noopener" >Let's talk. &#129125;</a>					</p>
				</div>
			</div>
		</section>
	</main>

);

export default Portfolio;