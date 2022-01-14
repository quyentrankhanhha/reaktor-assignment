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
  }
  return winner
}
