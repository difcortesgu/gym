'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tools', [
        { name: 'Caminadora' },
        { name: 'Mancuernas' },
    ]);
}
export async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tools', null, {});
}
