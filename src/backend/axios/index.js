import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:2020/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})
