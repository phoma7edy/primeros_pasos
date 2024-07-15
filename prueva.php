<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener el valor seleccionado del formulario
    $valorSeleccionado = htmlspecialchars($_POST['valorSeleccionado']);

    // Procesar el valor (en este caso, simplemente mostrarlo)
    echo "El valor seleccionado es: " . $valorSeleccionado;
} else {
    echo "No se ha enviado ningún dato.";
}
?>
