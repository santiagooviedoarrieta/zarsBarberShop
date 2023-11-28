document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que el formulario se envíe
  
    var Nombre = document.getElementById("Nombre").value;
    var Horario = document.getElementById("Horario").value;
  
    // Crear una nueva fila en la tabla con los datos ingresados
    var tabla = document.getElementById("tabla");
    var fila = tabla.insertRow();
    var celdaNombre = fila.insertCell(0);
    var celdaHorario = fila.insertCell(1);
    celdaNombre.innerHTML = Nombre;
    celdaHorario.innerHTML = Horario;
  
    // Limpiar los campos del formulario
    document.getElementById("Nombre").value = "";
    document.getElementById("Horario").value = "";
  });