var $ = require('jquery');
var Promise = require('promise');
var { DB_ROOT } = require('../../config');

function save ( data ) {
    
    var req = {
        age: data.age,
        location: data.location
    };
    
    for ( var i = 0; i < 20; i++ ) {
        
        req[ 'answer_' + i ] = data.answers[ i ] || 0;
        
    }
    
    return new Promise( (resolve, reject) => {

        $.post( DB_ROOT + '/save', req, resolve )
        
    })
    
}

// window.save = () => {
    
//     save({
//         age: 1,
//         location: "United Kingdom",
//         answers: Array(10).fill(0).map(Math.random)
//     })
//     .then(response => {
//         debugger;
//     })
    
// }

module.exports = save;