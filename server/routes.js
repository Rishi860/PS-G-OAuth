const UserControllers = require('./controllers/UserControllers')

module.exports = (app) => {
    app.post('/login',
    UserControllers.login)
}
