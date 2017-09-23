import { expect } from 'chai'
import { cloneDeep } from 'lodash'
import { mpj, DavDavDavid, igor, bobbyTables, jimmyPesto, badJason } from './fixtures'
import { formatUser, makeFetchUsers } from '../src/users'

describe('user utils', () => {

  it('should format the user data correctly', () => {
    const test = user => expect(formatUser(user.rawData()))
      .to.deep.equal(user.formattedData())
    test(mpj)
    test(DavDavDavid)
    test(igor)
    test(bobbyTables)
    test(jimmyPesto)
    test(badJason)
  })

  it('should filter non-participatory users from the raw endpoint json', async () => {
    const fetchUsers = makeFetchUsers(() =>
      [ mpj.rawData(), DavDavDavid.rawData(), igor.rawData() ]
    )
    expect(await fetchUsers()).to.deep.equal([DavDavDavid.formattedData(), igor.formattedData()])
  })

  it('should handle benign errors when loading users', async () => {
    const failure = () => ({
      error_code: "warming_up",
      error_message: "need to warm up those cache engines"
    })
    const success = () => [ mpj.rawData() ]
    let fetchResponse = failure
    let calls = 0
    const fetchUsers = makeFetchUsers(() => {
      const response = fetchResponse()
      calls++
      fetchResponse = success
      return response
    })
    expect(await fetchUsers(1)).to.deep.equal([])
    expect(calls).to.equal(2)
  })
})
