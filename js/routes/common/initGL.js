var createContext = require('gl-context');
var modal = require('../lib/modal');
var { ERROR, EXHIBITION_URL } = require('../../config')

var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

module.exports = function initGL ( ctx, next ) {
    
    var canvas = document.createElement('canvas');
    
    try { 
        
        if ( isIE11 ) throw new Error();
        
        var gl = createContext( canvas, { preserveDrawingBuffer: true } );
        
        ctx.gl = gl;
        
    } catch( e ) {
        
        modal( ERROR, {
            "Back to V&A": "href=" + EXHIBITION_URL
        });
        
    }
    
    if ( ctx.gl ) next();

    
}