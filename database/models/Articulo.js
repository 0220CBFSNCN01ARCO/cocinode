/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Articulo = sequelize.define('Articulo', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		titulo: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'titulo'
		},
		puntaje: {
			type: "DOUBLE",
			allowNull: true,
			field: 'puntaje'
		},
		fechaPublicacion: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'fechaPublicacion'
		},
		imagenDestacada: {
			type: DataTypes.STRING(450),
			allowNull: true,
			field: 'imagenDestacada'
		},
		contenido: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'contenido'
		},
		publicado: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'publicado'
		},
		idUsuario: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Usuario',
				key: 'id'
			},
			field: 'idUsuario'
		}
	}, {
		tableName: 'articulos'
    });
    
    // Asociacion
    Articulo.associate = function(models) {
        // models == TODOS LOS MODELOS
        Articulo.hasMany(models.Comentario, {
            // as == alias de la relacion - asociación
            as: 'comentarios',
        });

        Articulo.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'idUsuario'
        });

        // Muchos a muchos
        // belongsToMany(models.ModeloRelacionado)
        Articulo.belongsToMany(models.Categoria, {
            as: 'categorias',
            through: models.ArticuloCategoria,
            foreignKey: 'idArticulo',
            otherKey: 'idCategoria'
        });
    }

    return Articulo;
};
