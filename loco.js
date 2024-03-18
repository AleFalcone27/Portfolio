const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.3,
    inertia: 0.3,
    repeat: true,
    initPosition: { x: 0, y: 100 }
});

scroll.on('scroll', (args) => {

    
});


// if (typeof args.currentElements['hey'] === 'object') {
//     const progress = args.currentElements['hey'].progress;

//     const factor = 0.9; 
//     const positionX = (1 - progress * factor) * 100;

//     const element = document.querySelector('.hey');
//     element.style.transform = `translateX(-${positionX}%)`;
// }

// scroll.on('scroll', (args) => {
//     if (typeof args.currentElements['hey'] === 'object') {
//         const element = document.querySelector('.hey');
//         const rect = element.getBoundingClientRect();
//         const posY = rect.top;

//         if (posY < 0 ) {
//             element.style.position = 'sticky';
//             element.style.top = '0'; // Establece la posición del elemento en la parte superior de la ventana
//         } else {
//             element.style.position = 'static';
//         }
//     }
// });


// scroll.on('scroll', (args) => {
//     if (typeof args.currentElements['hey'] === 'object') {
//         const progress = args.currentElements['hey'].progress;

//         const positionX = (1 - progress) * 100;


//         const element = document.querySelector('.hey');
//         element.style.transform = `translateX(-${positionX}%)`;

//     }

// });
