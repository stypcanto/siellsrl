<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopila los datos del formulario
    $nombre = $_POST["nombre"];
    $apellidos = $_POST["apellidos"];
    $codigo_pais = $_POST["codigo_pais"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];
    
    // Direcciones de correo a las que se enviará el formulario y copias
    $destinatario = "scanto@siellsrl.com";
    $copia1 = "siell.services@gmail.com";
    $copia2 = "ecanto35@yahoo.es";
    $copia3 = "ecanto@siellsrl.com";
    $copia4 = "styp611@outlook.com";

    // Asunto del correo
    $asunto = "Nuevo mensaje de la página web SIELL SRL";

    // Estilos CSS para la tabla
    $estilos = "
    <style>
        table {
            font-family: Arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>";

    // Cuerpo del correo en formato HTML
    $cuerpo = "<html><body>";
    $cuerpo .= "<h2>Has recibido un mensaje enviado a través de la página web de SIELL SRL</h2>";
    $cuerpo .= $estilos; // Agrega los estilos CSS a la tabla
    $cuerpo .= "<table>";
    $cuerpo .= "<tr><td>Nombre del contacto:</td><td>$nombre $apellidos</td></tr>";
    $cuerpo .= "<tr><td>Código de País:</td><td>$codigo_pais</td></tr>";
    $cuerpo .= "<tr><td>Teléfono:</td><td>$telefono</td></tr>";
    $cuerpo .= "<tr><td>Correo Electrónico:</td><td>$correo</td></tr>";
    $cuerpo .= "<tr><td>Mensaje:</td><td>$mensaje</td></tr>";
    $cuerpo .= "</table>";

    // Agregar firma al mensaje principal con información adicional y logo
    $cuerpo .= "<p> </p>";
    $cuerpo .= "<p>Atentamente,</p>";
    $cuerpo .= "<p>Equipo SIELL SRL</p>";
    $cuerpo .= "<p>Teléfono: (+51) 999 553 7334</p>";
    $cuerpo .= "<p>Correo: contacto@siellsrl.com</p>";
    $cuerpo .= "<p>Dirección: Calle Lora y Cordero 580, Chiclayo. Perú</p>";
    $cuerpo .= "<p>Página web: <a href='https://siellsrl.com/'>https://siellsrl.com/</a></p>";
   

    $cuerpo .= "</body></html>";

    // Encabezados del correo para formato HTML
    $encabezados = "MIME-Version: 1.0" . "\r\n";
    $encabezados .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $encabezados .= "From: $correo" . "\r\n" .
        "Reply-To: $correo" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Envía el correo a múltiples destinatarios
    $enviado = mail($destinatario, $asunto, $cuerpo, $encabezados);
    
    // Envía copias del correo a las direcciones adicionales
    if ($enviado) {
        mail($copia1, $asunto, $cuerpo, $encabezados);
        mail($copia2, $asunto, $cuerpo, $encabezados);
        mail($copia3, $asunto, $cuerpo, $encabezados);
        mail($copia4, $asunto, $cuerpo, $encabezados);
        
        // Enviar una respuesta automática al remitente
        $respuesta_automatica = "<html><body>";
        $respuesta_automatica .= "<p>Muchas gracias por escribirnos.</p>";
        $respuesta_automatica .= "<p>Hemos recibido su mensaje y pronto nos pondremos en contacto con usted.</p>";
        $respuesta_automatica .= "<p>Atentamente,</p>";
        $respuesta_automatica .= "<p>Equipo SIELL SRL</p>";
        $respuesta_automatica .= "<p>Teléfono: (+51) 999 553 7334</p>";
        $respuesta_automatica .= "<p>Correo: contacto@siellsrl.com</p>";
        $respuesta_automatica .= "<p>Dirección: Calle Lora y Cordero 580, Chiclayo. Perú</p>";
        $respuesta_automatica .= "<p>Página web: <a href='https://siellsrl.com/'>https://siellsrl.com/</a></p>";
        
        $respuesta_automatica .= "</body></html>";
        $encabezados_respuesta = "MIME-Version: 1.0" . "\r\n";
        $encabezados_respuesta .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $encabezados_respuesta .= "From: contacto@siellsrl.com" . "\r\n" .
            "X-Mailer: PHP/" . phpversion();
        mail($correo, "Re: $asunto", $respuesta_automatica, $encabezados_respuesta);

        // Redireccionar a una página de confirmación si el correo se envió correctamente
        header("Location: index.html");
        exit();
    } else {
        // Muestra un mensaje de error si hubo un problema al enviar el formulario
        echo "<p>Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.</p>";
    }
}
?>
