# Cypress Guide

###### Plain vanilla installation commands

Create an empty project folder

npm init -y //initialize project and create package.json

npm install cypress --save-dev //installs cypress and its dependencies can be checked under node_modules

npx cypress version // ensures the installation is as expected

npx cypress open //configure cypress runner
click on configure and then add example tests

###### adding xpath dependency for cypress

ensure dev dependency for cypress-xpath is added --> npm install -D cypress-xpath
lastly under support folder under e2e.js add --> require('cypress-xpath')

###### adding excel dependency for cypress

npm install -D xlsx

###### Running tests via command line

npx cypress run
npm run test //configure test in package.json
npm run open //configured to open cypress runner
cypress run --browser chrome --headed //specifying variables with our run
cypress run --browser chrome --headed --spec 'cypress/e2e/saucedemo/saucelabsLoginwithExcel.cy.js' //run a particular test

###### Running tests on a docker image (always update to latest version)
docker run -it -v $PWD:/e2e -w /e2e cypress/included:13.6.2 //plain vanila
docker-compose -f docker-compose.yml up //once we have a docker-compose file

