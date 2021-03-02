// Capstone

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
// Import SimpleReactLightbox
import { SRLWrapper } from "simple-react-lightbox";
// Import screenshots of website
// Mockup
import CapHomeMockup from '../images/capstone-mockup/capstone-home-mockup.png';
// Desktop
import CapAboutImage from '../images/capstone-desktop/capstone-about-desktop.png';
import CapContactImage from '../images/capstone-desktop/capstone-contact-desktop.png';
import CapInfoImage from '../images/capstone-desktop/capstone-info-desktop.png';
import CapProductImage from '../images/capstone-desktop/capstone-product-desktop.png';
import CapShopImage from '../images/capstone-desktop/capstone-shop-desktop.png';
// Mobile
import CapAboutImageMob from '../images/capstone-mobile/capstone-about-mobile.png';
import CapContactImageMob from '../images/capstone-mobile/capstone-contact-mobile.png';
import CapProductImageMob from '../images/capstone-mobile/capstone-product-mobile.png';
import CapShopImageMob from '../images/capstone-mobile/capstone-shop-mobile.png';


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

const Capstone = () => (
	<Fragment>
		<Helmet>
			<title>Ecommerce Site Details &#x007C; Mina Bui &#x2013; Web Developer in Vancouver, BC</title>
			<meta name="description"
				content="Mina Bui collaborated remotely in a team to produce ETOILE, a fictional apparel e-commerce store with minimalist but high quality designs. Customers customize their designer pieces. It was created with WordPress, PHP, JavaScript, Sass, and GitHub." />
			<meta name="keywords"
				content="Wordpress developer, PHP developer, JavaScript developer, remote web developer, web redesign services, Front end web developer Vancouver, web designer Vancouver, responsive user interfaces, interactive web applications, site designs, BCIT front end developer, Vancouver web design, hire web designer Vancouver, BCIT TWD, BCIT FED" />
		</Helmet>
		<main>
			<section>
				<div className="page-info">
					<div className="breadcrumb">
						<Link to={'/'}>Home</Link> &#x2013; Ecommerce Site
					</div>

					<br /><br />
					<h2 className="project-detail-title">Etoile &#x2014; <br class="mobile" /> Ecommerce Site</h2>
					<h2 className="project-detail-subtitle">Building a dynamic WordPress store.</h2>
				</div>
				<div className="page-text">
					<div className="project-detail">
						<h3 className="project-detail-title">Project Overview</h3>
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
						<h3 className="project-detail-title">Project Design</h3>
						<div className="project-detail-gallery">
							<div className="project-detail-gallery-capstone">
								<SRLWrapper options={options}>
									{/* Mockup */}
									<a href={CapHomeMockup}>
										<img src={CapHomeMockup}
											alt="High fidelity home page mockup." />
									</a>

									<a href={CapShopImage}>
										<img src={CapShopImage}
											alt="High fidelity all products shop page wireframe." />
									</a>
									<a href={CapShopImageMob}>
										<img src={CapShopImageMob}
											alt="High fidelity all products shop page wireframe." />
									</a>

									<a href={CapProductImage}>
										<img src={CapProductImage}
											alt="High fidelity single product page wireframe." />
									</a>
									<a href={CapProductImageMob}>
										<img src={CapProductImageMob}
											alt="High fidelity single product page wireframe." />
									</a>

									<a href={CapAboutImage}>
										<img src={CapAboutImage}
											alt="High fidelity about us page wireframe." />
									</a>
									<a href={CapAboutImageMob}>
										<img src={CapAboutImageMob}
											alt="High fidelity about us page wireframe." />
									</a>

									<a href={CapContactImage}>
										<img src={CapContactImage}
											alt="High fidelity contact us page wireframe." />
									</a>
									<a href={CapContactImageMob}>
										<img src={CapContactImageMob}
											alt="High fidelity contact us page wireframe." />
									</a>
									<a href={CapInfoImage}>
										<img src={CapInfoImage}
											alt="High fidelity customer service page wireframe." />
									</a>
								</SRLWrapper>
							</div>
						</div>
					</div>
					<div className="project-detail">
						<h3 className="project-detail-title">Biggest Challenges</h3>
						<p>
							The challenges in this project were not so technically based. Our main focus as a team was not only to write code that was clean and readable for one another, but to create a WordPress interface that would be easy to use for the fictional client and customer base. This required a lot of communication and reflection, and we scheduled frequent meetings to discuss what kinds of Advanced Custom Fields would be created and why.
						</p>
						<p>
							One thing that all WordPress developers know is how many PHP files are required to create a WordPress site. Relying on Github to monitor changes was important in the development process. This is where creating the development plan was so important; we relied heavily on our detailed information architecture map and high-fidelity wireframes.
						</p>
					</div>
					<div className="project-detail">
						<h3 className="project-detail-title">Links</h3>
						<div className="project-detail-links">
							<a href="https://www.etoile.bcitwebdeveloper.ca/" target="_blank" rel="noopener" >
								<button className="project-detail-links-buttons">Live Site &#129125;</button>
							</a>

							<a href="https://www.github.com/htpwebdesign/etoile" target="_blank" rel="noopener" >
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

export default Capstone;