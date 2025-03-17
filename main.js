const hamburguesas = function(nombre, ingrediente1, ingrediente2,ingrediente3, ingrediente4, tamaño, valor){
    this.nombre = nombre
    this.ingrediente1 = ingrediente1,
    this.ingrediente2 = ingrediente2,
    this.ingrediente3 = ingrediente3,
    this.ingrediente4 = ingrediente4,
    this.tamaño = tamaño
    this.valor = valor
}
let hamburguesa1 = new Hamburguesas("Blue", "Carne", "Cebolla Caramelizada", "Queso Azul", "Nueces", "Doble", 13500);
let hamburguesa2 = new Hamburguesas("CheeseBurguer", "Carne", "Queso Cheddar", undefined, undefined, "Simple", 9500);
let hamburguesa3 = new Hamburguesas("Oklahoma", "Carne", "Cebolla Caramelizada", "Queso Cheddar", undefined, "Doble", 11300);
let hamburguesa4 = new Hamburguesas("Honey", "Carne", "Queso Cheddar", "Bacon Picado", "Hot Honey", "Triple", 12200);
let hamburguesa5 = new Hamburguesas("Crispy", "Carne", "Queso Cheddar", "Bacon", "Cebolla Crispy", "Triple", 13900);
let hamburguesa6 = new Hamburguesas("Chill", "Carne", "Queso Cheddar", "Alioli", undefined, "Simple", 8900);
const menu = [hamburguesa1, hamburguesa2, hamburguesa3, hamburguesa4, hamburguesa5, hamburguesa6]

function filtroTamaño(){
    let tamañoBurguer = prompt("¿Que tamaño te gustaria probar? SIMPLE, DOBLE O TRIPLE").trim().toUpperCase()
    let resultadoTamaño = menu.filter( (x)=> x.tamaño.toUpperCase() === tamañoBurguer)

    if(resultadoTamaño.length > 0){
        let hamburguesasDisponibles = "Las hamburguesas disponibles son: "
        resultadoTamaño.forEach(i =>{
            hamburguesasDisponibles += `${i.nombre}`
        })
        alert(hamburguesasDisponibles)
    }
    else{
        alert("Error, tamaño inexistente")
    }
}