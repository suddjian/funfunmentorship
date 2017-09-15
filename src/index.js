
import bluebird from 'bluebird'
import setGlobal from './set-global'
setGlobal('Promise', bluebird)

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/App'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}
// // Hot Module Replacement API
// if (module.hot) {
//   console.log("it's hot hot HOT!")
  
//   module.hot.accept()
//   // module.hot.accept('./components/App', () => {
//     // render(App)
//   // });
// }
