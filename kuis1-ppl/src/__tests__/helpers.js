/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const helper = require('../helpers');

test('Jika qty adalah 2, ketika dikurangi 1 jadi = 1', () => {
    expect(helper.decrementQty(2)).toBe(1);
});

test('Jika qty adalah 1, ketika ditambah 1 jadi = 2', () => {
    expect(helper.incrementQty(1)).toBe(2);
});
