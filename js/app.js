// Cargar el archivo JSON
let producto = [];
async function cargarJson() {
    try {
        const response = await fetch("./datos.json");
        producto = await response.json();
        loadProducts(producto);
    } catch (e) {
        console.error("Error al cargar los datos\n", e);
    }
}
cargarJson();


/*Definiendo las variables*/
const productContainer = document.querySelector('#productContainer'),
    botnCategory = document.querySelectorAll(".categorybotn"),
    titleMain = document.querySelector("#titleMain"),
    windowModal = document.getElementById('windowModal'),
    windowContainer = document.getElementById('windowContainer'),
    closeButton = document.getElementById('closeButton'),
    productModal = document.querySelector('#productModal'),
    detallesCategory = document.getElementById('detallesCategory'),
    search = document.getElementById('search'),
    productSearchClass = document.querySelector('.productSearch'),
    productSearch = document.querySelector('#productSearch'),
    containerSearch = document.querySelector('.containerSearch'),
    rangeInput = document.querySelectorAll(".rangeInput input"),
    priceInput = document.querySelectorAll(".priceInput input"),
    range = document.querySelector(".slider .progress");
let botnView = document.querySelectorAll(".tooltip"),
    botnAdd = document.querySelectorAll(".botnAdd"),
    numProductsCart = document.querySelector('.numProductsCart');
let carrito = [];
let cantProduct = 1,
    productsCart = 0,
    priceGap = 10;
/*Cargando el aside de filtros*/
function loadCategorys(detalles) {

    detallesCategory.innerHTML = "";
    const propiedadesDescripcion = new Set();
    detalles.forEach(p => {
        for (const clave in p.descripcion) {
            propiedadesDescripcion.add(clave.charAt(0).toUpperCase() + clave.slice(1));
        }
    });

    let indice = 0;
    Array.from(propiedadesDescripcion).forEach(a => {
        const descripciones = new Set();
        const divContent = document.createElement("div");
        divContent.classList.add("content");
        divContent.setAttribute("data-id", a.toLowerCase());
        detalles.forEach(p => {
            for (const clave in p.descripcion) {
                if (clave.toLowerCase() == a.toLowerCase()) {
                    descripciones.add(p.descripcion[clave].charAt(0).toUpperCase() + p.descripcion[clave].slice(1));
                }
            }
        });

        Array.from(descripciones).forEach(d => {
            if (a == "Marca") {
                const ulMarca = document.createElement("ul");
                ulMarca.classList.add("checkboxMarca");
                ulMarca.innerHTML = `
                    <li class="buttonMarca" data-id="${d.toLowerCase()}">${d}</li>
                `;
                divContent.append(ulMarca);
            } else {
                const divDes = document.createElement("div");
                divDes.classList.add("checkbox");
                divDes.innerHTML = `
                    <input type="checkbox" id="myCheckbox${indice}" class="myCheckbox" data-id="${d.toLowerCase()}">
                    <label for="myCheckbox${indice}">${d}</label>
                `;
                divContent.append(divDes);
                indice++;
            }
        });
        const div = document.createElement("div");
        div.classList.add("description");
        if (a == "Procesador") {
            div.id = "divProcesador";
        }
        div.innerHTML = `
            <h2>${a}</h2>
            ${divContent.outerHTML}
        `;
        detallesCategory.append(div);
    });
    const buttonMarca = document.querySelectorAll('.buttonMarca');
    const checkboxes = document.querySelectorAll('.myCheckbox');
    const divProcesador = document.getElementById('divProcesador');
    function procesadorFiltro(filtro){
        let indice=100;
        divProcesador.innerHTML = "<h2>Procesador</h2>";
        const divPros = document.createElement("div");
        divPros.classList.add("content");
        const arrayProcesador=new Set();
        detalles.forEach(d=>{
            if(d.descripcion.marca.toLowerCase()==filtro.target.dataset.id){
                arrayProcesador.add(d.descripcion.procesador);
            }
        });
        Array.from(arrayProcesador).forEach(a=>{
            const div=document.createElement("div");
            div.classList.add("checkbox");
            div.innerHTML = `
                <input type="checkbox" id="myCheckbox${indice}" class="myCheckbox" data-id="${a.toLowerCase()}">
                <label for="myCheckbox${indice}">${a}</label>
            `;
            divPros.append(div);
            indice--;
        });
        divProcesador.appendChild(divPros);
    }
    let arrayMarcas = [];
    buttonMarca.forEach(b => {
        b.addEventListener('click', function (e) {
            buttonMarca.forEach(botn => botn.classList.remove("selected"));
            e.currentTarget.classList.add("selected");
            arrayMarcas = detalles.filter(d => d.descripcion.marca.toLowerCase() == e.target.dataset.id);
            checkboxes.forEach(c => {
                c.checked = false;
            });
            if (e.target.dataset.id =="intel") {
                procesadorFiltro(e);
            } else if (e.target.dataset.id == "amd") {
                procesadorFiltro(e);
            }
            loadProducts(arrayMarcas);
        });
    });
    /*Eventos de los checkbox*/
    checkboxes.forEach(c => {
        c.addEventListener('change', (e) => {
            console.log(e.target.dataset.id)
            if (arrayMarcas.length == 0) {
                detalles.forEach(d => {
                    console.log(d.descripcion)
                })
                console.log(detalles);
            } else {
                detalles.forEach(d => {
                    console.log(d.descripcion)
                })
                console.log(arrayMarcas);
            }
        });
    });


    // const array=[];
    // checkboxes.forEach(c => {
    //     c.addEventListener('change', (e) => {

    //         let dataId=(e.currentTarget.parentNode).parentNode.dataset.id.toLowerCase();
    //         detalles.forEach(d=>{
    //             for(const clave in d.descripcion){
    //                 if(clave.toLowerCase()==dataId && d.descripcion[clave].toLowerCase()==e.target.dataset.id.toLowerCase()){
    //                     if(e.target.checked){
    //                         if(array.includes(d)){

    //                         }
    //                         array.push(d);
    //                     }else{
    //                         array.splice(array.indexOf(d),1);
    //                     }
    //                 }
    //             }
    //         });
    //         const arrayaux= new Set(array);
    //         array.length==0? loadProducts(detalles):loadProducts(Array.from(arrayaux));
    //     });
    // });

}

/*Funcion para cargar los productos segun la categoria elegida*/
function loadProducts(productSelect) {
    productContainer.innerHTML = "";
    productSelect.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <div class="iconoCapa">
                <img src="${p.imagen}" alt="${p.categoria.nombre}">
                <div class="tooltip" data-id="${p.id}">
                    <span class="tooltipTop">Vista rápida</span>
                    <i class="fa-regular fa-eye"></i>
                </div>
            </div>
            <div class="productInfo">
                <h2>${p.nombre}</h2>
                <p>Precio: $${(p.precio).toFixed(2)}</p>
                <button id="${p.id}" class="botnAdd"><i class="fa-solid fa-cart-arrow-down"></i> Comprar</button>
            </div>
        `;
        productContainer.append(div);
    });
    actualizarBotonesAgregar();
    botnView = document.querySelectorAll(".tooltip");
    botnView.forEach(botn => {
        botn.addEventListener('click', modalWindowView);
    });
}

/*Botones de las categorias*/
botnCategory.forEach(botn => {
    botn.addEventListener("click", (e) => {
        botnCategory.forEach(botn => botn.classList.remove("selected"));
        console.log(e.currentTarget)
        e.currentTarget.classList.add("selected");

        if (e.currentTarget.id != "todos") {
            const productCategory = producto.find(producto => producto.categoria.id === e.currentTarget.id);
            titleMain.innerText = productCategory.categoria.nombre;
            const productsBotn = producto.filter(producto => producto.categoria.id === e.currentTarget.id);
            loadProducts(productsBotn);
            loadCategorys(productsBotn);
        } else {
            titleMain.innerText = "Todos los productos";
            loadProducts(producto);
            loadCategorys([]);
        }

    });
});

/*Funcion para abrir venta de vista rapida del producto*/
function modalWindowView(e) {
    windowModal.style.display = 'flex';
    productModal.innerHTML = "";
    producto.forEach(p => {
        if (e.currentTarget.dataset.id == p.id) {
            const div = document.createElement("div");
            div.classList.add("viewProductModal");
            const ul = document.createElement("ul");
            for (const clave in p.descripcion) {
                if (p.descripcion.hasOwnProperty(clave)) {
                    const valor = p.descripcion[clave];
                    const li = document.createElement("li");
                    li.textContent = (clave.charAt(0).toUpperCase() + clave.slice(1)) + ": " + valor;
                    ul.appendChild(li);
                }
            }
            div.innerHTML = `
                <div class="zoom">
                    <img src="${p.imagen}" alt="${p.categoria.nombre}" class="imgPre">
                    <img src="${p.imagen}" alt="${p.categoria.nombre}" id="imgZoom">
                </div>
                <div class="productInfoModal">
                    <h2 class="titleModal">${p.nombre}</h2>
                    ${ul.outerHTML}
                    <p>Precio: $${(p.precio).toFixed(2)}</p>
                    <div class="botnModal">
                        <div class="botnCant">
                            <span class="minus">-</span>
                            <span class="numCant">1</span>
                            <span class="plus">+</span>
                        </div>
                        <button id="${p.id}" class="botnAdd"><i class="fa-solid fa-cart-arrow-down"></i> Comprar</button>
                    </div>
                </div>
                `;
            productModal.append(div);
        };
    });
    actualizarBotonesAgregar();

    /*Varibales y eventos de los botones + y - dentro de la ventana de vista rapida*/
    let numCant = document.querySelector('.numCant'),
        plus = document.querySelector('.plus'),
        minus = document.querySelector('.minus');
    plus.addEventListener('click', () => {
        cantProduct++;
        numCant.innerText = cantProduct;
    });
    minus.addEventListener('click', () => {
        if (cantProduct > 1) {
            cantProduct--;
            numCant.innerText = cantProduct;
        }
    });
    /*Variable y eventos para el efecto zoom de la ventana modal*/
    let zoom = document.querySelector('.zoom');
    let imgZoom = document.getElementById('imgZoom');
    zoom.addEventListener('mousemove', (event) => {
        imgZoom.style.opacity = 1;
        let positionPx = event.x - zoom.getBoundingClientRect().left;
        let positionX = (positionPx / zoom.offsetWidth) * 100;

        let positionPy = event.y - zoom.getBoundingClientRect().top;
        let positionY = (positionPy / zoom.offsetHeight) * 100;

        imgZoom.style.setProperty('--zoom-x', positionX + '%');
        imgZoom.style.setProperty('--zoom-y', positionY + '%');

        let transformX = -(positionX - 50) / 3.5;
        let transformY = -(positionY - 50) / 3.5;
        imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`;
    });
    zoom.addEventListener('mouseout', () => {
        imgZoom.style.opacity = 0;
    });
}
/*Funcion para renderizar botones COMPRAR*/
function actualizarBotonesAgregar() {
    botnAdd = document.querySelectorAll(".botnAdd");
    botnAdd.forEach(botn => {
        botn.addEventListener('click', agregarCarrito);
    });

}
/*Funcion para agregar productos al carrito y guardarlo en almacenamiento local*/
function agregarCarrito(e) {
    const enCarrito = carrito.find(p => p.id == e.currentTarget.id);
    let nombre;
    if (enCarrito) {
        enCarrito.cantidad += cantProduct;
        nombre = enCarrito.nombre;
    } else {
        let findProduct = producto.find(p => p.id == e.currentTarget.id);
        findProduct.cantidad = cantProduct;
        nombre = findProduct.nombre;
        carrito.push(findProduct);
    }
    Toastify({
        text: nombre + " fue agregado!!",
        close: true,
        duration: 2000,
        gravity: "bottom",
        position: "left",
        style: {
            background: "linear-gradient(to right, #16578b, #3178b3)",
            color: "#fff",
        },
        onClick: function () {
            this.duration = 0;
        }
    }).showToast();
    productsCart += cantProduct;
    numProductsCart.innerText = productsCart < 10 ? ("0" + productsCart) : productsCart;
    localStorage.setItem("carrito", JSON.stringify(carrito));

}

/*Funcion para cerrar venta de vista rapida*/
const closeWindow = () => {
    windowContainer.classList.add('close');

    setTimeout(() => {
        windowContainer.classList.remove('close');
        windowModal.style.display = 'none';
    }, 500);
    cantProduct = 1;
};
closeButton.addEventListener('click', () => closeWindow());
window.addEventListener('click', e => e.target == windowModal && closeWindow());


/*Obteniendo datos del carrito, del almacenamiento local*/
let productsInCart = localStorage.getItem("carrito")
carrito = JSON.parse(productsInCart) || [];
numProductsCart.innerText = carrito.reduce((acc, c) => acc + c.cantidad, 0) < 10 ? ("0" + carrito.reduce((acc, c) => acc + c.cantidad, 0)) : carrito.reduce((acc, c) => acc + c.cantidad, 0);
productsCart = carrito.reduce((acc, c) => acc + c.cantidad, 0);


/*Funcion para cargar los productos en el buscador*/
function buscador(e) {
    const palabra = e.value.toLowerCase();
    const results = producto.filter(p => {
        return Object.values(p).some(value => {
            if (typeof value === 'object') {
                return Object.values(value).some(v => v.toLowerCase().includes(palabra));
            } else if (typeof value === 'string') {
                return value.toLowerCase().includes(palabra);
            }
            return false;
        });
    });
    if (results.length > 0) {
        loadSearch(results);
    } else {
        productSearch.innerHTML = "";
        const p = document.createElement("p");
        p.classList.add("searchNone");
        p.innerHTML = `
            <p>No se encontaron resultados para "${palabra}"</p>
        `;
        productSearch.append(p);
    }
    productSearchClass.style.display = "block";
}
/*Eventos del buscador al hacer click y al escribir*/
search.addEventListener('click', function () {
    buscador(search);
});
search.addEventListener('keyup', function () {
    buscador(search);
});
/*Dejar de mostrar productos del buscador al dejar de seleccionar el buscador*/
document.addEventListener('click', function (event) {
    const target = event.target;
    if (!containerSearch.contains(target)) {
        productSearchClass.style.display = 'none';
    }
});
/*Cargando productos del buscador*/
function loadSearch(product) {
    productSearch.innerHTML = "";
    product.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("viewSearch");
        div.setAttribute("data-id", p.id);
        div.innerHTML = `
            <img src="${p.imagen}" alt="${p.imagen}">
            <p>${p.nombre}</p>
            <p>$${(p.precio).toFixed(2)}</p>
        `;
        productSearch.append(div);
    });
    /*Ventana modal al presionar producto del buscador*/
    let viewSearch = document.querySelectorAll('.viewSearch');
    viewSearch.forEach(vs => {
        vs.addEventListener('click', function (event) {
            productSearch.style.display = 'none';
            modalWindowView(event);
        });
    });
}

/*Funcion para el boton ir arriba*/
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.goTopContainer').classList.add('show');
    } else {
        document.querySelector('.goTopContainer').classList.remove('show');
    }
}
document.querySelector('.goTopContainer').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*Eventos para barra de rango de precio*/
priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);


        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "inputMin") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
        const productsPrice = producto.filter(p => (p.precio < maxPrice && p.precio > minPrice));
        loadProducts(productsPrice);
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);


        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "rangeMin") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
        const productsPrice = producto.filter(p => (p.precio > minVal && p.precio < maxVal));
        loadProducts(productsPrice);
    });
});