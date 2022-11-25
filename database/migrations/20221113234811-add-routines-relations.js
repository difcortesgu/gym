'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Executions', 'routine_id',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Routines',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            })
        await queryInterface.addColumn('Sets', 'routine_id',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Routines',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Executions', 'routine_id')
        await queryInterface.removeColumn('Sets', 'routine_id')
    }
};
