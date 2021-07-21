import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081` // heroku app https://citrine-india.herokuapp.com/
  })
}
