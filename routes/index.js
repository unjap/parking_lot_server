const express = require('express');
const router = express.Router();

const sqlMapper = require('../database/sqlMapper');

// 주차장 리스트 가져오기
router.post('/getList', function(req, res) {
  console.log('routes /getList');
  const searchRegion = req.body.searchRegion;
  console.log('searchRegion : ', searchRegion);
  sqlMapper.getList(searchRegion, function(queryResult) {
    res.send(queryResult);
  });
});

module.exports = router;
