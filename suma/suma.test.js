const suma= require('./suma');

test('si se suma 5 y 5 dara 10',()=>{
    expect(suma(5,5)).toBe(10);
})

test('si se suma 2 y 2 dara 4',()=>{
    expect(suma(2,2)).toBe(4);
})
test('si se suma 87 y 3 dara 90',()=>{
    expect(suma(87,3)).toBe(90);
})
test('si se suma 10 y 1 dara 11',()=>{
    expect(suma(10,1)).toBe(11);
})
test('si se suma 1 y 99 dara 100',()=>{
    expect(suma(1,99)).toBe(100);
})