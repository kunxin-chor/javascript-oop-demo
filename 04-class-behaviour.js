MAX_STOCK = 25;

class VendingMachine {
    inventory = [];

    addNewProduct(product, quantity) {
        product.restock(quantity);
        this.inventory.push(product);
    }
}

class Product {
    name = "";
    stock = 0;
    price = 0;

    constructor(name, stock, price) {
        this.name = name;
        this.stock = stock;
        this.price = price;
    }

    dispense =() => {
        if (this.stock > 0) {
            this.stock -=1;
        }        
    }

    restock = (x) => {
        if (this.stock + x <= MAX_STOCK) {
            this.stock += x
        }
    }

    getQuantitySold =(x) => {
        return MAX_STOCK - this.stock;
    }    
}

let machine = new VendingMachine();
let coke = new Product("Diet Coke", 1.99, 0);
let h2o = new Product("Sparkling H20", .80,0);

machine.addNewProduct(coke, 10);
machine.addNewProduct(h2o, 15);

console.log(machine.inventory)

