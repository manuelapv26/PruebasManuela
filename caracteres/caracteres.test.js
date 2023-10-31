const larg=require ('./caracteres');
test('cuando se calcule los caracteres de la palabra mundo retornara el largo que sera 5',()=>{
    expect(larg('mundo')).toBe(5);
})
test('cuando se calcule los caracteres de la palabra hola retornara el largo que sera 4',()=>{
    expect(larg('hola')).toBe(4);
})
test('cuando se calcule los caracteres de la palabra manuela retornara el largo que sera 7',()=>{
    expect(larg('manuela')).toBe(7);
})
test('cuando se calcule los caracteres de la palabra daky retornara el largo que sera 4',()=>{
    expect(larg('daky')).toBe(4);
})
test('cuando se calcule los caracteres de la palabra computador retornara el largo que sera 10',()=>{
    expect(larg('computador')).toBe(10);
})