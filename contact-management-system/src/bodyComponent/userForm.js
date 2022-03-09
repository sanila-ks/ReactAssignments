import './userForm.css'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AddAction,UpdateAction } from '../contactRedux/contactAction'
import { useNavigate } from 'react-router'

function UserForm(props) {

    const [user, setUser] = useState({
        id: props.user.id,
        name: props.user.name,
        phone: props.user.phone,
        address: props.user.address,
        email: props.user.email
    })
    let navigate = useNavigate();

    const HandleChange = (e) => {
        const name = e.target.name
        setUser
            (
                {
                    ...user,
                    [name]: e.target.value
                }
            )
    }

    const HandleFormSubmit = (e) => {
        e.preventDefault();
        if (props.option === 'add') {
            props.AddAction(user);
            navigate('/');
        }
        else {
            props.UpdateAction(user);
            navigate('/');
        }
    }

    return (
        <div className='formContainer'>
            <form className="form" autoComplete="off" onSubmit={HandleFormSubmit}>
                <div className='d-flex flex-row justify-content-center '>
                    <h3>User Information</h3>
                </div>
                <div className='main'>
                    <div>
                        <label>Name</label>
                    </div>
                    <div>
                        <input required type="name" name='name' value={user.name} onChange={HandleChange} />
                    </div>
                </div>
                <div className='main'>
                    <div>
                        <label>Mobile No.</label>
                    </div>
                    <div>
                        <input required type="tel" name='phone' pattern="[0-9]{10}" value={user.phone} onChange={HandleChange} />
                    </div>
                </div>
                <div className='main'>
                    <div>
                        <label>Address</label>
                    </div>
                    <div>
                        <input required type="text" name='address' value={user.address} onChange={HandleChange} />
                    </div>
                </div>
                <div className='main'>
                    <div>
                        <label>Email</label>
                    </div>
                    <div>
                        <input required type="email" name='email' value={user.email} onChange={HandleChange} />
                    </div>
                </div><hr />
                <div className='d-flex flex-row justify-content-around  btnS'>
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
        AddAction: (user) => dispatch(AddAction(user)),
        UpdateAction: (user) => dispatch(UpdateAction(user))
    }
}

export default connect(null, mapDispatchToProps)(UserForm)
