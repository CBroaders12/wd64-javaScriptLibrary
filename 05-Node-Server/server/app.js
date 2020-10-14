require('dotenv').config();

const Express = require('express');
const app = Express();
let test = require('./controllers/testcontroller');
let user = require('./controllers/usercontroller')
let sequelize = require('./db');

app.use(Express.json());

app.use(require('./middleware/headers'));
app.use('/test', test);
app.use('/api/user', user);

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


