'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
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
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CardioExercises');
}