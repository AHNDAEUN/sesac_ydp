// 임시  db로 부터 방명록 데이터를 받아옴

// exports.getVisitors=()=>{

//     return[

//         {id: 1, name: 'aaaa', comment:'자고싶다'},

//         {id: 2, name:'dddd',comment:'졸리다'},
//     ];
// };

// [before]

// [after]
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'codingon'
}); // database 연결 객체

exports.getVisitors = (callback) => {
  conn.query(`select * from visitor`, (err, rows) => {
    if (err) {
      throw err;
    }
    
    console.log('model/Visitor.js >> ', rows);
    callback(rows)
  })
};    

exports.postVisitor = (data, callback) => {
  conn.query(`insert into visitor(name, comment) values ('${data.name}', '${data.comment}')`, 
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('model/Visitor.js >> ', rows);
      // model/Visitor.js >>  OkPacket {
      //   fieldCount: 0,
      //   affectedRows: 1,
      //   insertId: 4, // -> pk
      //   serverStatus: 2,
      //   warningCount: 0,
      //   message: '',
      //   protocol41: true,
      //   changedRows: 0
      // }
      callback(rows.insertId)
    }
  )
}