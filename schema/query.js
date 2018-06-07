const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = graphql

const types = require('./type');

const axios = require('axios');

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user : {
      type: types.UserType,
      args: {id: { type: GraphQLString}},
      resolve(parentValue,args){
        return axios.get(`http://localhost:3000/api/users/${args.id}`)
          .then(res => res.data)
          .then(data=> data )
          .catch(err=>console.log(err))
      } 
    },
    company : {
      type: types.CompanyType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue,args){
        return axios.get(`http://localhost:3000/api/company/${args.id}`)
          .then(res=> res.data)
          .then(data=> data);
      }
    }
  }
});

module.exports = RootQuery;
