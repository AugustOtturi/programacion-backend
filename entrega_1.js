//!Utilities

const mathRandom = (array) => {
    return Math.floor(Math.random() * array.length)
}

const randomId = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let genericId = "";

    for (let i = 0; i < 5; i++) {
        if (i <= mathRandom(numbers)) {
            genericId += numbers[mathRandom(numbers)];
        } else {
            genericId += letter[mathRandom(letter)]
        }
    }
    return genericId
}

let productos = [];


//! Clase 

class ProductManager {
    constructor(title, description, price, thumbnail, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = randomId(); // Utilizo randomId para generar un id al azar
        this.stock = stock;
    }
    //? getProducts
    static getProducts() {
        return productos;
    }

    static addProduct() {
        let newProduct = new ProductManager("Producto prueba", "Este es un producto prueba", "$200", "Sin imagen", "25u")
        if (productos.find((product) => product.code !== newProduct.code)) {
            return "This product already exists. "
        } else {
            productos.push(newProduct)
            let output = "";
            for (let el in newProduct) {
                output += el + ": " + newProduct[el] + "\n";
            }
            return output
        }
    }

    static getProductById(id) {
        const resultado = productos.find((el) => el.code === id);
        if (!resultado) {
            return `Product with id:${id}, Not foud`
        } else {
            return resultado
        }
    }


}

setTimeout(() => {
    console.log("Starting program");
}, 1000);


setTimeout(() => {
    console.log(ProductManager.getProducts());
}, 2000);

setTimeout(() => {
    console.log(ProductManager.addProduct());
}, 3000);


setTimeout(() => {
    console.log("Products in inventory:");
    console.log(ProductManager.getProducts());
}, 4000);

setTimeout(() => {
    console.log(ProductManager.addProduct());
}, 5000);



setTimeout(() => {
    console.log(ProductManager.getProductById(123444));
}, 6000);