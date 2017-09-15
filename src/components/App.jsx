
import React from 'react'
import UserTile from './UserTile'

import { formatUser } from '../users'

const fetchUsers = async () => {
  let data = await (await fetch('https://ffforumautomator.herokuapp.com/hackable-data')).json()
  return data.map(formatUser)
    .filter(user => !!user.mentorship)
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    fetchUsers()
    .then(users => this.setState({ users }))
    .catch(error => {
      console.error(error)
      this.setState({ error })
    })
  }

  render() {
    return (
      <div>
        <h1>Connecting Functioneers Since 2am!</h1>
        {
          this.state.users
          ? this.state.users.map(user =>
            <UserTile user={user} key={user.username} />
          )
          : this.state.error
          ? "Error! O.o"
          : "Loading..."
        }
      </div>
    )
  }
}
