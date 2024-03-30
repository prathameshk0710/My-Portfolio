import React from 'react'
import RubberBand from "react-reveal/RubberBand";
import './workExp.css'
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaRobot } from "react-icons/fa";

function WorkExp() {
  return (
    <>
        <div className='work-container' id='experience'>
            <RubberBand>
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Work Experience
                </h2>
                <hr />
                <p className="text-center">
                    Embark on a journey through my hands-on endeavors, thoughtfully assembled to showcase my professional development and project achievements.
                </p>
            </RubberBand>
            <div className='work-timeline work-card'>
                <VerticalTimeline className="custom-timeline">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'rgb(75, 75, 235)',
                            border: '2px solid 	#09061c', 
                            borderRadius: '20px',
                            color: 'white',
                            boxShadow: '13px 13px 13px rgba(0, 0, 0, 0.6)'
                          }}
                        contentArrowStyle={{ borderRight: '10px solid #09061c' }}
                        date={<span style={{ color: '#09061c' }}>January 2024 - Present</span>}
                        iconStyle={{ background: '#09061c', color:"white" }}
                        icon={<FaRobot/>}
                    >
                        <h3 className="vertical-timeline-element-title">Sentiment Analysis</h3>
                        <h4 className="vertical-timeline-element-subtitle">Machine Learning, Python</h4>
                        <p/>
                        <h6>
                            Engaged in the exciting development of a sentiment and emotion prediction model from viewer comments, shaping my final-year college project with innovation and flair.
                        </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'rgb(75, 75, 235)',
                            border: '2px solid 	#09061c', 
                            borderRadius: '20px',
                            color: 'white',
                            boxShadow: '13px 13px 13px rgba(0, 0, 0, 0.6)'
                          }}
                        contentArrowStyle={{ borderRight: '10px solid #09061c' }}
                        date={<span style={{ color: '#09061c' }}>January 2023 - June 2023</span>}
                        iconStyle={{ background: '#09061c', color:"white" }}
                        icon={<HiBuildingOffice2/>}
                    >
                        <h3 className="vertical-timeline-element-title">Backend Software Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Medibuddy, Banglore</h4>
                        <p/>
                        <h6>
                            Interned as a web developer, delving into backend technologies for valuable insights and skill enhancement.
                        </h6>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    </>
  )
}

export default WorkExp