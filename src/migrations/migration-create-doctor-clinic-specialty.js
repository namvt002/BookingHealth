'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('doctor_clinic_specialty', {
            //     key: DataTypes.STRING,
            // type: DataTypes.STRING,
            // value_en: DataTypes.STRING,
            // value_vi: DataTypes.STRING,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            docterId: {
                type: Sequelize.INTEGER
            },
            clinicId: {
                type: Sequelize.INTEGER
            },
            specialtyId: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('doctor_clinic_specialty');
    }
};