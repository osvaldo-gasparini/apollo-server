import { ApolloServer, gql } from "apollo-server";

const persons = [
  {
    name: "John",
    phone: "555-1212",
    street: "123 Main Street",
    city: "Anytown",
    id: 1,
  },
  {
    name: "Mary",
    street: "124 Main Street",
    city: "Anytown",
    id: 2,
  },
  {
    name: "Joe",
    phone: "555-1214",
    street: "125 Main Street",
    city: "Anytown",
    id: 3,
  },
  {
    name: "Jane",
    street: "126 Main Street",
    city: "Anytown",
    id: 4,
  },
  {
    name: "Bob",
    phone: "555-1216",
    street: "127 Main Street",
    city: "Anytown",
    id: 5,
  },
];

const typeDefs = gql`
  type Person {
    name: String!
    phone: String
    street: String!
    city: String!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person!]!
    findPerson(name: String!): Person
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (root, args) =>
      persons.find((p) => p.name === args.name),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});