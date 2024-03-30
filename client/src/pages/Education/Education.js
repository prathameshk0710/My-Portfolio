import React from 'react'
import './education.css'
import RubberBand from "react-reveal/RubberBand";
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  return (
    <>
        <div className='education-container' id='education'>
            <RubberBand>
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Education
                </h2>
                <hr />
                <p className="text-center">
                    Dive into my educational journey, meticulously crafted to showcase my academic excellence and commitment to growth.
                </p>
            </RubberBand>
            <div className='education-timeline education-card'>
                <VerticalTimeline>                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2020 - Present"
                        iconStyle={{ background: '#e0b50f', color: 'black' }}
                        icon={<IoSchool />}
                        contentStyle={{
                            border: '2px solid 	#09061c', 
                            borderRadius: '20px',
                            color: 'black',
                            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.4)'
                          }}
                        contentArrowStyle={{
                            borderRight: '10px solid #09061c'
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Technology,</h3>
                        <h4 className="vertical-timeline-element-subtitle">National Institute of Technology, Kurukshetra</h4>
                        <p/>
                        <h6>Haryana, India</h6>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="March 2018 - November 2020"
                        iconStyle={{ background: '#e0b50f', color: 'black' }}
                        icon={<IoSchool />}
                        contentStyle={{
                            border: '2px solid 	#09061c', 
                            borderRadius: '20px',
                            color: 'black',
                            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.4)'
                          }}
                        contentArrowStyle={{
                            borderRight: '10px solid #09061c'
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">Science (Physics, Chemistry, Mathematics),</h3>
                        <h4 className="vertical-timeline-element-subtitle">Shri. Tripura Jr. Science College,</h4>
                        <p/>
                        <h6>Maharashtra, India</h6>
                    </VerticalTimelineElement>
                    
                    </VerticalTimeline>
            </div>
        </div>
    </>
  )
}

export default Education