const images = [
    {
        src: '1.jpg',
        title: 'Beautiful House',
        description: 'A stunning view of the mountains with house during sunset.',
        resolution: '1920x1080',
        size: '642 KB',
        category: 'nature',
    },

 {
        src: '2.jpg',
        title: 'Beautiful House',
        description: 'A stunning view of the mountains with house during sunset.',
        resolution: '1920x1080',
        size: '642 KB',
        category: 'architecture',
    },

{
        src: '3.jpg',
        title: 'Beautiful House',
        description: 'A stunning view of the mountains with house during sunset.',
        resolution: '1920x1080',
        size: '642 KB',
        category: 'nature',

    
{
        src: '4.jpg',
        title: 'Beautiful House',
        description: 'A stunning view of the mountains with house during sunset.',
        resolution: '1920x1080',
        size: '642 KB',
        category: 'nature',
    
{
        src: '5.jpg',
        title: 'Beautiful House',
        description: 'A stunning view of the mountains with house during sunset.',
        resolution: '1920x1080',
        size: '642 KB',
        category: 'nature',
    
{
        src: '1.jpg',
        title: 'Beautiful House',
        description: 'A stunning view of the mountains with house during sunset.',
        resolution: '1920x1080',
        size: '642 KB',
        category: 'nature',
    
{
        src: '6.jpg',
        title: 'Beautiful House',
        description: 'A stunning view of the mountains with house during sunset.',
        resolution: '1920x1080',
        size: '642 KB',
        category: 'nature',
    
{
        src: '7.jpg',
        title: 'Beautiful House',
        description: 'A stunning view of the mountains with house during sunset.',
        resolution: '1920x1080',
        size: '642 KB',
        category: 'nature',
    
{
        src: '8.jpg',
        title: 'Beautiful House',
        description: 'A stunning view of the mountains with house during sunset.',
        resolution: '1920x1080',
        size: '642 KB',
        category: 'nature',
    
{
        src: '9.jpg',
        title: 'Beautiful House',
        description: 'A stunning view of the mountains with house during sunset.',
        resolution: '1920x1080',
        size: '642 KB',
        category: 'nature',
    
{
        src: '10.jpg',
        title: 'Beautiful House',
        description: 'A stunning view of the mountains with house during sunset.',
        resolution: '1920x1080',
        size: '642 KB',
        category: 'nature',
    
    // Add more images as needed
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const imageTitle = document.getElementById('imageTitle');
const imageDescription = document.getElementById('imageDescription');
const imageResolution = document.getElementById('imageResolution');
const imageSize = document.getElementById('imageSize');
const downloadBtn = document.getElementById('downloadBtn');
const closeModal = document.getElementById('closeModal');
const searchBar = document.getElementById('searchBar');
const categories = document.getElementById('categories');

function displayImages(filter = 'all') {
    gallery.innerHTML = '';
    const filteredImages = images.filter(image => filter === 'all' || image.category === filter);

    filteredImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.title;
        imgElement.addEventListener('click', () => openModal(image));
        gallery.appendChild(imgElement);
    });
}

function openModal(image) {
    modal.style.display = 'block';
    modalImage.src = image.src;
    imageTitle.innerText = image.title;
    imageDescription.innerText = image.description;
    imageResolution.innerText = image.resolution;
    imageSize.innerText = image.size;
    downloadBtn.onclick = () => downloadImage(image.src);
}

function downloadImage(src) {
    const a = document.createElement('a');
    a.href = src;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

closeModal.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    displayImages(images.filter(image => image.title.toLowerCase().includes(searchTerm)));
});

categories.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const filter = event.target.getAttribute('data-filter');
        displayImages(filter);
    }
});

// Initial display
displayImages();
