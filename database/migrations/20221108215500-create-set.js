'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
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
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Sets');
    }
};