const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send([{
      "id":1,
      "test":"test"
  }]);
});

module.exports = router;