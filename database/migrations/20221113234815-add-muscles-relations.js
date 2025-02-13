'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('Muscles_CardioExcercises', {
        cardio_exercise_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'CardioExercises',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
        },
        tool_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Muscles',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
        },
    });

    await queryInterface.createTable('Muscles_MuscularExcercises', {
        cardio_exercise_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'MuscularExercises',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
        },
        tool_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Muscles',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
        },
    });

}
export async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Muscles_CardioExcercises');
    await queryInterface.dropTable('Muscles_MuscularExcercises');
}
