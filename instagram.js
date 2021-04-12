const { Usuario, Post, Comentario, sequelize } = require('./models');
const {Op} = require('sequelize')

Usuario.findAll({
    where: {
        nome: {[Op.like]: '%a%'}
    }
})
.then((resultado) => {
    console.table(resultado.map(usuario => usuario.toJSON()));
});

Usuario.findAll({
    where: {
        nome: {[Op.notLike]: '%a%'}
    }
})
.then((resultado) => {
    console.table(resultado.map(usuario => usuario.toJSON()));
});

Post.findAll()
.then((resultado) => {
    console.table(resultado.map(usuario => usuario.toJSON()));
});

for (let i = 0; i < 6; i += 2) {
    Comentario.findAll({
      order: [['texto']],
      offset: i,
      limit: 2,
    }).then((resultado) => {
      console.table(resultado.map((comentario) => comentario.toJSON()));
    });
}
