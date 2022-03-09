import './tableComponent.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { GetAction, DeleteAction } from '../contactRedux/contactAction'
import {useEffect} from 'react'


function TableComponent(props) {

    useEffect(() => {
            props.GetAction()
                }, []);


    return (
        <div >
            <div className='d-flex flex-row justify-content-center tableContainer'>
           <table className="table">
               <thead>
               <tr className='tablehead'>
                   <th >ID</th>
                   <th >Name</th>
                   <th>Mobile No</th>
                   <th>Email</th>
                   <th>Address</th>
                   <th>Action</th>
               </tr>
               </thead>
               <tbody>
                   {props.user.map((item,i=0)=>{
                       return(
                        <tr key={i+1}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>
                            <div className='d-flex flex-row justify-content-around'>
                                <button className='btn btn-primary d-flex flex-column align-items-self-start btn' >
                                <Link to='/edit' state={{user:item}}>Edit</Link></button>
                                <button className='btn btn-primary d-flex flex-column align-items-self-end btn' 
                                onClick={() => props.DeleteAction(item.id)}>Delete</button>    
                            </div>
                            </td>
                        </tr>
                       )
                   })} 
               </tbody>  
           </table>
           </div>

           {/* <div className='d-flex flex-row justify-content-center' >
                <button className = 'btn btn-primary d-flex flex-column align-items-self-center' onClick={props.GetAction} >Get</button>
           </div> */}
 
        </div>
    ) 
}

const mapStateToProps = state =>{
    return{
        user : state.ContactReducer.user
    }  
}

const mapDispatchToProps = dispatch =>{
    return{
        
        GetAction : () => dispatch(GetAction()),
        DeleteAction : (userID) => dispatch(DeleteAction(userID))
    }
}


export default connect( mapStateToProps, mapDispatchToProps) (TableComponent)
