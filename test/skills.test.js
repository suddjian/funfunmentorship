import { expect } from 'chai'
import { cloneDeep } from 'lodash'
import { mpj, DavDavDavid, igor, redundantDave } from './fixtures'
import { normalize, mapSkills, extractSkillMap, filterUniqueSkills, gatherAllSkillNames } from '../src/skills'

describe('skill utils', () => {

  it('should normalize disparate skill names', () => {
    expect(normalize('ElasticSearch')).to.equal(normalize('elasticsearch'))
    expect(normalize('Elastic Search')).to.equal(normalize('elasticsearch'))
    expect(normalize('elastic_search')).to.equal(normalize('elasticsearch'))
    expect(normalize('Vue.js')).to.equal(normalize('vuejs'))
    expect(normalize('JavaScript')).to.equal(normalize('javascript'))
    expect(normalize('es2016')).to.not.equal(normalize('es2015'))
  })

  it('should map a user\'s skills correctly', () => {
    const user = DavDavDavid.formattedData()
    expect(mapSkills({}, user, user.mentorship.offering)).to.deep.equal({
      javascript: {
        id: 'javascript',
        users: [ user ]
      },
      es2016: {
        id: 'es2016',
        users: [ user ]
      },
      mongodb: {
        id: 'mongodb',
        users: [ user ]
      }
    })
  })

  it('should extract a skillMap from an array of users', () => {
    const users = [ DavDavDavid.formattedData(), igor.formattedData() ]
    expect(extractSkillMap(users, 'seeking')).to.deep.equal({
      'elasticsearch': {
        id: 'elasticsearch',
        users: [ DavDavDavid.formattedData(), igor.formattedData() ]
      },
      'golang': {
        id: 'golang',
        users: [ DavDavDavid.formattedData() ]
      },
      'python': {
        id: 'python',
        users: [ igor.formattedData() ]
      },
      'vuejs': {
        id: 'vuejs',
        users: [ igor.formattedData() ]
      }
    })
  })

  describe('filterUniqueSkills', () => {
    it('should filter out redundant skills', () => {
      const skillset = ['golang', 'GoLang', 'golang', 'GOLANG', 'go.lang', 'go_lang', 'golang']
      expect(filterUniqueSkills(skillset)).to.deep.equal([normalize('golang')])
    })
  })

  describe('gatherAllSkillNames', () => {

    it('should return an array of skill names', () => {
      const users = [ DavDavDavid.formattedData(), igor.formattedData() ]
      expect(gatherAllSkillNames(users))
        .to.have.members([
          'golang', 'ElasticSearch', 'Javascript', 'es2016',
          'mongoDB', "Python", "Elasticsearch", "Vue.js",
          "JavaScript", "ES2016", "React", "React Native"
        ])
    })

    it('should filter out duplicate skill names', () => {
      const users = [ DavDavDavid.formattedData(), redundantDave.formattedData() ]
      expect(gatherAllSkillNames(users))
        .to.have.members([
          'golang', 'ElasticSearch', 'Javascript', 'es2016', 'mongoDB',
          'GoLang', 'GOLANG', 'goLANG', 'growlang'
        ])
    })
  })
})
