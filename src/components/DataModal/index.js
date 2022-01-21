import CloseIcon from '@mui/icons-material/Close'
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import clsx from 'clsx'
import React from 'react'
import { columnsModal, modalStyle } from '../../constant'
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
          style={{ margin: '10px 0' }}
        >
          <Grid item xs={3} className={styles.info_wrapper}>
            <Typography className={styles.number}>
              {playerInfo?.totalMatches}
            </Typography>
            <Typography>Number of matches</Typography>
          </Grid>
          <Grid
            item
            xs={3}
            className={clsx(styles.info_wrapper, styles.purple)}
          >
            <Typography className={styles.number}>
              {playerInfo?.winRatio}%
            </Typography>
            <Typography>Win ratio</Typography>
          </Grid>
          <Grid item xs={3} className={styles.info_wrapper}>
            <Typography className={styles.number}>
              {playerInfo?.playedMost?.times}
            </Typography>
            <Typography>{playerInfo?.playedMost?.text}</Typography>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                {columnsModal.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            {playerInfo?.playerInfo && (
              <TableBody>
                {playerInfo?.playerInfo?.map((row, index) => (
                  <TableRow
                    key={`row-${index}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='left'>{row?.gameId}</TableCell>
                    <TableCell align='left'>{row?.date}</TableCell>
                    <TableCell align='left'>{row?.play}</TableCell>
                    <TableCell align='left'>{row?.opponentName}</TableCell>
                    <TableCell align='left'>{row?.opponentPlay}</TableCell>
                    <TableCell align='left'>{row?.winner}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  )
}

export default DataModal
