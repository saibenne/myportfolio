import React from "react";
import './Nav.css'
import {Link,scrollSpy} from 'react-scroll'
import { useRef,useState,useEffect } from "react";
export default function Nav(){
    const ref=useRef(null)
    const [navHeight,setNavHeight]=useState(0)
    useEffect(()=>{
        if(ref.current){
            setNavHeight(ref.current.clientHeight)
        }
    },[])
    return(
        <div className="Nav" ref={ref}>
            <div className="Name">SaiBenne</div>
            <div className="Menu">
                <ul>
                    <li><Link to="Intro" smooth={true} duration={500} offset={-navHeight-15} spy={true} activeClass="active">Intro</Link></li>
                    <li><Link to="Education" smooth={true} duration={500} offset={-navHeight-10} spy={true} activeClass="active">Education</Link></li>
                    <li><Link to="Skills" smooth={true} duration={500} offset={-navHeight-10} spy={true} activeClass="active">Skills</Link></li>
                    <li><Link to="Projects" smooth={true} duration={500} offset={-navHeight-10} spy={true} activeClass="active">Projects</Link></li>
                    <li><Link to="Contact" smooth={true} duration={500} offset={-navHeight} spy={true} activeClass="active">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}