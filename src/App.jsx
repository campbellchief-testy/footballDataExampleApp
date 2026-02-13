import { Routes, Route } from 'react-router-dom'
import TeamScreen from './screens/TeamScreen'
import PlayersScreen from './screens/PlayersScreen'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TeamScreen />} />
      <Route path="/players" element={<PlayersScreen />} />
    </Routes>
  )
}

export default App
