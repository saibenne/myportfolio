import React, { useEffect, useRef, useState } from 'react'
import './Skills.css'
export default function Skills() {
    const skillData=["htmlpng","csspng","jspng","reactpng"
        ,"javapng","xmlpng","springpng",
        "jpapng","mongodbpng","mysqlpng","microservicespng",
        "restapipng","kafkapng","gitpng","githubpng"
    ]
    const [Skills,setSkills]=useState(skillData)
    const [isHovered,setIsHovered] = useState(false)
    const containerRef=useRef(null)
    useEffect(()=>{
      let scrollInterval;
      const startScrolling=()=>{
        if(containerRef.current){
          scrollInterval=setInterval(()=>{
            containerRef.current.scrollLeft+=1
            if(containerRef.current.scrollLeft>=containerRef.current.scrollWidth/2){
              containerRef.current.scrollLeft=20
            }
          },20)
        }
      }
      if(!isHovered){
        startScrolling();
      }
      return()=>{
        clearInterval(scrollInterval)
      }
    },[isHovered])
  return (
    <div className='Skills' id='skills'
    onMouseEnter={()=>{setIsHovered(true)}}
        onMouseLeave={()=>{setIsHovered(false)}}
        ref={containerRef}>
        
        <div className='Skill-Container' 
        >
        {Skills.concat(Skills).map(skill=>(
            <div><img src={`SkillsImages/${skill}.png`} alt={skill} ></img></div>
        ))}
    </div>
    
    </div>
  )
}
