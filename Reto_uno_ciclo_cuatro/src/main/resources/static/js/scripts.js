function consultar(dato) {
    $("#resultado");
    $.ajax({
        //url: "http://localhost:8080/api/user/" + $('#email').val() + "/" + $('#password').val(),
        url: "http://150.230.86.78:8080/api/user/" + $('#email').val() + "/" + $('#password').val(),
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {

            if (respuesta.id != null && dato == 1) {
                $("#titulo").html("Bienvenido(a)");
                $("#bienvenido").html("<h2 align='center'>" + respuesta.name + "</p>");
                $("#botonInicio").show();
            } else if ((respuesta.id == null && dato == 2)) {
                $("#resultado").html("<p class='loader text-center'>Un Momento.Creando la cuenta...</p>");
                alert("Usuario Creado Satisfactoriamente")
                guardar();
            } else {
                alert("Usuario no Registrado");
                crearUsuario();
            }

        }
    });
}

function crearUsuario() {
    $("#resultado").html("");

    $("#botonIngreso").hide();
    $("#name").show();
    $("#name2").show();
    $("#confirmar").show();
    $("#confirmar2").show();
    $("#botonRegistro").show();
}


function validarIngreso() {

    if ($('#email').val().length == 0 || $('#password').val().length == 0) {
        $("#validaCampo");
        alert("Todos los campos son obligatorios");
        return false;
    } else {
        consultar(1);
    }
}

function validarRegistro() {

    if ($('#email').val().length == 0 || $('#password').val().length == 0 || $('#confirmar').val().length == 0 || $('#name').val().length == 0) {
        $("#validaCampo");
        alert("Todos los campos son obligatorios");
        return false;
    } else {
        if ($('#password').val() == $('#confirmar').val()) {

            validarEmail();

        } else {
            $("#validaCampo");
            alert("El Password y la Confimacion del Password NO coinciden");
        }

    }
}

function validarEmail() {
    $("#resultado");
    $.ajax({
        //url: "http://localhost:8080/api/user/" + $('#email').val(),
        url: "http://150.230.86.78:8080/api/user/" + $('#email').val(),
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            if (respuesta == true) {
                $("#validaCampo");
            } else {
                consultar(2);
            }

        }
    });
}



function guardar() {
    let myData = {
        email: $("#email").val(),
        password: $("#password").val(),
        name: $("#name").val()
    };
    let dataToSend = JSON.stringify(myData);
    //console.log(dataToSend);

    $.ajax({
        //url: "http://localhost:8080/api/user/new",
        url: "http://150.230.86.78:8080/api/user/new",
        type: "POST",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultado");
            setTimeout(
                function() {
                    $("#titulo").html("Bienvenido(A)");
                    $("#bienvenido").html("<h1 align='center'>" + respuesta.name + "</p>");
                    $("#listar").show();
                    $("#botonListar").show();
                    $("#botonSalir").show();
                }, 6000
            );
        }
    });

}

function listarUsuarios() {
    $.ajax({
        //url: "http://localhost:8080/api/user/all",
        url: "http://150.230.86.78:8080/api/user/all ",
        type: "GET",
        datatype: "JSON",
        success: function(response) {
            console.log(response);
            pintarRespuestaUsuarios(response);
        }
    });
}

function pintarRespuestaUsuarios(response) {

    let myTable = "<table>"
    myTable += "<tr>";
    myTable += "<td>Nombre</td>";
    myTable += "<td>Email</td>";
    myTable += "<td>Password</td>";
    "</tr>";

    for (i = 0; i < response.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + response[i].name + "</td>";
        myTable += "<td>" + response[i].email + "</td>";
        myTable += "<td>" + response[i].password + "</td>";
    }
    myTable += "</table>";
    $("#miListaUsuarios").html(myTable);

}

function salir() {
    location.reload();
}