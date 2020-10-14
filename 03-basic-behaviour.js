let MAX_VENDING_MACHINE_STOCK = 25;

let product = {
    'name': 'Diet Coke (can)',
    'price': 0.99,
    'stock': 25,
    'dispense':function() {
        this.stock -= 1;
    },
    'restock':function(numberToRestock){
        this.stock += numberToRestock;
    },
    'getNumberSold':function() {
        return MAX_VENDING_MACHINE_STOCK - this.stock;
    }   
};

let h2o = {
    'name': 'H20',
    'price': 1.20,
    'stock': 25,
    'dispense': function(){
        this.stock -= 1;
    },
    'restock':function(numberToRestock){
        this.stock += numberToRestock;
    },
    'getNumberSold':function() {
        return MAX_VENDING_MACHINE_STOCK - this.stock;
    }   
}

h2o.dispense();
product.dispense();
product.dispense();
console.log(product.stock);

