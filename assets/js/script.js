/* ARRAY DE OBJETOS DE LA LISTA */
const activities = [
    {
        name: "Trekking",
        desc: "Actividad de moverse mucho aaaaaaaaaa",
        img: "assets/img/patagonia montañas.jpg",
        loc: "Volcán villarrica"
    },
    {
        name: "Natación",
        desc: "Actividad de moverse en el agua aaaa glug glukg glug",
        img: "assets/img/patagonia lago.jpg",
        loc: "Lago Cochrane"
    },
    {
        name: "Ferry",
        desc: "ACtividad de moverse en el agua aaaa vroooom",
        img: "assets/img/patagonia ferrys.jpg",
        loc: "Lago Llanquihue"
    },
]

/* FUNCIONES PARA INYECTAR LISTA DE OPCIONES Y PARA INYECTAR TARJETAS DE CONTENIDO*/
function selectOptionInjection(data) {
    let options = ``

    for (let i = 0; i < data.length; i++) {
        let myOption = `<option value="${i}">${data[i].name}</option>`
        options += myOption
    }
    document.getElementById("selectActividad").innerHTML = options
}

function contentInjection(actividad) {
    const imgActividad = document.getElementById("imgActividad")
    const imgText = document.getElementById("imgText")
    const descripcion = document.getElementById("descripcion")

    const { name, img, desc, loc } = actividad;
    let NAME = name.toUpperCase()
    
    imgActividad.src = img
    imgText.innerHTML = `<h1>${NAME}</h1>
    <small><i class="bi bi-geo-alt-fill"></i>${loc}</small>`
    descripcion.innerHTML = `${desc} <br />
    <a href="">Conocer más</a>`
}

/* SECCION QUE INYECTA LISTA Y TARJETA POR DEFECTO */
selectOptionInjection(activities);
contentInjection(activities[0])

/* FUNCIONES PARA MOSTRAR Y OCULTAR TEXTO EN FOTO */
const imgText = document.getElementById('imgText')
console.log(imgText);

function hide() {
    imgText.style.display = 'none';
    console.log('leave');
}

function show() {
    imgText.style.display = 'block';
    console.log('show');
}

/* EVENT LISTENER PARA QUE SE MUESTRE TEXTO EN FOTO, AGREGADO A FOTO */
var imgActivity = document.getElementById('imgContenedor')

imgActivity.addEventListener("mouseover", show);

imgActivity.addEventListener("mouseout", hide);

/* SECCION QUE INYECTA TARJETAS AL SELECCIONAR UNA OPCIÓN */

const select = document.getElementById("selectActividad");

select.addEventListener("change", function () {
    const index = select.value;
    console.log(activities[index]) //llegar al objecto en particular
    contentInjection(activities[index])
    /* EVENT LISTENER PARA QUE SE MUESTRE TEXTO EN FOTO, AGREGADO A FOTO */
})