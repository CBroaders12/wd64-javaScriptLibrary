let express = require('express');
let app = express();
let test = require('./controllers/testcontroller');
let sequelize = require('./db');

sequelize.sync();

app.use('/test', test)

app.listen(3000, () => console.log('What\'s up!'));

app.use('/api/test', (req, res) => {
  res.send("this is data from the /api/test endpoint. It's from the server.")
});