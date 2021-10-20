import React from 'react'
import { useHistory } from 'react-router'
const SignOut = () => {
  const history = useHistory()
  localStorage.removeItem('token')
}

export default SignOut