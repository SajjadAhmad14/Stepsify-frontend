import { useHistory } from 'react-router'
const SignOut = () => {
  const history = useHistory()
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  history.push('/login')
  window.location.reload()
}

export default SignOut