import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import React from 'react'

const Search = () => {
  return (
    <Box>
      <FormControl>
        <InputLabel htmlFor='search'></InputLabel>
        <OutlinedInput
          id='search'
          placeholder='Search...'
          variant='outlined'
          endAdornment={
            <SearchIcon position='end'>
              <IconButton
                aria-label='toggle password visibility'
                // onClick={handleClickShowPassword}
                edge='end'
              ></IconButton>
            </SearchIcon>
          }
        />
      </FormControl>
    </Box>
  )
}

export default Search
