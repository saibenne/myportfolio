import React from 'react'
import './Education.css'
import { useState } from 'react'
export default function Education() {
    const EducationData=[
        {BTech:{
        college:"Gokaraju rangaraju Institue of Engineering & Technology",
        qualification:"BTech in Information Technology",
        details:{
        location:"Kukatpally, Hyderabad, Telangana",
        duration:"07-2021 - 07-2024",
        grade:"CGPA- 9.0"
        }
    }
},
        {School:{
        college:"M.V.Raman High School",
        qualification:"Secondary School Education",
        details:{
        location:"Atmakur, Wanaparthy, Telangana",
        duration:"07-2021 - 07-2024",
        grade:"CGPA- 9.5"
        }
    }
},
        {Intermediate:{
        college:"Institute Of Electronics",
        qualification:"Diploma in Embedded Systems",
        details:{
        location:"Atmakur, Wanaparthy, Telangana",
        duration:"07-2021 - 07-2024",
        grade:"CGPA- 9.5"
        }
    }
    }
]
  const [EducationDetails,setEducationDetails]=useState(EducationData[0][Object.keys(EducationData[0])[0]]);
  const handleClick=(data)=>{
    setEducationDetails(data)
  }
  
  return (
    <div className='Education' id='education'>
        <div className='EduLinks'>
            
                {EducationData.map((item,index)=>
                {
                    const key=Object.keys(item)[0]
                    const value=item[key]
                    return(
                        <button onClick={()=>handleClick(value)}>{key}</button>
                    )
                })}
        </div>
        <div className='School'>
            <div className='Name'>{EducationDetails.college}</div>
            <div className='Qualification'>{EducationDetails.qualification}</div>
            <div className='Details'>
                <ul>
                    {Object.keys(EducationDetails.details).map((key=>(
                        <li>{EducationDetails.details[key]}</li>
                    )))}
                    
                </ul>
            </div>
            </div>
            
        
    </div>
  )
}
