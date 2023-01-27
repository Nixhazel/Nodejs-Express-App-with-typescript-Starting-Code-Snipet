# Nodejs-Express-App-with-typescript-Starting-Code-Snipet
Conversion from javascript to Typescript , procedures 
##STEPS 
1. used express generator to generate an express ap<br>
2. Run yarn<br>
3. Run yarn start after uv cheched your package.json<br>
4. Run yarn add typescript --dev<br>
// this will install typescript
5. tsc --init<br>
6. create an /src folder<br>
7. go inside tsconfig.json and add "outDir" : "./dist" and "rootDir" : "./src"<br>
// step 7 is already don in the tsconfig file in this repository 
8. add "include": ["./src"] in tsconfig <br>
9. move routes and app.js which will be changed to .ts into src folder<br>
10. enter /src change all the js files in the src folder to .ts<br>
11. Enter package.json. in scripts add <br>
        add  "dev":"tsc -w";<br>
        to help you run yarn dev<br>
12. run yarn add nodemom --d
13. enter /package.json<br>
          change "node ./bin/www"<br>
          to  "nodemon ./bin/www"<br>
14. run yarn dev<br>
15. enter /src and change all .ts files require = "" <br>
            to imports from and export default app and add "../" to app.set("views/"<br>
16. add {HttpError} in createError import function<br>
17. run yarn add <package name> --d on all the imports with error<br>
18. enter /bin/www and chnage to var app =require("--dist/app").default <br>

// when installing dev dependencies use yarn add --dev <name of dependency>
in your main src foler you should have a controler folder which will hold files were your logic goes<br>
Then a router folder wich willhold your connection to routes from app.js this router folder is moved into /src<br>
Then a utilities folder which will handle functions that will be used in multiple folders <br>
Then a middleware folder which will have a file that handles token authentication using req.header.authorizations. But this is only
  used when you plan to generate a token
  
  
