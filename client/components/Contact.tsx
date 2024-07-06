import './Contact.css'
//import { Link } from 'react-router-dom' 

import logoGithub from '../images/technology/LinkedIn_icon.svg'
import logoLinkedIn from '../images/technology/github-icon.svg'

export default function Contact() {
    return (
        <>
        <div className='contact' id='contact'>
            <div className='container'>
                <div className='row-1'>
                    <h2>Contact</h2>
                    <span className='line'></span>
                    <div className='content'>
                        <ul className='image'>
                        <li><a href='https://www.linkedin.com/in/anthonymartinire/' ><img src={`${logoLinkedIn}`} alt='LinkedIn' />Linkedin</a></li>
                        <li><a href='https://github.com/anthonymartin36/' ><img src={`${logoGithub}`}  alt='Github' />Github</a></li>
                        </ul>
                        <div className='form'>
                            <form action=''>
                                Email: 
                                <input type='text' name='email' />
                                Message:
                                <textarea name='message' /> 
                                <input type='submit' value='Submit' />
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        </>
    )
}