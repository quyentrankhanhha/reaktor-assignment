import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getWinner } from '../../utils'
import styles from './styles.module.css'

const columns = [
  { id: 'gameId', label: 'Game ID', minWidth: 100 },
  { id: 'time', label: 'Time', minWidth: 150 },
  { id: 'playerA', label: 'Player A', minWidth: 150 },
  {
    id: 'playedA',
    label: 'Played A',
    minWidth: 80,
  },
  {
    id: 'playerB',
    label: 'Player B',
    minWidth: 150,
  },
  {
    id: 'playedB',
    label: 'Played B',
    minWidth: 80,
  },
  {
    id: 'winner',
    label: 'Winner',
    minWidth: 150,
  },
]

function createData(gameId, time, playerA, playedA, playerB, playedB) {
  let winner = getWinner(playerA, playedA, playerB, playedB)
  return { gameId, time, playerA, playedA, playerB, playedB, winner }
}
export const DataTable = ({ gameHistory }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const rows = gameHistory?.map((match) =>
    createData(
      match.gameId,
      new Date(match.t).toLocaleString(),
      match.playerA.name,
      match.playerA.played,
      match.playerB.name,
      match.playerB.played
    )
  )

  return (
    <Box className='container'>
      <Box className={styles.name_wrapper}>
        <Typography variant='h5'>Recently Matches</Typography>
      </Box>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead className={styles.title}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={`history-game-${uuidv4()}`}
                    >
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}
