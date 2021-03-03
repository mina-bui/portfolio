// Home

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import headshot from '../images/social-media/headshot.png';


const Home = (props) => {

    return (
        <Fragment>
            <Helmet>
                <title>Home &#x007C; Mina Bui &#x2013; Front End Web Developer &#x26; Designer in Vancouver</title>
                <meta name="description"
                    content="Mina Bui is a front end developer and web designer in Vancouver, BC. She builds responsive user interfaces, interactive web applications, and minimalist site designs. Click here to see her online web design portfolio." />
                <meta name="keywords"
                    content="Front end web developer, web designer Vancouver, responsive user interfaces, interactive web applications, site designs, BCIT front end developer, Vancouver web design, hire web designer Vancouver, BCIT TWD, BCIT FED" />
            </Helmet>
            <main>
                <section>
                    <div className="home-introduction">
                        <div className="page-info">
                            <div className="home-banner-wrapper">
                                <img src={headshot} alt="Home Banner" className="home-banner" />
                            </div>
                            <h2 id="text">
                                Mina Bui is a front end web developer &#x26; designer in Vancouver focused on building simple, responsive user interfaces.
                            </h2>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="home-project-list">
                        <div className="capstone-card">
                            <p>
                                <Link to={'/capstone'}><b>Etoile</b></Link> &#x2014; Building a minimalist fashion store with Wordpress and PHP to improve the e-shopping experience.
                            </p>
                        </div>
                        <div className="capstone-live-link">
                            <a href="https://www.etoile.bcitwebdeveloper.ca/"
                                title="https://www.etoile.bcitwebdeveloper.ca/"
                                target="_blank" rel="noopener" >
                                <button>Live Site &#129125;</button>
                            </a>
                        </div>

                        <div className="movieapp-card">
                            <p>
                                <Link to={'/movieapp'}><b>Filmdex</b></Link> &#x2014; Combining React and a web API to create a movie search web application for film buffs.
                            </p>
                        </div>
                        <div className="movieapp-live-link">
                            <a href="https://mbui.bcitwebdeveloper.ca/twd-movie-app/"
                                title="https://mbui.bcitwebdeveloper.ca/twd-movie-app/"
                                target="_blank" rel="noopener" >
                                <button>Live Site &#129125;</button>
                            </a>
                        </div>

                        <div className="portfolio-card">
                            <p>
                                <Link to={'/portfolio'}><b>Portfolio</b></Link> &#x2014; Creating my portfolio site with React and Sass to showcase my projects and experience.
                            </p>
                        </div>
                        <div className="portfolio-live-link">
                            <a href="https://www.minabui.com/"
                                title="https://www.minabui.com/"
                                target="_blank" rel="noopener" >
                                <button>Live Site &#129125;</button>
                            </a>
                        </div>

                        <div className="brochure-card">
                            <p>
                                <Link to={'/brochure'}><b>Keep It Cheesy</b></Link> &#x2014; Using JavaScript and Sass to design a business site for gourmet cheese.
                            </p>
                        </div>
                        <div className="brochure-live-link">
                            <a href="https://mbui.bcitwebdeveloper.ca/keep-it-cheesy/index.html"
                                title="https://mbui.bcitwebdeveloper.ca/keep-it-cheesy/index.html"
                                target="_blank" rel="noopener" >
                                <button>Live Site &#129125;</button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    );
}


export default Home;