# Plan de Pruebas - Sistema de Inventario

## Objetivo
Verificar que las funciones principales del sistema de inventario operen de acuerdo con los requisitos establecidos.

## Alcance
El plan cubre las funcionalidades de: Registro, Consulta, Modificación, Eliminación de productos, y control de entradas/salidas.

## Tipos de Pruebas
- Pruebas Funcionales
- Pruebas de Integración
- Pruebas de Validación de Datos
- Pruebas de Regresión

## Criterios de Aceptación
- El sistema debe registrar productos sin errores.
- El sistema debe validar códigos duplicados.
- El stock debe actualizarse correctamente en entradas y salidas.

## Ambiente de Pruebas
- **Desarrollo:** Local (VS Code + Node.js)
- **Pruebas:** Entorno de Staging (GitHub Actions)
- **Producción:** Servidor Cloud (AWS/Heroku)

## Responsables
- **Equipo de Desarrollo:** rashelmdv
