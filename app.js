document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.neomorph-btn');
    const shareBtn = document.querySelector('.share-btn');

    // Add click feedback for grid buttons
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const category = btn.nextElementSibling ? btn.nextElementSibling.innerText : 'Unknown';
            console.log(`Category clicked: ${category}`);
            // Feedback animation
        });
    });

    // Share button logic
    shareBtn.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'ShopDigital San Martín de los Andes',
                    text: '¡Visitá la Web App de ShopDigital San Martín de los Andes!',
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            alert('La función de compartir no está soportada en este navegador.');
        }
    });

    console.log('ShopDigital App Initialized');
});
