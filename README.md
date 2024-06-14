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
- tsc
- within package.json --> "build": "tsc",
  and then run this command to your console:
- npm run build (after run this command dist folder and app.js file within dist folder will be created automatically)
- node .\dist\app.js
