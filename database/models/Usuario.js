/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Usuario', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nombre: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'nombre'
		},
		email: {
			type: DataTypes.STRING(200),
			allowNull: false,
			unique: true,
			field: 'email'
		},
		password: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'password'
		},
		fechaCreacion: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'fechaCreacion'
		},
		avatar: {
			type: DataTypes.STRING(450),
			allowNull: true,
			field: 'avatar'
		}
	}, {
		tableName: 'usuarios'
	});
};
