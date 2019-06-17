var $ = require('jquery');
var cookies = require('js-cookie');

var KEY = "collecting_europe_language";

var $window = $(window);
var $body = $('body');

var $display = $('.language-display');
var $select = $('.language-select');

function setLanguage ( to ) {
    
    $body.removeClass( ( i, className ) => {
        
        var names = className.match( /(^|\s)lang-\S+/g ) || [];
        
        return names.join(' ');
        
    });
    
    $body.addClass( 'lang-' + to );
    
    $window.trigger( 'languageChange', to );
    
    cookies.set( KEY, to );
    
}

module.exports = function( ctx, next ) {
    
    var language = cookies.get( KEY );
    
    if ( !language ) {
        
        language = 'en';
        
    }
    
    setLanguage( language );
    
    $display.click( () => $select.css('display', 'block') );
    
    $select.find('a').toArray().forEach( el => {
        
        var $el = $(el);
        var lang = $el.data('lang');
        
        $el.click(() => {
            
            setLanguage( lang );
            $select.css('display', 'none');
            
        })
        
    })
    
    next();
    
}