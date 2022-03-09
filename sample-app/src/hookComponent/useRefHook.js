//1.directly access DOM nnodes - focusing text input

// import React,{ useEffect, useRef } from 'react'

// function UseRefHook() {

//     const inputRef = useRef(null)

//     useEffect(() => {
//         //focus input elemnt
//         inputRef.current.focus()
//     }, [])

//     return (
//         <div>
//             <input ref={inputRef} type='text'/>
//         </div>
//     )
// }

// export default UseRefHook

//2. intervel timer- takes every second and displays value using class component
// import React, { Component } from 'react'

// export class UseRefHook extends Component {
//     interval
//     constructor(props){
//         super(props)
//         this.state = {
//             timer : 0
//         }
//     }

//     componentDidMount() {
//         this.interval = setInterval(() => {
//             this.setState( prevState => ({timer : prevState.timer + 1}))
//         }, 1000)
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval)
//     }

//     render() {
//         return (
//             <div>
//                 Class Timer - {this.state.timer}
//                 <button onClick={() => clearInterval(this.interval)}>Clear Interval</button>
//             </div>
//         )
//     }
// }

// export default UseRefHook

//3. intervel timer- takes every second and displays value using function component
import React, { useState, useEffect, useRef } from 'react'

function UseRefHook() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer( prevState => prevState + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={ () => clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}

export default UseRefHook
