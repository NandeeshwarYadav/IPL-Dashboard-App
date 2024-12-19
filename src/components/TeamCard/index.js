// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {items} = props
  const {id, name, teamImageUrl} = items
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="list">
        <div>
          <img src={teamImageUrl} alt={name} className="team-img" />
        </div>
        <div>
          <p className="name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
