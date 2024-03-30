import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/resume.pdf'
import Fade from 'react-reveal/Fade';
const Home = () => {
  return (
    <>
      <div className='home-container' id='home'>
        <div className='home-content'>
          <h1>Hola amigos, I'm</h1>
          <p>
            <Typewriter
              options={{
                strings: ['Prathamesh Kondawale', 'Software Developer!', 'Programmer!', 'Machine Learning Enthusiast'],
                autoStart: true,
                loop: true,
                delay: 60
              }}
            />
          </p>
          <Fade bottom>
          <div className='home-buttons'>
            <a className='btn btn-cv' href={Resume} download="resume.pdf">Resume</a>
            {/* <a className='resume-button' href={Resume} download="Prathamesh_Kondawale.pdf">Resume</a> */}
          </div>            
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Home