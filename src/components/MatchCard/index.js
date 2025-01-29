import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails

  return (
    <li className="team-card">
      <img
        className="team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <span
        className={`match-status ${matchStatus === 'Won' ? 'won' : 'lost'}`}
      >
        {matchStatus}
      </span>
    </li>
  )
}

export default MatchCard
