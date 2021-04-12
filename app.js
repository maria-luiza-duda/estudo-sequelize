const sequelize = require('sequelize');
const config = require('./config/config');
const conexaoDB = new sequelize(config);

conexaoDB.query('SELECT * FROM instagram.usuarios', sequelize.QueryTypes.SELECT)
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

conexaoDB.query('SELECT * FROM instagram.posts', sequelize.QueryTypes.SELECT)
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

conexaoDB.query('SELECT * FROM instagram.comentarios', sequelize.QueryTypes.SELECT)
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});