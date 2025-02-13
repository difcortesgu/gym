'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
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
        });
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
        });
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Executions', 'routine_id');
    await queryInterface.removeColumn('Sets', 'routine_id');
}
