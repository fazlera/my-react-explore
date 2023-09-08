import { useState } from "react"

export default function Team(){



    const [team,setTeam] = useState(11)
    const handelAdd = () => {
        const newTeam = team + 1
        setTeam(newTeam)
    }

    const handelRemove =() => {
        const newTeam  = team - 1
        if(newTeam === -1){
            return 0
        }
        setTeam(newTeam)
    }

    const  teamStyle = {
        border:'2px solid purple',
        margin: '15px',
        padding: '15px',
        
    }
    return (
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelRemove}>Remove</button>
        </div>
    )
}