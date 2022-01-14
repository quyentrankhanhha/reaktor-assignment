import axios from 'axios'

export const getHistory = () => {
  axios.get(
    'https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/rps/history',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}
