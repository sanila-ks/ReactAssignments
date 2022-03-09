import './userEditForm.css'
import { useLocation } from 'react-router';
import UserForm from './userForm'

function UserEditForm() {

    const {user} = useLocation().state

    return (
        <div className='editformContainer'>
            <UserForm user={user} option= 'edit' />
        </div>
    )
}
 

export default UserEditForm