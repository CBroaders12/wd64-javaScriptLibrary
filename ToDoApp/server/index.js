const { response } = require('express');
const Express = require('express');

const applicationSequelizeObject = require('./db')
const applicationControllers = require('./controllers/index');

const expressApplicationObject = new Express();

expressApplicationObject.use(Express.json())

expressApplicationObject.use('/test', applicationControllers.test);
expressApplicationObject.use('/users', applicationControllers.users);

expressApplicationObject.get('/', (request, response) => {
  console.log('[server]: Root GET request received');
  console.log('TYPE:', request.method);
  console.log('URL:', request.url);
  console.log('[server]: Response being dispatched -->');
  response.send('Root Route Hit, hello from the todo server\n');
});

/*
! Challenge: Receive a POST request at the route "/challenge"
  - Takes  2 values inside of the body:
    1. Name -> A string for a name
    2. Age -> A number for the age
  - Respond with this message:
    - If the user is 18 and older, the message will be
      "<name>, you are an adult!"
    - Otherwise the message will be:
      "<name>, you will be an adult soon!"
*/

// * ********** - CHALLENGE CODE HERE - ************

// expressApplicationObject.post('/challenge', (request, response) => {
//   let name = request.body.name;
//   let age = request.body.age;

//   console.log(request);
//   response.send(`${name}, you ${age >= 18 ? 'are an adult!' : 'will be an adult soon!'}`)
// });

// * **********************







// Startup Procedure:
// Verify the connection to the Postgres DB
// Synchronize the Database with our Models
// Listen on our specified port

applicationSequelizeObject
  .authenticate()
  .then(() => applicationSequelizeObject.sync())
  .then(() => {
    expressApplicationObject.listen(9001, () => {
      console.log('[server]: App is listening on port 9001');
    });
  })
  .catch(error => {
    console.log(error);
  });


