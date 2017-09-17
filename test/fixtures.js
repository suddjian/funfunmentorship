
export const mpj = {
  rawData: () => ({
    "username": "mpj",
    "hackable_json": "{ \"usermap_location\": { \"lat\": 57.7089, \"lng\": 11.9746, \"caption\": \"Gôtt mos\" }, \"other_prop\": 1}"
  }),
  formattedData: () => ({
    username: 'mpj',
    "hackable_json": "{ \"usermap_location\": { \"lat\": 57.7089, \"lng\": 11.9746, \"caption\": \"Gôtt mos\" }, \"other_prop\": 1}",
    url: 'https://www.funfunforum.com/u/mpj/',
    mentorship: undefined // no offense to mpj, the field is just empty in his hackablJSONe /shrug
  })
}

export const DavDavDavid = {
  rawData: () => ({
    "username": "DavDavDavid",
    "hackable_json": "{ \"name\": \"David Suddjian\", \"mentorship\": { \"seeking\": [ \"golang\", \"ElasticSearch\" ], \"offering\": [\"Javascript\", \"es2016\", \"mongoDB\"] }, \"usermap_location\": {\"lat\": 36.9927, \"lng\": -122.1697, \"caption\": \"Programstinating\"} }"
  }),
  formattedData: () => ({
    username: 'DavDavDavid',
    "hackable_json": "{ \"name\": \"David Suddjian\", \"mentorship\": { \"seeking\": [ \"golang\", \"ElasticSearch\" ], \"offering\": [\"Javascript\", \"es2016\", \"mongoDB\"] }, \"usermap_location\": {\"lat\": 36.9927, \"lng\": -122.1697, \"caption\": \"Programstinating\"} }",
    url: 'https://www.funfunforum.com/u/DavDavDavid/',
    mentorship: {
      seeking: ['golang', 'ElasticSearch'],
      offering: ['Javascript', 'es2016', 'mongoDB']
    }
  })
}

export const igor = {
  rawData: () => ({
    "username": "igoroctaviano",
    "hackable_json": "{ \"name\": \"Igor Octaviano\", \"mentorship\": { \"seeking\": [\"Python\", \"Elasticsearch\", \"Vue.js\"], \"offering\": [\"JavaScript\", \"ES2016\", \"React\", \"React Native\"] }, \"usermap_location\": {\"lat\": -19.936238, \"lng\": -43.9322763, \"caption\": \"Division Bell T-Shirt\"} }"
  }),
  formattedData: () => ({
    "username": "igoroctaviano",
    "hackable_json": "{ \"name\": \"Igor Octaviano\", \"mentorship\": { \"seeking\": [\"Python\", \"Elasticsearch\", \"Vue.js\"], \"offering\": [\"JavaScript\", \"ES2016\", \"React\", \"React Native\"] }, \"usermap_location\": {\"lat\": -19.936238, \"lng\": -43.9322763, \"caption\": \"Division Bell T-Shirt\"} }",
    "url": "https://www.funfunforum.com/u/igoroctaviano/",
    "mentorship": {
      "seeking": [ "Python", "Elasticsearch", "Vue.js" ],
      "offering": [ "JavaScript", "ES2016", "React", "React Native" ]
    }
  })
}

export const redundantDave = {
  rawData: () => ({
    "username": "DavDavDavid",
    "hackable_json": "{ \"name\": \"David Suddjian\", \"mentorship\": { \"seeking\": [ \"golang\", \"GoLang\" ], }, \"usermap_location\": {\"lat\": 36.9927, \"lng\": -122.1697, \"caption\": \"Programstinating\"} }"
  }),
  formattedData: () => ({
    username: 'DavDavDavid',
    "hackable_json": "{ \"name\": \"David Suddjian\", \"mentorship\": { \"seeking\": [ \"golang\", \"GoLang\" ], }, \"usermap_location\": {\"lat\": 36.9927, \"lng\": -122.1697, \"caption\": \"Programstinating\"} }",
    url: 'https://www.funfunforum.com/u/DavDavDavid/',
    mentorship: {
      seeking: ['golang', 'GoLang'],
      offering: []
    }
  })
}
