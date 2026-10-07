/**
 * Pruebas unitarias para el módulo de Inventario
 */

const Inventario = require('../src/inventario');

// Simulación simple de pruebas (sin framework externo)
function ejecutarPruebas() {
    const inventario = new Inventario();
    let pruebasAprobadas = 0;
    let pruebasFallidas = 0;

    // Prueba 1: Registrar producto
    try {
        inventario.registrarProducto("P001", "Lápiz", 1.50, 100);
        console.log("✅ CP-01: Registrar producto - APROBADA");
        pruebasAprobadas++;
    } catch (e) {
        console.log("❌ CP-01: Registrar producto - FALLIDA");
        pruebasFallidas++;
    }

    // Prueba 2: Código duplicado
    try {
        inventario.registrarProducto("P001", "Lápiz", 1.50, 100);
        console.log("❌ CP-02: Código duplicado - FALLIDA (no lanzó error)");
        pruebasFallidas++;
    } catch (e) {
        console.log("✅ CP-02: Código duplicado - APROBADA");
        pruebasAprobadas++;
    }

    // Prueba 3: Consultar producto existente
    try {
        const prod = inventario.consultarProducto("P001");
        console.log("✅ CP-03: Consultar producto - APROBADA");
        pruebasAprobadas++;
    } catch (e) {
        console.log("❌ CP-03: Consultar producto - FALLIDA");
        pruebasFallidas++;
    }

    // Prueba 4: Consultar producto inexistente
    try {
        inventario.consultarProducto("P999");
        console.log("❌ CP-04: Consultar inexistente - FALLIDA");
        pruebasFallidas++;
    } catch (e) {
        console.log("✅ CP-04: Consultar inexistente - APROBADA");
        pruebasAprobadas++;
    }

    // Prueba 5: Entrada de producto
    try {
        inventario.entradaProducto("P001", 50);
        console.log("✅ CP-07: Entrada de producto - APROBADA");
        pruebasAprobadas++;
    } catch (e) {
        console.log("❌ CP-07: Entrada de producto - FALLIDA");
        pruebasFallidas++;
    }

    // Prueba 6: Salida de producto
    try {
        inventario.salidaProducto("P001", 20);
        console.log("✅ CP-08: Salida de producto - APROBADA");
        pruebasAprobadas++;
    } catch (e) {
        console.log("❌ CP-08: Salida de producto - FALLIDA");
        pruebasFallidas++;
    }

    console.log("\n--- RESUMEN ---");
    console.log(`Pruebas Aprobadas: ${pruebasAprobadas}`);
    console.log(`Pruebas Fallidas: ${pruebasFallidas}`);
}

ejecutarPruebas();
