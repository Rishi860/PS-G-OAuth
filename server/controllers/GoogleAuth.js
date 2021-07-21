const User = require('../models/Users')
const UserServices = require('./UserAuthServices')
const CLIENT_ID = '726378269682-2ggmtv86fq0bkq9ash34f74ku0ur3orj.apps.googleusercontent.com'

module.exports = {
  async register (id_token) {
    try {
      const {OAuth2Client} = require('google-auth-library');
      const client = new OAuth2Client(CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken: id_token,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      // const userid = payload['sub'];
      const data = {
        name: payload.name,
        email: payload.email,
        imageUrl: payload.picture,
      }

      const newUser = await User.create(data);
      const token = await UserServices.createToken(newUser._id)

      return {
        token,
        user: {
          name: newUser.name,
          imageUrl :newUser.imageUrl,
          _id: newUser._id,
          email: newUser.email,
        },
      }
      // If request specified a G Suite domain:
      // const domain = payload['hd'];
    } catch (err) {
      res.status(400).send({
        error: 'email id already in use'
      })
    }
  },
  async login (id_token) {
    try {
      const {OAuth2Client} = require('google-auth-library');
      const client = new OAuth2Client(CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken: id_token,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      // const userid = payload['sub'];
      const userDoc = await User.findOne({
        email: payload.email
      });

      if(!userDoc){
        return res.status(403).send({
          error: 'Account not registered! Sign Up :)'
        })
      }
      const data = {
        name: userDoc.name,
        email: userDoc.email,
        imageUrl: userDoc.imageUrl,
        role: userDoc.role,
        _id: userDoc._id,
      }

      const token = await UserServices.createToken(userDoc._id)
      return {
        token,
        user: data,
      }
      // If request specified a G Suite domain:
      // const domain = payload['hd'];
    } catch (err) {
      res.status(400).send({
        error: 'Server error occured kindly retry after some time.'
      })
    }
  },
}
