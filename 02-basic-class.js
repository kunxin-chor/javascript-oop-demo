class Product {
    name = "";
    price = 101;
    quantity = 0;

    constructor(name, price, quantity) {
        this.name = name; 
        this.price = price;
        this.quantity = quantity;
    }
}

let p1 = new Product("Coke", 1.1, 30);
let p2 = new Product("H2O", 0.9, 50);

console.log(p1);
