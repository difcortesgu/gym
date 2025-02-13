'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.addColumn('UserDetails', 'user_id',
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
        });
    await queryInterface.addColumn('Routines', 'user_id',
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
        });
    await queryInterface.addColumn('Executions', 'user_id',
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
        });
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('UserDetails', 'user_id');
    await queryInterface.removeColumn('Routines', 'user_id');
    await queryInterface.removeColumn('Executions', 'user_id');
}
