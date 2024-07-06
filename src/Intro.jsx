import React from 'react'
import './Intro.css'

export default function Intro() {
  const IntroData={
    profilePic:'/public/Images/saibenneresumeimg.png',
    introduction:"Results-driven software developer with a strong foundation in Java and a proven track "+
"record in web development and modern application architecture. Adept at designing "+
"and implementing scalable solutions using a wide range of technologies including "+
"HTML, CSS, JavaScript, React, XML, JSP, Servlets, JDBC, Spring Boot, Microservices, "+
"Spring Data JPA, RESTful API, MongoDB Atlas, and Redis Cloud. Possesses a deep "+
"understanding of software engineering principles, a passion for problem-solving, and"+ 
"a commitment to delivering high-quality software solutions"
  }
  return (
    <div className='Intro' id='intro'>
       <div className='Profile'>
        <div className='ProfilePic'>
            <img src={`${process.env.PUBLIC_URL}/Images/saibenneresumeimg.png`} alt='Saibenneresumeimg'></img>
            
        </div>
        <div className='Resume'>
        <a href={`${process.env.PUBLIC_URL}/files/SAI_PRAKASH_BENNE_.pdf`} download="SAI_PRAKASH_BENNE__.pdf">Resume</a>
        </div>
        </div>
        <div className='Introduction'>
            <p>{IntroData.introduction}</p>
        </div>
    </div>
  )
}
