import React from 'react'
import "./section.css"
import { useState } from 'react'

function Section({element}){
    const [showSubSection, setSubSection] = useState(false)

    const toggle = () => {
        setSubSection(!showSubSection)
    }
    
    return (
        <div className="Section" onClick={toggle}>{element.elem}
            <h2>{showSubSection ? "": element.subelem}</h2>
        </div>
    )
}

export default Section
