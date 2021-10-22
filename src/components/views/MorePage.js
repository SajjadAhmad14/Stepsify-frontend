import React from 'react'
import { Redirect} from 'react-router'
import isLoggedIn from './isLoggedIn'

const MorePage = () => {
  if(!isLoggedIn()) {
    return <Redirect to='/login'/>
  }
  return (
    <div>
      <p>This is more page </p>
    </div>
  )
}


export default MorePage;