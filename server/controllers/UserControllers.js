const GoogleAuth = require('./GoogleAuth')

module.exports = {
  async register (req, res) {
    try {
      const id_token = Object.keys(JSON.parse(JSON.stringify(req.body)))[0];
      // const id_token = req.body;
      const data = await GoogleAuth.register(id_token);
      res.send(data)
    } catch (err) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
  async login (req, res) {
    try {
      const id_token = Object.keys(JSON.parse(JSON.stringify(req.body)))[0];
      // const id_token = req.body;
      const data = await GoogleAuth.login(id_token);
      res.send(data)
    } catch (err) {
      res.status(400).send({
        error: 'Server error! Kindly retry after some time.'
      })
    }
  },
}