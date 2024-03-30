import React from 'react'
import './projects.css'
import RubberBand from "react-reveal/RubberBand";
import { ToastContainer, toast } from 'react-toastify';

const Projects = () => {
  return (
    <>
        <div className='project-container'>
            <div className='project-intro'>
                <RubberBand>
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Projects
                    </h2>
                    <hr />
                    <p className="pb-3 text-center">
                        Explore my portfolio showcasing a curated collection of my projects, meticulously crafted to reflect my skills and expertise in action.
                    </p>
                </RubberBand>
            </div>
            <div className='project-cards-container' id='ads'>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <div className="card project-card rounded first-project">
                            <div className="card-image">
                                <span className="card-notify-badge">MERN stack</span>
                                <p className='project-desc'>
                                Discover my journey as a versatile developer through projects, skills, and experiences showcased in my portfolio website. Explore innovative solutions and connect with me to embark on exciting ventures together!
                                </p>
                            </div>
                            <div className="card-info card-body text-center">
                                <div className="card-image-overly">
                                    <span className="card-detail-badge">Mongodb</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">Node</span>
                                </div>
                                <div className="ad-title m-auto">
                                    <h2>
                                        Portfolio Webiste
                                    </h2>
                                </div>
                                <a
                                    className="ad-btn"
                                    href="https://github.com/prathameshk0710/Portfolio-client"
                                    target='_blank'
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <div className="card project-card rounded second-project">
                            <div className="card-image">
                                <span className="card-notify-badge">Web Backend</span>
                                <p className='project-desc'>
                                Crafted a game changing corporate launch tool, revolutionizing processes by an impressive 70% during an internship tenure at medibuddy, while innovating and delivering impactful solutions.
                                </p>
                            </div>
                            <div className="card-info card-body text-center">
                                <div className="card-image-overly">
                                    <span className="card-detail-badge">NestJs</span>
                                    <span className="card-detail-badge">NextJs</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">Postgres SQL</span>
                                </div>
                                <div className="ad-title m-auto">
                                    <h2>
                                        Quick Launch Tool
                                    </h2>
                                </div>
                                <a
                                    className="ad-btn"
                                    href='#'
                                    onClick={()=>{
                                        toast.error("Sorry, you are not authorized to view this project.")
                                    }}
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <div className="card project-card rounded third-project">
                            <div className="card-image">
                                <span className="card-notify-badge">Android</span>
                                <p className='project-desc'>
                                    Discover instant weather insights right at your fingertips! Our sleek Android app delivers real-time weather reports based on your current location, keeping you informed and prepared for any forecast.
                                </p>
                            </div>
                            <div className=" card-info card-body text-center">
                                <div className="card-image-overly">
                                    <span className="card-detail-badge">Kotlin</span>
                                    <span className="card-detail-badge">XML</span>
                                    <span className="card-detail-badge">Firebase</span>
                                </div>
                                <div className="ad-title m-auto">
                                    <h2>
                                        Weather App
                                    </h2>
                                </div>
                                <a
                                    className="ad-btn"
                                    href="https://github.com/prathameshk0710/Weather-Application"
                                    target='_blank'
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                {/* <div className='card-container second-project'>
                    <Projectcard />
                </div>
                <div className='card-container third-project'>
                    <Projectcard />
                </div> */}
            </div>
        </div>
        
    </>
  )
}

export default Projects