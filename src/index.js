
import bluebird from 'bluebird'
import setGlobal from './set-global'
setGlobal('Promise', bluebird)
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { formatUser } from './users'

const fetchUsers = async () => {
  let data = await (await fetch('https://ffforumautomator.herokuapp.com/hackable-data')).json()
  return data.map(formatUser)
  .filter(user => !!user.mentorship)
}

ReactDOM.render(
  <App fetchUsers={fetchUsers} />,
  document.getElementById('root')
);
