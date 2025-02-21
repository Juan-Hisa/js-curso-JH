let hamburguesa = 0;
let eleccion = true;

do {
    let selector = prompt("Ingrese 1 para hacer su pedido, 0 para cerrar");
    let comprobacion = parseInt(selector);

    if (isNaN(comprobacion)){
        console.log("Dato Incorrecto, Vuelva a relizar el pedido")
        break;
    }

    if (comprobacion !== 0 && comprobacion !== 1) { 
        console.log("Dato Incorrecto, Vuelva a relizar el pedido") 
        break;
    } else if (comprobacion == 0) {
        console.log("Su pedido ha sido cancelado")
        eleccion = false;
    } else {
        if (comprobacion == 1) {
            let hamburguesa = prompt("MENU: coloque 1 para hamburguesa simple, coloque 2 para hamburguesa doble con cheddar, coloque 3 para hamburguesa completa triple")

            if (hamburguesa == 1) {
                console.log("Su hamburguesa simple fue pedida")
                eleccion = false;
            } else if (hamburguesa == 2) {
                console.log("Su hamburguesa doble con cheddar fue pedida") 
                eleccion = false;
            } else if (hamburguesa == 3) {
                console.log("Su hamburguesa completa triple fue pedida") 
                eleccion = false;
            } else {
                console.log("Su pedido fue erróneo, vuelva a realizarlo")
                break;
            }
        }
    }
} while (eleccion);
