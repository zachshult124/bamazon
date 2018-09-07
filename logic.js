/*
Pseudo code
    file structure
        gitignore for packages
        myqsl
            create database --> current
            Create table
                Decide which rows need to be formatted correctly..
                    not null
                add items




        js 
            download the necessary packages
                mysql
                inquirer
                    prompts

            connect to the server
                be able to subtract from the database 
                    write in code when inquirer gets a respone we subtract the row
                write error functions


*/

//make screen shots to upload

var mysql = require("mysql");
var inquirer = require("inquirer");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});


// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to start the prompts to the user
    start();
});

function start() {

}

