const UsuarioRoute = require('./UsuarioRoute');
module.exports = (app) => {
   UsuarioRoute(app)
}

const ParamsRoute = require('./ParamsRoute');
module.exports = (app) => {
   ParamsRoute(app)
}