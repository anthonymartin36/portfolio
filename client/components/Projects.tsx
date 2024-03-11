import React from 'react'
//import { Link } from 'react-router-dom'

import './Projects.css'
import Prj1 from '../images/number1.jpg'
import Prj2 from '../images/number2.jpg'
import Prj3 from '../images/number3.jpg'

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <h2>Projects</h2>
                <span className='line'></span>
                <div className='content'> 
                    <div className='card'>
                        <img src={Prj1} alt='Project 1' />
                        <p><a href="http://www.google.com">Troll Toll Calculator</a></p>
                        <p><span>Placeholder </span></p>
                        <p>Placeholder</p>
                    </div>
                    <div className='card'>
                        <img src={Prj2} alt='Project 2' />
                        <p><a href="http://www.google.com">Coupon Generator</a></p>
                        <p><span>Placeholder </span></p>
                        <p>Placeholder</p>
                    </div>
                    <div className='card'>
                        <img src={Prj3} alt='Project 3' />
                        <p><a href="http://www.google.com">Master Chef</a></p>
                        <p><span>Placeholder </span></p>
                        <p>Placeholder</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
//<Link to={{ pathname: "https://herewecode.io/" }} >Click to open HereWeCode</Link>

export default Projects