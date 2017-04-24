'use strict';
const Home = require('./controllers/home');
const Note = require('./controllers/note');

module.exports = [

    {
        method: 'GET',
        path: '/',
       // handler: (request, reply) => {
           // reply('All the notes will appear here');
       // },
       handler: Home,       
        config: {
            description: 'Gets all the notes available'
        }
    },

    {
        method: 'POST',
        path: '/note',
        /*handler: (request, reply) => {
            reply('New note');
        },*/
        handler: Note.create,
        config: {
            description: 'Adds a new note'
        }
    },

    {
        method: 'GET',
        path: '/note/{slug}',
        /*handler: (request, reply) => {
            reply('This is a note');
        },*/
        handler: Note.read,
        config: {
            description: 'Gets the content of a note'
        }
    },

    {
        method: 'PUT',
        path: '/note/{slug}',
        /*handler: (request, reply) => {
            reply('Edit a note');
        },*/
        handler: Note.delete,
        config: {
            description: 'Updates the selected note'
        }
    },

    {
        //we could do DELETE method
        method: 'GET',
        path: '/note/{slug}/delete',
        handler: (request, reply) => {
            reply('This note no longer exists');
        },
        config: {
            description: 'Deletes the selected note'
        }
    },

];