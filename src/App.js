import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { DataTable } from './components/DataTable'
import Search from './components/Search'

function App() {
  const [history, setHistory] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [cursor, setCursor] = useState('')

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/rps/history',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        setHistory(response.data.data)
        setCursor(response.data.cursor)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleOnChange = (event, newValue) => {}

  return (
    <div className='App'>
      <header>Rock - Paper - Scissors Match History</header>
      <img src='https://img.icons8.com/color/50/000000/hand-rock.png' />
      <img src='https://img.icons8.com/color/48/000000/hand.png' />
      <img src='https://img.icons8.com/color/48/000000/hand-scissors--v1.png' />
      <Search searchTerm={searchTerm} handleOnChange={handleOnChange} />
      <DataTable history={history} />
    </div>
  )
}

export default App
