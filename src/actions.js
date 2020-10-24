import {CHANGE_SEARCH_FIELD} from './constants';
import{REQUEST_ROBOTS_PENDING} from './constants'
import{REQUEST_ROBOTS_SUCCESS} from './constants'
import{REQUEST_ROBOTS_FAILED} from './constants'

export const setSearchField =(text) =>({

    type: CHANGE_SEARCH_FIELD,
    payload:text


})

export const requestRobots =()=>(dispatch)=>{

 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(dispatch({type:REQUEST_ROBOTS_PENDING}))
    .then(response => response.json())
    .then(users=>dispatch({type:REQUEST_ROBOTS_SUCCESS,
                        payload:users}))
    .catch(error=>{dispatch({type:REQUEST_ROBOTS_FAILED,payload:error})
                    console.log('##fetch error',error)})





}