<?php
    header("Content-Type: text/html; charset=UTF-8");
    header("Cache-Control:no-cache");
    header("Pragma:no-cache");

    $tarr = array();
    for($i=0;$i<100;$i++){
        array_push($tarr, array(
            "cd" => "cd" . $i, "nm" => "한글" . $i
        ));
    }

    echo json_encode($tarr);
?>