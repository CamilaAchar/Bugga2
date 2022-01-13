module.exports = (sequelize, dataTypes) => {

    const alias = 'Autores';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };

    const config = {
        tableName: 'author',
        timestamps: false
    };

    const Autores = sequelize.define(alias, cols, config);

    Autores.associate = (models) => {
        Autores.hasMany(models.Productos, {
            as: 'productos',
            foreignKey: 'id_author'
        });

    };
return Autores;
}