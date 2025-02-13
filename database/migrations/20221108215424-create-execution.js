'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('Executions', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    });
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Executions');
}