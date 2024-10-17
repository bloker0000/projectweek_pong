document.addEventListener("DOMContentLoaded", function () {
    const urls = [
        'index.html',
        'testpage1.html',
        'testpage2.html'
    ];

    //index van de pagina
    let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

    //functie voor switchen naar paginas
    const switchPage = (index) => {
        currentIndex = (index + urls.length) % urls.length;
        localStorage.setItem('currentIndex', currentIndex);
        window.location.href = urls[currentIndex];
    };

    //cooldown van switchen naar pag
    setInterval(() => {
        switchPage(currentIndex + 1);
    }, 15000);

    //shortcut voor switchen naar paginas
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            switchPage(currentIndex + 1);
        } else if (event.key === 'ArrowLeft') {
            switchPage(currentIndex - 1);
        }
    });
});