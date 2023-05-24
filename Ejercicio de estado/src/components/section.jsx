import React from 'react'
import "./section.css"
import { useState } from 'react'

function Section({element}){
    const toggledespegable = () => {
        var contenido = document.getElementById("sub")
        contenido.style.display = (contenido.style.display === "none") ? "block" : "none"
    }
    
    return (
        <div className="Section" onClick={toggledespegable}>{element.elem}<h2 id="sub">{element.subelem}</h2></div>
    )
}

export default Section
