import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'

const Rules = () => {
  return (
    <Box className='container'>
      <Box className={styles.rules_wrapper}>
        <Typography variant='h4' className={styles.center}>
          Official Rules of Rock Paper Scissors
        </Typography>
        <Box className={styles.rule_wrapper}>
          <Typography className={styles.center}>
            Rock Paper Scissors is a zero sum game that is usually played by two
            people using their hands and no tools. The idea is to make shapes
            with an outstretched hand where each shape will have a certain
            degree of power and will lead to an outcome.
          </Typography>
          <Typography>What are the shapes of Rock Paper Scissors?</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Rules
