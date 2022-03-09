//1 normal 
// import React from 'react'
// import { useReducer } from 'react'

// const initialState = 0
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment': return state + 1
//         case 'decrement': return state - 1
//         case 'reset': return initialState
//         default: return state     
//     }

// }

// function UseReducerHook() {

//     const [count, dispatch] = useReducer(reducer, initialState)

//     return (
//         <div>
//             <div>Count - {count}</div>
//             <button onClick={() => dispatch('increment')}>Increment</button>
//             <button onClick={() => dispatch('decrement')}>Decrement</button>
//             <button onClick={() => dispatch('reset')}>Reset</button>
//         </div>
//     )
// }

// export default UseReducerHook


//2. another pattern similar to redux
// scenario1 - increment or decrement the value by 5  ---- action as an object
// scenario2 - state as an object

// import React from 'react'
// import { useReducer } from 'react'

// const initialState = {
//     firstCounter : 0,
//     secondCounter : 10
// } 
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'increment': return { ...state, firstCounter: state.firstCounter + action.value}
//         case 'decrement': return { ...state, firstCounter: state.firstCounter - action.value}
//         case 'increment2': return { ...state, secondCounter: state.secondCounter + action.value}
//         case 'decrement2': return { ...state, secondCounter: state.secondCounter - action.value}
//         case 'reset': return initialState
//         default: return state     
//     }

// }

// function UseReducerHook() {

//     const [count, dispatch] = useReducer(reducer, initialState)

//     return (
//         <div>
//             <div>First Counter : {count.firstCounter}</div>
//             <div>Second Counter : {count.secondCounter}</div>
//             <div>
//                 <button onClick={() => dispatch({type : 'increment', value : 1})}>Increment</button>
//                 <button onClick={() => dispatch({type : 'decrement', value : 1})}>Decrement</button>
//             </div>
//             <div>
//                 <button onClick={() => dispatch({type : 'increment', value : 5})}>Increment 5</button>
//                 <button onClick={() => dispatch({type : 'decrement', value : 5})}>Decrement 5</button>
//             </div>
//             <div>
//                 <button onClick={() => dispatch({type : 'increment2', value : 1})}>Increment Second counter</button>
//                 <button onClick={() => dispatch({type : 'decrement2', value : 1})}>Decrement Second counter</button>
//             </div>
//             <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
//         </div>
//     )
// }

// export default UseReducerHook


//3. multiple usereducers
// import React from 'react'
// import { useReducer } from 'react'

// const initialState = 0
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment': return state + 1
//         case 'decrement': return state - 1
//         case 'reset': return initialState
//         default: return state     
//     }

// }

// function UseReducerHook() {

//     const [count, dispatch] = useReducer(reducer, initialState)
//     const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

//     return (
//         <div>
//             <div>Count One : {count}</div>
//             <button onClick={() => dispatch('increment')}>Increment</button>
//             <button onClick={() => dispatch('decrement')}>Decrement</button>
//             <button onClick={() => dispatch('reset')}>Reset</button>

//             <div>
//                 <div>Count Two : {countTwo}</div>
//                 <button onClick={() => dispatchTwo('increment')}>Increment</button>
//                 <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
//                 <button onClick={() => dispatchTwo('reset')}>Reset</button>
//             </div>
//         </div>
//     )
// }
// export default UseReducerHook


//4. useReducer + useContext
//maintain state here and modify state from A, D and F
// component A,B,C in useReducerHook
// D in B
// E in C
// F in E

// import React, { createContext } from 'react'
// import { useReducer } from 'react'
// import ComponentA from './hComponents/componentA'
// import ComponentB from './hComponents/componentB'
// import ComponentC from './hComponents/componentC'

// export const CountContext = createContext()

// const initialState = 0
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment': return state + 1
//         case 'decrement': return state - 1
//         case 'reset': return initialState
//         default: return state     
//     }

// }

// function UseReducerHook() {

//     const [count, dispatch] = useReducer(reducer, initialState)

//     return (
//         <CountContext.Provider 
//         value={{ countState: count, countDispatch: dispatch}}>
//         <div>
//             count - {count}
//             <ComponentA />
//             <ComponentB />
//             <ComponentC />
//         </div>
//         </CountContext.Provider>
//     )
// }
// export default UseReducerHook

// 5. fetching data with useReducer 1
//
import React from 'react'
import { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) =>{
   switch (action.type) {
       case 'FETCH_SUCCESS' :
           return{
                loading: false,
                post: action.payload,
                error: ''
           }

           case 'FETCH_ERROR' :
               return{
                loading: false,
                post: {},
                error: 'Something went wrong'
               }
       default:
           return state
   } 
}

function UseReducerHook() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/2')
        .then(rensponse => {
           dispatch({type : 'FETCH_SUCCESS', payload : rensponse.data}) 
        })
        .catch(error => {
            dispatch({type : 'FETCH_ERROR'})
        })
    }, [])

    return (
        <div>
           {state.loading ? 'Loading' : state.post.title}
           {state.error ? state.error : null}
        </div>
    )
}

export default UseReducerHook