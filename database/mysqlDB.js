const mysql = require('mysql');
const db_config = {
  host: '127.0.0.1',
  post: 3306,
  user: 'nk1224',
  password: 'open1404',
  database: 'parking_lot',
  dateStrings: 'date'
};

function handleDisconnect() {
  let connection = mysql.createConnection(db_config);

  connection.connect(function(err) {
    if (err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  connection.on('error', function(err) {
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('PROTOCOL_CONNECTION_LOST => mysql execute reconnection');
      handleDisconnect();
    } else {
      throw err;
    }
  });

  global.connection = connection;
}

module.exports = handleDisconnect;