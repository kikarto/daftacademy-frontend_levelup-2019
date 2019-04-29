
const fib = require('../fib.js');

describe('Fibonacci test', ()=>{

    it('czy istnieje funkcja fib', () => {
        expect(typeof fib === 'function').toBe(true);
    });

    it('nie podano parametru', () => {
        expect(fib()).toEqual([]);
    });

    it('podano więcej parametrów', () => {
        expect(fib(10, "ala", "ma", "kota")).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it('podano string, oczekiwany parametr musi być liczbą całkowitą', () => {
        expect(fib('String param')).toEqual([]);
    });

    it('podano więcej parametrów', () => {
        expect(fib("ala", "ma", "kota")).toEqual([]);
    });

    it('podano ujemną liczbę, oczekiwany parametr musi być liczbą większą od zera', () => {
        expect(fib(-10)).toEqual([]);
    });

    it('prawidłowe wywołanie, oczekiwany wynik jest tablica', () => {
        expect(Array.isArray(fib(20))).toBe(true);
    });

    it('prawidłowe wywołanie, oczekiwany wynik jest tablica z 20 elementami', () => {
        expect(fib(20).length === 20).toBe(true);
    });

    it('prawidłowe wywołanie, oczekiwany wynik jest tablica z 20 pierwszymi liczbami ciągu Fibonacciego', () => {
        expect(fib(20)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]);
    });

});

