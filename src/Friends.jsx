import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'

export default function Friends(){
    const [Friends , setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    return(
        <div className='box'>
            <h1>Friend: {Friends.length} </h1>
            {
                Friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}