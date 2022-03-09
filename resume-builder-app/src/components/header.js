import React from 'react'
import { Routes, Link, Route } from 'react-router-dom';

import PersonalDetails from './personalDetails'
import Qualification from './qualification'
import Skills from './skills'
import Resume from './resume'
import './styleComponent/header.css'
import Home from './home';

function Header() {
    return (
        <div>
            <div className='d-flex flex-row justify-content-center heading'>
                <h1>RESUME BUILDER</h1>
            </div>
            <header className="d-flex flex-row justify-content-center header">
                <nav>
                    <ul>
                        <li><Link to='/'> Home</Link></li>
                        <li><Link to='/personal'> Create</Link></li>
                        <li><Link to='/resume'> View</Link></li>
                    </ul>
                </nav>
            </header>

            <div>
                <Routes>
                    <Route index element={<Home />} />    
                    <Route path='/personal' element={<PersonalDetails />} />    
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/qualification' element={<Qualification />} />
                    <Route path='/skills' element={<Skills />} /> 
                </Routes>
            </div>
        </div>
    )
}

export default Header
