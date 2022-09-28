const helloWorld = (req, res) => {
  const example = require('../services/example')
  res.send(example)
}

module.exports = {
  helloWorld
}
