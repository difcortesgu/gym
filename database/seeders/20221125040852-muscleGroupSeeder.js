'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MuscleGroups', [
        { name: 'Pecho' },
        { name: 'Brazos' },
        { name: 'Espalda' },
        { name: 'Piernas' },
    ]);
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MuscleGroups', null, {});
}


