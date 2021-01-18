let result = null;
module.exports = class sqlMapper {
  // 주차장 리스트 가져오기
  static getList(searchRegion, callback) {
    global.connection.query('SELECT * FROM list WHERE lnmadr REGEXP ?', searchRegion, function (err, rows) {
      if (!err) {
        result = rows;
      } else {
        console.log('query error : ' + err);
        result = err;
      }

      return callback(result);
    });
  }
}