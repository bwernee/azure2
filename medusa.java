const mythologicalFigures = [
    { name: 'Zeus', description: 'King of the Greek gods, ruler of Mount Olympus.', image_url: 'https://example.com/zeus.jpg', origin: 'Greece', mythology: 'Greek' },
    { name: 'Thor', description: 'God of thunder and lightning in Norse mythology.', image_url: 'https://example.com/thor.jpg', origin: 'Norse', mythology: 'Norse' },
    { name: 'Hera', description: 'Queen of the gods, goddess of marriage and family.', image_url: 'https://example.com/hera.jpg', origin: 'Greece', mythology: 'Greek' },
    { name: 'Odin', description: 'Allfather of the Norse gods, ruler of Asgard.', image_url: 'https://example.com/odin.jpg', origin: 'Norse', mythology: 'Norse' },
    { name: 'Ra', description: 'Sun god of Egyptian mythology, ruler of the heavens.', image_url: 'https://example.com/ra.jpg', origin: 'Egypt', mythology: 'Egyptian' },
    { name: 'Anubis', description: 'God of the afterlife and mummification in Egyptian mythology.', image_url: 'https://example.com/anubis.jpg', origin: 'Egypt', mythology: 'Egyptian' },
    { name: 'Apollo', description: 'Greek god of the sun, music, and prophecy.', image_url: 'https://example.com/apollo.jpg', origin: 'Greece', mythology: 'Greek' },
    { name: 'Artemis', description: 'Greek goddess of the hunt and the moon.', image_url: 'https://example.com/artemis.jpg', origin: 'Greece', mythology: 'Greek' },
    { name: 'Poseidon', description: 'Greek god of the sea, earthquakes, and horses.', image_url: 'https://example.com/poseidon.jpg', origin: 'Greece', mythology: 'Greek' },
    { name: 'Athena', description: 'Greek goddess of wisdom, warfare, and strategy.', image_url: 'https://example.com/athena.jpg', origin: 'Greece', mythology: 'Greek' },
    { name: 'Freya', description: 'Norse goddess of love, beauty, and fertility.', image_url: 'https://example.com/freya.jpg', origin: 'Norse', mythology: 'Norse' },
    { name: 'Ares', description: 'Greek god of war and combat.', image_url: 'https://example.com/ares.jpg', origin: 'Greece', mythology: 'Greek' },
    { name: 'Hades', description: 'Greek god of the underworld and ruler of the dead.', image_url: 'https://example.com/hades.jpg', origin: 'Greece', mythology: 'Greek' },
    { name: 'Loki', description: 'Norse trickster god of mischief and chaos.', image_url: 'https://example.com/loki.jpg', origin: 'Norse', mythology: 'Norse' },
    { name: 'Isis', description: 'Egyptian goddess of magic and motherhood.', image_url: 'https://example.com/isis.jpg', origin: 'Egypt', mythology: 'Egyptian' },
    { name: 'Hercules', description: 'Greek hero known for his strength and the Twelve Labors.', image_url: 'https://example.com/hercules.jpg', origin: 'Greece', mythology: 'Greek' },
    { name: 'Bastet', description: 'Egyptian goddess of home, fertility, and cats.', image_url: 'https://example.com/bastet.jpg', origin: 'Egypt', mythology: 'Egyptian' },
    { name: 'Medusa', description: 'A Gorgon in Greek mythology, cursed to have snakes for hair.', image_url: 'https://example.com/medusa.jpg', origin: 'Greece', mythology: 'Greek' },
    { name: 'Persephone', description: 'Greek goddess of spring and queen of the underworld.', image_url: 'https://example.com/persephone.jpg', origin: 'Greece', mythology: 'Greek' }
];

function searchFigure() {
    let searchTerm = document.getElementById('search').value.toLowerCase();
    let filteredFigures = mythologicalFigures.filter(figure => figure.name.toLowerCase().includes(searchTerm));

    displayFigures(filteredFigures);
}5

function displayFigures(figures) {
    const container = document.getElementById('container');
    container.innerHTML = '';  // Clear the current content

    figures.forEach(figure => {
        let card = document.createElement('div');
        card.className = 'figure-card';
        
        card.innerHTML = `
            <img src="${figure.image_url}" alt="${figure.name}">
            <h3>${figure.name}</h3>
            <p>${figure.description}</p>
        `;
        
        container.appendChild(card);
    });
}

// Display all figures initially
displayFigures(mythologicalFigures);
