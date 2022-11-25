'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('CardioExercises', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            speed: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            time: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            level: {
                type: Sequelize.FLOAT,
                allowNull: false,
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('CardioExercises');
    }
};