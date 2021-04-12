module.exports = (sequelize, DataTypes) => {
    
    const Post = sequelize.define(
        'Post', {
            mensagem: DataTypes.STRING
        }, 
        {
            tablePost: "posts",
            timestamps: false
        }
    );

    return Post;

}