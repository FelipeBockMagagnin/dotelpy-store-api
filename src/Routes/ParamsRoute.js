const ParamsController = require('../Controllers/ParamsController');
module.exports = (app) => {
   app.get('/params', ParamsController.get);
}