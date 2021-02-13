// About

import { Link } from 'react-router-dom';
import headshot from '../images/headshot.png';

const About = () => (

	<main>
		<section className="about-wrapper">
			<div className="about-column-one">
				<div className="page-info">
					<h2>Hey there,</h2>
				</div>
				<div className="page-text">
					<p>
						I'm Mina, a web developer and designer from Vancouver, BC. I build responsive user interfaces, interactive web applications, and minimalist site designs.
                </p>
					<p>
						I was previously a student in BCIT's Front End Developer program, where I developed a wide range of websites from scratch, from fashion stores to tourist brochure sites.
                </p>
					<p>
						Growing up surrounded by BC's landscape sparked an interest in sustainability, so I went to study  Geography &#x26; GIS at SFU, where I built and designed visual reports and maps using spatial data. (I think this is what led me to front end design).
                </p>
					<p>
						Today, I'm available for new challenges, so <Link to={'mailto:webdevmina@gmail.com'} title="webdevmina@gmail.com" target="_blank">shoot me an email &#129125;</Link> and let's talk about it. Cheers!
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