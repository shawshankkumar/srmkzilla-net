import React from 'react'
import Tilt from 'react-tilt'

export const LeftTimeline = () => {
    return (
        <>
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="z-20 flex mb-80 lg:mb-96 items-center order-1 bg-black border  w-8 h-4 rounded-full">
            </div>
          <div className="order-1 bg-black w-full  lg:py-4">
            <div className="order-1 -mt-4 lg:mt-0 bg-baseBlue rounded-3xl shadow-xl lg:mx-2 px-6 py-3 lg:py-4">
              <h3 className=" lg:mb-3 w-full font-bold text-white lg:text-xl">Lorem Ipsum</h3>
            </div>
            <Tilt className="Tilt" options={{ max : 25 }}  >
              <div className="Tilt-inner lg:mx-10"> 
                <div className="moveable-3d effect3d__container order-1 mt-6 lg:mt-12 lg:mr-14 transform -rotate-2 max-w-full h-max bg-baseBlack rounded-3xl shadow-xl px-4 py-3  lg:px-6 lg:py-4" id="moveable-3d effect3d__container">
                  <div className="h-64 lg:h-80 bg-white rounded-3xl shadow-xl px-3  lg:px-6 lg:py-4">
                    <h3 className="lg:mb-3 w-full font-bold text-black lg:text-xl">Lorem Ipsum</h3>
                  </div> 
                  <p className="lg:mt-10 text-sm font-medium leading-snug tracking-wide text-white text-opacity-100"              >
                    12th December 2020
                   </p>
                 </div>              
              </div>
            </Tilt>
          </div>
          <div className="lg:mb-20 w-full ">
            <div className="lg:p-14 w-full ">
              <h3 className="lg:mb-3 w-full text-white font-bold lg:text-4xl">Mozohack</h3>
              <p className="lg:text-xl lg:leading-relaxed lg:tracking-widest ">
                A 3-day extravaganza aimed at spreading the message of the power of open-source web among the students is complete with workshops, technical quizzes, games and much more. Mozofest provides the perfect respite to students from their busy schedules.
              </p>
            </div>
          </div>
        </div>
        </>
    )
}

// export  LeftTimeline
export const RightTimeline = () => {
    return (
        <>
        {/* right timeline */}
         <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="z-20 flex mb-80 lg:mb-96 items-center order-1 bg-black border  w-8 h-4 rounded-full">
            </div>
          <div className="order-1 bg-black w-full  lg:py-4">
            <div className="order-1 -mt-4 lg:mt-0 bg-orange600 rounded-3xl shadow-xl lg:mx-2 px-6 py-3 lg:py-4">
              <h3 className="lg:mb-3 w-full font-bold text-white lg:text-xl">Lorem Ipsum</h3>
            </div>
            <Tilt className="Tilt" options={{ max : 25 }}  >
              <div className="Tilt-inner lg:mx-10"> 
            <div className="order-1 mt-6 lg:mt-12 lg:mr-14 transform rotate-2 max-w-full h-max bg-baseBlack rounded-3xl shadow-xl px-4 py-3  lg:px-6 lg:py-4">
              <div className="h-64 lg:h-80 bg-white rounded-3xl shadow-xl px-3  lg:px-6 lg:py-4">
                <h3 className="lg:mb-3 w-full font-bold text-black lg:text-xl">Lorem Ipsum</h3>
              </div> 
              <p className="lg:mt-10 text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                12th December 2020
              </p>
                </div>
                </div>
            </Tilt>
          </div>
          <div className="lg:mb-20 w-full ">
          <div className="lg:p-14 w-full ">
            <h3 className="lg:mb-3 w-full text-white font-bold lg:text-4xl">Mozohack</h3>
              <p className="lg:text-xl leading-relaxed lg:tracking-widest ">
                A 3-day extravaganza aimed at spreading the message of the power of open-source web among the students is complete with workshops, technical quizzes, games and much more. Mozofest provides the perfect respite to students from their busy schedules.
              </p>
          </div>
        </div>
      </div>
     </>
    )
}