// PopUp con CSS (Centrada en la misma ventana)
let open = document.getElementById('open');
let close = document.getElementById('clase');
let modal = document.getElementById('modal_container');

open.addEventListener('click', () => {
    modal.classList.add('show');
});

close.addEventListener('click', () => {
    modal.classList.remove('show');
});


// PopUp con métodos de JavaScript (Da formato a una nueva ventana)
function abrirVentana(caracteristicas)
{
    let caracteristicasCompletas = `${caracteristicas}`;
    window.open("/DEW_UT7/index.html", "", caracteristicasCompletas);
}

// PopUp centrada
function abrirPopUpCentrado(url, width, height)
{
    let left = (screen.width / 2) - (width / 2);
    let top = (screen.height / 2) - (height / 2);    
    window.open(url, 'popup', `width=${width},height=${height},top=${top},left=${left}`);
}

function abrirVentanaCompleta()
{
    let width = screen.width;
    let height = screen.height;
    window.open('/DEW_UT7/index.html', 'popup', `width=${width},height=${height},resizable=no`);
}