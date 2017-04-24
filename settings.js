//require('dotenv').config({silent:true});

module.exports = {
    
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development',

    //enviroment-dependent settings ':memory:'
    development:{
        db:{
            dialect: 'sqlite',
            storage: './db/database.sqlite'
        }

    },
    production:{
        db:{
            dialect:'sqlite',
            storage:'./db/database.sqlite'
        }
    }

};