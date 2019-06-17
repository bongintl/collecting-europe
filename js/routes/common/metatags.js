var { DB_ROOT, META_DESCRIPTION, TWITTER } = require('../../config');

var dictionary = [
    {
        name: "description",
        content: "=description"
    },{
        property: "og:type",
        content: "website"
    },{
        property: "og:title",
        content: "=title"
    },{
        property: "og:image",
        content: "=image"
    },{
        property: "og:url",
        content: "=url"
    },{
        property: "og:description",
        content: "=description"
    },{
        itemprop: "name",
        content: "=title"
    },{
        name: "twitter:card",
        content: "summary_large_image"
    },{
        name: "twitter:site",
        content: "=twitter"
    },{
        name: "twitter:creator",
        content: "=twitter"
    },{
        name: "twitter:url",
        content: "=url"
    },{
        name: "twitter:title",
        content: "=title"
    },{
        name: "twitter:description",
        content: "=description"
    },{
        name: "twitter:image",
        content: "=image"
    }
];

module.exports = function( ctx ) {
    
    var data = {
        title: "Collecting Europe",
        description: META_DESCRIPTION,
        url: location.hostname + location.pathname,
        twitter: TWITTER
    }
    
    if ( ctx.data.me ) {
    
        var id = ctx.data.me.id;
        
        data.image = DB_ROOT + '/img/' + id;
        
    }
    
    dictionary.forEach( attrs => {
        
        var element = document.createElement('meta');
        
        for ( var attr in attrs ) {
            
            var value = attrs[ attr ];
            
            if ( value.charAt( 0 ) === '=' ) {
                
                value = data[ value.slice( 1 ) ];
                
                if( !value ) return;
                
            }
            
            element.setAttribute( attr, value );
            
        }
        
        document.head.appendChild( element );
        
    });
    
}