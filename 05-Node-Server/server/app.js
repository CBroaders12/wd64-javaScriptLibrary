require('dotenv').config();

const Express = require('express');
const app = Express();
const test = require('./controllers/testcontroller');
const authTest = require('./controllers/authtestcontroller');

const user = require('./controllers/usercontroller');
const sequelize = require('./db');

app.use(Express.json());

app.use(require('./middleware/headers'));

/******************
 * ! EXPOSED ROUTES
*******************/
app.use('/test', test);
app.use('/api/user', user);

/******************
 * ! EXPOSED ROUTES
*******************/
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest)

sequelize.authenticate()
  .then(
    () => sequelize.sync()
  )
  .then(
    () =>
      app.listen(3000, () => {
        console.log('Listening on Port 3000');
      })
  )
  .catch(e => console.log(e));


