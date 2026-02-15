import { useState } from 'react'
import floors from './utils/config'
import Controller from './Components/Controller'

const App = () => {
  const [player, setPlayer] = useState([98, 50])
  const [floor, _setFloor] = useState(0)

  const tileStyle = {
    padding: 1
  }

  console.log(player)

  return (
    <div style={{ padding: 50, fontFamily: 'monospace', fontSize: 32 }}>
      {floors[floor].map((row, rowi) => <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} key={rowi}>
        {row.map((tile, coli) => {
          if(tile === null) return <span style={tileStyle} key={coli}>&nbsp;</span>
          if(rowi === player[0] && coli === player[1]) return <span style={tileStyle} key={coli}>*</span>

          return tile.char === ' ' ? <span style={tileStyle} key={coli}>&nbsp;</span> : <span style={tileStyle} key={coli}>{tile.char}</span>
        })}
      </div>)}
    
       
    <Controller floor={floor} player={player} setPlayer={setPlayer} />
    </div>
  )
}

export default App