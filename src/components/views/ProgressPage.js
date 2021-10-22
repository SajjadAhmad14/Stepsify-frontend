import React from 'react'
import { Redirect} from 'react-router'
import isLoggedIn from './isLoggedIn'

const ProgressPage = () => {
  if(!isLoggedIn()) {
    return <Redirect to='/login'/>
  }
  return (
    <div>
      <p>This is progress page!</p>
    </div>
  )
};

export default ProgressPage;