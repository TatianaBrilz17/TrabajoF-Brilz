class Producto {
    constructor (nombre, precio, stock, codigo){
        this.name = nombre;
        this.price = parseFloat(precio);
        this.stock = parseInt(stock);
        this.code_user = codigo.toUpperCase();
        this.code_promotion = "PROMO10";
        this.discount = 10;
    }

    applyDiscount(){
        this.price = this.price - (this.price * this.discount) /100;
    }

    validateCode() {
        if (this.code_user == this.code_promotion){
            this.applyDiscount();
            console.log("Código verificado");
            console.log("El precio del Producto es: $" + this.price)
        } else{
            console.log("Error. Código inválido!")
        }
    }
}

let nombre = prompt("Ingrese el Nombre del Producto");
let precio = prompt("Ingrese el Precio del Producto:");
let stock = prompt("Ingrese Stock del Producto");
let codigo = prompt ("Ingrese Código de Pormoción del Producto")

const producto = new Producto (nombre, precio, stock, codigo);
console.log(producto);
producto.validateCode();