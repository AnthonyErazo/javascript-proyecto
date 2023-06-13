const producto=[
    {
        id: "memoriaRam",
        nombre: "Kington Memoria Ram 8gb DDr4 3600MHZ",
        categoria: "Memoria Ram",
        precio:17,
        imagen:"./img/MemoriaRamKingston.jpg",
        cantidad:0
    },
    {
        id: "procesador",
        nombre: "Procesador INTEL CORE I9-10900K",
        categoria: "Procesador",
        precio:590,
        imagen:"./img/ProcesadorIntel.jpg",
        cantidad:0
    },
    {
        id: "procesador",
        nombre: "Procesador AMD RYZEN 5-5600G",
        categoria: "Procesador",
        precio:170,
        imagen:"./img/ProcesadorAmd.jpg",
        cantidad:0
    },
    {
        id: "placaMadre",
        nombre: "Placa Madre ASUS PRIME H610M-K D4",
        categoria: "Placa madre",
        precio:103,
        imagen:"./img/PlacaMadreIntel.jpg",
        cantidad:0
    },
    {
        id: "placaMadre",
        nombre: "Placa Madre ASUS B650M-A",
        categoria: "Placa Madre",
        precio:230,
        imagen:"./img/PlacaMadreAmd.jpg",
        cantidad:0
    },
    {
        id: "fuenteDePoder",
        nombre: "Fuente COOLER MASTER MWE 750 V2 750W 80 PLUS GOLD",
        categoria: "Fuente de Poder",
        precio:120,
        imagen:"./img/FuenteDePoder.jpg",
        cantidad:0
    }
];
function anadir(nombre){
    for(const p of producto){
        if(p.nombre==nombre){
            p.cantidad++;
            alert(`${nombre} añadido correctamente!!`);
        }
    };
}
function quitar(nombre){
    for(const p of producto){
        if(p.nombre==nombre){
            if(p.cantidad>0){
                p.cantidad--;
                alert(`${nombre} eliminado correctamente!!`);
            }else{
                alert(`${nombre} no ha sido añadido!!`);
            }
        }
    };
    
}
function mostrar(){
    let cantidadTotal=0;
    producto.forEach(p=>{cantidadTotal+=(p.cantidad*p.precio)});
    if(cantidadTotal==0){
        alert("No se ha seleccionado productos!!");
    }else{
        let texto=`Todos los productos: \n`;
        producto.forEach(p=>{
            if(p.cantidad>0){
                texto+=(`${p.nombre} | Precio: $${p.precio} | Cantidad: ${p.cantidad}\n`);
            }
        });
        texto+=`Cantidad Total: ${cantidadTotal}`;
        if(confirm("¿Desea continuar con el pedido?")){
            let nombre=prompt("Ingrese su nombre: ");
            let apellido=prompt("Ingrese su apellido: ");
            alert(`Factura:\nNombres: ${nombre}\nApellido: ${apellido}\n${texto}\n------------Gracias por elegirnos :)------------`);
            producto.forEach(p=>{p.cantidad=0});
        }
    }
}

const productContainer=document.querySelector('#productContainer');
const botnCategory=document.querySelectorAll(".categorybotn");
const titleMain=document.querySelector("#titleMain");

function loadProducts(productSelect){
    productContainer.innerHTML="";
    for(const p of productSelect){
        const div=document.createElement("div");
        div.classList.add("product");
        div.innerHTML=`
            <img src="${p.imagen}" alt="${p.categoria}">
            <div class="productInfo">
                <h2>${p.nombre}</h2>
                <p>Precio: $${p.precio}</p> 
                <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis excepturi ad, nam placeat fuga accusantium ab sed cupiditate corporis laborum dolor iure illum molestias! Fugit facilis neque excepturi voluptatem molestias.</p>
            </div>
            <div class="btns">
                <button onclick="anadir('${p.nombre}')">Añadir</button>
                <button onclick="quitar('${p.nombre}')">Quitar</button>
            </div>
        `;
        productContainer.append(div);
    };
}
loadProducts(producto);

botnCategory.forEach(botn=>{
    botn.addEventListener("click", (e) =>{
        botnCategory.forEach(botn=>botn.classList.remove("selected"));
        e.currentTarget.classList.add("selected");

        if(e.currentTarget.id!="todos"){
            const productCategory=producto.find(producto=>producto.id===e.currentTarget.id);
            titleMain.innerHTML=productCategory.categoria;
            const productsBotn=producto.filter(producto=>producto.id===e.currentTarget.id);
            loadProducts(productsBotn);
        }else{
            titleMain.innerHTML="Todos los productos";
            loadProducts(producto);
        }
        
    });
});