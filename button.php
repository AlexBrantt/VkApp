<?php

if( isset( $_POST['my_button'] ) ){
    $file = 'data.txt';
    file_put_contents($file,'work');
    echo 'work';
}

?>