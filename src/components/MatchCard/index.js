// Write your code here
import './index.css'

const MatchCard = props => {
  const {matches} = props
  const updatedData = {
    competingTeamLogo: matches.competing_team_logo,
    result: matches.result,
    competingTeam: matches.competing_team,
    matchStatus: matches.match_status,
  }

  const {competingTeam, competingTeamLogo, result, matchStatus} = updatedData
  const checkWinOrLose = matchStatus === 'Won' ? 'won' : 'lose'
  return (
    <li className="card">
      <img
        src={competingTeamLogo}
        className="team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={checkWinOrLose}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
