const mythologicalFigures = [
    { 
        name: 'Zeus', 
        description: 'King of the Greek gods, ruler of Mount Olympus.', 
        image_url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHBlbzU1NDZvMTgzeXk3eWZqYTc3YnNwN3o3OGQweThhYXkzcWJmNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YAvYJfrbGl6p2/giphy.gif', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Thor', 
        description: 'God of thunder and lightning in Norse mythology.', 
        image_url: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTU5bnkxM3J1dDlja3llejFwdmFtaHFzY213M3VuajlyZHZycXRycSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ch1zCx8tu6DQY/giphy.gif', 
        origin: 'Norse', 
        mythology: 'Norse' 
    },
    { 
        name: 'Hera', 
        description: 'Queen of the gods, goddess of marriage and family.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Hera_sculpture_British_Museum.jpg', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Odin', 
        description: 'Allfather of the Norse gods, ruler of Asgard.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Odin_%28by_H._E._Harris%29.jpg', 
        origin: 'Norse', 
        mythology: 'Norse' 
    },
    { 
        name: 'Ra', 
        description: 'Sun god of Egyptian mythology, ruler of the heavens.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Ra_Statue_1924.jpg', 
        origin: 'Egypt', 
        mythology: 'Egyptian' 
    },
    { 
        name: 'Anubis', 
        description: 'God of the afterlife and mummification in Egyptian mythology.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Anubis-statue.jpg', 
        origin: 'Egypt', 
        mythology: 'Egyptian' 
    },
    { 
        name: 'Apollo', 
        description: 'Greek god of the sun, music, and prophecy.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Apollo_Statue_Louvre_Ma56.jpg', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Artemis', 
        description: 'Greek goddess of the hunt and the moon.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Artemis_of_Ephesus.jpg', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Poseidon', 
        description: 'Greek god of the sea, earthquakes, and horses.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Poseidon_Statue_Athens.jpg', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Athena', 
        description: 'Greek goddess of wisdom, warfare, and strategy.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Athena_Velletri_Inv_10301166.jpg', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Freya', 
        description: 'Norse goddess of love, beauty, and fertility.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Freja_Germanic_Goddess.jpg', 
        origin: 'Norse', 
        mythology: 'Norse' 
    },
    { 
        name: 'Ares', 
        description: 'Greek god of war and combat.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Ares_-_Glyptothek_Munich.jpg', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Hades', 
        description: 'Greek god of the underworld and ruler of the dead.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Hades_Glyptothek_Munich_624.jpg', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Loki', 
        description: 'Norse trickster god of mischief and chaos.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Loki_by_Peter_McKinney.jpg', 
        origin: 'Norse', 
        mythology: 'Norse' 
    },
    { 
        name: 'Isis', 
        description: 'Egyptian goddess of magic and motherhood.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Isis_Sculpture_Louvre.jpg', 
        origin: 'Egypt', 
        mythology: 'Egyptian' 
    },
    { 
        name: 'Hercules', 
        description: 'Greek hero known for his strength and the Twelve Labors.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Hercules_by_Giannetti.jpg', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Bastet', 
        description: 'Egyptian goddess of home, fertility, and cats.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Bastet_Statue_Louvre.jpg', 
        origin: 'Egypt', 
        mythology: 'Egyptian' 
    },
    { 
        name: 'Medusa', 
        description: 'A Gorgon in Greek mythology, cursed to have snakes for hair.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Medusa_Sculpture.jpg', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Persephone', 
        description: 'Greek goddess of spring and queen of the underworld.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Persephone_and_Hades_Sculpture_Louvre.jpg', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Hermes', 
        description: 'Greek god of commerce, travelers, and messengers.', 
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hermes_Statue_Louvre.jpg', 
        origin: 'Greece', 
        mythology: 'Greek' 
    }
];

function searchFigure() {
    let searchTerm = document.getElementById('search').value.toLowerCase();
    let filteredFigures = mythologicalFigures.filter(figure => figure.name.toLowerCase().includes(searchTerm));

    displayFigures(filteredFigures);
}

function displayFigures(figures) {
    const container = document.getElementById('container');
    container.innerHTML = '';  // Clear the current content

    if (figures.length === 0) {
        container.innerHTML = `<p>No figures found</p>`;
    } else {
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
}

// Display all figures initially
displayFigures(mythologicalFigures);
