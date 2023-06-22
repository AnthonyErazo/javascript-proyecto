const producto=[
    //Memorias Ram 
    {
        id: "memoriaRam01",
        nombre: "MEMORIA 16GB DDR4 KINGSTON FURY BEAST BUS 3200MHZ BLACK",
        categoria:{
            nombre:"Memoria Ram",
            id:"memoriaRam"
        },
        precio:46.50,
        imagen:"./img/MemoriaRamFury3.jpg"
    },
    {
        id: "memoriaRam02",
        nombre: "MEMORIA 8GB DDR3 KINGSTON BUS 1600GHZ",
        categoria:{
            nombre:"Memoria Ram",
            id:"memoriaRam"
        },
        precio:39.00,
        imagen:"./img/MemoriaRamKingston2.jpg"
    },
    {
        id: "memoriaRam03",
        nombre: "MEMORIA 8GB DDR3L ADATA UDIMM BUS 1600MHZ",
        categoria:{
            nombre:"Memoria Ram",
            id:"memoriaRam"
        },
        precio:30.00,
        imagen:"./img/MemoriaRamAdata.jpg"
    },
    {
        id: "memoriaRam04",
        nombre: "MEMORIA 8GB DDR4 KINGSTON FURY RENEGADE RGB BUS 3200MHz BLACK",
        categoria:{
            nombre:"Memoria Ram",
            id:"memoriaRam"
        },
        precio:38.50,
        imagen:"./img/MemoriaRamFury.jpg"
    },
    {
        id: "memoriaRam05",
        nombre: "MEMORIA 16GB DDR5 KINGSTON FURY BEAST WHITE RGB BUS 5200MHz",
        categoria:{
            nombre:"Memoria Ram",
            id:"memoriaRam"
        },
        precio:75.00,
        imagen:"./img/MemoriaRamFury2.jpg"
    },
    {
        id: "memoriaRam06",
        nombre: "MEMORIA 8GB DDR4 T-FORCE VULCAN Z TUF GAMING ALLIANCE BUS 3200MHz",
        categoria:{
            nombre:"Memoria Ram",
            id:"memoriaRam"
        },
        precio:24.50,
        imagen:"./img/MemoriaRamTForce.jpg"
    },
    {
        id: "memoriaRam07",
        nombre: "MEMORIA 16GB DDR4 VIPER GAMING ELITE GRIS CON DISIPADOR BUS 2666Mhz",
        categoria:{
            nombre:"Memoria Ram",
            id:"memoriaRam"
        },
        precio:85.50,
        imagen:"./img/MemoriaRamViperGaming.jpg"
    },
    {
        id: "memoriaRam08",
        nombre: "MEMORIA 16GB DDR4 XPG GAMMIX D10 BLACK BUS 3200MHz",
        categoria:{
            nombre:"Memoria Ram",
            id:"memoriaRam"
        },
        precio:39.50,
        imagen:"./img/MemoriaRamXPG.jpg"
    },
    //Procesadores Intel
    {
        id: "procesador01",
        nombre: "PROCESADOR INTEL CORE I9 10900K 3.70GHZ 20MB",
        categoria:{
            nombre:"Procesador",
            id:"procesador"
        },
        precio:590.00,
        imagen:"./img/ProcesadorIntel.jpg"
    },
    {
        id: "procesador02",
        nombre: "PROCESADOR INTEL CELERON G6900 3.40GHZ ",
        categoria:{
            nombre:"Procesador",
            id:"procesador"
        },
        precio:68.50,
        imagen:"./img/ProcesadorIntel2.jpg"
    },
    {
        id: "procesador03",
        nombre: "PROCESADOR INTEL PENTIUM GOLD G5420 3.8GHZ 4.0MB",
        categoria:{
            nombre:"Procesador",
            id:"procesador"
        },
        precio:76.80,
        imagen:"./img/ProcesadorIntel3.jpg"
    },
    {
        id: "procesador04",
        nombre: "PROCESADOR INTEL CORE I3-10100F 3.6GHZ 6.0MB",
        categoria:{
            nombre:"Procesador",
            id:"procesador"
        },
        precio:82.30,
        imagen:"./img/ProcesadorIntel4.jpg"
    },
    {
        id: "procesador05",
        nombre: "PROCESADOR INTEL CORE I3 10105F 3.7 GHZ 6MB",
        categoria:{
            nombre:"Procesador",
            id:"procesador"
        },
        precio:87.80,
        imagen:"./img/ProcesadorIntel5.jpg"
    },
    {
        id: "procesador06",
        nombre: "PROCESADOR INTEL CORE I5 10400F 2.9GHZ - 12MB",
        categoria:{
            nombre:"Procesador",
            id:"procesador"
        },
        precio:129.10,
        imagen:"./img/ProcesadorIntel6.jpg"
    },
    //Procesadores AMD
    {
        id: "procesador07",
        nombre: "PROCESADOR AMD RYZEN 5 5600G 3.9GHz 16MB",
        categoria:{
            nombre:"Procesador",
            id:"procesador"
        },
        precio:162.00,
        imagen:"./img/ProcesadorAmd.jpg"
    },
    {
        id: "procesador08",
        nombre: "PROCESADOR AMD RYZEN 3 3200G 3.6GHZ 6.0MB",
        categoria:{
            nombre:"Procesador",
            id:"procesador"
        },
        precio:90.60,
        imagen:"./img/ProcesadorAmd2.jpg"
    },
    {
        id: "procesador09",
        nombre: "PROCESADOR AMD RYZEN 5 4500MPK 3.6GHZ",
        categoria:{
            nombre:"Procesador",
            id:"procesador"
        },
        precio:129.10,
        imagen:"./img/ProcesadorAmd3.jpg"
    },
    {
        id: "procesador10",
        nombre: "PROCESADOR AMD RYZEN 3 PRO 4350G 3.8GHZ",
        categoria:{
            nombre:"Procesador",
            id:"procesador"
        },
        precio:118.10,
        imagen:"./img/ProcesadorAmd4.jpg"
    },
    {
        id: "procesador11",
        nombre: "PROCESADOR AMD RYZEN 5 4600G 3.7GHZ",
        categoria:{
            nombre:"Procesador",
            id:"procesador"
        },
        precio:134.60,
        imagen:"./img/ProcesadorAmd5.jpg"
    },
    //Placas madre Intel
    {
        id: "placaMadre01",
        nombre: "MAINBOARD GIGABYTE H470M H DDR4 LGA 1200",
        categoria:{
            nombre:"Placa Madre",
            id:"placaMadre"
        },
        precio:79.60,
        imagen:"./img/PlacaMadreIntel2.jpg"
    },
    {
        id: "placaMadre02",
        nombre: "MAINBOARD MSI B560M PRO-E LGA 1200",
        categoria:{
            nombre:"Placa Madre",
            id:"placaMadre"
        },
        precio:90.60,
        imagen:"./img/PlacaMadreIntel3.jpg"
    },
    {
        id: "placaMadre03",
        nombre: "MAINBOARD MSI PRO H610M-G DDR4 LGA1700",
        categoria:{
            nombre:"Placa Madre",
            id:"placaMadre"
        },
        precio:93.30,
        imagen:"./img/PlacaMadreIntel4.jpg"
    },
    {
        id: "placaMadre04",
        nombre: "MAINBOARD ASUS PRIME H610M-K D4",
        categoria:{
            nombre:"Placa Madre",
            id:"placaMadre"
        },
        precio:115.30,
        imagen:"./img/PlacaMadreIntel.jpg"
    },
    //Placas madre AMD
    {
        id: "placaMadre05",
        nombre: "MAINBOARD ASUS PRIME B650M-A WIFI",
        categoria:{
            nombre:"Placa Madre",
            id:"placaMadre"
        },
        precio:241.90,
        imagen:"./img/PlacaMadreAmd.jpg"
    },
    {
        id: "placaMadre06",
        nombre: "MAINBOARD MSI A320M-A PRO AM4",
        categoria:{
            nombre:"Placa Madre",
            id:"placaMadre"
        },
        precio:54.80,
        imagen:"./img/PlacaMadreAmd2.jpg"
    },
    {
        id: "placaMadre07",
        nombre: "MAINBOARD MSI A520M-A PRO AM4",
        categoria:{
            nombre:"Placa Madre",
            id:"placaMadre"
        },
        precio:76.80,
        imagen:"./img/PlacaMadreAmd3.jpg"
    },
    {
        id: "placaMadre08",
        nombre: "MAINBOARD GIGABYTE B450M DS3H V2 AM4",
        categoria:{
            nombre:"Placa Madre",
            id:"placaMadre"
        },
        precio:90.60,
        imagen:"./img/PlacaMadreAmd4.jpg"
    },
    {
        id: "placaMadre09",
        nombre: "MAINBOARD GIGABYTE B550M K DDR4 AM4",
        categoria:{
            nombre:"Placa Madre",
            id:"placaMadre"
        },
        precio:112.60,
        imagen:"./img/PlacaMadreAmd5.jpg"
    },
    //Fuentes de poder
    {
        id: "fuenteDePoder01",
        nombre: "FUENTE COOLER MASTER MWE 750 V2 750W 80 PLUS GOLD",
        categoria:{
            nombre:"Fuente de Poder",
            id:"fuenteDePoder"
        },
        precio:112.00,
        imagen:"./img/FuenteDePoder.jpg"
    },
    {
        id: "fuenteDePoder02",
        nombre: "FUENTE MSI MAG A650BN 650W 80 PLUS BRONZE",
        categoria:{
            nombre:"Fuente de Poder",
            id:"fuenteDePoder"
        },
        precio:72.00,
        imagen:"./img/FuenteDePoder2.jpg"
    },
    {
        id: "fuenteDePoder03",
        nombre: "FUENTE ANTRYX B500 V3 500W BLACK",
        categoria:{
            nombre:"Fuente de Poder",
            id:"fuenteDePoder"
        },
        precio:29.00,
        imagen:"./img/FuenteDePoder3.jpg"
    },
    {
        id: "fuenteDePoder04",
        nombre: "FUENTE KOLINK CORE 500W 80 PLUS WHITE",
        categoria:{
            nombre:"Fuente de Poder",
            id:"fuenteDePoder"
        },
        precio:40.00,
        imagen:"./img/FuenteDePoder4.jpg"
    },
    {
        id: "fuenteDePoder05",
        nombre: "FUENTE GIGABYTE P550B 550W 80 PLUS BRONZE",
        categoria:{
            nombre:"Fuente de Poder",
            id:"fuenteDePoder"
        },
        precio:55.50,
        imagen:"./img/FuenteDePoder5.jpg"
    },
    {
        id: "fuenteDePoder06",
        nombre: "FUENTE GIGABYTE P650G 650W 80 PLUS GOLD",
        categoria:{
            nombre:"Fuente de Poder",
            id:"fuenteDePoder"
        },
        precio:77.00,
        imagen:"./img/FuenteDePoder6.jpg"
    },
    {
        id: "fuenteDePoder07",
        nombre: "FUENTE ANTRYX KIRIN 650W 80 PLUS BRONZE",
        categoria:{
            nombre:"Fuente de Poder",
            id:"fuenteDePoder"
        },
        precio:61.50,
        imagen:"./img/FuenteDePoder7.jpg"
    },
    {
        id: "fuenteDePoder08",
        nombre: "FUENTE COOLER MASTER MWE 550 V2 550W 80 PLUS BRONZE ",
        categoria:{
            nombre:"Fuente de Poder",
            id:"fuenteDePoder"
        },
        precio:65.00,
        imagen:"./img/FuenteDePoder8.jpg"
    },
    {
        id: "fuenteDePoder09",
        nombre: "FUENTE COOLER MASTER MWE V2 750W 80 PLUS BRONZE ",
        categoria:{
            nombre:"Fuente de Poder",
            id:"fuenteDePoder"
        },
        precio:85.00,
        imagen:"./img/FuenteDePoder9.jpg"
    },
    {
        id: "fuenteDePoder10",
        nombre: "FUENTE COOLER MASTER V1100 SFX 1100W 80 PLUS PLATINUM FULL MODULAR",
        categoria:{
            nombre:"Fuente de Poder",
            id:"fuenteDePoder"
        },
        precio:435.00,
        imagen:"./img/FuenteDePoder10.jpg"
    },
];
/*Definiendo las variables*/
const productContainer=document.querySelector('#productContainer'),
    botnCategory=document.querySelectorAll(".categorybotn"),
    titleMain=document.querySelector("#titleMain"),
    windowModal=document.getElementById('windowModal'),
    windowContainer=document.getElementById('windowContainer'),
    closeButton=document.getElementById('closeButton'),
    productModal=document.querySelector('#productModal');
let botnView=document.querySelectorAll(".tooltip"),
    botnAdd=document.querySelectorAll(".botnAdd"),
    numProductsCart=document.querySelector('.numProductsCart');
let carrito;
let cantProduct=1,
    productsCart=0;

/*Funcion para cargar los productos segun la categoria elegida*/
function loadProducts(productSelect){
    productContainer.innerHTML="";
    productSelect.forEach(p=>{
        const div=document.createElement("div");
        div.classList.add("product");
        div.innerHTML=`
            <div class="iconoCapa">
                <img src="${p.imagen}" alt="${p.categoria.nombre}">
                <div class="tooltip" id="${p.id}">
                    <span class="tooltipTop">Vista rápida</span>
                    <i class="fa-regular fa-eye"></i>
                </div>
            </div>
            <div class="productInfo">
                <h2>${p.nombre}</h2>
                <p>Precio: $${p.precio}</p>
                <button id="${p.id}" class="botnAdd"><i class="fa-solid fa-cart-arrow-down"></i> Comprar</button>
            </div>
        `;
        productContainer.append(div);
    });
    actualizarBotonesAgregar();
    botnView=document.querySelectorAll(".tooltip");
    botnView.forEach(botn=>{
        botn.addEventListener('click',modalWindowView);
    });
}
loadProducts(producto);

/*Botones de las categorias*/
botnCategory.forEach(botn=>{
    botn.addEventListener("click", (e) =>{
        botnCategory.forEach(botn=>botn.classList.remove("selected"));
        e.currentTarget.classList.add("selected");

        if(e.currentTarget.id!="todos"){
            const productCategory=producto.find(producto=>producto.categoria.id===e.currentTarget.id);
            titleMain.innerHTML=productCategory.categoria.nombre;
            const productsBotn=producto.filter(producto=>producto.categoria.id===e.currentTarget.id);
            loadProducts(productsBotn);
        }else{
            titleMain.innerHTML="Todos los productos";
            loadProducts(producto);
        }
        
    });
});

/*Funcion para abrir venta de vista rapida del producto*/
function modalWindowView(e){
    windowModal.style.display='flex';
        productModal.innerHTML="";
        producto.forEach(p=>{
            if(e.currentTarget.id==p.id){
                const div=document.createElement("div");
                div.classList.add("viewProductModal");
                div.innerHTML=`
                <figure id="magnifying_area">
                    <img id="magnifying_img" src="${p.imagen}" alt="${p.categoria.nombre}">
                </figure>
                <div class="productInfoModal">
                    <h2>${p.nombre}</h2>
                    <p>Precio: $${p.precio}</p>
                    <div class="botnCant">
                        <span class="minus">-</span>
                        <span class="numCant">1</span>
                        <span class="plus">+</span>
                    </div>
                    <button id="${p.id}" class="botnAdd"><i class="fa-solid fa-cart-arrow-down"></i> Comprar</button>
                </div>
                `;
                productModal.append(div);
            };
        });
        actualizarBotonesAgregar();
        
        /*Varibales y eventos de los botones + y - dentro de la ventana de vista rapida*/
        let numCant=document.querySelector('.numCant'),
            plus=document.querySelector('.plus'),
            minus=document.querySelector('.minus');
        plus.addEventListener('click',(p)=>{
            cantProduct++;
            numCant.innerHTML=cantProduct;
        });
        minus.addEventListener('click',(m)=>{
            if(cantProduct>1){
                cantProduct--;
                numCant.innerHTML=cantProduct;
            }
        });
}
/*Funcion para renderizar botones COMPRAR*/
function actualizarBotonesAgregar(){
    botnAdd=document.querySelectorAll(".botnAdd");
    botnAdd.forEach(botn=>{
        botn.addEventListener('click',agregarCarrito);
    });
    
}
/*Funcion para agregar productos al carrito y guardarlo en almacenamiento local*/
function agregarCarrito(e){
    console.log(e.currentTarget.id);
    const enCarrito=carrito.find(p=>p.id==e.currentTarget.id);
    if(enCarrito){
        enCarrito.cantidad+=cantProduct;
        console.log(enCarrito.cantidad);
    }else{
        let findProduct = producto.find(p => p.id == e.currentTarget.id);
        findProduct.cantidad=cantProduct;
        carrito.push(findProduct);
        console.log(findProduct.cantidad);
    }
    productsCart+=cantProduct;
    numProductsCart.innerHTML=productsCart;
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

/*Funcion para cerrar venta de vista rapida*/
const closeWindow=()=>{
    windowContainer.classList.add('close');

    setTimeout(()=>{
        windowContainer.classList.remove('close');
        windowModal.style.display='none';
    },500);
    cantProduct=1;
};
closeButton.addEventListener('click',()=>closeWindow());
window.addEventListener('click',e=>e.target==windowModal&&closeWindow());

/*Obteniendo datos del carrito, del almacenamiento local*/
let productsInCart=localStorage.getItem("carrito")
if(productsInCart){
    carrito=JSON.parse(productsInCart);
    numProductsCart.innerHTML=carrito.reduce((acc,c)=> acc+c.cantidad,0);;
}else{
    carrito=[];
}

