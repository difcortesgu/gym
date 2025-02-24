'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserDetails', {
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
        height: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        weight: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        bmi: {
            type: Sequelize.FLOAT,
            allowNull: false,
        }
    });
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserDetails');
}