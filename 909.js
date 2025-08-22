document.addEventListener('DOMContentLoaded', () => {

    const listaPerfumes = document.querySelectorAll('li[data-nombre]');

    listaPerfumes.forEach(perfume => {
        perfume.addEventListener('click', () => {
            const nombrePerfume = perfume.getAttribute('data-nombre');
            const marcaPerfume = perfume.getAttribute('data-marca');

            if (nombrePerfume && marcaPerfume) {
                // Muestra un alert con el mensaje de selección
                alert(`Perfume ${nombrePerfume} de la marca ${marcaPerfume} seleccionado! ¡ten encuenta esta info para  tu pedido!`);
            }
        });
    });


});

