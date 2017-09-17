
import { flatten, uniq } from 'lodash'

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

// (this filters out identical skills for each user, but not for all users as a whole)
export const gatherAllSkillNames = (users) => uniq(flatten(users.map(user =>
  user.mentorship.seeking.concat(user.membership.offering)
)))

// filters out any skills with the same normalized value as other ones in the set
export const filterUniqueSkills = (skillset) => {
  const encountered = {}
  return skillset.filter(skill => {
    const normalized = normalize(skill)
    if (encountered[normalized]) return false;
    encountered[normalized] = true;
    return true;
  })
}

export const tabulateSkillNameVotes = (users) => {
  // get every skill name that people are using, all in one array,
  // while only counting one vote on each skill per person
  return flatten(users.map(user =>
    filterUniqueSkills(user.mentorship.seeking.concat(user.membership.offering))
  ))
  // make a map of skill id -> map of names -> vote count
  .reduce((votes, name) => {
    const id = normalize(name)
    if (!votes[id]) votes[id] = {}
    // TODO: abolish first-past-the-post
    votes[id][name] = (votes[id][name] || 0) + 1
  }, {})
}

// return the most popular name among the given set of names for the same skill, e.g.
// { "Node.js": 3, "nodejs": 1, "Node JS": 1 } will return { name: "Node.js", voteCount: 3 }
export const findWinningName = (names) =>
  Object.keys(names).reduce((max, name) => {
    const voteCount = names[name]
    if (voteCount > max.voteCount) {
      return { name, voteCount }
    } else {
      return max
    }
  }, { name: '', voteCount: 0 })

// this is the cool one, this is what lets you display the name that everybody uses.
// it returns a map of skill ids -> the name to use for that id. e.g.
// { nodejs: "Node.js", javascript: "JavaScript" }
export const popularNameMap = (users) => {
  const allNames = tabulateSkillNameVotes(users)
  return Object.keys(allNames)
  .reduce((popular, skillId) => {
    popular[skillId] = findWinningName(allNames[skillId]).name
    return popular
  }, {})
}
