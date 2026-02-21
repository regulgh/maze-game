import type { Elevator, LevelChange, Staircase } from '../types'

const FloorChoice = ({ tile, setPlayer, setFloor, setLost } : 
  {
    tile: Elevator | Staircase,
    setPlayer: React.Dispatch<React.SetStateAction<number[]>>,
    setFloor: React.Dispatch<React.SetStateAction<number>>,
    setLost: React.Dispatch<React.SetStateAction<boolean>>,
  }
) => {
  const buttonStyle : React.CSSProperties = {
    padding: 40,
    margin: 5,
    border: "none",
    borderRadius: 8,
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: 128
  }

  const handleLevelChange = (l: LevelChange) => {
    if(!l.right){
      setLost(true)
      return
    }
    setFloor(l.level)
    setPlayer(l.position)
  }

  if(!tile.levels){
    throw new Error('something went wrong')
  }

  return (
    <div style={{ justifySelf: 'center' }}>
      <h1 style={{ fontSize: 128 }}>Выбери этаж</h1>

      {tile.levels.map(l =>
        <div key={l.level}>
          <button
            style={buttonStyle}
            onClick={() => handleLevelChange(l)}
          >
            {l.level}
          </button>
        </div>
      )}
    </div>
  )
}

export default FloorChoice