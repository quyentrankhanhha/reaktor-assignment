import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'

const Rules = () => {
  return (
    <Box className='container'>
      <Box className={styles.rules_wrapper}>
        <Typography variant='h5' className={styles.title}>
          Official Rules of Rock Paper Scissors
        </Typography>
        <Box className={styles.rule_wrapper}>
          <Typography>
            <b>Rock Paper Scissors</b> {''}
            is a zero sum game that is usually played by two people using their
            hands and no tools. The idea is to make shapes with an outstretched
            hand where each shape will have a certain degree of power and will
            lead to an outcome.
          </Typography>
          <Typography>
            You can read more at {''}
            <a href='https://wrpsa.com/the-official-rules-of-rock-paper-scissors/'>
              The World Rock Paper Scissors Association (WRPSA)
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Rules
