
[![buildstatus][travis]](https://travis-ci.org/ChemicalRocketeer/funfunmentorship)

# funfunmentorship

This project aims to pair people seeking to expand their knowledge with people willing to impart their wisdom.

To participate, edit your `hackable_json` to include a `mentorship` field with `seeking` and `offering` arrays, like so:

```json
{ "mentorship": { "seeking": [ "Rust", "Unity3D", "R" ], "offering": [ "VanillaJS", "Angular", "Drupal" ] }}
```

The app is hosted here: https://chemicalrocketeer.github.io/funfunmentorship/

## Contributing
Feel free to open up a PR, I have some features planned that I will be adding into the GitHub Projects page,
if you want to help with any of them feel free to participate.
There's lots of opportunities to build cool UI things on this project and I have had lots of ideas
that probably won't see the light of day due to lack of time.

I'm also not so good with making things stylish and flashy, so if you are into that be my guest.

### Contributing, start to finish

1. Fork and clone the project. This will put the project on your desktop so you can work on it. I recommend [GitHub Desktop](https://desktop.github.com/) if you haven't done this before.

1. Install [node.js](https://nodejs.org/en/). This will also install `npm`, the node package manager.

1. Open up a command line window in the project directory. Run `npm install`. This will install all the third-party modules this project depends on. (If there's an error here, something is probably broken in the project! Please let us know on the issues page!)

1. Hack away! When developing, you can run `npm start` in the command line to start up a dev server with hot reloading (meaning when you write new code, it will show up in the browser window without you needing to refresh the page. (For most types of code changes. It's not perfect.))

1. If you think it's warranted, write a test or two for your new code. Run `npm test` to run the tests. You can also run `npm run test:watch` to have the tests run every time the code changes.

1. When you're ready, go ahead and open up a pull request. Someone will review your work and request some changes if necessary. When everything looks good, the code will be merged in. The production app should pick up your changes automatically within a minute or two. Thanks for contributing!

I use yarn but I won't be documenting it here, if you want to use it go ahead. If you don't know what yarn is, it's basically a souped-up npm that is usually a bit better.

[travis]: https://travis-ci.org/ChemicalRocketeer/funfunmentorship.svg?branch=master
