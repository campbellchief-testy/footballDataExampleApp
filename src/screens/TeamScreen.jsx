import { useNavigate } from 'react-router-dom'
import './TeamScreen.css'

function TeamScreen() {
  const navigate = useNavigate()

  return (
    <div className="team-screen">
      <div className="game-title">GAME NAME: ROHLY</div>

      <div className="layout">
        {/* Left column - two panels */}
        <div className="left-column">
          <div className="panel team-summary">
            <div className="panel-header">TEAM</div>
            <div className="panel-content">
              <div className="team-name">Lothian Rangers</div>
              <div>MANAGER: Campbell</div>
              <div className="highlight-cyan">MONEY: 4,651,749</div>
              <div>LEAGUE POS. 5</div>
              <div>SEASON 2001/02</div>
            </div>
          </div>

          <div className="panel next-opponents">
            <div className="panel-header">NEXT OPPONENTS</div>
            <div className="panel-content">
              <div className="highlight-yellow">Spartak Moscow</div>
              <div className="highlight-yellow">MANAGER: Romantsev</div>
              <div>LEAGUE: SUPER LEAGUE</div>
              <div>LEAGUE POS. 16</div>
              <div>COMPETITION: Friendly #1</div>
              <div>VENUE: away</div>
            </div>
          </div>
        </div>

        {/* Central panel - team details */}
        <div className="panel central-panel">
          <div className="panel-header">Lothian Rangers</div>
          <div className="team-details">
            <div className="detail-row">
              <span className="label">Name</span>
              <span className="value">Lothian Rangers</span>
            </div>
            <div className="detail-row">
              <span className="label">Strips</span>
              <span className="value strips">
                <span className="strip-icon blue"></span>
                <span className="strip-icon blue"></span>
                <span className="strip-icon cyan"></span>
              </span>
            </div>
            <div className="detail-row">
              <span className="label">Country</span>
              <span className="value">SCOTLAND</span>
            </div>
            <div className="detail-row">
              <span className="label">League</span>
              <span className="value">SUPER LEAGUE</span>
            </div>
            <div className="detail-row">
              <span className="label">League position</span>
              <span className="value">5</span>
            </div>
            <div className="detail-row">
              <span className="label">Stadium capacity</span>
              <span className="value">117000</span>
            </div>
            <div className="detail-row">
              <span className="label">Support</span>
              <span className="value">huge</span>
            </div>
            <div className="detail-row">
              <span className="label">Squad size</span>
              <span className="value">20</span>
            </div>
            <div className="detail-row">
              <span className="label">Cash available</span>
              <span className="value highlight-cyan">4,651,749</span>
            </div>
            <div className="detail-row">
              <span className="label">Max. overdraft</span>
              <span className="value highlight-cyan">2,840,000</span>
            </div>
          </div>
        </div>

        {/* Right column - menu */}
        <div className="panel menu-panel">
          <div className="menu-item play-next">PLAY NEXT GAME</div>
          <div className="menu-item">Previous player</div>
          <div 
            className="menu-item selected" 
            onClick={() => navigate('/players')}
          >
            Players
          </div>
          <div className="menu-item">Next opponents</div>
          <div className="menu-item">Transfer Market</div>
          <div className="menu-item">Use scout</div>
          <div className="menu-item">New staff</div>
          <div className="menu-item">League tables</div>
          <div className="menu-item">League results</div>
          <div className="menu-item">Cup results</div>
          <div className="menu-item">Weekly fixtures</div>
          <div className="menu-item">Fixture list</div>
          <div className="menu-item">Statistics</div>
          <div className="menu-item">Player/team history</div>
          <div className="menu-item">Seasonal history</div>
          <div className="menu-item">Other teams</div>
          <div className="menu-item">Game configuration</div>
          <div className="menu-item">Cashflow</div>
          <div className="nav-hints">
            <span className="hint-move">↑↓move</span>
            <span className="hint-select">←→select</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamScreen
