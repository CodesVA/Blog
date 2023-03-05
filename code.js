let content = document.getElementById('content');

fetch('posts.json')
    .then(Response => Response.json())
    .then(data => {
        publicacion(data);
    })

const publicacion = (data) => {

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        content.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
                <article class="card h-100">
                    <img id="${element.id}" src="${element.imagenPrincipal}" style="height: 13rem;" alt="">
                    <div class="card-body p-2">
                        <p id="${element.id}" class="display-6">
                            ${element.titulo}
                        </p>
                    </div>
                </article>
            </div>
        `;
    }
}

content.addEventListener('click', articulo);

function articulo(e) {
    e.preventDefault();
    if (e.target.alt == "" || e.target.className == "display-6") {
        //console.log(e.target.id);
        fetch('posts.json')
            .then(Response => Response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    if (e.target.id == element.id) {
                        content.innerHTML= `
                                    <div><button onclick="recargarPagina()" class="btn btn-outline-dark btn-sm rounded-pill ">Atras</button></div>
                                    <div id="articulo" class="col-12 col-sm-12 col-md-11 col-lg-10 p-5">
                                    <h6 id="${element.id}" class="display-1 text-center">
                                        ${element.titulo}
                                    </h6>
                                    <div class="row justify-content-center">
                                        <div class="col-12 col-md-8 col-lg-7">
                                            <img id="${element.id}" src="${element.imagenPrincipal}" style="height: 13rem;" alt="" class="w-100 my-3">
                                        </div>
                                    </div>
                                    <p>${element.introduccion}</p>
                                    <p>${element.fecha}</p></div>
                        `;
                        for (const parrafo of element.parrafos) {

                            document.getElementById('articulo').innerHTML += `
                                <div class="row justify-content-center">
                                    <div class="col-10 col-md-8 col-lg-7">
                                        <img src="${parrafo.imagen}" style="height: 13rem;" alt="" class="w-100 my-3">
                                    </div>
                                </div>
                                <h6 class="display-6">${parrafo.subTitulo}</h6>
                                <p>${parrafo.contenido}</p>
                            `;
                        }
                    }
                }

            })
    }
}

function recargarPagina(){
    window.location="index.html";
}

