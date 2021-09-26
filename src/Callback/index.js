function sum(nmu1, nmu2) {
    return nmu1 + nmu2;
}

function calc(nmu1, nmu2, callback) {
    return callback(nmu1, nmu2);
}

console.log(calc(2, 2, sum));

function date(callback) {
    console.log(new Date);       // se genera la primer fecha antes del settimeout
    setTimeout(function () {
        let date = new Date     // variable que almacenara la segnda fecha en el timeout
        callback(date);          //la función que se le pasara como parametro el...
    }, 3000)                    //valor de la la variable declarada arriba "que es una fecha"
}                               //y asu vez callback es en realidad printDate la función de abajo

function printDate(dateNow) {   //esta función solo manda a imprimir la fecha que tenemos en la variable let date de arriba
    console.log(dateNow);       //y es el callback en realidad
}

date(printDate);