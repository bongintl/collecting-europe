var $ = require('jquery');
var BlobViewer = require('../../blob/viewer')
var scale = require('../../lib/scale');
var questions = require('../../questions.json');
var save = require('../lib/save');
var template = require('../lib/template')( require('./sandbox.html') );

var sliderContainer;

function uniformSetter1 ( blob, question ) {
    
    var uniform = question.left.uniform;
    var min = question.left.max;
    var max = question.right.max;
    
    return function ( value ) {
        
        blob.setUniform( uniform, scale( value, -1, 1, min, max ) );
        
    }
    
}

function uniformSetter2 ( blob, question ) {
    
    var { uniform: leftUniform, min: leftMin, max: leftMax } = question.left;
    var { uniform: rightUniform, min: rightMin, max: rightMax } = question.right;
    
    return function ( value ) {
        
        if ( value < 0 ) {
            
            blob.setUniform( rightUniform, 'default' );
            blob.setUniform( leftUniform, scale( value, 0, -1, leftMin, leftMax ) );
            
        } else {
            
            blob.setUniform( leftUniform, 'default' );
            blob.setUniform( rightUniform, scale( value, 0, 1, rightMin, rightMax ) );
            
        }
        
    }
    
}

function uniformSetter ( blob, question ) {
    
    if ( question.left.uniform === question.right.uniform ) {
        
        return uniformSetter1( blob, question );
        
    } else {
        
        return uniformSetter2( blob, question );
        
    }
    
}

function createInput( onChange ){
    var slider = document.createElement('input');
    slider.setAttribute('type', 'range');
    slider.setAttribute('min', -1);
    slider.setAttribute('max', 1);
    slider.setAttribute('step', .0001);
    slider.addEventListener('input', () => onChange( slider.value ) );
    return slider;
}

function createLabel( question ) {
    
    var p = document.createElement('p');
    p.innerHTML = `${question.question.en}<br>${question.left.answer.en} ↔ ${question.right.answer.en}`;
    return p;
    
}

function addSlider ( blob, question ) {
    
    var setter = uniformSetter( blob, question )
    var label = createLabel( question );
    var input = createInput( setter );
    sliderContainer.appendChild( label );
    sliderContainer.appendChild( input );
    
    return input;
    
}

module.exports = function ( ctx, next ) {
    
    template();
    
    sliderContainer = document.createElement('div');
    sliderContainer.classList.add('sliders');
    document.body.appendChild(sliderContainer);
    
    var gl = ctx.gl;
    var envMap = ctx.envMap;
    
    var params = {
        marbleTexture: envMap,
        camera: [ 0, 0, 5 ]
    }
    
    var blob = new BlobViewer( gl, params );
    
    var sliders = questions.map( q => addSlider( blob, q ) );
    
    function onResize () {
        
        blob.setSize( window.innerWidth, window.innerHeight );
        
    }
    
    window.addEventListener('resize', onResize);
    
    blob.enableCameraControls();
    onResize();
    blob.tick();
    
    document.body.appendChild( blob.canvas );
    
    next();
    
    $('.button_shuffle').click(() => {
        
        sliders.forEach( slider => {
            
            slider.value = Math.random() * 2 - 1;
            
            var event = new Event( 'input' );
            
            slider.dispatchEvent( event );
            
        })
        
    })
    
    $('.button_save').click(() => {
        
        var answers = sliders.map( slider => Number(slider.value) );
        
        save({
            answers,
            age: 0,
            location: "United Kingdom"
        })
        .then( id => {
            
            alert('👍🏻 ID:' + id );
            
        })
        
    })
    
}