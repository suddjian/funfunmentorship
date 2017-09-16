
import { snakeCase } from 'lodash'

const benignErrorCodes = [
  'warming_up'
]

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

export const makeFetchUsers = (fetcher) => async (attempts=0) => {
  let data = await fetcher()
  if (data.error_code) {
    console.error(data.error_message)
    if (benignErrorCodes.find(data.error_code)) {
      // TODO let the user know there's a delay
      await Promise.delay(10000)
      return fetchUsers(attempts + 1)
    }
  }
  // TODO map/filter asynchronously so as not to hog the event loop
  return data.map(formatUser)
  .filter(user => !!user.mentorship)
}

export const extractSkills = (users) => {
  const skills = users.reduce((skills, user) => {
    user.mentorship[group].forEach(skillName => {
      const skillId = snakeCase(skillName)
      if (!skills[skillId]) {
        skills[skillId] = {
          skillId,
          nameVotes: {}, // TODO heapify nameVotes
          seeking: [],
          offering: []
        }
      }
      const skill = skills[skillId]
      skill[group].push(user.username)
      skill.nameVotes[skillName] = (skill.nameVotes[skillName] || 0) + 1
    })
    return skills
  }, {})
  const skillNames = Object.keys(skills)
  return {
    skillNames,
    skills: skillNames.map(skillName => skills[skillName])
  }
}
