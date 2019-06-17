var $ = require('jquery');
var PREFIXED_TRANSFORM = require('detectcss').prefixed('transform');
var translate = require('../../lib/translate');

module.exports = class Stat {
    
    constructor ( question ) {
        
        this.element = $(`
            <div class="stat">
            
                <p class="stat__question">
                    ${ translate( question.question ) }
                </p>
                
                <div class="stat__answers">
                    
                    <p class="stat__answer stat__answer_left">
                        ${ translate( question.left.answer ) }
                    </p>
                    
                    <div class="stat__bar">
                        
                        <div class="stat__indicator"></div>
                    
                    </div>
                    
                    <p class="stat__answer stat__answer_right">
                        ${ translate( question.right.answer ) }
                    </p>
                
                </div>
                
            </div>
        `);
        
        this.value = 0;
        
        this.indicator = this.element.find('.stat__indicator');
        
    }
    
    set ( value ) {
        
        this.value = value;
        
        this.indicator[0].style[ PREFIXED_TRANSFORM ] = `translateX(${ value * 50 }%)`;
        
    }
    
    appendTo ( element ) {
        
        element.append( this.element );
        
    }
    
    hover ( mousein, mouseout ) {
        
        this.element.off('hover').hover( mousein, mouseout );
        
    }
    
    click ( fn ) {
        
        this.element.off( 'click' ).on( 'click', fn );
        
    }
    
}