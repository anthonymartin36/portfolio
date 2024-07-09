import './Contact.css'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
// import * as dotenv from 'dotenv'

// config(dotenv)

import logoGithub from '../images/technology/LinkedIn_icon.svg'
import logoLinkedIn from '../images/technology/github-icon.svg'

export default function Contact() {
    
    const form = useRef()
    
    const sendEmail = (e: any) => {
        e.preventDefault()
    
        emailjs
          .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY
        })
        .then(
            () => {
              console.log('SUCCESS!')
            },
            (error: any) => {
              console.log('FAILED...', error.text)
            },
        )
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
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='form'>
                                <h2>Contact Me</h2>
                                <p>Email Address: </p> 
                                <input type='text' name='user_email' />
                                <p>Your Name: </p> 
                                <input type='text' name='user_name' />
                                <p>Message Body: </p>
                                <textarea name='message' /> 
                                <div className='reCAPTCHA'>
                                reCAPTCHA    
                                </div>
                                <div className='btn'>
                                <input type='submit' value='Send' />
                                <input type="reset" value="Reset"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>  
            </div>
        </div>
        </>
    )
}