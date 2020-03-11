import { Response, Request } from "express";
const {Client}=require('pg');
const client = new Client({
  user: "postgres",
  password:"test123",
  host:"localhost",
  port: 5432,
  database:'postgres'
})
let express=require("express");
let app=express();
let fs=require('fs');
let bodyParser = require('body-parser');
app.listen(3000);
app.use(bodyParser.json());
function getData(req,res)
{
 client
 .connect()
 .then(()=> console.log("Successfully connected"))
 .catch(e => console.log(e));
 client.query('select * from employee order by empid;',(err,result)=>{
   res.status(200).json(result.rows);
    })  
}
app.get("/class2",getData);
app.delete("/delete/:id",function(req,res){
  let id1=req.params.id;
  client.query(`delete from employee where empid=${id1};`,(err,result)=>{
    res.send();
  })
})
app.put('/update/:id',function(req,res){
  const value=req.body;
  const id1=req.params.id;
  client.query(`update employee set firstname=$1,middlename=$2,lastname=$3,email=$4,phoneno=$5,role=$6,address=$7
  where empid=${id1};`,[value.firstname,value.middlename,value.lastname,value.email,value.phoneno,value.role,value.address])
  res.send();
  console.log(value);
})
app.post('/addrow',function(req,res){
  const value=req.body;
  //const id1=req.params.id;
  client.query(`insert into employee(firstname,middlename,lastname,email,phoneno,role,address) values ($1,$2,$3,$4,$5,$6,$7) returning empid;`,[value.firstname,value.middlename,value.lastname,value.email,value.phoneno,value.role,value.address])
  .then((result:any)=>res.json(result.rows[0]));
})
// app.delete("/delete/:id",function(req:Request,res:Response){
  
// }


// app.use(bodyParser.json());
// function modifyjson()
// {
//   let raw_json = fs.readFileSync('data.json');
//   let actual_json = JSON.parse(raw_json);
//   for(let i=0;i<actual_json.length;i++)
//   {
//    // console.log(actual_json[i].id);
//     actual_json[i].id = i;
//   }
//   fs.writeFileSync("data.json",JSON.stringify(actual_json),(err:Error)=> {
//     // If an error occurred, show it and return
//     if(err) return console.error(err);
//     // Successfully wrote to the file!
//   });
// }
// app.get("/class2",function(req:Request,res:Response){
//   modifyjson();
//   let data =fs.readFileSync('data.json');
//   let words=JSON.parse(data);
//   console.log(words);

// res.send(words);
// });

// app.delete("/delete/:id",function(req:Request,res:Response)
// {
// let data =fs.readFileSync('data.json');
// let words=JSON.parse(data);
// let id=req.params.id;
// let v=words.length;
//   // console.log(words);
//    for(let i=0;i<v;i++){
//       if(words[i].id==id){
//        words.splice(i,1);
// break;
//       }
//    }
//    fs.writeFile('data.json',JSON.stringify(words),(err:Error)=> {
//     // If an error occurred, show it and return
//     if(err) return console.error(err);
//     // Successfully wrote to the file!
//     res.send();
//   })
// });

// app.put('/update/:id',function(req:Request,res:Response){
// 	console.log("Data create");
// 	const data=fs.readFileSync('data.json');
// 	const actual=JSON.parse(data);
//     const value=req.body;
// 	for(let i=0;i<actual.length;i++){
// 		if(actual[i].id==req.params.id){
// 		   actual[i]=value;
// 		   break;
// 		}
// 	 }
//     fs.writeFile('data.json', JSON.stringify(actual),(err:Error)=> {
// 		// If an error occurred, show it and return
// 		if(err) return console.error(err);
// 		// Successfully wrote to the file!
// 		res.send();
// 	  });
// });
// app.post("/addrow/:id",function(req:Request,res:Response){
//   console.log("new entery added");
//   const data=fs.readFileSync('data.json');
//   const act=JSON.parse(data);
//   const value=req.body;
//   act.push(value);
//   fs.writeFile('data.json', JSON.stringify(act),(err:Error)=> {
// 		// If an error occurred, show it and return
// 		if(err) return console.error(err);
// 		// Successfully wrote to the file!
// 		res.send();
// 	  });
// });

