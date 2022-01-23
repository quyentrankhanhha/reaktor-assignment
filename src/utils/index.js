export const getWinner = (nameA, playA, nameB, playB) => {
  let winner
  // paper
  if (playA === 'PAPER' && playB === 'ROCK') {
    winner = nameA
  } else if (playB === 'ROCK' && playA === 'PAPER') {
    winner = nameB
  } // rock
  else if (playA === 'ROCK' && playB === 'SCISSORS') {
    winner = nameA
  } else if (playB === 'ROCK' && playA === 'SCISSORS') {
    winner = nameB
  }
  // scissor
  else if (playA === 'SCISSORS' && playB === 'PAPER') {
    winner = nameA
  } else if (playB === 'SCISSORS' && playA === 'PAPER') {
    winner = nameB
  } else winner = '-'
  return winner
}

export const getTotalPlayerName = (gameHistory) => {
  const total = []
  gameHistory.forEach((game) => {
    if (!total.includes(game.playerA.name)) {
      total.push(game.playerA.name)
    } else if (!total.includes(game.playerB.name)) total.push(game.playerB.name)
  })
  return total
}

export const gameInfo = (gameHistory, playerName) => {
  let played = { rock: 0, paper: 0, scissors: 0 }
  let playedMost

  const gameData = gameHistory?.filter(
    (game) =>
      game?.playerA.name.toLowerCase().includes(playerName.toLowerCase()) ||
      game?.playerB.name.toLowerCase().includes(playerName.toLowerCase())
  )

  const winnerArray = gameData.map((match) =>
    getWinner(
      match.playerA.name,
      match.playerA.played,
      match.playerB.name,
      match.playerB.played
    )
  )
  const totalWinMatch = winnerArray?.filter((match) =>
    match.includes(playerName)
  ).length
  const winRatio = Math.round((totalWinMatch / gameData.length) * 100)

  const playerInfo = gameData.map((info) => {
    return {
      gameId: info.gameId,
      date: new Date(info.t).toLocaleString(),
      name: playerName,
      play:
        info.playerA.name === playerName
          ? info.playerB.played
          : info.playerA.played,
      opponentName:
        info.playerA.name === playerName
          ? info.playerB.name
          : info.playerA.name,
      opponentPlay:
        info.playerA.name === playerName
          ? info.playerB.played
          : info.playerA.played,
      winner: getWinner(
        info.playerA.name,
        info.playerA.played,
        info.playerB.name,
        info.playerB.played
      ),
    }
  })
  playerInfo.map((match) => {
    if (match.play === 'PAPER') played.rock += 1
    else if (match.play === 'ROCK') played.rock += 1
    else played.scissors += 1
  })
  if (played.rock === played.paper && played.rock === played.scissors) {
    playedMost = {
      text: 'Most played are equal',
      times: played.rock,
    }
  } else if (played.rock >= played.paper && played.rock >= played.scissors) {
    playedMost = {
      text: 'The most played with rock',
      times: played.rock,
    }
  } else if (played.paper >= played.scissors && played.paper >= played.rock) {
    playedMost = {
      text: 'The most played with paper',
      times: played.paper,
    }
  } else if (
    played.scissors >= played.paper &&
    played.scissors >= played.rock
  ) {
    playedMost = {
      text: 'The most played with scissors',
      times: played.scissors,
    }
  }

  return {
    playerName,
    playerInfo,
    totalMatches: gameData.length,
    winRatio,
    playedMost,
  }
}

export const createDataTable = (
  gameId,
  time,
  playerA,
  playedA,
  playerB,
  playedB
) => {
  let winner = getWinner(playerA, playedA, playerB, playedB)
  return { gameId, time, playerA, playedA, playerB, playedB, winner }
}

export const handleMatch = (game) => {
  let match
  if (game.type === 'GAME_RESULT')
    match = {
      gameId: game.gameId,
      t: game.t,
      playerA: { name: game.playerA.name, played: game.playedA.played },
      playerB: { name: game.playerB.name, played: game.playedB.played },
      isPlaying: false,
    }
  else
    match = {
      gameId: game.gameId,
      t: 0,
      playerA: { name: game.playerA.name, played: '' },
      playerB: { name: game.playerB.name, played: '' },
      isPlaying: true,
    }
  return match
}
