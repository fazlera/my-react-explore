export default function Friend({friend}){
    const {name, email,id} = friend;
    return(
        <div className="box">
            <h1>Id: {id} </h1>
            <h2>Name: {name} </h2>
            <h2>Email: {email} </h2>

        </div>
    )
}