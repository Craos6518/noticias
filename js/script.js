function cargarHTML(elemento, archivo) {
    fetch(archivo)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elemento).innerHTML = data;
        });
}

cargarHTML('Perfil-Programador', './public/Perfil.html');