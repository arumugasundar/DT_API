### Express with typescript setup

- Navigate to the project's root directory
- Run `npm init -y`
- Run `npm i express`
- Run `npm i -D typescript @types/express` (not needed in prod - since in prod we only executing the transpiled javascript version of the code)
- Create src/index.ts and copy paste the below code
    ```import express from "express";

    const app = express();

    const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Running on Port ${PORT}`);
    })```
- Run `npx tsc --init`, `tsconfig.json` is generated in the root directory
- Uncomment and set `"rootDir"` to `"./src"`
- Similarly `"outDir": "./dist"`,`"noImplicitAny": true`,`"strictNullChecks": true` and `"strictFunctionTypes": true`
- Run `npx tsc --build`, `dist` folder is created in the root directory
- Run `npm i -D nodemon ts-node`
- Add following `"scripts"` to package.json
    - `"start:dev": "nodemon ./src/index.ts"`
    - `"build": "tsc --build"`
    - `"start": "node ./dist/index.js"`
- App will run sucessfully on mentioning those commands
- Run `npm run build` & `npm run start` to execute the production ready files
- Create `Dockerfile` in root directory, and copy paste the below code
    ```FROM node:alpine

    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY ./ ./
    RUN npm run build

    EXPOSE 3000
    CMD ["npm","start"]```

- Create `.dockerignore`, and copy paste the below code
    ```node_modules
    dist
    Dockerfile
    .dockerignore
    .git```
- To create a docker image - `docker build -t express-ts-app .`
- To run the docker image - `docker run -p 3000:3000 express-ts-app`
