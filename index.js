// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const readMe = require('./generateREADme.js');

const questions = 
inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "userName"
}, {
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "Provide a description of your project",
    name: "Description"
}, {
    type: "input",
    message: "Write a user story",
    name: "Usage"
}, {
    type: "input",
    message: "What programs must be installed for this to run?",
    name: "Installation"
}, {
    type: "list",
    message: "What licenses are needed to run this?",
    choices: ["Apache-2.0","Boost-Software-1.0","BSD-3-Clause","Eclipse-Public-1.0"],
    name: "License"
}, {
    type: "list",
    message: "What color do you want your badge?",
    choices: ["red","blue","yellow","green"],
    name: "Color"
}, {
    type: "input",
    message: "List any contributors to the creation of this app",
    name: "Contributors"
}, {
    type: "input",
    message: "What testing has been done on this app?",
    name: "Tests"
}, {
    type: "input",
    message: "Frequently Asked Questions",
    name: "Questions"
}
]).then((data) => {
    console.log(data)
    fs.writeFile('README.md',readMe(data),(err) => {
        if (err) {
            console.error(err)
        } else {
            console.log("Your readme is ready")
        }
    })
})
