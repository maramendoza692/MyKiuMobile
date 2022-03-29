const {gql} = require('apollo-server');

const typeDefs = gql`

    type Proyecto {
        nombre: String
        id: ID
    }
    type Query {
        obtenerProyectos : [Proyecto]

    }
    type Token {
        token: String
    }
    input ProyectoInput {
        proyecto: String!
    }
    input UsuarioInput{
        nombre: String!
        email: String!
        password: String!
    }

    input AutenticarInput{
        email: String!
        password: String!
    }

    type Mutation {
        crearUsuario(input: UsuarioInput) : String
        autenticarUsuario(input: AutenticarInput): Token

        # Proyectos
        nuevoProyecto(input: ProyectoInput ) : Proyecto
        actualizarProyecto(id : ID!,  input: ProyectoInput) : Proyecto
        eliminarProyecto(id: ID!) : String

    }
`;
//input para pasar argumentos a mutations, definir la forma o valores qu eva a tomar
module.exports = typeDefs;