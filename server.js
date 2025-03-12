const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


// Define my schema
const schema = buildSchema(
    `
    type Query {
        welcome: String
        greet(name: String): String
    }
    `
);

const root = {
    welcome: ()=>'welcome to graphql',
    greet: ({name}) => `Hello ${name}`
};

const app = express();
app.use("/graphql", graphqlHTTP({schema: schema, rootValue:root, graphiql: true}));

//start the server

app.listen(4000, ()=>{
    console.log('server is ready');
})