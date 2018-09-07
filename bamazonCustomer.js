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


 first need to show all the items in the database
    need to prompt the user --> inquirer 
        what is the ID of the product you would like to buy?
            store the value
        how many units of the product they would like to buy?
            store the value
        
        send this request to the server 
            if the quantity in the datbase is more than the quantity requsted
                return a "congrats you bought (requested quantity of item) + (product_name)" 
            else
                return "there are only (stock_quantity) + (product_name)
        print the updated inventory on the screen


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
    showItems();
});

//Function to show all the current items in the database
function showItems() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.log(



        )
    });
}


//start function to prompt the user with inquirer 
function start() {



}


    //   // once you have the items, prompt the user for which they'd like to bid on
    //   inquirer
    //     .prompt([
    //       {
    //         name: "choice",
    //         type: "rawlist",
    //         choices: function() {
    //           var choiceArray = [];
    //           for (var i = 0; i < results.length; i++) {
    //             choiceArray.push(results[i].item_name);
    //           }
    //           return choiceArray;
    //         },
    //         message: "What auction would you like to place a bid in?"
    //       },
    //       {
    //         name: "bid",
    //         type: "input",
    //         message: "How much would you like to bid?"
    //       }
    //     ])
    //     .then(function(answer) {
    //       // get the information of the chosen item
    //       var chosenItem;
    //       for (var i = 0; i < results.length; i++) {
    //         if (results[i].item_name === answer.choice) {
    //           chosenItem = results[i];
    //         }
    //       }

    //       // determine if bid was high enough
    //       if (chosenItem.highest_bid < parseInt(answer.bid)) {
    //         // bid was high enough, so update db, let the user know, and start over
    //         connection.query(
    //           "UPDATE auctions SET ? WHERE ?",
    //           [
    //             {
    //               highest_bid: answer.bid
    //             },
    //             {
    //               id: chosenItem.id
    //             }
    //           ],
    //           function(error) {
    //             if (error) throw err;
    //             console.log("Bid placed successfully!");
    //             start();
    //           }
    //         );
    //       }
    //       else {
    //         // bid wasn't high enough, so apologize and start over
    //         console.log("Your bid was too low. Try again...");
    //         start();
    //       }
    //     });
