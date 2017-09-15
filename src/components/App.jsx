
import React from 'react'
import UserTile from './UserTile'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    props.fetchUsers()
    .then((users) => this.setState({ users }))
  }

  render() {
    return (
      <div>
        <h1>Connecting Functioneers Since 2am!</h1>
        { this.state.users
          ? this.state.users.map(user =>
            <UserTile user={user} key={user.username} />
          )
          : "Loading..."
        }
      </div>
    )
  }
}
