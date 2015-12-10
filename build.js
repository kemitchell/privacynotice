process.stdout.write(require('lispy-json')({
  terms: require('./terms'),
  inputs: require('./inputs') }) + '\n')
