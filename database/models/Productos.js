module.exports = (sequelize, dataTypes) => {

    const alias = 'Productos';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        id_author: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        id_category: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: dataTypes.DECIMAL(3, 1),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        date_entry: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };

    const config = {
        tableName: 'products',
        timestamps: false
    };

    const Productos = sequelize.define(alias, cols, config);

    Productos.associate = (models) => {
        Productos.belongsTo(models.Categorias, {
            as: 'categorias',
            foreignKey: 'id_category'
        });
            Productos.belongsTo(models.Autores, {
            as: 'autores',
            foreignKey: 'id_author'
        });

    };

return Productos;

}