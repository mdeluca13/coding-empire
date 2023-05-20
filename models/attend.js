// Import Requirements
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attend extends Model {}

// Creating Table
Attend.init(
  {
    attend_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // unique: true,
        references: {
            model: 'user',
            key: 'user_id',
        },
    },
    talk_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'talk',
            key: 'talk_id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'attend',
  }
);

module.exports = Attend;