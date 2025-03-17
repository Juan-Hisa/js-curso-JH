const hamburguesas = function(nombre, ingrediente1, ingrediente2,ingrediente3, ingrediente4, tamaño, valor){
    this.nombre = nombre
    this.ingrediente1 = ingrediente1,
    this.ingrediente2 = ingrediente2,
    this.ingrediente3 = ingrediente3,
    this.ingrediente4 = ingrediente4,
    this.tamaño = tamaño
    this.valor = valor
}
let hamburguesa1 = new hamburguesas (Blue, Carne, cebollaCaramelizada, QuesoAzul, Nueces,doble,  13500 )
let hamburguesa2 = new hamburguesas (CheeseBurguer, Carne, QuesoCheddar, undefined, undefined, simple,9500)
let hamburguesa3 = new hamburguesas (Oklahoma, Carne, cebollaCaramelizada, QuesoCheddar, undefined, doble, 11300)
let hamburguesa4 = new hamburguesas (Honey, Carne, QuesoCheddar, BaconPicado, HotHoney, triple,12200)
let hamburguesa5 = new hamburguesas (Crispy, Carne, QuesoCheddar,Bacon, CebollaCrispy, triple, 13900)
let hamburguesa6 = new hamburguesas (Chill, Carne, QuesoCheddar, Alioli, undefined, simple, 8900)
const menu = [hamburguesa1, hamburguesa2, hamburguesa3, hamburguesa4, hamburguesa5, hamburguesa6]

function filtroTamaño(){
    let tamañoBurguer = prompt("¿Que tamaño te gustaria probar? SIMPLE, DOBLE O TRIPLE").trim().toUpperCase()
    let resultadoTamaño = menu.filter( (x)=> x.tamaño.toUpperCase.includes(tamañoBurguer))
    if(resultadoTamaño.length > 1){
        console.log(tamañoBurguer)
    }else
        alert("Error, valor inexistente");
}