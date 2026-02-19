import { useState, type ChangeEvent } from "react"
import { getPath } from "../paths"
import { type PathKey, colorNames, windowNames, roomNames } from "../types"

const PathFinder = () => {
  const [color, setColor] = useState<PathKey['color']>('Черный')
  const [window, setWindow] = useState<PathKey['window']>('Иллюминаторов нет')
  const [room, setRoom] = useState<PathKey['room']>('Обычная')

  const path = getPath(color, window, room)

  const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()

    setColor(e.target.value as PathKey['color'])
  }

  const handleWindowChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()

    setWindow(e.target.value as PathKey['window'])
  }

  const handleRoomChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()

    setRoom(e.target.value as PathKey['room'])
  }

  const pathFinderStyle: React.CSSProperties = {
    fontSize: 64,
    justifySelf: 'stretch',
    border: '2px solid',
    padding: 30,
    margin: 30
  }

  const selectStyle : React.CSSProperties = {
    padding: 15,
    border: "none",
    borderRadius: 8,
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: 64
  }

  return (
    <div style={pathFinderStyle}>
      <div>
        <label>
          Комната цвета:
          <select
            value={color}
            onChange={handleColorChange}
            style={selectStyle}
          >
            { colorNames.map((c, i) => <option key={i} value={c} >{c}</option>)}
          </select>
        </label>
      </div>
      <div>
        <label>
          Комната цвета:
          <select
            value={window}
            onChange={handleWindowChange}
            style={selectStyle}
          >
            { windowNames.map((w, i) => <option key={i}>{w}</option>)}
          </select>
        </label>
      </div>
      <div>
        <label>
          Тип комнаты:
          <select
            value={room}
            onChange={handleRoomChange}
            style={selectStyle}
          >
            { roomNames.map((r, i) => <option key={i}>{r}</option>)}
          </select>
        </label>
      </div>

      <div>
        {path || 'Путь не найден'}
      </div>
    </div>
  )
}

export default PathFinder