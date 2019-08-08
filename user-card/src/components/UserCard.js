import React from 'react'


export default function UserCard(props){

    return(
        <div>
            <p>Hi I am a user</p>
           <p>{props.user.name}</p>
        </div>
    );
}