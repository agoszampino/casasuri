    const productos = [
        {
            producto: "Parrillada Especial",
            precio: 600,
            img:"../img/parrillada.jpg",
        },
        {
            producto: "Gnocchi",
            precio: 250,
            img:"../img/gnocchi.jpg",
        },
        {
            producto: "Super Mega Choripan",
            precio: 200,
            img:"../img/choripan.jpg",
        },
        {
            producto: "Carre de Cerdo",
            precio: 490,
            img:"../img/carredecerdo.jpg",
        },
        {
            producto: "Canastitas",
            precio: 65,
            img:"../img/canastitas.jpg",
        },
        {
            producto: "Tapa de Asado",
            precio: 650,
            img:"../img/tapadeasado.jpg",
        },        
    ];
    
 

    const carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];
  
    var items = document.querySelector("#grillaDeProductos");
    var contenidoCarrito = document.querySelector("#cart");
    var totalDelCarrito = document.querySelector("#total");
    

    // MUESTRA GRILLA DE PRODUCTOS EN HTML 

    function mostrarProductos() {
        productos.forEach((producto) => {
            let cardProductos = document.createElement("div");
            cardProductos.style.float = "left";
            cardProductos.className = "row";
            cardProductos.innerHTML = `
                <div class="card" style="width: 25rem;">
                    <img src= "${producto.img}" class="card-img-top" alt="${producto.producto}" style="height:25rem; width:25rem">
                    <div class="card-body">
                        <h5 class="card-title">${producto.producto}</h5>
                        <p class="card-text">$ ${producto.precio}</p>
                        <button onclick="agregarAlCarrito(${productos.indexOf(producto)})">Agregar</button>
                    </div>
                </div>   
            `;
            items.appendChild(cardProductos);
        });
    }

    //------------------------------------------------------------------------
  
    function inputChange(e) {
        if (e.target.value == 0) {
        carrito.splice(e.target.name, 1);
        } else {
        carrito[e.target.name].cantidad = e.target.value;
        }
        cargaCarrito();
        localStorage.carrito = JSON.stringify(carrito);
    }
  
    // AGREGA PRODUCTO SELECCIONADO AL CARRITO
  
    function agregarAlCarrito(index) {
        var producto = productos[index];
        if (carrito.length > 0) {
            var sinAgregar = true;
            for (var i = 0; i < carrito.length; i++) {
                if (producto.producto === carrito[i].producto) {
                carrito[i].cantidad++;
                sinAgregar = false;
                }
            }
            if (sinAgregar) {
                producto.cantidad = 1;
                carrito.push(producto);
            }
        } else {
        producto.cantidad = 1;
        carrito.push(producto);
        }
        cargaCarrito();
        localStorage.carrito = JSON.stringify(carrito);
    }
  

    // MUESTRA PRODUCTOS AGREGADOS AL CARRITO

    function cargaCarrito() {
        contenidoCarrito.innerHTML = "";
        totalDelCarrito.innerHTML = "";

        if (carrito.length > 0) {
        var sumaPrecios = 0;
        carrito.forEach((producto) => {
            let prodCarrito = document.createElement("li");
            prodCarrito.style.float = "left";
            prodCarrito.className = "productoSeleccionado", "list-group-item", "text-right", "mx-2";
            prodCarrito.innerHTML =  `
            <p>${producto.producto} - Cantidad ${producto.cantidad}</p> <p>$${producto.precio * producto.cantidad}</p> 
            <button style="float:right" onclick="agregarDesdeCarrito(${carrito.indexOf(producto)})">+</button>
            <button style="float:left" onclick="removerCarrito(${carrito.indexOf(producto)})">-</button>
            `;
            contenidoCarrito.appendChild(prodCarrito);
            sumaPrecios = sumaPrecios + producto.precio * producto.cantidad;
        });

        let totalFinal = document.createElement("p");
        totalFinal.style = "clear: both";
        totalFinal.className = "totalCarrito";
        totalFinal.innerHTML = `Total: $ ${sumaPrecios}`;
        totalDelCarrito.appendChild(totalFinal);
        }
    }

    // SUMAR PRODUCTOS YA AGREGADOS AL CARRITO, DESDE EL CARRITO

    function agregarDesdeCarrito(index) { 
        carrito[index].cantidad = carrito[index].cantidad + 1;
        if (carrito[index].cantidad <= 0) {
        carrito.unshift(index, 1);
        }
        localStorage.carrito = JSON.stringify(carrito);
        cargaCarrito();         
    }

    // QUITA PRODUCTOS YA AGREGADOS AL CARRITO, DESDE EL CARRITO
  
    function removerCarrito(index) {
        carrito[index].cantidad = carrito[index].cantidad - 1;
        if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
        }
        localStorage.carrito = JSON.stringify(carrito);
        cargaCarrito();
    }

    // VACIA TODO EL CARRITO

    $("#boton-vaciar").click(function(){
        carrito.splice(0, carrito.length);
        localStorage.carrito = JSON.stringify(carrito);
        cargaCarrito(); 
        
        $(".opcionesPago").hide();
        $(".formularioEfectivo").hide();
        $(".formularioTarjeta").hide();
    });

    // ELEGIR EL METODO DE PAGO Y SELECCIONAR UNA OPCION 

    $("#boton-comprar").click(function(){
        if (carrito.length > 0){
            $(".opcionesPago").toggle();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes seleccionar agregar al menos un producto para finalizar la compra',   
              })
        }        
    });
    
    $("#efectivo").click(function(){
        $(".formularioEfectivo").slideToggle();
        $(".formularioTarjeta").hide();
        $("#cart").hide();
    });

    $("#tarjeta").click(function(){
        $(".formularioTarjeta").slideToggle();
        $(".formularioEfectivo").hide();
        $("#cart").hide();
    });

    // CONFIRMACION FINAL 

    $(".cancelar").click(function(){
        
        $(".opcionesPago").hide();
        $(".formularioTarjeta").hide();
        $(".formularioEfectivo").hide();

        carrito.splice(0, carrito.length);
        localStorage.carrito = JSON.stringify(carrito);
        cargaCarrito(); 

    });

    mostrarProductos();
    cargaCarrito();    




    
    

 
  

