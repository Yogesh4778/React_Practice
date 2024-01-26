import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userid} = useParams();

  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
    // this name  ↑  is same as define in routes in main.jsx
  )
}

export default User