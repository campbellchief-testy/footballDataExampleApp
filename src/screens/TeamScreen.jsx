import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { config } from '../config'
import './TeamScreen.css'

function formatMoney(value) {
  return value?.toLocaleString() ?? '—'
}

function formatGbp(value) {
  if (value == null) return '—'
  return `£${value.toLocaleString()}`
}

function TeamScreen() {
  const navigate = useNavigate()
  const [team, setTeam] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [nextOpponent, setNextOpponent] = useState(null)
  const [nextOpponentLoading, setNextOpponentLoading] = useState(true)
  const [nextOpponentError, setNextOpponentError] = useState(null)

  useEffect(() => {
    const url = `${config.apiBaseUrl}/teams/${config.teamId}`
    console.log('[TeamScreen] Fetching:', url)

    fetch(url, {
      headers: { 'x-api-key': config.apiKey },
    })
      .then((res) => {
        console.log('[TeamScreen] Response:', res.status, res.statusText, res.url)
        if (!res.ok) {
          return res.text().then((body) => {
            const msg = `HTTP ${res.status} ${res.statusText}${body ? `: ${body.slice(0, 200)}` : ''}`
            console.error('[TeamScreen] Error:', msg)
            throw new Error(msg)
          })
        }
        return res.json()
      })
      .then((data) => {
        console.log('[TeamScreen] Success:', data)
        setTeam(data.team)
        setError(null)
      })
      .catch((err) => {
        const message = err.message || 'Unknown error'
        const hint =
          message === 'Failed to fetch'
            ? ' (Possible causes: API server not running, CORS, or wrong URL)'
            : ''
        console.error('[TeamScreen] Fetch failed:', err, { url })
        setError(`${message}${hint}`)
        setTeam(null)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    const url = `${config.apiBaseUrl}/teams/${config.nextOpponentTeamId}`
    fetch(url, {
      headers: { 'x-api-key': config.apiKey },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch next opponent: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setNextOpponent(data.team)
        setNextOpponentError(null)
      })
      .catch((err) => {
        setNextOpponentError(err.message)
        setNextOpponent(null)
      })
      .finally(() => setNextOpponentLoading(false))
  }, [])

  return (
    <div className="team-screen">
      <div className="game-title">GAME NAME: ROHLY</div>

      <div className="layout">
        {/* Left column - two panels */}
        <div className="left-column">
          <div className="panel team-summary">
            <div className="panel-header">TEAM</div>
            <div className="panel-content">
              {loading && <div className="team-name">Loading...</div>}
              {error && <div className="team-name error">Error: {error}</div>}
              {team && (
                <>
                  <div className="team-name">{team.name}</div>
                  <div>MANAGER: {team.manager?.surname ?? '—'}</div>
                  <div className="highlight-cyan">MONEY: {formatMoney(team.cashAvailable)}</div>
                  <div>LEAGUE POS. {team.leaguePosition ?? '—'}</div>
                  <div>SEASON 2001/02</div>
                </>
              )}
            </div>
          </div>

          <div className="panel next-opponents">
            <div className="panel-header">NEXT OPPONENTS</div>
            <div className="panel-content">
              {nextOpponentLoading && <div className="highlight-yellow">Loading...</div>}
              {nextOpponentError && <div className="highlight-yellow error">Error: {nextOpponentError}</div>}
              {nextOpponent && (
                <>
                  <div className="highlight-yellow">{nextOpponent.name}</div>
                  <div className="highlight-yellow">MANAGER: {nextOpponent.manager?.surname ?? '—'}</div>
                  <div>LEAGUE: {nextOpponent.league ?? '—'}</div>
                  <div>LEAGUE POS. {nextOpponent.leaguePosition ?? '—'}</div>
                  <div>COMPETITION: Friendly #1</div>
                  <div>VENUE: away</div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Central panel - team details */}
        <div className="panel central-panel">
          <div className="panel-header">{team?.name ?? '—'}</div>
          <div className="team-details">
            <div className="detail-row">
              <span className="label">Name</span>
              <span className="value">{team?.name ?? '—'}</span>
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
              <span className="value">{team?.country ?? '—'}</span>
            </div>
            <div className="detail-row">
              <span className="label">League</span>
              <span className="value">{team?.league ?? '—'}</span>
            </div>
            <div className="detail-row">
              <span className="label">League position</span>
              <span className="value">{team?.leaguePosition ?? '—'}</span>
            </div>
            <div className="detail-row">
              <span className="label">Stadium capacity</span>
              <span className="value">{team?.stadiumCapacity ?? '—'}</span>
            </div>
            <div className="detail-row">
              <span className="label">Support</span>
              <span className="value">{team?.support ?? '—'}</span>
            </div>
            <div className="detail-row">
              <span className="label">Squad size</span>
              <span className="value">{team?.squadSize ?? '—'}</span>
            </div>
            <div className="detail-row">
              <span className="label">Cash available</span>
              <span className="value highlight-cyan">{formatGbp(team?.cashAvailable)}</span>
            </div>
            <div className="detail-row">
              <span className="label">Max. overdraft</span>
              <span className="value highlight-cyan">{formatGbp(team?.maxOverdraft)}</span>
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
