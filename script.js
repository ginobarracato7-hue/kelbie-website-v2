/* ===== FORM HANDLING ===== */
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const message = this.querySelector('textarea').value;

    if (!name || !email || !phone || !message) {
        showNotification('Please fill out all fields', 'error');
        return;
    }

    showNotification('Thank you! We will contact you soon.', 'success');
    this.reset();
});

function showNotification(msg, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1.5rem;
        background: ${type === 'success' ? '#27ae60' : '#c41e3a'};
        color: white;
        border-radius: 4px;
        z-index: 1000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = msg;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/* ===== VIDEO FALLBACK ===== */
document.querySelectorAll('.hero-video').forEach(video => {
    video.addEventListener('error', () => {
        video.parentElement.classList.add('fallback');
    });
});

console.log('Kelbie website loaded - styling is live, video autoplay active');
