import React from 'react'
import "./section.css"
import { useState } from 'react'

function Section({element}){
    const toggledespegable = () => {
        var despegable = document.getElementById(".elemprincipal")
        var contenido = document.getElementById("sub")

        contenido.style.display = (contenido.style.display === "none") ? "block" : "none"

    }
    
    return (
        <div className="sideboard">
            <div className="Section" onClick={toggledespegable}>{element.elem}<div className="subSection" id="sub">{element.subelem}</div></div>
            
        </div>
    )
}

export default Section
