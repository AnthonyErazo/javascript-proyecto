function existeEnArreglo(producto){
    let i=0;
    while(i<productos.length){
        if(productos[i]==producto){
            return false;
        }
        i++;
    }
    return true;
}
function anadir(precio,producto){
    productos.push(producto);
    carrito+=precio;
    console.log(`Objeto añadido\nTotal: $${carrito}`);
    alert(`Objeto añadido correctamente!!\nTotal: $${carrito}`);
}
function quitar(precio,producto){
    if(existeEnArreglo(producto)){
        console.error("Error al quitar elemento no agregado");
        alert(`El producto ${producto} no ha sido seleccionado`);
    }else{
        for(let i=0;i<productos.length;i++){
            if(productos[i]==producto){
                productos.splice(i,1);
                break;
            }
        }
        carrito-=precio;
        console.log(`Objeto eliminado\nTotal: $${carrito}`);
        alert(`Objeto eliminado correctamente!!\nTotal: $${carrito}`);
    }
}
function mostrar(){
    if(productos.length!=0){
        let texto="Total de productos:\n";
        for(let i=0;i<productos.length;i++){
            texto+="\t*"+productos[i]+"\n";
        }
        texto+="El total es: $"+carrito;
        alert(texto);
        if(confirm("¿Desea continuar con el pedido?")){
            let nombre=prompt("Ingrese su nombre: ");
            let apellido=prompt("Ingrese su apellido: ");
            alert(`Factura:\nNombres: ${nombre}\nApellido: ${apellido}\n${texto}\n------------Gracias por elegirnos :)------------`);
        }
    }else{
        console.error("No se ha agregado ningun producto");
        alert("No tiene nigun producto agregado!!")
    }
}
let carrito=0.0;
const productos=[];