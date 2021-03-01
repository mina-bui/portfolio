// About

import { Link } from 'react-router-dom';
import headshot from '../images/social-media/headshot.png';

const About = () => (

	<main>
		<section className="about-wrapper">
			<div className="about-column-one">
				<Link to={'/'}>Home</Link> &#x2013; About
				<br /><br />
				<div className="page-info">
					<h2>Hey, I'm Mina.</h2>
				</div>
				<div className="page-text">
					<p>
						I'm a front end web developer and designer from Vancouver, BC. I build responsive user interfaces, interactive web applications, and minimalist site designs.
                </p>
					<p>
						I was previously a student in BCIT's Front End Developer program, where I developed a wide range of websites from scratch, from high-end clothing stores to tourism sites.
                </p>
					<p>
						Growing up surrounded by BC's landscape sparked an interest in sustainability, so I went to study  Geography &#x26; GIS at SFU, where I built reports and maps using spatial data. (I think this is what led me to web design).
                </p>
					<p>
						Today, I'm available for new challenges, so <a href="mailto:hello@minabui.com" title="hello@minabui.com" target="_blank">shoot me an email at hello@minabui.com &#129125;</a> and let's talk about it. Cheers!
                </p>
				</div>
			</div>

			<div className="about-column-two">
				<div className="headshot-wrapper">
					<img src={headshot} alt="Headshot" className="headshot" />
				</div>
			</div>
		</section>
	</main>

);

export default About;