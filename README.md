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
7. go inside tsconfig.json and add "outDir" : "./dist" <br>
// step 7 is already don in the tsconfig file in this repository 
8. add "include": ["./src"] in tsconfig <br>

// when installing dev dependencies use yarn add --dev <name of dependency>
in your main src foler you should have a controler folder which will hold files were your logic goes<br>
Then a router folder wich willhold your connection to routes from app.js<br>
Then a utilities folder which will handle functions that will be used in multiple folders <br>
Then a middleware folder which will have a file that handles token authentication using req.header.authorizations. But this is only
  used when you plan to generate a token
  
  
