var Promise = require('promise');
var modal = require('../lib/modal');
var config = require('../../config');
var translate = require('../../lib/translate');

module.exports = function () {
    
    var warning = "<span class='warning'>" + translate( config.WARNING ) + "</span>";
    
    var startLabel = translate( config.START );
    var nextLabel = translate( config.NEXT );
    
    var startButton = {};
    startButton[ startLabel ] = 1;
    
    var nextButton = {};
    nextButton[ nextLabel ] = 1;
    
    if ( window.innerWidth < 768 ) {
        
        return modal([
            translate( config.INTRO_TEXT )
        ], {
            "Next": 1
        }).then( () => {
            return modal([
                translate( config.INSTRUCTIONS ),
                warning
            ], {
                "Start" : 1
            })
        });
        
    } else {
        
        return modal([
            translate( config.INTRO_TEXT ),
            translate( config.INSTRUCTIONS ),
            warning
        ], {
            "Start": 1,
        });

    }
    
    
}