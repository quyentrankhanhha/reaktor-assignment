import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import CustomNavigator from './components/CustomNavigator'
import { DataTable } from './components/DataTable'
import LiveGame from './components/LiveGame'
import Rules from './components/Rules'
import Search from './components/Search'

function App() {
  const [gameHistory, setGameHistory] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get('/rps/history', {
        headers: {
          'access-control-allow-origin': '*',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        setGameHistory(response.data.data.sort((a, b) => b.t - a.t))
      })
      .catch((err) => console.log(err))
  }, [])

  const handleSearchOnChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className='App'>
      <CustomNavigator />
      <Switch>
        <Route
          exact
          from='/'
          render={(props) => (
            <Search
              gameHistory={gameHistory}
              searchTerm={searchTerm}
              handleSearchOnChange={handleSearchOnChange}
              {...props}
            />
          )}
        />

        <Route
          exact
          path='/history'
          render={(props) => <DataTable gameHistory={gameHistory} {...props} />}
        />
        <Route exact path='/live' render={(props) => <LiveGame {...props} />} />
        <Route exact path='/rules' render={(props) => <Rules {...props} />} />
        <Route
          path='*'
          render={() => (
            <main className='container' style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          )}
        />
      </Switch>
    </div>
  )
}

export default App
