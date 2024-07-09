import './Contact.css'
import axios from 'axios'
import { useState } from 'react'

import logoGithub from '../images/technology/LinkedIn_icon.svg'
import logoLinkedIn from '../images/technology/github-icon.svg'
import { buildErrorMessage } from 'vite'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = async (e: any) => {
        e.preventDefault()
        const data = {
            service_id: import.meta.env.VITE_EMAIL_SERVICE_ID,
            template_id: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            user_id: import.meta.env.VITE_PUBLIC_KEY,
            template_params: {
              from_name: name,
              from_email: email,
              to_name: 'Web Wizard',
              message: message,
            }
        }
        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
            //console.log(res.data)
            setName('')
            setEmail('')
            setMessage('')

        } catch (error) {
            console.error(error)
        }
    }

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
                    <div className='row-2'>
                        <div className='logo-image'>
                            <a href='https://www.linkedin.com/in/anthonymartinire/' ><img src={`${logoLinkedIn}`} alt='LinkedIn' /></a>
                         </div>
                         <div className='logo-image'>
                         <a href='https://github.com/anthonymartin36/' ><img src={`${logoGithub}`}  alt='Github' /></a>
                         </div>
                    </div>
                    <div className='row-3'>
                        <div className='form'>
                            <form onSubmit={sendEmail}>
                                <h2>Contact Me</h2>
                                <p>Email Address: </p> 
                                <input 
                                    type='text' 
                                    name='user_email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <p>Your Name: </p> 
                                <input 
                                    type='text' 
                                    name='user_name' 
                                    value={name}  
                                    onChange={(e) => setName(e.target.value)}/>
                                <p>Message Body: </p>
                                <textarea 
                                    name='message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} /> 
                                <div className='reCAPTCHA'>    
                                </div>
                                <div className='btn'>
                                <input type='submit' value='Send' />
                                <input type="reset" value="Reset"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>  
            </div>
        </div>
        </>
    )
}