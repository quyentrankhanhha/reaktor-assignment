export const liveURL = 'wss://bad-api-assignment.reaktor.com/rps/live'

export const drawerWidth = 220

export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  borderRadius: '12px',
  boxShadow: 16,
  p: 4,
}

export const columnsTableData = [
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

export const columnsModal = [
  { id: 'gameId', label: 'Game ID', minWidth: 100 },
  { id: 'time', label: 'Time', minWidth: 150 },
  {
    id: 'playedA',
    label: 'Played',
    minWidth: 80,
  },
  {
    id: 'playerB',
    label: 'Opponent Name',
    minWidth: 150,
  },
  {
    id: 'playedB',
    label: 'Opponent Played',
    minWidth: 80,
  },
  {
    id: 'winner',
    label: 'Winner',
    minWidth: 150,
  },
]
