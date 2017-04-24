'use strict';

const Fs = require('fs');
const Path = require('path');
const Sequelize = require('sequelize');
const Settings = require('../../settings');

//database settings for current enviroment
const dbSettings = Settings[Settings.env].db;

const sequelize = new Sequelize(dbSettings.database, dbSettings.user, dbSettings.password, dbSettings);
const db = {};

//read all files and import them as models

Fs.readdirSync(__dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
    .forEach((file) => {
        const model = sequelize.import(Path.join(__dirname, file));
        db[model.name] = model;
    });

    db.sequelize = sequelize; //user in server.js
    db.Sequelize = Sequelize; //convenience method

    module.exports = db;