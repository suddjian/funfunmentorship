
const benignErrorCodes = [
  'warming_up'
]

const parseHackableJSON = (hackableJSON) => {
  try {
    return JSON.parse(hackableJSON)
  } catch (err) {
    throw err
  }
}

const toArray = (data) => {
  if (typeof data === 'string') {
    data = data.split(' ')
  } else if (!Array.isArray(data)) {
    data = []
  }
  return data.filter(item => typeof item === 'string')
}

export const normalizeMentorship = (mentorship) => ({
  seeking: toArray(mentorship.seeking).map(String),
  offering: toArray(mentorship.offering)
})

export const getProfileUrl = (size) => (username) =>
  `https://discourse-cdn-sjc1.com/standard6/user_avatar/www.funfunforum.com/${username}/${size}/1133_1.png`

export const formatUser = (user) => {
  let json
  try {
    json = parseHackableJSON(user.hackable_json) || undefined
  } catch(err) {
    console.log(user.username)
  }
  return {
    ...user,
    url: `https://www.funfunforum.com/u/${user.username}/`,
    mentorship: json && json.mentorship && normalizeMentorship(json.mentorship)
  }
}

export const makeFetchUsers = (fetcher) => {
  const fetchUsers = async (onFailWait=5000) => {
    let data = await fetcher()
    if (data.error_code) {
      console.error(data.error_message)
      if (benignErrorCodes.includes(data.error_code)) {
        // TODO let the user know there's a delay
        await Promise.delay(onFailWait)
        return fetchUsers(onFailWait * 2)
      }
    }
    // TODO map/filter asynchronously so as not to hog the event loop
    return data.map(formatUser)
    .filter(user => !!user.mentorship)
  }
  return fetchUsers
}
