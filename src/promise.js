// główna funkcja promise
export default function(){

// promise All z parametrem - tablicą promises zawierającą promise js
async function promiseAll(promises) {
    // tablica zawierająca uruchomione promise
    const tab = [];
    // uruchamiany wszystkie promise na raz, jeden za drugim
    for(let promise of promises){
        // dodajemy wynik promise do tablicy
        tab.push(promise.then(r=>r));
    }
    
    // tablica z wynikami
    const result = [];
    // literacja po tablicy z uruchomionymi prmisami
    for(let item of tab){
          // czekamy aż wszystkie promisy się wykonają
    	  await Promise.resolve(item)
            .then(resp=>{
                // dodajemy wynik do tablicy
                result.push(resp)
            })
            .catch(err=>{
                // lub zwracamy błąd gdy wystąpił chodź w jednym z promise
            	throw err
            });
    }
    
    // zwracamy tablicę wyników, chyba że wystąpił błąd w jakimkolwiek promise = zwrócenie błędu throw linia wyżej
    return result;
}

// promise race z parametrem - tablicą promises zawierającą promise js
function promiseRace(promises) {
    // zwracamy promise P1
    return new Promise((resolve, reject) => {
        // literujemy po przekazanej tablicy z promise
        for(let item of promises){
            Promise.resolve(item)
            .then(resp=>{
                // zwracamy wynik najszybciej wykonanemu promise do promise P1 które je zwróci do promiseRace
                resolve(resp);
            })
            .catch(err=>{
                // jeżeli wystąpi błąd będzie zwrócony do promise P1 które je zwróci do promiseRace
            	reject(err);
            });
        }
    });
}


// Kod testowy.
promiseAll([]).then(result => {
  console.log('To powinien być []:', JSON.stringify(result));
});

promiseAll([futureSuccess(1), futureSuccess(2), futureSuccess(3)]).then(result => {
  console.log('To powinien być [1, 2, 3]:', result);
});

promiseAll([futureSuccess(1), Promise.reject('X'), futureSuccess(3)])
  .then(() => {
    console.log('WAT?! Nie powinno nas tu być..');
  })
  .catch(error => {
    if (error !== 'X') {
      console.log('Coś poszło nie tak..:', error);
    }
    console.log('To powinien być X:', error);
  });

promiseRace([1, 2, 3]).then(result => {
  console.log('This should be 1:', result);
});

const now = performance.now();
promiseRace([delayedSuccess(1, 300), delayedSuccess(2, 200), delayedSuccess(3, 100)]).then(result => {
  const after = performance.now();
  const diff = after - now;
  if (diff < 100) {
    throw 'Za szybko!'
  }
  if (diff >= 200) {
    throw 'Za wolno!'
  }
  console.log('To powinno być 3:', result);
});

promiseRace([futureSuccess(1), Promise.reject('X'), futureSuccess(3)])
  .then(() => {
    console.log('WAT?! Nie powinno nas tu być..');
  })
  .catch(error => {
    if (error !== 'X') {
      console.log('Coś poszło nie tak..:', error);
    }
    console.log('To powinien być X:', error);
  });

function futureSuccess(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
};

function delayedSuccess(val, time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), time);
  });
};
    
}