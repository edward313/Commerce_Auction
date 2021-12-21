// var mysql = require('mysql');

// var conn = mysql.createConnection({
//   host: '37.59.55.185',
//   user: 'U75qVnrzSE',
//   password: 'HWnJNO0bYR',
//   database: 'U75qVnrzSE'
// })
// conn.connect(function(err,conn) {
//     if (err) throw err;
//     else
//       console.log("Connected!!!")
//   });  


var mysql = require('mysql');
var conn  = mysql.createPool({
  connectionLimit : 10,
  host: '37.59.55.185',
  user: 'U75qVnrzSE',
  password: 'HWnJNO0bYR',
  database: 'U75qVnrzSE'
});
 
conn.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
module.exports = conn;