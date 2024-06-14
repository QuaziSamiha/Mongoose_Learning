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
