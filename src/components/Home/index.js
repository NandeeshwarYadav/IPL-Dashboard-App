// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamList: updatedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state

    return (
      <Link to="/" className="link">
        <div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div className="bg">
              <div className="heading-logo">
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                    alt="ipl logo"
                    className="logo"
                  />
                </div>
                <div>
                  <h1>IPL DASHBOARD</h1>
                </div>
              </div>
              <ul className="team-cards">
                {teamList.map(each => (
                  <TeamCard items={each} key={each.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </Link>
    )
  }
}

export default Home
