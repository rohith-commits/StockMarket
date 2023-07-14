const {Stock} = require('./Stock.js')

const apl = new Stock('APL',75);
const lici = new Stock('LICI',55);



apl.on('priceChanged', function(obj){
    console.log(`name = ${obj.name}\npreviouse price = ${obj.pprice}\ncurrent price = ${obj.cprice}\nadjustment persent = ${obj.adjpercent}%\n\n`);

})

apl.pprice = 77;
