import { useState } from 'react'
import { floors, startingPositions } from './utils/config'

import Controller from './Components/Controller'
import Lost from './Components/Lost'
import FloorChoice from './Components/FloorChoice'
import PathFinder from './Components/PathFinder'
import Grid from './Components/Grid'
import Won from './Components/Won'

const App = () => {
  const startingPosition = startingPositions[Math.floor(Math.random() * startingPositions.length)]
  const [player, setPlayer] = useState(startingPosition.position)
  const [floor, setFloor] = useState(startingPosition.floor)
  const [lost, setLost] = useState(false)
  const [won, setWon] = useState(false)

  const playerTile = floors[floor][player[0]][player[1]]

  if(!lost && playerTile && playerTile.type === 'walkable' && playerTile.lose )
    setLost(true)

  if(!won && playerTile && playerTile.type === 'exit' )
    setWon(true)

  if(lost) return <Lost />
  if(won) return <Won />

  console.log(player)

  return (
    <div style={{ padding: 50, fontFamily: 'monospace', fontSize: 32 }}>
      {(playerTile
      && (playerTile.type === 'elevator' || playerTile.type === 'staircase')
      && playerTile.levels)
        ? <FloorChoice
            tile={playerTile!}
            setFloor={setFloor}
            setLost={setLost}
            setPlayer={setPlayer}
          />
        : <div>
            <Grid floor={floor} player={player} />
            <Controller floor={floor} player={player} setPlayer={setPlayer} />
          </div>
      }

      <PathFinder />
    </div>
  )
}

export default App