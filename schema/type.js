const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = graphql

const CompanyType = new GraphQLObjectType({
  name:"Company",
  fields:()=>({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    address: { type: GraphQLString},
    users: {
      type: new GraphQLList(UserType),
      args: {},
      resolve(parentValue,args){
        console.log(parentValue.id)
        return axios.get(`http://localhost:3000/api/company/1/users`)
          .then(res => res.data)
          .then(data=> data)
          .catch(err=> console.log(err));
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name:"User",
  fields: ()=>({
    id: { type: GraphQLInt },
    firstname: { type: GraphQLString },
    age: { type: GraphQLInt },
    company : {
      type : CompanyType,
      args : { companyId: { type: GraphQLInt} },
      resolve(parentValue,args){
        return axios.get(`http://localhost:3000/api/company/${args.companyId}`)
          .then(res=> res.data)
          .then(data=> data);
      }
    }
  })
});

module.exports = {
  UserType,
  CompanyType,
}