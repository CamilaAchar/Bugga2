module.exports = (sequelize, dataTypes) => {

    const alias = 'Categorias';

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
        tableName: 'category',
        timestamps: false
    };

    const Categorias = sequelize.define(alias, cols, config);

    Categorias.associate = (models) => {
        Categorias.hasMany(models.Productos, {
            as: 'productos',
            foreignKey: 'id_category'
        });
    };
return Categorias;
}