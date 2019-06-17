module.exports = function translate ( obj ) {
    
    if ( typeof obj === 'string' ) return obj;
    
    var html = '';
    
    for ( var key in obj ) {
        
        html += `<span class="text-${ key }">${ obj[key] }</span>`;
        
    }
    
    return html;
    
}