# Estrategia de Despliegue

## Estrategia Seleccionada: Blue/Green

### Justificación
Se elige Blue/Green porque el sistema de inventario es crítico. Esta estrategia permite mantener dos entornos idénticos (Blue y Green). Mientras Blue atiende a los usuarios, se despliega la nueva versión en Green. Si algo falla, se vuelve a Blue instantáneamente.

### Proceso
1. Blue está en producción.
2. Se despliega la nueva versión en Green.
3. Se realizan pruebas en Green.
4. Se redirige el tráfico a Green.

### Riesgos
- Costo elevado (duplicar infraestructura).
- Complejidad en la sincronización de bases de datos.

### Ventajas
- Cero tiempo de inactividad.
- Rollback inmediato.
