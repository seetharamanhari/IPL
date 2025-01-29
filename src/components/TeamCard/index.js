import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamdetails} = props
  const {id, name, teamImageUrl} = teamdetails
  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={`${name}`} />
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
