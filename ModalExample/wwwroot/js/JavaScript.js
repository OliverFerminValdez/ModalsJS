function ConfirmationPrumpt(titulo, mensaje, tipo) {
    return new Promise((resolve) => {

        Swal.fire({
            title: titulo,
            text: mensaje,
            icon: tipo,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}

function SavePrumpt(posicion, icono, titulo,texto, confbtn, timer) {
    return new Promise((resolve) => {

        Swal.fire({
            position: posicion,
            icon: icono,
            title: titulo,
            text: texto,
            showConfirmButton: confbtn,
            timer: timer
        }).then((result) => {
            if (result.value) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}