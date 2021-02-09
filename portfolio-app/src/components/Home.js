// Home

import { Link } from 'react-router-dom';

const Home = (props) => {

    return (

        <main>
            <section>
                <div className="home-introduction">
                    <div className="page-info">
                        <h2>Hi, I'm Mina Bui.</h2>
                        <h3>Front End Developer and Web Designer</h3>
                        <h4>Based in Vancouver, BC</h4>
                    </div>
                    <div className="page-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas natus magni dicta, fugiat eaque error sint velit! Minus accusamus quisquam nam possimus! Nostrum hic totam temporibus laudantium dolorem aspernatur doloremque?
                        </p>
                        <Link to={'/about'}><button>More About Me</button></Link>
                    </div>
                </div>
                <div className="home-project-list">
                    <div className="page-info">
                        <h2>My Projects</h2>
                    </div>
                    <div className="page-text">
                        <div className="project-card">
                            <Link to={'/capstone'}><h3>Capstone Project</h3></Link>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas natus magni dicta, fugiat eaque error sint velit! Minus accusamus quisquam nam possimus! Nostrum hic totam temporibus laudantium dolorem aspernatur doloremque?
                            </p>
                            <Link to={'/capstone'}><button>More Info</button></Link>

                        </div>
                        <div className="project-card">
                            <Link to={'/movieapp'}><h3>React Movie App</h3></Link>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas natus magni dicta, fugiat eaque error sint velit! Minus accusamus quisquam nam possimus! Nostrum hic totam temporibus laudantium dolorem aspernatur doloremque?
                            </p>
                            <Link to={'/movieapp'}><button>More Info</button></Link>

                        </div>
                        <div className="project-card">
                            <Link to={'/portfolio'}><h3>React Portfolio</h3></Link>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas natus magni dicta, fugiat eaque error sint velit! Minus accusamus quisquam nam possimus! Nostrum hic totam temporibus laudantium dolorem aspernatur doloremque?
                            </p>
                            <Link to={'/portfolio'}><button>More Info</button></Link>

                        </div>
                        <div className="project-card">
                            <Link to={'/brochure'}><h3>Business Brochure</h3></Link>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas natus magni dicta, fugiat eaque error sint velit! Minus accusamus quisquam nam possimus! Nostrum hic totam temporibus laudantium dolorem aspernatur doloremque?
                            </p>
                            <Link to={'/brochure'}><button>More Info</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );

}


export default Home;