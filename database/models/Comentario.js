/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
 
	const Comentario = sequelize.define('Comentario', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		contenido: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'contenido'
		},
		fecha: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'fecha'
		},
		publicado: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'publicado'
		},
		idArticulo: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Articulo',
				key: 'id'
			},
			field: 'idArticulo'
		}
	}, {
		tableName: 'comentarios'
    });
    
    Comentario.associate = function(models){
        // models == TODOS LOS MODELOS
        Comentario.belongsTo(models.Articulo, {
            // as == alias de la relacion - asociación
            as: 'articulo',
            // key == clave foranea que relaciona ambas tablas
            foreignKey: 'idArticulo'
        })
    }

    return Comentario;


};
