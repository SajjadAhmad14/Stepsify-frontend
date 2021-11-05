import { useHistory } from 'react-router'
const SignOut = () => {
  const history = useHistory()
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('user')
  history.push('/login')
  window.location.reload()
}

export default SignOut