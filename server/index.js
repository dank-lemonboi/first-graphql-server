const { GraphQLServer } = require("graphql-yoga");

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  },
  {
    id: "link-1",
    description: "Prisma turns your database🐩 into a GraphQL API 💩",
    url: "https://www.prismagraphql.com"

  },
  {
    id: "link-2",
    description: "🐨The best GraphQL client ⚰",
    url: "http://www.apollographql.com/docs/react"

  },
  {
    id: "link-3",
    description: "Why you no graphQL?〰",
    url: "https://www.whyyoushouldgraphql.com/rect"

  }
];

let idCount = links.length;
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      console.log(link);
      return link;
    },
    delete: (root, args) => {
      // console.log(args.id, links)
     let index = links.map( link => link.id).indexOf(args.id) 
       if (index !== -1) {
         links.splice(index, 1)
         return links
     }
   },
   update: (root, args) => {
     let index = links.map( link => link.id).indexOf(args.id)
      if (links[index].id === args.id) {
        links[index].description = args.description;
        links[index].url = args.url;
        return links
      }
     }
 }
};

const server = new GraphQLServer( {
  typeDefs: './src/schema.graphql',
  resolvers
} );

server.start(() => console.log(`Server is running on http://localhost:4000`));
