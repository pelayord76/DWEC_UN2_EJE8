function existeLogin(usuarios,usuario){
    if(usuarios.has(usuario)){
        return true;
    }else{
        return false;
    }
}

function crearUsuario(usuarios){
do{
  var usuario=prompt("Introduce el nombre de Usuario:");
  var contrasenia=prompt("Introduce la Contraseña:");
}while(existeLogin(usuarios,usuario));
usuarios.set(usuario, contrasenia)
}

function borrarUsuario(usuarios){
    var usuario=prompt("Introduce el nombre de Usuario a borrar:");
    if (usuarios.has(usuario)) {usuarios.delete(usuario); alert("Usuario "+usuario+" borrado");}
    else alert("El usuario no existe");
}

function mostrarUsuarios(usuarios){
    var todos=""
    for(var [clave, valor] of usuarios) {
            todos+=clave + " = " +valor+"\n";
        }
    alert(todos);
        
}
function menu(){
    var usuarios = new Map();
    do{
        var opcion=prompt("OPCIONES:\n\n1. Nuevo usuario.\n2. Eliminar usuario.\n3. Mostrar usuarios\n4. Salir\n\nEscoge una opción");
   
        switch (opcion){
            case "1": crearUsuario(usuarios); break;
            case "2": borrarUsuario(usuarios); break;
            case "3": mostrarUsuarios(usuarios); break;
        }
    }
    while (opcion!="4")
}

menu();