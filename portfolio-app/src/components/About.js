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
						I'm Mina, a front end developer and web designer from Vancouver, BC. I build responsive user interfaces, web applications, and minimalist site designs.
                </p>
					<p>
						I was previously a student in BCIT's Front End Developer program, where I developed a wide range of websites from scratch, from fashion stores to tourist brochure sites.
                </p>
					<p>
						Growing up surrounded by BC's landscape made me interested in protecting it, so I went to SFU to study Geography and GIS. I realized I enjoy developing sites more than analyzing data, so here I am. (I still love maps, though!)
                </p>
					<p>
						Today, I'm available for new challenges, so <Link to={'mailto:webdevmina@gmail.com'}>shoot me an email</Link> and let's talk about it. Cheers!
                </p>
				</div>
			</div>

			<div className="about-column-two">
				<div className="headshot-wrapper">
					<img src={headshot} alt="headshot" className="headshot" />
				</div>
			</div>
		</section>
	</main>

);

export default About;