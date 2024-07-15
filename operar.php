<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body >
    <form action=""></form>

    <?php
     $texto = $_POST['texto'];
     echo "el texto es: ",$texto;

    $radio = $_POST['radio'];
    echo "<br>la seleccion de radio es:  ",$radio;

    $checkbox = $_POST['checkbox'];
    echo "<br>el resultado de checkbox es:  ",$checkbox;

    //$boton = $_POST['boton'];
    //echo "<br>el resultado de boton es  ",$boton;

    $archivo = $_POST['file'];
    echo "<br>el archivo seleccionado es:  ",$archivo;

    $hidden = $_POST['hidden'];
    echo "<br>el texto tipo hidden es:  ",$hidden;

    $pasword = $_POST['password'];
    echo "<br>el password es:  ",$pasword;

    $selecionSimple = $_POST['selectSimple'];
    echo "<br>texto selecion simple es:  ",$selecionSimple;

    $selectMultiple = $_POST['selectMultiple'];
    echo "<br>el texto seleccion multiple es:  ",$selectMultiple;

    $areaTexto = $_POST['textoArea'];
    echo "<br>este escribiste en el area de texto:<br> ",$areaTexto;
    

    

    $submit1 = $_POST['enviar1'];
    echo "<br>el valor de este submit esta: ",$submit1;
/*
    $segForm = $_POST['lenguajes'];
    echo "<br> este es el resultado ",$segForm;
*/



    // TEXTO DE AREA
    //$textArea = $_POST['segundoFormulario'];
    //echo "<br>el area de texto es ",$textArea;










 //$enviar = $_POST['enviar'];
   // echo "<br>el texto es  ",$enviar;

    ?>



<?php
//foreach ($_FILES["file"]["error"] as $clave => $error) {
    //if ($error == UPLOAD_ERR_OK) {
       // $nombre_tmp = $_FILES["imágenes"]["tmp_name"][$clave];
        // basename() puede evitar ataques de denegació del sistema de ficheros;
        // podría ser apropiado más validación/saneamiento del nombre de fichero
        //$nombre = basename($_FILES["imágenes"]["name"][$clave]);
       // move_uploaded_file($nombre_tmp, "datos/$nombre");
   // }
//}
?>



  </body>
</html>
