document.addEventListener('DOMContentLoaded', function () {
    const gameBackground = document.getElementById('game-background');
    const gameInfoContainer = document.getElementById('game-info');

    // Local storage'dan oyun bilgilerini çekme
    const storedGame = JSON.parse(localStorage.getItem('selectedGame'));

    if (storedGame) {
        // Üst kısıma arka plan görüntüsü ekleme
        gameBackground.style.backgroundImage = `url(${storedGame.background})`;

        // Alt kısıma oyun detaylarını ekleme
        const gameImage = document.createElement('img');
        gameImage.src = storedGame.img;

        const gameTitle = document.createElement('h1');
        gameTitle.textContent = storedGame.name;

        const gameDescription = document.createElement('p');
        gameDescription.textContent = storedGame.description;

        const gameInfo = document.createElement('p');
        gameInfo.textContent = storedGame.info;

        gameInfoContainer.appendChild(gameImage);
        gameInfoContainer.appendChild(gameTitle);
        gameInfoContainer.appendChild(gameDescription);
        gameInfoContainer.appendChild(gameInfo);
    } else {
        // Local storage'da bilgi bulunamazsa uygun bir mesaj ekleyebilirsiniz.
        const noGameMessage = document.createElement('p');
        noGameMessage.textContent = 'No game selected.';
        gameInfoContainer.appendChild(noGameMessage);
    }
});
