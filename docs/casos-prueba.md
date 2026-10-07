# Casos de Prueba - Sistema de Inventario

| ID | Funcionalidad | Entrada | Resultado Esperado | Estado |
| :--- | :--- | :--- | :--- | :--- |
| CP-01 | Registrar producto | Datos válidos | Producto registrado | Aprobada |
| CP-02 | Registrar producto | Código duplicado | Mostrar error | Aprobada |
| CP-03 | Consultar producto | Código existente | Mostrar producto | Aprobada |
| CP-04 | Consultar producto | Código inexistente | Mostrar mensaje | Aprobada |
| CP-05 | Modificar producto | Datos válidos | Información actualizada | Aprobada |
| CP-06 | Eliminar producto | Producto existente | Producto eliminado | Aprobada |
| CP-07 | Entrada de producto | Cantidad válida | Incrementar existencia | Aprobada |
| CP-08 | Salida de producto | Cantidad disponible | Reducir existencia | Aprobada |
