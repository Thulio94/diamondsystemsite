// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show an alert
    alert('Mensagem enviada com sucesso!');
    contactForm.reset();
});

// WhatsApp bubble functionality
function closeWhatsappBubble() {
    const bubble = document.getElementById('whatsappBubble');
    bubble.style.display = 'none';
}

// Show WhatsApp bubble after a short delay
setTimeout(() => {
    const bubble = document.getElementById('whatsappBubble');
    bubble.style.display = 'block';
}, 2000);