import React from "react";
import Header from "../components/Header";
import Courosel from "../components/Courosel";
function ThinkingAbout() {
  return (
    <div>
      <Header />
      <div className="container projects-intro">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 n-box2 px-3 py-5" data-aos='fade-down'>
            <div>
              <p className="font-bold">
                Thinking about using my knowledge and skills to accomplish good in the world.
                Good ideas are not adopted automatically. They must be driven
                into practice with courage and patience
              </p>
            </div>
          </div>

          <div className="col-md-6 position-relative">
           <Courosel 
            color='black'
            size='50'
            className='position-absolute top-50 start-50 translate-middle'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThinkingAbout;
