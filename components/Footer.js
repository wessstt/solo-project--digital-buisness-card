import React from "react"

export default function Footer() {
    const handleLinkedInClick = () => {
    window.location.href = "https://www.linkedin.com/in/keri-west/";
    }
    
    const handleGihubClick = () => {
    window.location.href = "https://github.com/wessstt";
    }
    
    return (
 
        <div className="footer">
        <button onClick={handleGihubClick}>
            <img src="../img/github.svg" alt="Github" onClick={handleGihubClick}/>
            </button>
            
            <button onClick={handleLinkedInClick}>
            <img src="../img/linkedin.svg" alt="LinkedIn" onClick={handleLinkedInClick}/>
            </button>
            </div>
       
        )
 }