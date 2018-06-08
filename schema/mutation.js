const axios = require('axios');

const graphql = require('graphql');
const {
 GraphQLString,
 GraphQLInt,
 GraphQLObjectType,
} = graphql;

const types = require('./type');

const mutation =  new GraphQLObjectType({
  name:"mutation",
  fields:{
    addUser: {
      type: types.UserType,
      args: {
        id: { type: GraphQLInt },
        firstname : { type: GraphQLString },
        age : { type: GraphQLInt }

      },
      resolve(parentValue,args){
        return axios.post(`http://localhost:3000/api/users`,{args})
          .then(res=> res.data)
          .then(data=> data);
      }
    }
  }
});

module.exports = mutation;