const { ApolloServer,gql } = require('apollo-server')
const resolvers = require('./resolvers');
const {readFileSync}=require('fs')
const typeDefs = gql(readFileSync('./schema.graphql', { encoding: "utf-8" }));
const GoRestAPI = require('./database/fetchData')
require('dotenv').config()
const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers,
    dataSources: () => {
        return {
            GoRestAPI: new GoRestAPI()
        }
    }
})

server.listen({ port: process.env.PORT | 4000 }).then(({url}) => {
    console.log(`🚀 Subgraph ${process.env.GRAPHNAME} running at ${url}`);
}).catch((err) => {
    console.log(err);
})