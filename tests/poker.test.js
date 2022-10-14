const determineRanks = require('../poker')
 
test('[Ah As 10c 7d 6s] is a 2As', () => {
    expect(determineRanks('Ah As 10c 7d 6s')).toBe('It\'s a Pair of Aces!');
});
test('[Kh Kc 3s 3h 2d] is a 2 Pair', () => {
    expect(determineRanks('Kh Kc 3s 3h 2d')).toBe('It\'s a 2 Pair!');
});
test('[Kh Qh 6h 2h 9h] is a Flush', () => {
    expect(determineRanks('Kh Qh 6h 2h 9h')).toBe('It\'s a Flush!');
});
test('[3d Qh 6h 2h 9h] is invalid hand', () => {
    expect(determineRanks('3d Qh 6h 2h 9h')).toBe('Hand is invalid!');
});