
import './headerComponent.css'
import React from 'react'
import { Routes,Link,Route } from 'react-router-dom';
import TableComponent from '../bodyComponent/tableComponent';
import UserForm from '../bodyComponent/userForm';
import AboutComponent from '../bodyComponent/aboutComponent';
import UserEditForm from '../bodyComponent/userEditForm';


function HeaderComponent() {

    const user = {
        name:"",
        phone:undefined,
        address:"",
        email:""
    }

    return (
        <div>
            <header className="d-flex flex-row justify-content-center header">
            <nav>
                <ul>
                    <li><Link to='/'> Home</Link></li>
                    <li><Link to='/add'>Add</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
            </header>
            <div className='d-flex flex-row justify-content-center heading'>
                <h1>CONTACT MANAGEMENT SYSTEM</h1>
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<TableComponent />} />    
                    <Route path='/add' element={<UserForm user = {user} option='add' />} />
                    <Route path='/about' element={<AboutComponent/>} />
                    <Route path='/edit' element={<UserEditForm/>} /> 
                </Routes>
            </div>
        </div>
    )
} 


export default HeaderComponent
