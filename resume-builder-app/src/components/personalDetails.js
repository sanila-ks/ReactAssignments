import React from 'react'
import './styleComponent/personalDetails.css'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { AddUserAction } from '../resumeRedux/resumeAction'

function PersonalDetails(props) {

    let navigate = useNavigate();

    console.log('Inside personal detals.....', props)
    const HandleFormSubmit = (e) => {
        e.preventDefault();
        props.AddUserAction();
        navigate('/qualification');
    }

    return (
        <div className='formContainer'>
            <form className="form" autoComplete="off" onSubmit={HandleFormSubmit}>
                <div className='d-flex flex-row justify-content-center '>
                    <h3>Personal Information</h3>
                </div>
                <div className='main'>
                    <div>
                        <label>Name</label>
                    </div>
                    <div>
                        <input required type="name" id='uname' />
                    </div>
                </div>
                <div className='main'>
                    <div>
                        <label>Mobile No.</label>
                    </div>
                    <div>
                        <input required type="tel" id='umobile' pattern="[0-9]{10}" />
                    </div>
                </div>
                <div className='main'>
                    <div>
                        <label>Address</label>
                    </div>
                    <div>
                        <input required type="text" id='uaddress' />
                    </div>
                </div>
                <div className='main'>
                    <div>
                        <label>Email</label>
                    </div>
                    <div>
                        <input required type="email" id='uemail' />
                    </div>
                </div>
                <div className='btnS'>
                    <button
                        className="btn btn-primary align-self-center"
                        type="submit"
                        id='sbtn'
                    >Submit</button>
                    <button className="btn btn-primary align-self-center" type='reset'>Reset</button>
                </div>

            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        AddUserAction: () => {
            const user = {
                name: document.getElementById('uname').value,
                phone: document.getElementById('umobile').value,
                address: document.getElementById('uaddress').value,
                email: document.getElementById('uemail').value,
            }
            dispatch(AddUserAction(user))
        }
    }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(PersonalDetails)