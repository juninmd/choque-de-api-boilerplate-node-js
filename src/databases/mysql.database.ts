import { Sequelize } from 'sequelize-typescript';
import _settings from '../settings.env';

const sequelize = new Sequelize({
    database: _settings.database.dbname,
    dialect: _settings.database.dialect,
    username: _settings.database.username,
    password: _settings.database.password,
    modelPaths: _settings.database.modelPaths,
    operatorsAliases: false,
    logging: false
});

export default sequelize;