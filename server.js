const express = require('express');
const graphQL = require('express-graphql');
const bodyparser = require('body-parser');

const route = require('./routes/routes');
const schema = require('./schema/schema');

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/graphql',graphQL({
  schema,
  graphiql: true
}));


app.use('/api',route);

app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});

