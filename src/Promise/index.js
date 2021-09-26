
//Aqui la promesa no se ejecuta hasta que se llame a la funcion

const somethingWillHapped = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
};

somethingWillHappen()
  .then( response => console.log(response))
  .catch( err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 3000);
        } else {
            const error = new Error('Whoppps!')
            reject(error)
        }
    });
}

//ejecutamos la Funcion 2
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err)
    })
