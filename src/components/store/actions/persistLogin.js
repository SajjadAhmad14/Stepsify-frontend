const axios = require('axios');

const checkLogin = () => {
  const token= JSON.parse(localStorage.getItem('token'))
  console.log(`Bearer ${token}`)
  axios.get('http://localhost:3000/auto_login', {
    headers: {
      "Authorization": `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then((data) => {
      console.log(data)
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response)
        console.log('no')
      }
    })
}

export default checkLogin