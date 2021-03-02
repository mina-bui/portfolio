// Brochure

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// Import SimpleReactLightbox
import { SRLWrapper } from "simple-react-lightbox";
// Import screenshots of website
import HomeImage from '../images/brochure-desktop/brochure-home-desktop.png';
import ProcessImage from '../images/brochure-desktop/brochure-process-desktop.png';
import AboutImage from '../images/brochure-desktop/brochure-about-desktop.png';
import ContactImage from '../images/brochure-desktop/brochure-contact-desktop.png';
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

const Brochure = () => (
	<Fragment>
		<Helmet>
			<title>Business Site Details &#x007C; Mina Bui &#x2013; Web Developer in Vancouver, BC</title>
			<meta name="description"
				content="Mina Bui collaborated remotely in a team to produce Keep It Cheesy, a fictional gourmet cheese store. It enables users to send inquiries and orders using a contact form and it was created with JavaScript, Sass, HTML, and GitHub." />
			<meta name="keywords"
				content="JavaScript developer, remote web developer, web redesign services, Front end web developer Vancouver, web designer Vancouver, responsive user interfaces, interactive web applications, site designs, BCIT front end developer, Vancouver web design, hire web designer Vancouver, BCIT TWD, BCIT FED" />
		</Helmet>

		<main>
			<section>
				<div className="page-info">
					<Link to={'/'}>Home</Link> &#x2013; Brochure
					<br /><br />
					<h2>Keep It Cheesy &#x2014; Business Brochure</h2>
				</div>
				<div className="page-text">
					<div className="project-detail">
						<h3>Project Overview</h3>
						<p>
							I collaborated remotely in a team of three to produce Keep It Cheesy, a fictional gourmet cheese store, showcasing their production process and product selection. It enables users to send inquiries and custom orders using a contact form. The website was created using JavaScript, Sass, HTML, and GitHub. My role was to build the HTML and develop the styling, particularly on the Contact page.
						</p>
						<ul className="project-technologies">
							<li>HTML5</li>
							<li>Sass</li>
							<li>JavaScript</li>
							<li>GitHub</li>
							<li>Photoshop</li>
						</ul>
					</div>

					<div className="project-detail">
						<h3>Walkthrough</h3>
						<div className="project-detail-video">
							<ReactPlayer url='https://youtu.be/2Mp7sUeoqnw' />
						</div>
					</div>

					<div className="project-detail">
						<h3>Project Design</h3>
						<div className="project-detail-gallery">
							<SRLWrapper options={options}>
								<a href={HomeImage}>
									<img src={HomeImage}
										alt="The Home page, which features an opening banner and a Call to Action." />
								</a>
								<a href={ProcessImage}>
									<img src={ProcessImage}
										alt="The Cheese Production page, which showcases the process through CSS grids and flexboxes." />
								</a>
								<a href={AboutImage}>
									<img src={AboutImage}
										alt="The About Us page, which tells customers about the client's missions and values." />
								</a>
								<a href={ContactImage}>
									<img src={ContactImage}
										alt="The Contact Us page, which allows users to send questions, messages, and orders. These custom orders include options such as delivery, pickup, and more." />
								</a>
							</SRLWrapper>
						</div>
					</div>
					<div className="project-detail">
						<h3>Biggest Challenges</h3>
						<p>
							As this project was completed early in the program, in November 2020, the biggest focus was to ensure that all parts of the site were responsive, as well as matching the fictional client requirements, as stated in the development plan. Developing a good mobile layout was important, and so we debugged together as a team by inspecting the site and troubleshooting in this fashion.
						</p>
						<p>
							<iframe height="265" scrolling="no" title="Keep It Cheesy - Media Queries" src="https://codepen.io/mina-bui/embed/GRNxBXy?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
								See the Pen <a href='https://codepen.io/mina-bui/pen/GRNxBXy'>Keep It Cheesy - Media Queries</a> by Mina Bui (<a href='https://codepen.io/mina-bui'>@mina-bui</a>) on <a href='https://codepen.io'>CodePen</a>.
							</iframe>
						</p>
						<p>
							Writing the code for the inquiry form was one of my first encounters with using media queries. Looking back, if I were to recreate this contact form using only HTML and CSS / Sass on a similarly lightweight page, I would add in more constraint validation, beyond adding validation attributes such as <code>required</code>.
						</p>
						<p>
							For instance, I would change the telephone input to <code>&#x3c;input type="tel" id="phone" name="phone"
							pattern="[0-9]&#x007B;3&#x007D;-[0-9]&#x007B;3&#x007D;-[0-9]&#x007B;4&#x007D;" placeholder="(000)-000-0000" required&#x3e;</code>. This allows for lightweight code validation on the front end, but with better results.
						</p>
					</div>
					<div className="project-detail">
						<h3>Links</h3>
						<div classname="project-detail-links">
							<a href="https://mbui.bcitwebdeveloper.ca/keep-it-cheesy/index.html" target="_blank" rel="noopener" >
								<button className="project-detail-links-buttons">Live Site &#129125;</button>
							</a>
							<a href="https://github.com/v-nguyen6/HTML_CSS_P03_Business_Brochure" target="_blank" rel="noopener" >
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

export default Brochure;