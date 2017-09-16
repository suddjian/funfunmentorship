
import React from 'react'
import UserTile from './UserTile'

import { makeFetchUsers } from '../users'

const fetchUsers = makeFetchUsers(async () =>
  await (await fetch('https://ffforumautomator.herokuapp.com/hackable-data')).json()
)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    if (!this.state.users) {
      try {
        let data = await fetchUsers()
        this.setState({ users: data })
      } catch (error) {
        console.error('Failed to fetch user data', error)
        this.setState({ error })
      }
    }
  }

  render () {
    return (
      <div>
        <h1>Connecting Functioneers Since 2am!!!</h1>
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
