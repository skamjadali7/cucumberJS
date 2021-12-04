# cucumberJS
cucumber with Cypress and JavaScript for automating shopping application

Pre-Requisites:
- init npm 
- npm install cypress --save-dev  'OR'  yarn add cypress --dev
- npm install --save-dev cypress-cucumber-preprocessor  'OR' yarn add --dev cypress-cucumber-preprocessor
- Go to Plugin folder and navigate to index.js file and export below

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

- Go to package.json and below dependecies

"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
}

- Go to cypress.json file and add below

{
    "testFiles": "**/*.feature"
}

Name : @mj@d
