import React from "react";
import './Nav.css'
import {Link,scrollSpy} from 'react-scroll'
import { useRef,useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faIcicles, faPlus, faWindowClose } from "@fortawesome/free-solid-svg-icons";
export default function Nav(){
    const ref=useRef(null)
    const menuRef=useRef(null)
    const [navHeight,setNavHeight]=useState(0)
    const [menuBar,setMenuBar]=useState(false)
    useEffect(()=>{
        if(ref.current){
            setNavHeight(ref.current.clientHeight)
        }
        
        
    },[])
    if(menuBar){
        if(menuRef.current){
        menuRef.current.style.display="block"
        }
    }
    else{
        if(menuRef.current){
        menuRef.current.style.display="none"
        }
    }
    
    
    return(
        <div className="Nav" ref={ref}>
            <div className="Logo">
                <h1 className="Name">SaiBenne</h1>
                <div className="MenuBar" onClick={()=>{setMenuBar(!menuBar)}}><FontAwesomeIcon icon={menuBar?faWindowClose:faPlus} color="white"/></div>
            </div>
            <div className="Menu" ref={menuRef}>
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