import React from 'react'
import "./section.css"
import { useState } from 'react'

function Section({element}){
    return (
        <div className="sideboard">
            <div className="Section">
                {element.elem}
            </div>
        </div>
    )
}

export default Section
