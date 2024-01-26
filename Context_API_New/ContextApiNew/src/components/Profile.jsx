import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>

    return <div> Welcome {user.username} Your password is {user.password}</div>
}

export default Profile