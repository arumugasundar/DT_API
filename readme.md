Express with typescript setup

1. navigate to the project's root directory
2. npm init -y
3. npm i express
4. npm i -D typescript @types/express (not needed in prod - since in prod we only executing the transpiled javascript version of the code)
5. create src/index.ts
6. copy paste the below code
import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
})
7. npx tsc --init, tsconfig.json is generated in the root directory
8. uncomment and set "rootDir" to "./src"
9. similarly "outDir": "./dist","noImplicitAny": true,"strictNullChecks": true and "strictFunctionTypes": true
10. npx tsc --build, dist folder is created in the root directory
11. run npm i -D nodemon ts-node
12. add following "scripts" to package.json
      "start:dev": "nodemon ./src/index.ts"
      "build": "tsc --build"
      "start": "node ./dist/index.js"
13. app will run sucessfully on mentioning those commands
14. npm run build & npm run start will execute the production ready files
15. create Dockerfile, and copy paste the below code
FROM node:alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

EXPOSE 3500
CMD ["npm","start"]
16. create .dockerignore, and copy paste the below code
node_modules
dist
Dockerfile
.dockerignore
.env
.git

17. to create a docker image - `docker build -t express-ts-app .`
18. to run the docker image - `docker run -p 3000:3000 express-ts-app`
