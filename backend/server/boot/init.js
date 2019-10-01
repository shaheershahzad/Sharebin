'use strict';

module.exports = function (server) {
    console.log(server);
    Client.create( {name: 'Admin', username: 'admin', email: 'admin@admin.com', password: 'admin'},
        function(err, client) {
            console.log("Client created!! : " + client.name);
    });
}