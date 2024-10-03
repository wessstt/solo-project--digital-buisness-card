import React from "react"

export default function Header() {
    const handleClick = () => {
    window.location.href = "https://www.linkedin.com/in/keri-west/";
    }
    
    return (
        <header>
            <img className="headshot" src="../img/Kero.png"/>
            <h1 className="name">Keri West</h1>
            <h3 className="jobTitle">Frontend Developer</h3>
            
            <button className="linkedInButton" onClick={handleClick}>
                <img className="icon" src="../img/Linkedin-icon.png" onClick={handleClick} />
            </button>
            
        </header>
    )
}