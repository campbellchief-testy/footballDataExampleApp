import { useNavigate } from 'react-router-dom'
import './PlayersScreen.css'

const FIRST_TEAM = [
  { name: 'V Murray', pos: 'G' },
  { name: 'S Watson', pos: 'S', selected: true },
  { name: 'S Scozia', pos: 'b' },
  { name: 'G Brooks', pos: 'B' },
  { name: 'G Sanchez', pos: 'D' },
  { name: 'R Okon', pos: 'S' },
  { name: 'S Robertson', pos: 'F' },
  { name: 'E Roister', pos: 'H' },
  { name: 'A Meja', pos: '$' },
  { name: 'N Iuliano', pos: 'J' },
  { name: 'J Fleck', pos: 'F' },
]

const SUBS = [
  { name: 'A Papac', pos: 'M' },
  { name: 'M Dogon', pos: 'D' },
  { name: 'T Dutuel', pos: 'E' },
  { name: 'E Lamont', pos: 'H' },
  { name: 'H M Guti', pos: 'P' },
  { name: 'P Austen', pos: 'V' },
  { name: 'V Fournier', pos: 'I' },
  { name: 'I Tulloch', pos: 'T' },
  { name: 'A Rice', pos: 'A' },
]

function PlayersScreen() {
  const navigate = useNavigate()

  return (
    <div className="players-screen">
      <div className="layout">
        {/* Left - Player info */}
        <div className="player-profile">
          <div className="player-name">S Watson</div>
          <div className="player-section">
            <div className="attr-row"><span className="attr-red">1st Pos</span> sweeper</div>
            <div className="attr-row"><span className="attr-red">Club Pos</span> sweeper</div>
            <div className="attr-row"><span className="attr-red">Country</span> ENGLAND</div>
            <div className="attr-row">Team Lothian Rangers</div>
            <div className="attr-row"><span className="attr-red">Height</span> 5' 9"</div>
            <div className="attr-row"><span className="attr-red">Age</span> 27</div>
            <div className="attr-row"><span className="attr-red">Best foot</span> left</div>
            <div className="attr-row"><span className="attr-red">Leadership</span> Motivator</div>
          </div>

          <div className="player-section">
            <div className="attr-row"><span className="attr-green">Confidence:</span> <span className="attr-red">30%</span></div>
            <div className="attr-row"><span className="attr-green">Fitness:</span> <span className="attr-red">90%</span></div>
            <div className="attr-row"><span className="attr-green">Energy:</span> <span className="attr-red">90%</span></div>
            <div className="attr-row"><span className="attr-green">Hardness:</span> <span className="attr-red">20%</span></div>
          </div>

          <div className="player-section skills-section">
            <div className="skills-header">HIT INS FOR PLAYER SKILLS.</div>
            <div className="skill-row"><span className="skill-name">Positioning:</span> <span className="skill-value">push forward P</span></div>
            <div className="skill-row"><span className="skill-name">Possession:</span> <span className="skill-value">keep the ball</span></div>
            <div className="skill-row"><span className="skill-name">Passing:</span> <span className="skill-value">long passes</span></div>
            <div className="skill-row"><span className="skill-name">Tackling:</span> <span className="skill-value">go in hard</span></div>
            <div className="skill-row"><span className="skill-name">Mark</span></div>
          </div>

          <div className="player-section stats-section">
            <div className="stats-header">
              <span>Games</span>
              <span>Goals</span>
              <span>Avg</span>
            </div>
            <div className="stats-row">
              <span className="attr-green">This season:</span>
              <span className="attr-red">0</span>
              <span className="attr-red">0</span>
              <span className="attr-red">0.00</span>
            </div>
            <div className="stats-row">
              <span className="attr-green">Club total:</span>
              <span className="attr-red">95</span>
              <span className="attr-red">2</span>
              <span className="attr-red">0.02</span>
            </div>
            <div className="attr-green">Previous booking</div>
          </div>

          <div className="player-section contract-section">
            <div className="attr-row">Contract status contracted</div>
            <div className="attr-row"><span className="attr-red">Games remaining</span> 99</div>
            <div className="attr-row">Internationals yes</div>
            <div className="attr-row"><span className="attr-red">Wage</span> 7600 <span className="attr-red">Value</span> 3,600,000</div>
          </div>
        </div>

        {/* Right - Roster */}
        <div className="roster-panel">
          <div className="back-link" onClick={() => navigate('/')}>← Back to Team</div>
          <div className="roster-list">
            <div className="roster-header">FIRST TEAM</div>
            {FIRST_TEAM.map((p) => (
              <div 
                key={p.name} 
                className={`roster-item ${p.selected ? 'selected' : ''}`}
              >
                <span className={p.selected ? 'highlight' : ''}>{p.name}</span>
                <span className="pos-char">{p.pos}</span>
              </div>
            ))}
            <div className="roster-header">SUBS</div>
            {SUBS.map((p) => (
              <div key={p.name} className="roster-item">
                <span>{p.name}</span>
                <span className="pos-char">{p.pos}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayersScreen
