document.addEventListener("DOMContentLoaded", function () {
    const urls = [
        'index.html',
        'info.html',
        'gamepage.html'
    ];

    //index van de pagina
    let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

    //functie voor switchen naar paginas
    const switchPage = (index) => {
        currentIndex = (index + urls.length) % urls.length;
        localStorage.setItem('currentIndex', currentIndex);
        window.location.href = urls[currentIndex];
    };

    //cooldown en switchen naar pag
    setInterval(() => {
        switchPage(currentIndex + 1);
    }, 30000);

    //shortcut voor switchen naar paginas
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            switchPage(currentIndex + 1);
        } else if (event.key === 'ArrowLeft') {
            switchPage(currentIndex - 1);
        }
    });
});