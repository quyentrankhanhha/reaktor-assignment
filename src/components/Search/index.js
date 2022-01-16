import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { gameInfo, getTotalPlayerName } from '../../utils'
import DataModal from '../DataModal'
import styles from './styles.module.css'

const Search = ({ gameHistory, searchTerm, handleSearchOnChange }) => {
  const [open, setOpen] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [playerInfo, setPlayerInfo] = useState({})
  const handleOpen = (e) => {
    setPlayerName(e.currentTarget.value)
    setOpen(true)
  }
  const handleClose = (e) => {
    setOpen(!open)
  }
  const totalPlayerName = getTotalPlayerName(gameHistory)

  useEffect(() => {
    setPlayerInfo(gameInfo(gameHistory, playerName))
  }, [playerName])

  return (
    <Box className={`container ${styles.search_wrapper}`}>
      <Box>
        <img
          src='https://img.icons8.com/color/50/000000/hand-rock.png'
          alt='rock'
        />
        <img
          src='https://img.icons8.com/color/48/000000/hand.png'
          alt='paper'
        />
        <img
          src='https://img.icons8.com/color/48/000000/hand-scissors--v1.png'
          alt='scissors'
        />
      </Box>

      <FormControl>
        <InputLabel htmlFor='search'>Search</InputLabel>
        <OutlinedInput
          id='search'
          variant='outlined'
          label='Search'
          onChange={handleSearchOnChange}
          endAdornment={
            <SearchIcon position='end'>
              <IconButton
                aria-label='search'
                // onClick={handleClickShowPassword}
                edge='end'
              ></IconButton>
            </SearchIcon>
          }
        />
      </FormControl>
      {totalPlayerName
        ?.filter((val) => {
          if (searchTerm === '') return val
          else if (val?.toLowerCase().includes(searchTerm.toLowerCase()))
            return val
        })
        ?.map((val, key) => {
          return (
            <div key={key}>
              <Button onClick={handleOpen} value={val}>
                {val}
              </Button>
            </div>
          )
        })}
      {playerInfo && (
        <DataModal
          open={open}
          handleClose={handleClose}
          playerInfo={playerInfo}
        />
      )}
    </Box>
  )
}

export default Search
