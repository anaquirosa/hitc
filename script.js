document.addEventListener('DOMContentLoaded', function() {
    const aboutUsLink = document.getElementById('about-us-link');
    const modal = document.getElementById('about-us-modal');
    const closeModal = document.getElementById('close-modal');
    const mainContent = document.getElementById('main-content');

    aboutUsLink.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'flex';
        mainContent.classList.add('hidden');
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        mainContent.classList.remove('hidden');
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            mainContent.classList.remove('hidden');
        }
    });
});
