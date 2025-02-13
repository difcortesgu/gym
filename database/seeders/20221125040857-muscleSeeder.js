'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Muscles', [
        { name: 'Biceps', muscle_group_id: 2 },
        { name: 'Triceps', muscle_group_id: 2 },
    ]);
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Muscles', null, {});
}


