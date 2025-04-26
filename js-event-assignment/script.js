 // Button click event
const button = document.getElementById('magicButton');
button.addEventListener('click', () => {
    button.textContent = "You clicked me! 🎯";
    button.style.backgroundColor = "lightgreen";
});

// Hover event
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = "orange";
});
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = "lightblue";
});

// Keypress detection
const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keypress', (e) => {
    console.log(`You pressed: ${e.key}`);
});

// Bonus: Double click secret
button.addEventListener('dblclick', () => {
    alert('Secret double-click action! 🎉');
});

// Image Gallery
const galleryImage = document.getElementById('galleryImage');
const nextImage = document.getElementById('nextImage');
const images = [
    "https://i.pinimg.com/736x/6a/34/d0/6a34d010360f9491540182d22b02dc4e.jpg",
    "https://i.pinimg.com/736x/06/ea/93/06ea938c3f570482f3cf9457a4a85587.jpg",
    "https://i.pinimg.com/736x/b4/07/3a/b4073ae822c46bc169e18a42f49bba08.jpg"
];
let currentImage = 0;
 nextImage.addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
    galleryImage.src = images[currentImage];
});

// Form Validation
const form = document.getElementById('signupForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email.includes('@')) {
        alert('Invalid Email');
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters!');
    } else {
        alert('Form submitted successfully!');
    }
});