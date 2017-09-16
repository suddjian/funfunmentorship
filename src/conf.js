
import bluebird from 'bluebird'

const setGlobal = (name, val) => {
  try {
    global[name] = val
  } catch (e) {
    // not in node
  }

  try {
    window[name] = val
  } catch (e) {
    // not in the browser
  }
}

bluebird.config({
  // Enables all warnings except forgotten return statements,
  // because that's basically what the await keyword is.
  warnings: {
    wForgottenReturn: false
  }
})

setGlobal('Promise', bluebird)
