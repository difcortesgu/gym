'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.addColumn('MuscularExercises', 'set_id',
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'Sets',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
        });
    await queryInterface.addColumn('CardioExercises', 'set_id',
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'Sets',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
        });
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('MuscularExercises', 'set_id');
    await queryInterface.removeColumn('CardioExercises', 'set_id');
}
