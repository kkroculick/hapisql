'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');
const Routes = require('./lib/routes');
const Models = require('./lib/models/');
const Path = require('path');

const server = new Hapi.Server();
server.connection({ port: Settings.port });

/*server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Hello, world!');
  }
});*/

server.register([
  require('vision')
], (err) => {
  Hoek.assert(!err, err);

  // View settings
  server.views({
    engines: { pug: require('pug') },
    path: Path.join(__dirname, 'lib/views'),
    compileOptions: {
      pretty: false
    },
    isCached: Settings.env === 'production'
  });

  // Add routes
  server.route(Routes);
});

Models.sequelize.sync().then(() => {
  server.start((err) => {
    Hoek.assert(!err, err);
  });

});

