'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
    });

}
export async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
}