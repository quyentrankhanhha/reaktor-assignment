import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { liveURL } from '../../constant'
import { handleMatch } from '../../utils'
import styles from './styles.module.css'

const LiveGame = () => {
  const clientRef = useRef(null)
  const [waitingToReconnect, setWaitingToReconnect] = useState(null)
  const [liveMatches, setLiveMatches] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (waitingToReconnect) {
      return
    }
    // Only set up the websocket once
    if (!clientRef.current) {
      const client = new WebSocket(liveURL)
      clientRef.current = client

      window.client = client

      client.onerror = (e) => console.error(e)

      client.onopen = () => {
        setIsOpen(true)
      }

      client.onclose = () => {
        if (clientRef.current) {
          // Connection failed
        } else {
          // Cleanup initiated from app side, can return here, to not attempt a reconnect
          return
        }

        if (waitingToReconnect) {
          return
        }

        // Parse event code and log
        setIsOpen(false)

        // Setting this will trigger a re-run of the effect,
        // cleaning up the current websocket, but not setting
        // up a new one right away
        setWaitingToReconnect(true)

        // This will trigger another re-run, and because it is false,
        // the socket will be set up again
        setTimeout(() => setWaitingToReconnect(null), 5000)
      }

      client.onmessage = (match) => {
        const JSONdata = JSON.parse(match.data)
        setLiveMatches([...liveMatches, handleMatch(JSON.parse(JSONdata))])
      }

      return () => {
        // Dereference, so it will set up next time
        clientRef.current = null
        client.close()
      }
    }
  }, [liveMatches, waitingToReconnect])

  return (
    <div className='container'>
      <Box className={styles.live_wrapper}>
        <Typography variant='h5'>Live Games</Typography>
        {(waitingToReconnect || !isOpen) && <p>Reconnecting momentarily...</p>}
      </Box>
      <Box className={styles.live_info_wrapper}>
        {liveMatches?.map((match, index) => (
          <Box key={`match-${index}`}>
            <Typography>
              {match?.playerA?.name} and {match?.playerB?.name} are playing
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default LiveGame
