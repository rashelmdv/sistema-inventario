/**
 * Módulo principal del Sistema de Inventario
 * Contiene la lógica para la gestión de productos.
 */

class Inventario {
    constructor() {
        this.productos = [];
    }

    // Registrar un nuevo producto
    registrarProducto(codigo, nombre, precio, stock) {
        if (this.productos.find(p => p.codigo === codigo)) {
            throw new Error("El código ya existe");
        }
        const nuevoProducto = { codigo, nombre, precio, stock };
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }

    // Consultar un producto por código
    consultarProducto(codigo) {
        const producto = this.productos.find(p => p.codigo === codigo);
        if (!producto) {
            throw new Error("Producto no encontrado");
        }
        return producto;
    }

    // Registrar entrada de stock
    entradaProducto(codigo, cantidad) {
        const producto = this.consultarProducto(codigo);
        producto.stock += cantidad;
        return producto;
    }

    // Registrar salida de stock
    salidaProducto(codigo, cantidad) {
        const producto = this.consultarProducto(codigo);
        if (producto.stock < cantidad) {
            throw new Error("Stock insuficiente");
        }
        producto.stock -= cantidad;
        return producto;
    }
}

module.exports = Inventario;
