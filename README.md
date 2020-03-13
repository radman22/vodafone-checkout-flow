# Automation of Checkout flow  

This repository contains a sample process of testing the checkout flow of  buying an iphone through vodafone nl website. The main aim is develop a test automation script that can test the smoothness of the checkout flow  on the vodafone nl website

**Note:** The test cases, the assertions and data testing is done on an abstract level, indepth tests and assertions were not implmeneted because of dynamicaty and complexness of data involved in the process, Please refere to **Problems** , **Test Data preparation** and **colclusion** douments attached in the task   

*Although! It is a common knowledge but the development pattern that is used to develop this framework is **Page Object Pattern** *

## Automation Script Instruction

1. The automation tool that is used to develop this script is **cypress**. You do not need an additional testing framework; cypress will take care of your assertions, hooks and test execution.  

2. In order to run tests in the framework you only need **npm (node package manager)**.cypress will take care of the rest. 

3. Typescript is used as programming language. npm install part is very important as additional dependencies are required to run tests

## The main problem 

The main problem in this checkout flow is that there is too much variation of data and that variation of data is combining with other data.So a lot of combinatinations are made which create a lot of flows.  

### Concepts deployed in the framework

The following concepts were used 
- Cypress enviroment varaibles to safe and proper data driven testing 
- Parameterizations to tackle with various combination of data 
- Page Object development pattern for more code readbility and extendibility 
- Cypress commands to resuse and share  the code and functionality among different test cases  
- Typescript to give more object orriented programming approach in code writing 


### Target Audience 

- You should have some programming background.
- You should have knowledge about cypress.
- Knowledge of page object development pattern.
- You should be expert with npm and node JS.
- You already have developed a test automation framework.
- experience in reading and reviewing code 


## Provided Codebase

The codebase consists of following folder structure:
- **Fixture Folder:** Used for parameterization, the combinations of test data is present in this folder , all the data files used by your tests are stored in this folder 
- **Integrations folder**: Your main code is present in this folder. The main TS file that is run by cypress is present in the folder  
- **Page Objects:** The verfication of each page and each page's functionality is tested in a seperatly class and every pages object can be found in this folder

- **Support:** This folder usually contains the commands used in cypress.**Please note that you need index.d.ts to define command on the cypress chainable interface , otherwise it will not pick that command**.In this folder **commands.js** in which all commands are present
- **cypress.env.json:** This is the most important file because it consist of user's senstive data like IBAN and passport number , so it is best to keep this feel out of our test scripts location. 
- **tsconfig:** This file is used to configure cypress for typescript     



### How to run tests 


- **install npm:** This is the most important part, if you don’t have npm, nothing will work. Install npm according to your operating system and hit the command **npm –version** 
- **clone the repo:** clone this repo into your own private repo , please don’t fork it  
- **npm install:** Go into the main folder and you will see a package.json file. In the same folder open your cmd and type npm install. This will install cypress and all the other dependencies. Don’t worry it will take time. **Please make sure all the dependencies are installed otherwise cypress will not work with typescript.**  
- **run test:** After the install run command **npm start**. This will launch cypress test runner. A  Test runner is basically A GUI version where you can see your test running. If you want to  run tests in a headless mode please run this command of **npm run**      

## Note! that the tests implemented are not 100% bullet proof there are some assertions failing , please refere to problems document attached in the task 