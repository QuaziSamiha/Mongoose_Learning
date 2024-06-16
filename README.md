# Mongoose_Learning

**Initial Set up for project:**

- npm init -y (for initializing package.json file)
- npm install express (https://expressjs.com/en/starter/installing.html)
- npm install mongoose --save (https://mongoosejs.com/docs/)
- npm install typescript --save-dev (https://www.typescriptlang.org/download/)
- npm i cors (https://www.npmjs.com/package/cors)
- npm install dotenv --save (https://www.npmjs.com/package/dotenv)
- tsc -init (for typescript json file --> for typescript config file)
- rootDir: './src' and outDir: './dist' (src for ts file, and dist to store js file)
- manually make src folder, and make app.ts within src folder
- dist
- for app.ts (https://expressjs.com/en/starter/hello-world.html)
- node cannot run typescript, so we need to convert ts to js
- tsc (convert ts to js)
  Or
- within package.json --> "build": "tsc",
  and then run this command to your console:
- npm run build (after run this command dist folder and app.js file within dist folder will be created automatically)
- node .\dist\app.js

# 8-2 Installing Express , Mongoose, Typescript, Dotenv ,Cors

- .env file create
- connect to mongodb atlas
- src --> app --> config --> index.ts
- npm i --save-dev @types/node
- cwd() -- current working directory
- npm run build
- node .\dist\app.js
- path --> core module of node js
- npm i --save-dev @types/express

- **Mongoose link:** (https://mongoosejs.com/docs/index.html)

- connect to mongoDB driver (https://cloud.mongodb.com/v2/65a7afa179b5f65292e11632#/overview)
- Steps:

1. Overview:

- connect
- drivers
- copy database url and paste to .env file

2. Database Access --> to create new user

- password: user123
- user: mongooseLearningUser1
- select role: atlas admin
- add user
- database name: mongooseLearningDB1

3. project configuration

- manually create app folder within src folder
- create config folder within app folder
- create index.ts folder to config folder
- read dot env documentation (https://www.npmjs.com/package/dotenv)
- find out .env path (use process.cwd() method at app.ts)
- to connect current directory with .env file using path module of node js at index.ts file
- export port, db url from index.ts
- express doesn't give type declaration file by default so run this command:
  npm i --save-dev @types/express

# 8-3 Installing Eslint, Refactor Code, Fix Errors Using Command

- add parser to app.ts file
- npm i --save-dev @types/cors
- **Eslint** -- code format, find errors, code quality check
- typescript eslint prettier setup -- google it
- link{https://blog.logrocket.com/linting-typescript-eslint-prettier}
- npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
- npx eslint --init ( add rules to eslintrc.json file)
- npx eslint src .
  Or
- change package.json file
- npm run lint
- npx eslint src --fix
  Or
- make change to package.json file
- npm run lint:fix

<!-- 15 June, 2023 -->

# 8-4 Install Prettier,Ts-Node-Dev,Fix Formatting Issues

- npm install --save-dev prettier (https://blog.logrocket.com/linting-typescript-eslint-prettier)
- create .prettierrc.json file
- npx prettier --write src/app.ts (to use prettier from command line)
  Or
- npm run prettier:fix (after adding to package.json file)
- package.json file modify for format and run command:
  npm run prettier
- vs code settings modify (settings -> settings -> settings.json)
- npm install --save-dev eslint-config-prettier (to avoid conflict between prettier and eslint)
- modify eslintrc.json

- to avoid run these commands: npm run build and node .\dist\server.js
- npm i ts-node-dev (https://www.npmjs.com/package/ts-node-dev) --> not for used production(only used development)
- npm i ts-node-dev --save-dev (mainly used it)
- ts-node-dev --respawn --transpile-only src/server.ts

- modify package.json file
- run:
  npm run build
  npm run start:dev
  Or
  npm run start:prod

  # 8-5 Software Design Pattern , Mvc Vs Modular, Create An Interface

- for express application or web application, mainly we use two design pattern: **MVC** and **Modular**

- **MVC:**
  1. contains models, views and controllers
- interfaces , routes , models, views(used template enginee - what is it?), controllers

- **Modular Pattern:**
- **Benefit of Modular Pattern:**

  1. scabillity
  2. maintainability
  3. better refactoring
  4. efficient development

- **Rules/Principle:**

  1. DRY(don't repeat yourself)
  2. Fat Model/Thin Controller

- **For JS:** create schema --> create model --> db query
- **For TS:** interface --> schema --> model --> db query
- src --> app --> modules --> student -> student.interface.ts
- follow this link (https://mongoosejs.com/docs/typescript.html)
- interface --> schema --> model --> db query --> follow this rule always
- create an interface

# 8-6 Create An Schema For A Student

- **Schema Types:** (https://mongoosejs.com/docs/schematypes.html)
- create src --> app --> modules --> student.model.ts

# 8-7 Refactor Your Schema

# 8-8 Create Route , Service And Controller

- create model to student.model.ts file using schema

# 8-9 Insert A Student Data Into MongoDB

- **Modular Pattern:**

- client to route --> route will call controler function --> controler will call service function --> service will handle business logic
- service will take data from database by using query and send those data to controller --> controller will provide those data to client as response

- **Request - Response Flow of Modular Pattern:**

- client (react, angular, postman, vue) --> (req) --> route.ts --> (req) --> controller.ts --> (req) --> service.ts --> (req) --> database
- database --> (res) --> service.ts --> (res) --> controller.ts --> (res -- success, message, data) --> client (react, angular, postman, vue)

- create student.route.ts file into student folder
- send data to mongodb using postman
- postman steps: create new collection --> add request --> give url --> give data --> run
- see the data using mongodb atlas or mongodb compass (copy paste database url to mongodb compass and save and connect to see the result)

# 8-10 Create Get Student Route

- best practice:
  npm run lint (checking error)
  npm run prettier (checking format)

# 9-1 Introduction To Validation

- when we send data from client (react, angular, vue, postman), mongoose do mapping those data with its model. for this reason, mongoose is called object data modeling library. If our data are valid, then mongoose store those data to mongoDB through mongodb driver. So mongoose do validation.

- Sometimes we need to do validation one more time. such as mongoose don't do validation for data type such as a data will be string, boolean or array or nested.

- We can do 3 types validation by mongoose:

  1. builtin validation (provided by mongoose)
  2. custom validation (by custom function)
  3. third party validation libraries (such as validator/Zod/Joi)

- **Mongoose Validation:** (https://mongoosejs.com/docs/validation.html)

- **mongoose builtin validation:** (https://mongoosejs.com/docs/validation.html#built-in-validators)

- **Mongoose Built-in Validation:** modify student.model.ts file
- **Enum, Default Value,**
- **Custom error message**

- **Run Server** npm run start:dev

# 9-2 How To Do Custom Validation

- modify student.controller.ts file -> add error status to catch block
- modify student.model.ts file
- **Max length**
- **Trim:** (https://mongoosejs.com/docs/search.html?q=trim)
- **Uppercase:** (https://mongoosejs.com/docs/search.html?q=uppercase)

- **Custom Validation in Mongoose:** how to make a string capitalize in js (ask to chat gpt)
