const graphql = require('graphql');
const {
 GraphQLString ,
 GraphQLInt,
 GraphQLObject,
} = graphql;

const types = require('./type');

const mutation =  new GraphQLObject({
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
        
      }
    }
  }
});

module.exports = mutation;