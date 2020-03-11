"use strict";
// const {Client}=require('pg');
// const client = new Client({
//   user: "postgres",
//   password:"test123",
//   host:"localhost",
//   port: 5432,
//   database:'postgres'
// })
// // client
// // .connect()
// // .then(()=> console.log("Successfully connected"))
// // .catch(e => console.log(e));
// // client.query('select * from employee',(err,res)=>{
// //   console.log((res.rows));
// //      client.end();
// //    })
//    function getData(req,res)
//    {
//     client
//     .connect()
//     .then(()=> console.log("Successfully connected"))
//     .catch(e => console.log(e));
//     client.query('select * from employee',(err,result)=>{
//       res.status(200).json(result.rows);
//        })  
//    }
//    function delRow(req,res){
//    }
//    export {getData};
