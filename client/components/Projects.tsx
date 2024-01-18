import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import Prj1 from '../images/number1.jpg'
import Prj2 from '../images/number2.jpg'
import Prj3 from '../images/number3.jpg'

const Projects = () => {
    return (
        <div className='projects'>
            <div className='container'>
                <h2>Projects</h2>
                <span className='line'></span>
                <div className='content'> 
                    <div className='card'>
                        <img src={Prj1} alt='Project 1' />
                        <p>Troll Toll Calculator</p>
                        <p><span>Placeholder</span></p>
                        <p>Placeholder</p>
                    </div>
                    <div className='card'>
                        <img src={Prj2} alt='Project 2' />
                        <p>Coupon Generator</p>
                        <p><span><Link to="www.google.com">Coupon Generator</Link></span></p>
                        <p>Placeholder</p>
                    </div>
                    <div className='card'>
                        <img src={Prj3} alt='Project 3' />
                        <p>Master Chef</p>
                        <p><span>Placeholder <Link to={{ pathname: "https://herewecode.io/" }} >Click to open HereWeCode</Link></span></p>
                        <p>Placeholder</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects