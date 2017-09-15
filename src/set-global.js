export default (name, val) => {
  try {
    global[name] = val
  } catch(e) {
    // not in node
  }

  try {
    window[name] = val
  } catch(e) {
    // not in the browser
  }
}
