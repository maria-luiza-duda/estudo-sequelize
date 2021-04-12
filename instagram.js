const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize')

// Novo usuario
// Usuario.create({
//     nome: 'Malu',
//     email: 'malu@digitalhouse.com',
//     senha: 'malu123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Barbara',
//     email: 'barbcode@digitalhouse.com',
//     senha: 'barb123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Angelo',
//     email: 'angelo@digitalhouse.com',
//     senha: 'angelo123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Lucio',
//     email: 'lucio@digitalhouse.com',
//     senha: 'lucio123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Dari',
//     email: 'dari@digitalhouse.com',
//     senha: 'dari123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Manu',
//     email: 'manu@digitalhouse.com',
//     senha: 'manu123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

//-----------------------------------------------------------------

//Trazer todos os usuarios
Usuario.findAll().then((usuarios) => {
    console.table(usuarios.map((usuario) => usuario.toJSON()));
})

//-----------------------------------------------------------------

// //Atualização de usuario
// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, 
// {
//     where: {
//      id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

//-----------------------------------------------------------------

//Excluir usuario
// Usuario.destroy({
//     where: {
//     id: [3, 11, 12, 13, 14, 15, 16]
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

//-----------------------------------------------------------------

// Filtros
// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(usuario => usuario.toJSON()));
// });

// Usuario.findAll({
//     where: {
//         nome: {[Op.notLike]: '%a%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(usuario => usuario.toJSON()));
// });

// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(usuario => usuario.toJSON()));
// });

// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//       order: [['texto']],
//       offset: i,
//       limit: 2,
//     }).then((resultado) => {
//       console.table(resultado.map((comentario) => comentario.toJSON()));
//     });
// }

//-----------------------------------------------------------------

//Criar post e filtrá-lo
// Post.create({
//     texto: 'oi galeran',
//     img: null,
//     usuarios_id: 8,
//     n_likes: 1000
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

Post.findAll()
.then((resultado) => {
    console.table(resultado.map(usuario => usuario.toJSON()));
});