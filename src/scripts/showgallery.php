<?php

$dPath="/Users/Roman/Desktop/OpenServer/OSPanel/domains/finalproject/galleries/*/*";
$fPath=$path.'/';

//$dirs=array();
$files=array();
//$dirs=glob($dPath,GLOB_ONLYDIR);
$files=glob($dPath.'/*');
echo json_encode($files);
?>