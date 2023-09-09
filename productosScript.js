const images = document.querySelectorAll('.zoomable');

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.opacity = '0.8';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        image.style.opacity = '1';
    });
});
