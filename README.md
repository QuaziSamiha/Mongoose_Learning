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
- **Benefit of Modular Pattern**

  1. scabillity
  2. maintainability
  3. better refactoring
  4. efficient development

- **Rules/Principle:**

1. DRY(don't repeat yourself)
   and
2. Fat Model/Thin Controller

- **For JS:** create schema --> create model --> db query
- **For TS:** interface --> schema --> model --> db query (for TS)
- src --> app --> modules --> student -> student.interface.ts
- follow this link (https://mongoosejs.com/docs/typescript.html)
