import { expect } from 'chai'
import { cloneDeep } from 'lodash'
import { mpj, DavDavDavid } from './fixtures'
import { formatUser } from '../src/users'

describe('user utils', () => {

  it('should format the user data correctly', () => {
    const test = user => expect(formatUser(user.rawData())).to.deep.equal(user.formattedData())
    test(mpj)
    test(DavDavDavid)
  })
})
