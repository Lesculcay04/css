function cuandoDigaSi() {
    const respuesta = confirm('Estas seguro de querer ser mi novio?');
    if (respuesta) {
        window.location.href = "optionsi.html";
        //redirecciona a la pagina que diga si
    }else{
        alert("Espero que puedas reconsiderarlo 🥰");
    }
}

function mueveElBoton() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeight = Math.random() * height;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position = "absolute";
    btnNo.style.left = newWidth + "px";
    btnNo.style.top = newHeight + "px";
}