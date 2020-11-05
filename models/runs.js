const { Sequelize } = require('sequelize')

/**
 * @param {Sequelize} sequelize 
 * @param {*} DataTypes 
 */
module.exports = function (sequelize, DataTypes) {
    const Run = sequelize.define('Runs', {
        game: DataTypes.STRING,
        category: DataTypes.STRING,
        timeMilliseconds: {
            type: DataTypes.INTEGER,
            field: 'time_ms',
        },
        dateCompleted: {
            type: DataTypes.DATE,
            field: 'date_completed'
        }
    });

    Run.associate = function (models) {
        Run.belongsTo(models.Users, {
            foreignKey: {
                field: 'user_id',
                allowNull: false,
            },
            onDelete: 'cascade',
        });
    };

    return Run;
}