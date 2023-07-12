// Add imports above this line
import simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(SimpleLightbox);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = galleryItems
    .map(({ preview, original, description }) => 
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`
        )
    .join(' ');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);
const lightbox = new SimpleLightbox('.gallery__item a', { animationSpeed: 250, captionsData: "alt" });