import React from 'react';
import { useParams } from 'react-router-dom'
import users from './users'

function User(props) {

  // useParams - הוק שמחזיר את המשתנים שהגיעו מה url
  const { id } = useParams();
  const user = users[id];

  return ( user ? <div> 
    שם: { user.name }  <br />
    גיל: { user.age } <br />
   </div> : ''  )
}

export default User;