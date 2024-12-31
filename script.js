// Smooth scrolling for navigation links
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Animated text on hero section
const heroText = document.querySelector('.hero-container h1');
const words = ['Welcome to My Portfolio', 'Explore My Skills', 'Check Out My Projects'];
let wordIndex = 0;

function changeWord() {
    heroText.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}
setInterval(changeWord, 3000);

// Hero photo hover effect
const heroPhoto = document.querySelector('.hero-photo');
heroPhoto.addEventListener('mouseenter', () => {
    heroPhoto.style.transform = 'scale(1.1)';
    heroPhoto.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
});
heroPhoto.addEventListener('mouseleave', () => {
    heroPhoto.style.transform = 'scale(1)';
    heroPhoto.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
});

// Projects hover animation
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-10px)';
        project.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
    });
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0)';
        project.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Experiences hover animation
document.querySelectorAll('.experience').forEach(experience => {
    experience.addEventListener('mouseenter', () => {
        experience.style.transform = 'translateY(-10px)';
        experience.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
    });
    experience.addEventListener('mouseleave', () => {
        experience.style.transform = 'translateY(0)';
        experience.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Smooth back-to-top functionality
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = 'Top';
backToTopBtn.classList.add('back-to-top');
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '10px 15px';
backToTopBtn.style.fontSize = '1rem';
backToTopBtn.style.background = '#007bff';
backToTopBtn.style.color = '#fff';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '5px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.display = 'none';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


