import React from "react"
import Header from "./Header"
import About from "./About"
import Skills from "./Skills"

export default function Card() {
    return (
        <div className="card">
            <Header />
            <About />
            <Skills />
           
        </div>
    )
}