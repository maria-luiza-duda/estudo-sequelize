module.exports = (sequelize, DataTypes) => {
    
    const Comentario = sequelize.define(
        'Comentario', {
            nome: DataTypes.STRING
        }, 
        {
            tableComentario: "comentarios",
            timestamps: false
        }
    );

    return Comentario;

}