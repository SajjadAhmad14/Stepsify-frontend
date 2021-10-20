import { useHistory } from 'react-router'
const SignOut = () => {
  const history = useHistory()
  localStorage.removeItem('token')
  history.push('/login')
  window.location.reload()
}

export default SignOut