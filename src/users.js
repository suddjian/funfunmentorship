
const parseHackableJSON = (hackableJSON) => {
  try {
    return JSON.parse(hackableJSON)
  } catch (err) {
    return null
  }
}

const toArray = (data) => {
  if (data instanceof Array) {
    return data
  } else if (typeof data === 'string') {
    return data.split(' ')
  } else {
    return []
  }
}

const normalizeMentorship = (mentorship) => ({
  seeking: toArray(mentorship.seeking),
  offering: toArray(mentorship.offering)
})


export const formatUser = (user) => {
  let json = parseHackableJSON(user.hackable_json)
  return {
    ...user,
    url: `https://www.funfunforum.com/u/${user.username}/`,
    mentorship: json && json.mentorship && normalizeMentorship(json.mentorship)
  }
}
