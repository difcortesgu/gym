'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sets', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        number: {
            type: Sequelize.INTEGER
        }
    });
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sets');
}