'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('MuscularExercises', {
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
            weight: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            repetitions: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('MuscularExercises');
    }
};