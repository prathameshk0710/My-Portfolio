import React from 'react'
import './techstack.css'
import { TechstackList } from '../../utils/TechstackList'
import RubberBand from "react-reveal/RubberBand";
import Flip from "react-reveal/Flip";

const TechStack = () => {
  return (
    <>
    <div className="techstack" id="techstack">
      <RubberBand>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Including programming Languages, frameworks, databases, front-end
          and back-end tools etc.
        </p>
      </RubberBand>
      <div className="custom-row">
        {TechstackList.map((tech) => (
          <div key={tech._id} className="custom-col">
            <div className="custom-card">
            <Flip>
              <div className="custom-card-content">
                <div className="custom-card-body">
                  <div className="custom-media">
                    <div className="custom-align-center">
                      <tech.icon className="custom-tech-icon" />
                    </div>
                    <div className="custom-media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
        </Flip>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default TechStack