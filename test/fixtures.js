
export const mpj = {
  rawData: () => ({
    "username": "mpj",
    "hackable_json": "{ \"usermap_location\": { \"lat\": 57.7089, \"lng\": 11.9746, \"caption\": \"Gôtt mos\" }, \"other_prop\": 1}"
  }),
  formattedData: () => ({
    username: 'mpj',
    "hackable_json": "{ \"usermap_location\": { \"lat\": 57.7089, \"lng\": 11.9746, \"caption\": \"Gôtt mos\" }, \"other_prop\": 1}",
    url: 'https://www.funfunforum.com/u/mpj/',
    mentorship: undefined // no offense to mpj, the field is just empty in his hackableJSON /shrug
  })
}

export const DavDavDavid = {
  rawData: () => ({
    "username": "DavDavDavid",
    "hackable_json": "{ \"name\": \"David Suddjian\", \"mentorship\": { \"seeking\": \"golang\", \"offering\": [\"javascript\", \"es2016\", \"mongoDB\"] }, \"usermap_location\": {\"lat\": 36.9927, \"lng\": -122.1697, \"caption\": \"Programstinating\"} }"
  }),
  formattedData: () => ({
    username: 'DavDavDavid',
    "hackable_json": "{ \"name\": \"David Suddjian\", \"mentorship\": { \"seeking\": \"golang\", \"offering\": [\"javascript\", \"es2016\", \"mongoDB\"] }, \"usermap_location\": {\"lat\": 36.9927, \"lng\": -122.1697, \"caption\": \"Programstinating\"} }",
    url: 'https://www.funfunforum.com/u/DavDavDavid/',
    mentorship: {
      seeking: ['golang'],
      offering: ['javascript', 'es2016', 'mongoDB']
    }
  })
}
