import axios from 'axios'

const service = axios.create({
  baseURL: "http://127.0.0.1:3632"
})

export default service
