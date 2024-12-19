// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {teamMatch: {}, isLoading: true}

  componentDidMount() {
    this.teamDetails()
  }

  teamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamMatch: updatedData, isLoading: false})
  }

  render() {
    const {teamMatch, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatch

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="page">
            <ul className="banner-img">
              <li>
                <img src={teamBannerUrl} className="banner" alt="team banner" />
              </li>
            </ul>
            <ul className="latest-matches">
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </ul>
            <ul className="recent-matches">
              {recentMatches.map(each => (
                <MatchCard key={each.id} matches={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches

/*   <div>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div> */
