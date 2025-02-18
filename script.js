// Menu show and hide functionality
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close');

// Show menu when the toggle is clicked
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Hide menu when the close button is clicked
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

// Close menu when any navigation link is clicked
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    navMenu.classList.remove('show');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll sections active link
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

// Arrays for each project's images
const projectImages = [
    ["img/login-page-stc.png", "img/landing-page-stc.png", "img/search-page-stc.png","img/cart-stc.png"],  // Project 1
    ["img/landing-page.png", "img/add-record-page.png", "img/delete-page.png"]  // Project 2
];

let currentProjectIndex = 0;  // Track the current project
let currentImageIndex = 0;    // Track the current image of the project

// Open modal with the selected project and image
function openModal(projectIndex) {
    currentProjectIndex = projectIndex; // Set the project index
    currentImageIndex = 0; // Start with the first image of the selected project
    console.log("Opened modal for project index:", currentProjectIndex);
    console.log("Opened image index:", currentImageIndex);

    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modal.style.display = "flex"; // Show the modal
    modalImage.src = projectImages[currentProjectIndex][currentImageIndex]; // Display the first image of the project
}

// Close modal when clicked outside the image
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Change image (next or previous) within the current project
function changeImage(direction) {
    event.stopPropagation(); // Prevent the click from propagating and closing the modal
    currentImageIndex += direction; // Increment or decrement the image index

    const projectImagesArray = projectImages[currentProjectIndex]; // Get the images of the current project
    console.log("Opened modal for project index:", currentProjectIndex);
    console.log("Opened image index:", currentImageIndex);
    // Ensure the index stays within bounds
    if (currentImageIndex < 0) {
        currentImageIndex = projectImagesArray.length - 1; // Loop to the last image
    } else if (currentImageIndex >= projectImagesArray.length) {
        currentImageIndex = 0; // Loop to the first image
    }

    // Update the modal image source
    const modalImage = document.getElementById('modal-image');
    modalImage.src = projectImagesArray[currentImageIndex];
}

// Close modal when clicked outside the image (add event listener to modal background)
const modal = document.getElementById('modal');
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
