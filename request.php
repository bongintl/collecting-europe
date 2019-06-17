<?php

$root = 'http://95.85.37.181';

$path = $_GET['q'];

if ( $path === '/save' ) {
    
    $options = array(
        'http' => array(
        'method'  => 'POST',
        'content' => json_encode( $_POST ),
        'header'=> 
            "Content-Type: application/json\r\n" .
            "Accept: application/json\r\n"
        )
    );
    
    $context  = stream_context_create( $options );
    
    $result = file_get_contents( $root . $path, false, $context );
    
    $response = json_decode( $result );
    
    echo $response;

} else {
    
    if ( strpos( $path, 'img' ) === false ) {
    
        header('Content-Type: application/json');
    
    } else {
        
        header('Content-Type: image/png');
        
    }
    
    echo file_get_contents( $root . $path );
    
}