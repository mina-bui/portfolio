// Projects

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
// Import SimpleReactLightbox
import { SRLWrapper } from "simple-react-lightbox";
// Import screenshots of website
import SingleImage from '../images/filmdex-desktop/filmdex-singlemovie-desktop.png';
import FavouritesImage from '../images/filmdex-desktop/filmdex-favourites-desktop.png';
import SearchImage from '../images/filmdex-desktop/filmdex-search-desktop.png';
import AboutImage from '../images/filmdex-desktop/filmdex-about-desktop.png';
// Import ReactPlayer to show video of site walkthrough
import ReactPlayer from 'react-player/youtube';

const options = {
	settings: {
		autoplaySpeed: 3000,
		boxShadow: 'none',
		disableKeyboardControls: false,
		disablePanzoom: false,
		disableWheelControls: false,
		hideControlsAfter: 3000,
		lightboxTransitionSpeed: 0.3,
		lightboxTransitionTimingFunction: 'linear',
		overlayColor: 'rgba(30, 30, 30, 0.9)',
		slideAnimationType: 'fade',
		slideSpringValues: [300, 50],
		slideTransitionSpeed: 0.6,
		slideTransitionTimingFunction: 'linear',
		usingPreact: false
	},
	buttons: {
		backgroundColor: 'rgba(30,30,36,0.8)',
		iconColor: 'rgba(255, 255, 255, 0.8)',
		iconPadding: '10px',
		showAutoplayButton: false,
		showCloseButton: true,
		showDownloadButton: false,
		showFullscreenButton: false,
		showNextButton: true,
		showPrevButton: true,
		showThumbnailsButton: false,
		size: '40px'
	},
	caption: {
		captionAlignment: 'start',
		captionColor: '#FFFFFF',
		captionContainerPadding: '0px 50px',
		captionFontFamily: 'inherit',
		captionFontSize: 'inherit',
		captionFontStyle: 'inherit',
		captionFontWeight: 'inherit',
		captionTextTransform: 'inherit',
		showCaption: true
	}
}

const Projects = () => (
	<Fragment>
		<Helmet>
			<title>React Movie App Details &#x007C; Mina Bui &#x2013; Web Developer in Vancouver, BC</title>
			<meta name="description"
				content="Mina Bui collaborated remotely in a team to produce Filmdex, a movie web application that showcases a list of movies in a database. It enables users to favourite, search and sort through movies. It was created with JavaScript, React.JS, Sass, HTML, and GitHub." />
			<meta name="keywords"
				content="JavaScript developer, React developer, remote web developer, web redesign services, Front end web developer Vancouver, web designer Vancouver, responsive user interfaces, interactive web applications, site designs, BCIT front end developer, Vancouver web design, hire web designer Vancouver, BCIT TWD, BCIT FED" />
		</Helmet>
		<main>
			<section>
				<div className="page-info">
					<Link to={'/'}>Home</Link> &#x2013; Movie App
					<br /><br />
					<h2>Filmdex &#x2014; React Movie App</h2>
				</div>
				<div className="page-text">
					<div className="project-detail">
						<h3>Project Overview</h3>
						<p>
							I collaborated remotely in a team of two to produce Filmdex, a movie database web application that allows users to view, sort, and search for movies in a database. There are two key features that we added to improve the user experience. First, we built a search bar, that shows live search results. Secondly, we created a Favorites List that allows users to add their favorite films without logging in.
						</p>
						<p>
							The web application was created using ReactJS by first installing NPM, node,js, and <code>create-react-app</code>, and then pulling data from the The Movie Database (TMDb) API. My role was focused on responsive design and on Sass styling. Specifically, my focus was to create the individual components, being the homepage grid, the single movie layout, as well as the footer.
						</p>
						<ul className="project-technologies">
							<li>JavaScript</li>
							<li>ReactJS</li>
							<li>Sass</li>
							<li>HTML5</li>
							<li>GitHub</li>
							<li>Photoshop</li>
						</ul>
					</div>

					<div className="project-detail">
						<h3>How It Works</h3>
						<div className="project-detail-video">
							<ReactPlayer url='https://youtu.be/ou_ezRP-iX8' />
						</div>
					</div>

					<div className="project-detail">
						<h3>Project Design</h3>
						<div className="project-detail-gallery">
							<SRLWrapper options={options}>
								<a href={SearchImage}>
									<img src={SearchImage}
										alt="The Home page, where users can sort by Most Popular, Top Rated, Upcoming, and Now Playing. Users can scroll infinitely thanks to a 'Load More' button. This includes the search functionality, where users can search for movies and have instantaneous live search results. " />
								</a>

								<a href={SingleImage}>
									<img src={SingleImage}
										alt="The Single Movie page, where users can view the movie poster, directors, IMDB rating, and actors. Users can also favorite movies by clicking on the Star button." />
								</a>

								<a href={FavouritesImage}>
									<img src={FavouritesImage}
										alt="The Favourites page, where users can see which movies they have favourited (which are stored in localStorage). By clicking on the movies on this page, they can click the Star button again to unfavourite a movie. " />
								</a>

								<a href={AboutImage}>
									<img src={AboutImage}
										alt="The About page, which talks about the web application, the API used, and the development team." />
								</a>
							</SRLWrapper>
						</div>

					</div>

					<div className="project-detail">
						<h3>Biggest Challenges</h3>
						<p>
							One of our biggest obstacles was not only learning React functional components and React hooks, but why they are superior to React class components. As a team, we knew that we wanted to implement many additional features, such as a "Load More" button and a search bar.
						</p>
						<p>
							As a challenge, we compared implementing these features using both methods. We quickly found that not only are React functional components easier to read, write, maintain and debug, but using hooks allowed us to reuse components in a smarter, more efficient way.
						</p>
					</div>
					<div className="project-detail">
						<h3>Links</h3>
						<div classname="project-detail-links">
							<a href="https://mbui.bcitwebdeveloper.ca/twd-movie-app/" target="_blank" rel="noopener" >
								<button className="project-detail-links-buttons">Live Site &#129125;</button>
							</a>

							<a href="https://www.github.com/mina-bui/twd-movie-app-final-version" target="_blank" rel="noopener" >
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

export default Projects;