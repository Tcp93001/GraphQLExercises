const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
  
}));

app.listen(4004,() => {
    console.log('listening on port 4004');
})