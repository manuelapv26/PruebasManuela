const numeroI= require('./impar');
test('si el module del numero es diferente a cero entonces retorne  "es impar"',()=>{
    expect(numeroI(3)).toBe("es impar")
})
test('si el module del numero es diferente a cero entonces retorne  "es impar"',()=>{
    expect(numeroI(9)).toBe("es impar")
})
test('si el module del numero es diferente a cero entonces retorne "es impar"',()=>{
    expect(numeroI(7)).toBe("es impar")
})
test('si el module del numero es diferente a cero entonces retorne "es impar"',()=>{
    expect(numeroI(5)).toBe("es impar")
})
test('si el module del numero es diferente a cero entonces retorne "es impar"',()=>{
    expect(numeroI(11)).toBe("es impar")
})