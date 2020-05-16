# 
Comando de inicio: npm start en la carpeta ApisNodeJS para el backend, servidor. y npm start en la carpeta client para el frontend con angular, ambas terminales deben correr al mismo tiempo, cambiar conexiones a bases de datos,.
A la tabla usurios en mariadb la modifique para que Pas_Key tenga una longitud de 100 en lugar de 50, por el cifrado de contraseñas.
En Desarrollo la ultima semana, no se terminó de hacer:
changeDetection para inicializar setInterval
tablas con funciones en template
Inicios de sesion unicos por usuario
Impresion de documentos,
Reporteador, busque e intenté probrar varios, pero no termine las pruebas que estaba haciendo.

Pendiente.
//De donde se obtienen las series
//De donde se obtiene el monto de un producto
//como se ve la vista previa al selecionar un producto (creacion de facturas)
//Donde puedo crear facturas de prueba
//Cuales son las formas de pago
//De donde se obtiene el tipo de cambio en forma de pago en USD
//Modelo de facturas (Informe)
//¿Qué pasa si el dispositivo es u ntelefono o tablet
/*
**Tablas que se migraran de mariaDb A SQL server
*/
//Verificar un usuariuo activo del lado del servidor

Correcciones en codigo ya hecho pendientes:
En apis .Net borrar las funciones que no xon necesarias, al insertar en SQL se mueven todas las tablas, no los borré y lo dejé pendiente porque al final no tenía que tablkas eran o no necesarias de migrar desde mriadb.
Borré las autenticaciones en las Apis, porque en el proceso de desarrollo tardaba mas las respuestas de las Apis, debido a la falta de memoriade mi maquina.
Algunas de las pantallas de prueba estan en las opciones en el menu lateral, y varios componentes pueden ser eliminados, solo servian para emcontrarlos y usarlos de guia mientras se desarollaba, en produccion deben ser eliminados.
