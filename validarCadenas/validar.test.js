const reto=require('./validar')
test('si la cad1 y cad2 son iguales retorne verdadero',()=>{
    expect(reto('hola','hola')).toBe(true)
})
test('si la cad1 y cad2 no son iguales retorne false',()=>{
    expect(reto('hola','pepe')).toBe(false)
})
test('si la cad1 y cad2 son iguales retorne verdadero',()=>{
    expect(reto('pipe','pipe')).toBe(true)
})
test('si la cad1 y cad2 son iguales retorne verdadero',()=>{
    expect(reto('hola','hola')).toBe(true)
})
test('si la cad1 y cad2 son iguales retorne verdadero',()=>{
    expect(reto('A','A')).toBe(true)
})