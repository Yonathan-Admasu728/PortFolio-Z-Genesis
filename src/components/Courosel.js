import React from 'react'
import {FaGithubSquare, FaBootstrap, FaCss3, FaHtml5, FaDocker, FaPython, FaNodeJs, FaReact, FaJava } from 'react-icons/fa'
function Courosel() {
    return (
        <div>
            
            <div className='courosel-parent position-relative' id='courosel'  >
              <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>Technologes I use</h1>

              <div className='gallery'>

                  <span style={{'--i' : 1}}>
                      <FaReact color='cyan'/>
                  </span>

                  <span style={{'--i' : 2}}>
                      <FaGithubSquare color='orangered'/>
                  </span>

                  <span style={{'--i' : 9}}>
                      <FaJava color='hsl(317 100% 54%)'/>
                  </span>

                  <span style={{'--i' : 3}}>
                      <FaDocker color='purple'/>
                  </span>

                  <span style={{'--i' : 4}}>
                      <FaNodeJs color='green'/>
                  </span>

                  <span style={{'--i' : 5}}>
                      <FaPython color='lime'/>
                  </span>

                  <span style={{'--i' : 6}}>
                      <FaBootstrap color='blue'/>
                  </span>

                  <span style={{'--i' : 7}}>
                      <FaHtml5 color='brown'/>
                  </span>

                  <span style={{'--i' : 8}}>
                      <FaCss3 color='blue'/>
                  </span>
                  

              </div>
            </div>
        </div>
    )
}

export default Courosel
