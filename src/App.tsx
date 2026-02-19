import { useState } from 'react'
import { floors } from './utils/config'
import Controller from './Components/Controller'
import Lost from './Components/Lost'
import FloorChoice from './Components/FloorChoice'
import PathFinder from './Components/PathFinder'
const App = () => {
  const [player, setPlayer] = useState([70, 70])
  const [floor, setFloor] = useState(3)
  const [lost, setLost] = useState(false)

  const playerTile = floors[floor][player[0]][player[1]]

  if(!lost && playerTile && playerTile.type === 'walkable' && playerTile.lose )
    setLost(true)

  if(lost) return <Lost />

  if(playerTile
    && (playerTile.type === 'elevator' || playerTile.type === 'staircase')
    && playerTile.levels
  ){
    return <FloorChoice
      tile={playerTile}
      setFloor={setFloor}
      setLost={setLost}
      setPlayer={setPlayer}
    />
  }

  const tileStyle = {
    padding: 10
  }

  console.log(player)

  return (
    <div style={{ padding: 50, fontFamily: 'monospace', fontSize: 32 }}>
      {floors[floor].map((row, rowi) =>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} key={rowi}>
          {row.map((tile, coli) => {
            if(tile === null) 
              return <span style={tileStyle} key={coli}>
                &nbsp;
              </span>

            if(rowi === player[0] && coli === player[1])
              return <span style={tileStyle} key={coli}>
                *
              </span>

            return tile.char === ' '
              ? <span style={tileStyle} key={coli}>
                &nbsp;
              </span>
              : <span style={{ ...tileStyle, color: (tile.type === 'wall' && tile.color) ? tile.color : 'black' }} key={coli}>
                {tile.char}
              </span>
          })}
        </div>
      )}
     
      <Controller floor={floor} player={player} setPlayer={setPlayer} />
      <PathFinder />
    </div>
  )
}

export default App