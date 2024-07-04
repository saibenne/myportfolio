import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faSmile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Contact() {
  return (
    <div className='Contact'>
        <div className='Contact-Container'>
            <ul>
                <li><a href='#'><FontAwesomeIcon icon={faPhone} className='Icon'/>+919573879821</a></li>
                <li><a href='mailto:bennesaiprakash@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='Icon'/>Mail</a></li>
                <li><a href='https://www.linkedin.com/in/saibenne'><FontAwesomeIcon icon={faLinkedin} className='Icon'/>Linkedin</a></li>
                <li><a href='https://github.com/saibenne'><FontAwesomeIcon icon={faGithub} className='Icon'/>Github</a></li>
            </ul>
        </div>
        <div className='Address'>
            204,Hema Nilayam, near SLI Power, Wispher valley, Bachupally ,Hyderabad
        </div>
    </div>
  )
}
