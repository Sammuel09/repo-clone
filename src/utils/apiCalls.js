import axios from 'axios'

const apiCall = async (path) => {
  try {
    const { data } = await axios(`https://api.github.com/users/${path}`)
    return data
  } catch ({ response }) {
    return Error({ errorStatus: response.status })
  }
}

export default apiCall;
