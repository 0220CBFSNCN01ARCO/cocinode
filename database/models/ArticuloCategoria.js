/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ArticuloCategoria', {
		idArticulo: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Articulo',
				key: 'id'
			},
			field: 'idArticulo'
		},
		idCategoria: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Categoria',
				key: 'id'
			},
			field: 'idCategoria'
		},
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		}
	}, {
		tableName: 'articulos_categoria'
	});
};
