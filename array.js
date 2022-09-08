class Producto{
    constructor(nombre,  precio,  ){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 85;
    }
    restarStock(cantidad){
        this.cantidad = this.cantidad - cantidad;
    }
    sumarIva(){
        return (this.precio * 1.21).toFixed(2);
    }
    vender(){
        this.venddido = true;
    }
}
const ebriel = new Producto("ebriel", 15000);
console.log("el precio de la entrada es de: " + ebriel.precio + "y con el iva es : " + ebriel.sumarIva() );
const ebrielV = new Producto("ebriel vip", 20000);
console.log("el precio de la entrada es de: " + ebrielV.precio + "y con el iva es : " + ebrielV.sumarIva() )
const coldplay = new Producto("Coldplay", 20000);
console.log("el precio de la entrada es de: " + coldplay.precio + "y con el iva es : " + coldplay.sumarIva() );
const coldplayV = new Producto("Coldplay vip", 150000 );
console.log("el precio de la entrada es de: " + coldplayV.precio + "y con el iva es : " + coldplayV.sumarIva() );
const michaelJ = new Producto("Michael Jackson", 500000);
console.log("el precio de la entrada es de: " + michaelJ.precio + "y con el iva es : " + michaelJ.sumarIva() );
const michaelJV = new Producto("Michael Jackson Vip", 2000000);
console.log("el precio de la entrada es de: " + michaelJV.precio + "y con el iva es : " + michaelJV.sumarIva() );

const stockProductos = [];
stockProductos.push(ebriel);
stockProductos.push(ebrielV);
stockProductos.push(coldplay);
stockProductos.push(coldplayV);
stockProductos.push(michaelJ);
stockProductos.push(michaelJV);



console.log(stockProductos)

for(let Producto of stockProductos){
    console.log(Producto);
}



function restarStockMichael (arrayProductos){
    for(let producto of arrayProductos){
        if(producto.nombre === "Michael Jackson Vip"){
            producto.restarStock(60);
        }
    }
}
restarStockMichael(stockProductos);
console.log(stockProductos);