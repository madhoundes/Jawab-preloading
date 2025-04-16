document.addEventListener('DOMContentLoaded', () => {
    // Get the icon container and toggle button
    const iconContainer = document.querySelector('.icon-container');
    const toggleButton = document.getElementById('toggleLoading');
    
    // Toggle loading state when button is clicked
    toggleButton.addEventListener('click', () => {
        iconContainer.classList.toggle('loading');
        updateButtonText();
    });
    
    // Update button text based on loading state
    function updateButtonText() {
        if (iconContainer.classList.contains('loading')) {
            toggleButton.textContent = 'Stop Loading';
        } else {
            toggleButton.textContent = 'Start Loading';
        }
    }
    
    // Initialize button text
    updateButtonText();
    
    // Optional: Auto-start loading for demonstration
    iconContainer.classList.add('loading');
    updateButtonText();
}); 