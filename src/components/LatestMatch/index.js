// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedData = {
    umpires: latestMatchDetails.umpires,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    venue: latestMatchDetails.venue,
  }
  const {
    date,
    competingTeam,
    umpires,
    venue,
    manOfTheMatch,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    result,
  } = updatedData

  return (
    <li className="recent-match-page">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          className="competingTeamLogo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
