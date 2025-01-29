import './index.css'

const LatestMatch = props => {
  const {latestMatchDate} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch, // Updated property name
    umpires,
  } = latestMatchDate

  return (
    <div className="latest-match-container">
      <h1>Latest Match</h1>
      <div className="match-overview">
        <p className="team-name">{competingTeam}</p>
        <p className="match-date">{date}</p>
        <p className="match-venue">{venue}</p>
        <p className="match-result">{result}</p>
      </div>
      <div className="team-logo">
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <hr />
      <div className="match-details">
        <div className="details-section">
          <p className="section-title">First Innings</p>
          <p>{firstInnings}</p>
        </div>
        <div className="details-section">
          <p className="section-title">Second Innings</p>
          <p>{secondInnings}</p>
        </div>
        <div className="details-section">
          <p className="section-title">Man Of The Match</p>
          <p>{manOfTheMatch}</p>
        </div>
        <div className="details-section">
          <p className="section-title">Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
