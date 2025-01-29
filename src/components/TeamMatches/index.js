import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    matchdata: {},
  }

  componentDidMount() {
    this.getTeam()
  }

  getformatdata = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchdata = await response.json()
    const formatteddata = {
      teamBannerUrl: fetchdata.team_banner_url,
      latestMatch: this.getformatdata(fetchdata.latest_match_details),
      recentMatch: fetchdata.recent_matches.map(each =>
        this.getformatdata(each),
      ),
    }
    this.setState({matchdata: formatteddata, isLoading: false})
  }

  rendermatchcard = () => {
    const {matchdata} = this.state
    const {recentMatch} = matchdata

    return (
      <ul>
        {recentMatch.map(each => (
          <MatchCard matchDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderlatestmatch = () => {
    const {matchdata} = this.state
    const {teamBannerUrl, latestMatch} = matchdata

    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" />
        <LatestMatch latestMatchDate={latestMatch} />
        {this.rendermatchcard()}
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  getRoute = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SRH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const className = `team-matches-container ${this.getRoute()}`
    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderlatestmatch()}
      </div>
    )
  }
}

export default TeamMatches
