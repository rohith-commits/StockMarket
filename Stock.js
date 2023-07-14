const EventEmitter = require('node:events');

class Stock extends EventEmitter {

    constructor(name, pprice) {
        super();
        this._name = name;
        this._pprice = pprice;
        
    }

    allStock = new Array();
    

    set pprice(value) {
        if (value !== this._pprice) {
            this.emit('priceChanged', {
                name: this._name,
                pprice: this._pprice,
                cprice: value,
                adjpercent: ((this._pprice - value) * 100 / value).toFixed(2),
                
            });
        }
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._pprice;
    }

    
    
   
}

module.exports = {
    Stock,
}