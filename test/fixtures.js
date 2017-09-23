
export const mpj = {
  rawData: () => ({
    "username": "mpj",
    "hackable_json": "{ \"usermap_location\": { \"lat\": 57.7089, \"lng\": 11.9746, \"caption\": \"Gôtt mos\" }, \"other_prop\": 1}"
  }),
  formattedData: () => ({
    username: 'mpj',
    "hackable_json": "{ \"usermap_location\": { \"lat\": 57.7089, \"lng\": 11.9746, \"caption\": \"Gôtt mos\" }, \"other_prop\": 1}",
    url: 'https://www.funfunforum.com/u/mpj/',
    mentorship: undefined // no offense to mpj, the field is just empty in his hackablJSON /shrug
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
    "username": "redundantDavid",
    "hackable_json": "{ \"name\": \"David Redundant Suddjian\", \"mentorship\": { \"seeking\": [ \"golang\", \"GoLang\" ], \"offering\": [ \"GOLANG\", \"goLANG\", \"growlang\" ] } }"
  }),
  formattedData: () => ({
    username: 'redundantDavid',
    "hackable_json": "{ \"name\": \"David Redundant Suddjian\", \"mentorship\": { \"seeking\": [ \"golang\", \"GoLang\" ], \"offering\": [ \"GOLANG\", \"goLANG\", \"growlang\" ] } }",
    url: 'https://www.funfunforum.com/u/redundantDavid/',
    mentorship: {
      seeking: ['golang', 'GoLang'],
      offering: ['GOLANG', 'goLANG', 'growlang']
    }
  })
}

export const bobbyTables = {
  rawData: () => ({
    "username": "bobbyTables",
    "hackable_json": "{ \"name\": \"Billy Bob Tables\", \"mentorship\": { \"offering\": [ \"<script>alert('xss!')</script>\" ] } }"
  }),
  formattedData: () => ({
    username: "bobbyTables",
    "hackable_json": "{ \"name\": \"Billy Bob Tables\", \"mentorship\": { \"offering\": [ \"<script>alert('xss!')</script>\" ] } }",
    url: 'https://www.funfunforum.com/u/bobbyTables/',
    mentorship: {
      seeking: [],
      offering: ["<script>alert('xss!')</script>"]
    }
  })
}

export const jimmyPesto = {
  rawData: () => ({
    "username": "jimmyP",
    "hackable_json": "{ \"name\": \"Jimmy Pesto\", \"mentorship\": { \"offering\": [ \"invalid\", { \"malicious\": \"json\" } ], \"seeking\": { \"trouble\": true } } }"
  }),
  formattedData: () => ({
    username: "jimmyP",
    "hackable_json": "{ \"name\": \"Jimmy Pesto\", \"mentorship\": { \"offering\": [ \"invalid\", { \"malicious\": \"json\" } ], \"seeking\": { \"trouble\": true } } }",
    url: 'https://www.funfunforum.com/u/jimmyP/',
    mentorship: {
      seeking: [],
      offering: ['invalid']
    }
  })
}

export const badJason = {
  rawData: () => ({
    username: 'badJason',
    hackable_json: '{mentorship: { offering: "no quotes" }}'
  }),
  formattedData: () => ({
    username: 'badJason',
    hackable_json: '{mentorship: { offering: "no quotes" }}',
    url: 'https://www.funfunforum.com/u/badJason/',
    mentorship: undefined
  })
}
