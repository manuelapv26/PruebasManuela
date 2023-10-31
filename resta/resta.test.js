const resta= require('./resta');
test('si se resta 10 y 9 dara 1',()=>{
    expect(resta(10,9)).toBe(1);
})
test('si se resta 90 y 7 dara 83',()=>{
    expect(resta(90,7)).toBe(83);
})
test('si se resta 54 y 4 dara 50',()=>{
    expect(resta(54,4)).toBe(50);
})
test('si se resta 100 y 99 dara 1',()=>{
    expect(resta(100,99)).toBe(1);
})
test('si se resta 3 y 3 dara 0',()=>{
    expect(resta(3,3)).toBe(0);
})