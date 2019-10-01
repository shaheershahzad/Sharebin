'use strict';

module.exports = function(Client) {
    Client.validatesUniquenessOf('name');



    Client.calculateYears = function(id, cb){
        console.log("Hemos llamado a calculateYears con id " + id);

        Client.findById(id, function(err, client) {
            let years = Math.round(Math.random()*50);
            
            return cb(null, 'La edad de ' + client.name + ' es ' + years +' Años');
        });
    }


    Client.remoteMethod('calculateYears',
        {
          accepts: [{arg: 'id', type: 'number', required: true}],
          returns: {arg: 'result', type: 'string'},
          http: {path: '/calculateYears', verb: 'get'}
        }
      );
};
