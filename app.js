const inquirer = require("inquirer");
// const fs = require('fs');
// const generatePage = require('./src/page-template');


{
    type: 'input',
    name: 'name',
    message: 'what is your name? (Required)',
    validate: nameINput -> {
        if (nameInput) {
            return true;
        }esle {
            console.log('Pleease type your name!');
            return false;
        }
    }
},



// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const profileDataArgs = process.argv.slice(2);

// console.log(profileDataArgs);

// const [name, github] = profileDataArgs;

// console.log(name, github);

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
