// Home

import { Link } from 'react-router-dom';

const Home = (props) => {

    return (

        <main>
            <section>
                <div className="home-introduction">
                    <div className="page-info">
                        <h2 id="text">
                            Front end web developer &#x26; designer in Vancouver. Focused on building simple, responsive user interfaces.
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
                        <a href="https://www.etoile.bcitwebdeveloper.ca/" target="_blank" >
                            <button>Live Site &#129125;</button>
                        </a>
                    </div>

                    <div className="movieapp-card">
                        <p>
                            <Link to={'/movieapp'}><b>Filmdex</b></Link> &#x2014; Combining React and a web API to create a movie search web application for film buffs.
                        </p>
                    </div>
                    <div className="movieapp-live-link">
                        <a href="https://mbui.bcitwebdeveloper.ca/twd-movie-app/" target="_blank" >
                            <button>Live Site &#129125;</button>
                        </a>
                    </div>

                    <div className="portfolio-card">
                        <p>
                            <Link to={'/portfolio'}><b>Portfolio</b></Link> &#x2014; Creating my portfolio site with React and Sass to showcase my projects and experience.
                        </p>
                    </div>
                    <div className="portfolio-live-link">
                        <a href="https://www.minabui.com/" target="_blank" >
                            <button>Live Site &#129125;</button>
                        </a>
                    </div>

                    <div className="brochure-card">
                        <p>
                            <Link to={'/brochure'}><b>Keep It Cheesy</b></Link> &#x2014; Using JavaScript and Sass to design a brochure site for gourmet cheese.
                        </p>
                    </div>
                    <div className="brochure-live-link">
                        <a href="https://mbui.bcitwebdeveloper.ca/keep-it-cheesy/index.html" target="_blank" >
                            <button>Live Site &#129125;</button>
                        </a>
                    </div>
                </div>
            </section>
        </main>

    );

}


export default Home;