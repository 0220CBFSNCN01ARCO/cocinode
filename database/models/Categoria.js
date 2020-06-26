/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Categoria = sequelize.define('Categoria', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nombre: {
			type: DataTypes.STRING(450),
			allowNull: false,
			field: 'nombre'
		},
		descripcion: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'descripcion'
		},
		imagen: {
			type: DataTypes.STRING(450),
			allowNull: true,
			field: 'imagen'
		}
	}, {
		tableName: 'categorias'
  });
  
  // Asociacion
  Categoria.associate = function(models) {
  
    // Muchos a muchos
    // belongsToMany(models.ModeloRelacionado)
    Categoria.belongsToMany(models.Articulo, {
        as: 'articulos',
        through: models.ArticuloCategoria,
        foreignKey: 'idCategoria',
        otherKey: 'idArticulo',
    })
}

  return Categoria;
};
