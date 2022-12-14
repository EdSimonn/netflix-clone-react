import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Protected = ({ children }) => {
  const { user } = UserAuth()

  if (!user) {
    return <Navigate to='/' />
  } else {
    return children
  }

  return <div>Protected</div>
}

export default Protected
