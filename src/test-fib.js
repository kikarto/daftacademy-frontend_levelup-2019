
import fib from './fib.js';

it('czy istnieje funkcja fib', () => {
    expect(typeof fib === 'function').toBe(true);
});

it('nie podano parametru', () => {
    expect(fib()).toBe([]);
});

it('podano więcej parametrów', () => {
    expect(fib(10, "ala", "ma", "kota")).toBe([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

it('oczekiwany parametr jest liczbą całkowitą', () => {
    expect(fib('String param')).toBe([]);
});

it(' oczekiwany parametr jest liczbą większą od zera', () => {
    expect(fib(-10)).toBe([]);
});

it(' oczekiwany wynik jest tablica z 20 pierwszymi liczbami ciągu Fibonacciego', () => {
    expect(fib(20)).toBe([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]);
});

