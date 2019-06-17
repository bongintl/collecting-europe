var $ = require('jquery');
var answersToArray = require('../../blob/lib/answersToArray');
var { DB_ROOT } = require('../../config');
var createMetaTags = require( './metatags' );

module.exports = function ( ctx, next ) {
    
    $.get( DB_ROOT + ctx.path, res => {
        
        ctx.data = res;
        
        createMetaTags( ctx );
        
        next();
        
    })
    
}