/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const helper = require('../helpers');

test('Jika qty adalah 5, ketika dikurangi 1 jadi = 4', () => {
    expect(helper.decrementQty(2)).toBe(1);
});
