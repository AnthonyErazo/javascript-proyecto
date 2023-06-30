//Objetos en el carrito
let carrito=localStorage.getItem("carrito");
carrito=JSON.parse(carrito);
//Variables
const productoCartContainer=document.querySelector('#productCartContainer'),
    titleCart=document.getElementById('titleCart'),
    cartEmpty=document.getElementById('cartEmpty'),
    cartProductTitle=document.getElementById('cartProductTitle'),
    totalPriceCart=document.getElementById('totalPriceCart'),
    cartBuy=document.getElementById('cartBuy');
let buyNow=document.getElementById('buyNow'),
    botneliminar=document.querySelectorAll('.botneliminar'),
    priceTotalProducts=document.getElementById('priceTotalProducts'),
    plus = document.querySelectorAll(".plus"),
    minus = document.querySelectorAll(".minus");
/*Funcion para aumentar la cantidad del producto*/
function addCant(e){
    carrito.forEach(c=>{
        if(c.id==e.target.getAttribute('data-id')){
            c.cantidad++;
        }
    });
    loadCartWindow()
}
/*Funcion para reducir la cantidad del producto*/
function removeCant(e){
    carrito.forEach(c=>{
        if(c.id==e.target.getAttribute('data-id')&&c.cantidad>1){
            c.cantidad--;
        }
    });
    loadCartWindow()
}
/*Funcion para cargar los productos del añadidos en el carrito*/
function loadCartWindow(){
    if(carrito&&carrito.length>0){
        /*Si hay productos en el carrito se muestran*/
        productoCartContainer.innerHTML="";
        titleCart.style.display="block";
        cartProductTitle.style.display="grid";
        cartEmpty.style.display="none";
        totalPriceCart.style.display="grid";
        buyNow.style.display="block";
        carrito.forEach(c=>{
            const div=document.createElement("div");
            div.classList.add("productCart");
            div.innerHTML=`
                <img src="${c.imagen}" alt="${c.categoria.nombre}">
                <h3>${c.nombre}</h3>
                <p>$${c.precio.toFixed(2)}</p>
                <div class="cant">
                    <div class="botnCant">
                        <span class="minus" data-id="${c.id}">-</span>
                        <span class="numCant">${c.cantidad}</span>
                        <span class="plus" data-id="${c.id}">+</span>
                    </div>
                    <button id="${c.id}" class="botneliminar"><i class="fa-solid fa-trash"></i></button>
                </div>
                <p id="totalPrice">$${(c.cantidad*c.precio).toFixed(2)}</p>
            `;
            productoCartContainer.append(div);
        });
    }else{
        /*De lo contrario solo mostrara un mensaje*/
        productoCartContainer.innerHTML="";
        titleCart.style.display="none";
        cartEmpty.style.display="block";
        cartProductTitle.style.display="none";
        totalPriceCart.style.display="none";
        buyNow.style.display="none";
    }
    /*Renderizando los botones para aumentar y reducir cantidad*/
    plus = document.querySelectorAll(".plus");
    minus = document.querySelectorAll(".minus");
    plus.forEach(a=>{
        a.addEventListener('click',addCant);
    });
    minus.forEach(r=>{
        r.addEventListener('click',removeCant);
    });
    /*Actualizando el precio Total*/
    let precioTotal=0;
    carrito.forEach(c=>precioTotal+=c.cantidad*c.precio);
    priceTotalProducts.innerText="$"+precioTotal.toFixed(2);
    localStorage.setItem("carrito",JSON.stringify(carrito));
    /*Actualizando boton eliminar y comprar*/
    botneliminar=document.querySelectorAll('.botneliminar');
    botneliminar.forEach(botn=>{
        botn.addEventListener('click',eliminateProduct);
    });
    buyNow.addEventListener('click',comprar);
}

loadCartWindow();

/*Funcion para eliminar el producto del carrito*/
function eliminateProduct(e){
    console.log(e.currentTarget.id);
    let findProduct=carrito.find(p => p.id == e.currentTarget.id);
    carrito.splice(carrito.indexOf(findProduct),1);
    loadCartWindow();

    localStorage.setItem("carrito",JSON.stringify(carrito));
}
/*Funcion para comprar productos añadidos al carrito*/
function comprar(){
    carrito.length=0;
    localStorage.setItem("carrito",JSON.stringify(carrito));
    productoCartContainer.innerHTML="";
    titleCart.style.display="none";
    cartBuy.style.display="block";
    cartProductTitle.style.display="none";
    totalPriceCart.style.display="none";
    buyNow.style.display="none";
}
