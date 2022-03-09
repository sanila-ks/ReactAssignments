import React from 'react'
import './styleComponent/qualification.css'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { AddQualificationAction } from '../resumeRedux/resumeAction'
import { AddEducationAction, AddExperienceAction } from '../resumeRedux/resumeAction'

function Qualification(props) {

    let navigate = useNavigate();

    console.log('Inside qualification.....', props)
    const HandleFormSubmit = (e) => {
        e.preventDefault();
        if ((props.education).length !== 0 && (props.experience).length !== 0) {
            navigate('/skills');
        }
        else {
            alert('Please enter qualifications.....')
        }

    }

    const HandleEducationClick = () => {
        props.AddEducationAction()
        const x = document.getElementsByTagName("INPUT")
        for(let i = 0; i < x.length; i++) {
            x[i].value= "" }
    }

    const HandleExperienceClick = () => {
        props.AddExperienceAction()
        const x = document.getElementsByTagName("INPUT")
        for(let i = 0; i < x.length; i++) {
            x[i].value= "" }
    }

    // const HandleButtonClick = () => {
    //     props.AddQualificationAction();
    //     document.getElementById("myForm").reset();
    // }

    return (
        <div className='formContainer' onSubmit={HandleFormSubmit}>
            <form className="qform" autoComplete="off" id="myForm">

                <div className='eduContainer'>
                    <div className='d-flex flex-row justify-content-center '>
                        <h3>Qualification</h3>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <label><h4><u>Education</u></h4></label>
                    </div>
                    <div className='qmain'>
                        <div>
                            <label>Istitution</label>
                        </div>
                        <div>
                            <input type="text" id='institution' size="50" />
                        </div>
                    </div>
                    <div className='qmain'>
                        <div>
                            <label>Year</label>
                        </div>
                        <div>
                            <input type="number" id='edu_year' size="50" />
                        </div>
                    </div>
                    <div className='qmain'>
                        <div>
                            <label>Degree</label>
                        </div>
                        <div>
                            <input type="text" id='degree' size="50" />
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-center'>
                        <button className="btn btn-primary align-self-center"
                            type='button'
                            onClick={HandleEducationClick}>ADD</button>
                    </div>
                </div>


                <div className='expContainer'>
                    <div className='d-flex justify-content-center'>
                        <label><h4><u>Experience</u></h4></label>
                    </div>
                    <div className='qmain'>
                        <div>
                            <label>Company</label>
                        </div>
                        <div>
                            <input type="text" id='company' size="50" />
                        </div>
                    </div>
                    <div className='qmain'>
                        <div>
                            <label>Year</label>
                        </div>
                        <div>
                            <input type="text" id='ex_year' size="50" />
                        </div>
                    </div>
                    <div className='qmain'>
                        <div>
                            <label>Designation</label>
                        </div>
                        <div>
                            <input type="text" id='designation' size="50" />
                        </div>
                    </div>
                    <div className='btnQ'>
                        <button className="btn btn-primary align-self-center"
                            type='button'
                            onClick={HandleExperienceClick}>ADD</button>
                        <button
                            className="btn btn-primary align-self-center"
                            type="submit"
                            id='sbtn'
                        >Submit</button>
                        <button className="btn btn-primary align-self-center" type='reset'>Reset</button>
                    </div>
                </div>

                <div className=' d-flex flex-row justify-content-around result'>
                    <div>
                        <h4 ><u>Education</u></h4>
                        {props.education.map((item, i = 0) => {
                            return (
                                <ul key={i + 1}>
                                    <li >{item.institution}</li>
                                    <li >{item.edu_year}</li>
                                    <li >{item.degree}</li>
                                </ul>
                            )
                        })}
                    </div>
                    <div>
                        <h4><u>Experience</u></h4>
                        {props.experience.map((item, i = 0) => {
                            return (
                                <ul key={i + 1}>
                                    <li >{item.company}</li>
                                    <li >{item.ex_year}</li>
                                    <li >{item.designation}</li>
                                </ul>
                            )
                        })}

                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        //qualification: state.qualification
        education: state.education,
        experience: state.experience
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AddEducationAction: () => {
            const education = {
                institution: document.getElementById('institution').value,
                edu_year: document.getElementById('edu_year').value,
                degree: document.getElementById('degree').value,
            }

            dispatch(AddEducationAction(education))
        },
        AddExperienceAction: () => {
            const experience = {
                company: document.getElementById('company').value,
                ex_year: document.getElementById('ex_year').value,
                designation: document.getElementById('designation').value,
            }

            dispatch(AddExperienceAction(experience))
        }
    }
}

// const mapStateToProps = state => {
//     return {
//         qualification: state.qualification
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         AddQualificationAction: () => {

//             const qualification = {

//                 institution: document.getElementById('institution').value,
//                 edu_year: document.getElementById('edu_year').value,
//                 degree: document.getElementById('degree').value,
//                 company: document.getElementById('company').value,
//                 ex_year: document.getElementById('ex_year').value,
//                 designation: document.getElementById('designation').value,
//             }

//             dispatch(AddQualificationAction(qualification))
//         }
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Qualification)