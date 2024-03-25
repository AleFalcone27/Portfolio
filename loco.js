const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.3,
    inertia: 0.3,
    easing: (t) => cubic-bezier(0.32, 0, 0.67, 0),
});



scroll.on('scroll', (args) => {
    if (typeof args.currentElements['hey'] === 'object' && args.currentElements['hey'] !== null) {
        let progress = args.currentElements['hey'].progress;
        const positionX = (1 - progress) * 100;
        console.log(positionX);

        const element = document.querySelector('.wrapper');

        if (positionX < 99) {
            if (element) {

                GetTransitionColor(positionX).then((colorValueR) => {
                    console.log("R: ", colorValueR);
                    element.style.backgroundColor = `rgb(${colorValueR}, ${colorValueR}, ${colorValueR})`;
                }).catch((error) => {
                    console.error("Error:", error);
                });

                

            } else {
                console.error("El elemento no fue encontrado.");
            }
        }
        else if (positionX > 99) {
            element.style.backgroundColor = 'rgb(229, 229, 229)';
        }
    }
});



async function GetTransitionColor(positionX) {
    return new Promise((resolve, reject) => {
        // Calcula un valor de color entre 15 y 299 basado en la posiciónX
        let r = 15 + ((229 - 15) * (positionX / 100));
        
        // Aseguramos que el valor se encuentr eentre 229 y 15
        if (r < 15) {
            resolve(15);
        } else if (r > 229) {
            resolve(229);
        } else {
            resolve(Math.round(r)); // Redondea el valor de color
        }
    });
}
