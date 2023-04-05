import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');



function createGallery(){
    
    let markup = "";
    galleryItems.forEach(elem => {
        markup += `<li class = "gallery__item gallery__image:hover"><a class = "gallery__link" href = ${elem.original}>
        <img class = "gallery__image" src = ${elem.preview} data-source = ${elem.original} alt = ${elem.description}></a></li>`}
    )
    gallery.insertAdjacentHTML('afterbegin', markup)
   
}
createGallery()


    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt', 
        captionDelay: 250
    });

   
    document.addEventListener('keydown', closeModal)

    function closeModal(evt){
    console.log(evt)
    if (evt.key === 'Escape') {
        document.removeEventListener('keydown', closeModal)
     }
    }





