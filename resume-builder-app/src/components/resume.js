import React from 'react'
import { connect } from 'react-redux'
import './styleComponent/resume.css'

function Resume(props) {

    console.log('inside resume .....', props)

    return (
        <div className='d-flex flex-row justify-content-center'>
            <div className='d-flex flex-column  rContainer'>

                <div className='d-flex justify-content-center align-items-center rHeading '>
                    <h3>{props.user.name.toUpperCase()}</h3>
                </div>

                <div className='rPersonal'>
                    <div className='rHead'>
                        <h5>Personal Details</h5>
                    </div>
                    <div className='rAddr'>
                        <p><b><u>Address</u></b> : {props.user.address}</p>
                    </div>
                    <div className='rPh'>
                        <p><b><u>Phone</u></b> : {props.user.phone}</p>
                    </div>
                    <div className='rEmail'>
                        <p><b><u>Email</u></b> : {props.user.email}</p>
                    </div>
                </div>

                <div className='d-flex flex-row rQualification'>
                    <div className='rEdu'>
                    <div className='rHead'>
                        <h5>Education</h5>
                    </div>
                        {props.education.map((item, i = 0) => {
                            return (
                                <ul key={i + 1}>
                                    <li >{item.degree}</li>
                                    <ul>
                                        <li >{item.institution}</li>
                                        <li >{item.edu_year}</li>
                                    </ul>
                                </ul>
                            )
                        })}
                    </div>

                    <div className='rExp'>
                    <div className='rHead'>
                        <h5>Experience</h5>
                    </div>
                        {props.experience.map((item, i = 0) => {
                            return (
                                <ul key={i + 1}>
                                    <li >{item.designation}</li>
                                    <ul>
                                        <li >{item.company}</li>
                                        <li >{item.ex_year}</li>
                                    </ul>
                                </ul>
                            )
                        })}
                    </div>
                </div>

                <div className="container rSkills">
                <div className='rHead'>
                        <h5>Skills</h5>
                    </div>
                    <ul className="row">
                        {props.skills.map((item, i = 0) => {
                            return (
                                <li key={i + 1} className="col-sm">{item.skill}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        //qualification: state.qualification,
        education: state.education,
        experience: state.experience,
        skills: state.skills
    }
}

export default connect(mapStateToProps)(Resume)