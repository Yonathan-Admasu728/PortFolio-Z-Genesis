import React from 'react'
import Courosel from '../components/Courosel'
import Header from '../components/Header'

export default function Home() {
    return (
        <div>
            <Header/>
             <div className="introduction flex-with-center" style={{backgroundImage:`url('/introbg.svg')`}}>
                 <div>
                     <h1>YONATHAN...</h1>
                     <div className="intro-content d-flex justify-content-between">
                         <p>FULL Stack <br/> Developer, Front-End</p>
                         <button className='primary-button font-bold'>Get Started</button>

                     </div>
                 </div>
                 <Courosel/>
             </div>
        </div>
    )
}
