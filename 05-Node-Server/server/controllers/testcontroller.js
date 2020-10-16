let express = require('express');
let router = express.Router();
let TestModel = require('../models/test');

/******************************
 * ! Controller Method #1: Simple Response
 ******************************/

router.post('/one', (req, res) => {
  res.send("Test 1 went through!");
});

/***************
 * ? GET: /one
 ***************/
router.get('/one', (req, res) => {
  TestModel
    .findAll({
      attributes: ['id', 'testdata']
    })
    .then(
      function findAllSuccess(data) {
        console.log("Controller data:", data);
        res.json(data);
      },
      function findAllError(err) {
        res.send(500, err.message)
      }
    );
});


/******************************
 * ! Controller Method #2: Persisting Data
 ******************************/

router.post('/two', (req, res) => {
  let testData =  "Test data for endpoint two";

  TestModel
    .create({
      testdata: testData
    }).then(dataFromDatabase => {
      res.send("Test two went through!")
    })
});

/******************************
 * ! Controller Method #3: req.body
 ******************************/

router.post('/three', (req, res) => {
  let testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
  res.send("Test three went through!")
  console.log("Test three went through!");
});

/******************************
 * ! Controller Method #4
 ******************************/

 router.post('/four', (req, res) =>  {
   let testData = req.body.testdata.item;

   TestModel
    .create({
      testdata: testData
    })
    .then(
      () => {
        res.send("Test 4 went through!")
      }
    )
 })

/******************************
 * ! Controller Method #5: Return data in a promise
 ******************************/

router.post('/five', (req, res) => {
  let testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(data => {
      res.send(data);
      })
})

/******************************
 * ! Controller Method #6: Return response as JSON
 ******************************/

router.post('/six', (req, res) => {
  let testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(testdata => {
      res.json({
        testdata: testdata
      });
    });
});

/******************************
 * ! Controller Method #7: Handle Errors
 ******************************/

router.post('/seven', (req, res) => {
  let testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function createSuccess(testdata) {
      res.json({
        testdata: testdata
      });
    },
    function createError(err) {
      res.send(500, err.message);
    }
    );
});

/******************************
 * ! GET: Get simple message from the server
 ******************************/
router.get('/helloclient', (req, res) => {
  res.send("This is a message from the server to the client.")
})

module.exports = router;