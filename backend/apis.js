"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Client } = require('pg');
const client = new Client({
    user: "postgres",
    password: "test123",
    host: "localhost",
    port: 5432,
    database: 'userdb'
});
let express = require("express");
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser');
app.listen(3000);
app.use(bodyParser.json());
function getData(req, res) {
    client
        .connect()
        .then(() => console.log("Successfully connected"));
    client.query('select users.empid,users.firstname,users.middlename,users.lastname,users.email,users.phoneno,roles.fname,users.address,customer.website from users,customer,roles where users.role=roles.fkey AND users.customer_id=customer.customer_id order by users.empid asc;', (err, result) => {
        res.status(200).json(result.rows);
    });
}
app.get("/fetchUserData", getData);
app.delete("/delete/:id", function (req, res) {
    let id = req.params.id;
    client.query(`delete from users where empid=${id};`, (err, result) => {
        res.send();
    });
});
app.put('/updateUser/:id', function (req, res) {
    const value = req.body;
    const id = req.params.id;
    client.query(`update users set firstname=$1,middlename=$2,lastname=$3,email=$4,phoneno=$5,role=$6,address=$7,customer_id=$8
  where empid=${id};`, [value.firstname, value.middlename, value.lastname, value.email, value.phoneno, value.fname, value.address, value.customer_id]);
    res.send();
});
app.post('/addUser', function (req, res) {
    const value = req.body;
    client.query(`insert into users(firstname,middlename,lastname,email,phoneno,role,address,customer_id) values ($1,$2,$3,$4,$5,$6,$7,$8) returning empid;`, [value.firstname, value.middlename, value.lastname, value.email, value.phoneno, value.role, value.address, value.customer_id])
        .then((result) => res.json(result.rows[0]));
});
app.get('/getUserid', function (req, res) {
    client.query(`select fkey,fname from roles`, (error, result) => {
        res.status(200).json(result.rows);
    });
});
