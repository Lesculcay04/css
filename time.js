
function mueveReloj() {
    let moment = new Date();
    let hora = moment.getHours();
    let minuto = moment.getMinutes();
    let segundo = moment.gerSeconds();

    let horaImprime = hora + ":" + minuto + ":" + segundo;
    document.form_reloj.reloj.value = horaImprime;
    setTimeout("mueveReloj()",1000);
}