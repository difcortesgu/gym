'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Muscles', 'muscle_group_id',
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'MuscleGroups',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
        });
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Muscles', 'muscle_group_id');
}
