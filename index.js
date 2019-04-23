var xlsx2json = require('xlsx2json');
xlsx2json('test.xlsx').then(jsonArray => {
    console.log(jsonArray);
});