import React from 'react'
import './styleComponent/home.css'

function Home() {
    return (
        <div className='hContainer'>
            <h3>Resume Builed</h3>
            <p>This is a basic react app to buid resume.<br/>
                I used five componets to create this and use <b>Router</b> to link them.<br/>
                <ul>
                    <li>Fist component is for adding personal details like name,phone,address and email</li>
                    <li>Second is for qualification.<br/>
                    single fields for Education(institution, year, degree) and Experience(company, year, designation).<br/>
                    Also there is a button to add each fields</li>
                    <li>Third is for adding skills. For this I used autocomplete textfield</li>
                    <li>Forth is for resume</li>
                </ul>
                <b>Redux</b> is used for the state management.<br/>
            </p>
            <p></p>
        </div>
    )
}

export default Home
