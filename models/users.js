const { Sequelize } = require('sequelize')

function genGamerTag() {
    // Creates an array of 4 numbers and joins them as a string
    return new Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * 10))
        .join('');
}

/**
 * @param {Sequelize} sequelize 
 * @param {*} DataTypes 
 */
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: genGamerTag
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        indexes: [
            // Any given username-tag combination must be unique
            {
                unique: true,
                fields: ['username', 'tag'],
            }
        ],
    });

    return User;
}