import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import React from 'react'
import styles from './styles.module.css'

const Search = ({ gameHistory, searchTerm, handleSearchOnChange }) => {
  let test = gameHistory?.filter((val) => {
    if (val?.playerA?.name?.toLowerCase().includes('vellamo')) return val
  })
  console.log(test)
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
      {gameHistory
        ?.filter((val) => {
          if (searchTerm === '') return val
          else if (
            val?.playerA?.name?.toLowerCase().includes(searchTerm.toLowerCase())
          )
            return val
        })
        ?.map((val, key) => {
          return (
            <div key={key}>
              <p>{val.playerA.name}</p>
            </div>
          )
        })}
    </Box>
  )
}

export default Search
