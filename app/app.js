//Validación de un formulario con Javascript
//Fuente: https://desarrolloweb.com/articulos/1767.php
function valida_envia() {
  //valido el nombre
  if (document.formu.nombre.value.length == 0) {
    alert("Tiene que escribir su nombre");
    document.formu.nombre.focus(); //foco en el campo del error
    return 0;
  }
  if (document.formu.comentario.value.length == 0) {
    alert("Tiene que escribir su comentario");
    document.formu.comentario.focus(); //foco en el campo del error
    return 0;
  }
  //valido el interés
//   if (document.fvalida.interes.selectedIndex == 0) {
//     alert("Debe seleccionar un motivo de su contacto.");
//     document.fvalida.interes.focus();
//     return 0;
//   }

  //el formulario se envia
  alert("Muchas gracias por enviar el formulario");
  document.formu.submit();
}
