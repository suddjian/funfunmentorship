
import { snakeCase } from 'lodash'

// transforms a skill name into a standardized version that can be used as an id or a key or whatever
export const normalize = (skillname) => skillname.toLowerCase().replace(/[^a-z0-9]/g, '')

// extract a user's seeked and offered skills into the skills map
// non-pure, modifies `skillMap`
export const mapSkills = (skillMap, user, skillList) => {
  skillList.forEach(name => {
    const id = normalize(name)
    if (!skillMap[id]) skillMap[id] = { id, users: [] }
    skillMap[id].users.push(user)
  })
  return skillMap
}

// creates a map of either seeked skills or offered skills
export const extractSkillMap = (users, category) => {
  const skillMap = {}
  users.forEach(user => {
    mapSkills(skillMap, user, user.mentorship[category])
  })
  return skillMap
}
