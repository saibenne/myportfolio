import React, { useState } from 'react'
import './Projects.css'
export default function Projects() {
    const ProjectData=[
        {
            title:"Stock price prediction using Ensemble Machine Learning Techniques and Sentimental analysis",
            details:{
                domain:"Machine Learning",
                duration:"04-2024 - 07-2024",
                keywords:"one, two, three",
            },
            description:"This case study explores the application of ensemble machine learning techniques in combination with sentiment analysis for stock price prediction. By utilizing Long Short-Term Memory (LSTM), Support Vector Machine (SVM), XGBoost, and Random Forest models, and integrating sentiment analysis, this project aims to provide a comprehensive analysis of their effectiveness in predicting stock prices",
            technologies:" React ,Spring Boot, Java, Python, ML Libraries"
        },
        {
            title:" RoyalTheorem - An eCommerce server side application using Microservices architecture ",
            details:{
                domain:"Machine Learning",
                duration:"04-2024 - 07-2024",
                keywords:"one, two, three",
            },
            description:"This project involves the development of a Spring Boot-based microservices architecture for managing various aspects of a design and order system. The system"+ 
"comprises multiple microservices, including Designer Service, User Service, Krders Service, and Design Service. Additionally, it employs Net'ix Eureka Server for"+ 
"service registry and discovery, Spring Cloud Gateway as the API gateway, and Redis for caching purposes. •ey tasks included designing RESTful APIs, implementing "+
"microservices using Spring Boot, managing service-to-service communication, and ensuring fault tolerance. I used Postman tool to test each REST API and service to service communication",
            technologies:"Java ,Spring Boot, Net'ix Eureka Server, Redis cloud, Spring"+ 
"Cloud Gateway, Spring data JPA, MySQL, MongoDB"
        },
        {
            title:"BlockForge API: Crafting Blockchain Networks and Deploying Smart Contracts with Ease",
            details:{
                domain:"Machine Learning",
                duration:"04-2024 - 07-2024",
                keywords:"one, two, three",
            },
            description:"In this groundbreaking project, our team is focused on developing an advanced API"+ 
"(Application Programming Interface) for the seamless creation and deployment of"+ 
"Blockchain networks and smart contracts. This endeavor aims to revolutionize the"+ 
"way blockchain technology is accessed and utilized, making it more accessible and"+ 
"user-friendly for businesses and developers. Using the BlockForge API, developers"+ 
"can focus on business logic rather than focusing on implementing complex and"+ 
"time taking blockchain technology. BlockForge API automates the creation and"+ 
"deployment of blockchain and the developer just need to choose type of blockchain"+ 
"network, consensus algorithm, hashing techniques ,network type, etc that fosters the"+ 
"blockchain development",
            technologies:" React ,Spring Boot, Java, Python, ML Libraries"
        }

    ]
    const[Project,setProject]=useState()
  return (
    <div className='Projects' name="Projects">
        {ProjectData.map(item=>(
            <div className='Project'>
                <div className='ProjectLeft'>
                    <div className='Title'>{item.title}</div>
                    <div className='Details'>
                    <ul>
                        {Object.entries(item.details).map(([key,value])=>(
                            <li>{key}-{value}</li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className='ProjectRight'>
                    <div className='Description'>{item.description}</div>
                    <div className='Tech'>Technologies- {item.technologies}</div>
                </div>        
            </div>
        ))}
        
    </div>
  )
}
