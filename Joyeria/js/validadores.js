$(document).ready(function() {
    $("#contact-form").validate({
      rules: {
        name : {
          required: true,
          minlength: 1
        },
        email: {
          required: true,
          email: true
        },
        info: {
            required: true
        },
        cmbRh:{
            required: true
        }
      },
      messages : {
        name: {
          required: "Debe ingresar un nombre",
          minlength: "Debe ingresar un nombre"
        },
        email: {
          required: "Porfavor, Ingrese un correo valido",
          email: "Porfavor, Ingrese un correo valido"
        },
        info:{
            required: "Este campo es obligatorio",
        },
        cmbRh: {
            required: "Este campo es obligatorio",
        }
      }
    });
  });
