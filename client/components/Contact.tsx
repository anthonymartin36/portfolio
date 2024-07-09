import './Contact.css'
//import { Link } from 'react-router-dom' 

import logoGithub from '../images/technology/LinkedIn_icon.svg'
import logoLinkedIn from '../images/technology/github-icon.svg'

export default function Contact() {
    return (
        <>
        <div className='contact' id='contact'>
            <div className='container'>
            <h2>Contact</h2>
                <span className='line'></span>    
                <div className='content'>
                    <div className='row-1'>
                        <p>Reach out to me </p>
                    </div>
                    <div className='row-3'>
                        <form action=''>
                            <div className='form'>
                                <h2>Contact Me</h2>
                                <p>Email Address: </p> 
                                <input type='text' name='email' />
                                <p>Message Body: </p>
                                <textarea name='message' /> 
                                <div className='btn'>
                                <input type='submit' value='Submit' />
                                <input type="reset" value="Reset"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='row-2'>
                        <div className='logo-image'>
                            <a href='https://www.linkedin.com/in/anthonymartinire/' ><img src={`${logoLinkedIn}`} alt='LinkedIn' /></a>
                         </div>
                         <div className='logo-image'>
                         <a href='https://github.com/anthonymartin36/' ><img src={`${logoGithub}`}  alt='Github' /></a>
                         </div>
                    </div>
                </div>  
            </div>
        </div>
        </>
    )
}