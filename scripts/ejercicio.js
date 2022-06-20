let ejecutarCodigo = () => {
    // alert('Hola Mundo');
    let titulo = document.getElementById('titulo1');
    titulo.textContent = 'Album de fotos';

    let elementos = document.getElementsByClassName('text-muted');
    elementos[1].innerHTML = `<span> 
            En este sitio encontrarás un album de fotos inspirado en el snippet de 
            <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.
        </span>`;

    let elementosEtiquetaP = document.getElementsByTagName('p');
    elementosEtiquetaP[2].className = 'd-none';
    // elementosEtiquetaP[2].setAttribute('class', 'd-none');

    let imagenes = [ { url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino'}, 
        { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'energia'}, 
        { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá'},
        { url: 'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'mesa'}, 
        { url: 'https://images.unsplash.com/photo-1578255321055-d9ed6a976af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'perro'}, 
        { url: 'https://images.unsplash.com/photo-1648737966282-b193f74a1503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', alt: 'papá'},
        { url: 'https://images.unsplash.com/photo-1653971858526-97f2ba1914c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', alt: 'sala'}, 
        { url: 'https://images.unsplash.com/photo-1654041562793-1bd2430585cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: 'bosque'}, 
        { url: 'https://images.unsplash.com/photo-1654023316132-3665072d427b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: 'playa'}
     ];

    let elementosSvg = document.querySelectorAll("svg.bd-placeholder-img");
    console.log(elementosSvg);

    let imagen;
    for (let i = 0; i < elementosSvg.length; i++) {
        imagen = document.createElement('img');
        imagen.src = imagenes[i].url;
        imagen.alt = imagenes[i].alt;
        imagen.className = "bd-placeholder-img card-img-top";
        elementosSvg[i].replaceWith(imagen);        
    }
    
}

ejecutarCodigo();