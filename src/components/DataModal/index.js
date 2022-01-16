import CloseIcon from '@mui/icons-material/Close'
import { Avatar, Box, Grid, IconButton, Modal, Typography } from '@mui/material'
import React from 'react'
import { modalStyle } from '../../constant'
import styles from './styles.module.css'

const DataModal = ({ open, handleClose, playerInfo }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={modalStyle}>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item>
            <Typography id='modal-modal-title' variant='h5'>
              Player Info
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems='center'
          spacing={3}
          className={styles.avatar_wrapper}
        >
          <Grid item>
            <Avatar sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item>
            <Typography variant='h6'>{playerInfo?.playerName}</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={3}
        >
          <Grid item className={styles.number_wrapper}>
            <Typography>{playerInfo?.totalMatches}</Typography>
            <Typography>Number of matches</Typography>
          </Grid>
          <Grid item className={styles.number_wrapper}>
            <Typography>{playerInfo?.winRatio}%</Typography>
            <Typography>Win ratio</Typography>
          </Grid>
          <Grid item className={styles.number_wrapper}>
            <Typography>{playerInfo?.playedMost.times}</Typography>
            <Typography>{playerInfo?.playedMost.text}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}

export default DataModal
