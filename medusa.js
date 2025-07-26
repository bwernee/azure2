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
        image_url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjJyeG12ZnJjdWpydWtjcXNvaHBmODJ1OHMxbzdjdjFlazV0aXRtciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nsrR7jJUmJTTeGogEx/giphy.gif', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Odin', 
        description: 'Allfather of the Norse gods, ruler of Asgard.', 
        image_url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3JoNTU0OThjbmlzdDliNHdyeWxmcm4zMGRjcHZ0eDcyZjg5Z2QyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VvmO5sdzr2iq49sp13/giphy.gif', 
        origin: 'Norse', 
        mythology: 'Norse' 
    },
    { 
        name: 'Ra', 
        description: 'Sun god of Egyptian mythology, ruler of the heavens.', 
        image_url: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzYzaHc5Y3hyd3Y0eHZiZmU4aWRxbWMwaDFhZjcyN2g3c29tYnZlaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8avElgRSrE5B6/giphy.gif', 
        origin: 'Egypt', 
        mythology: 'Egyptian' 
    },
    { 
        name: 'Anubis', 
        description: 'God of the afterlife and mummification in Egyptian mythology.', 
        image_url: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHhwMXZid2J2N3VrNWdzNWVhNnZsbjU0azE3ZTc0NWprcDFkdW13NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LClXiaDw3nyUKUiaDN/giphy.gif', 
        origin: 'Egypt', 
        mythology: 'Egyptian' 
    },
    { 
        name: 'Apollo', 
        description: 'Greek god of the sun, music, and prophecy.', 
        image_url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExajg5eG1iaWMyZGg0b3Vzb2ZwMmpocWZscW96azZrYnpoaTZobmVpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0WgqjqqWv5P3qZt8HW/giphy.gif', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Artemis', 
        description: 'Greek goddess of the hunt and the moon.', 
        image_url: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2Z0bzM4b3d5eXg0OG5keHJmNGNrODFnM2Z4MWVxemg3bXNvbmVkeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l7pgV1plXAd62g49eC/giphy.gif', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Poseidon', 
        description: 'Greek god of the sea, earthquakes, and horses.', 
        image_url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWNiMjA2OW9zemhxdG5xM2xxOXVxa3lxdmF4aWh6NXM2M3l2OXdubSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wVdlelwHI4cWQpfvNg/giphy.gif', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Athena', 
        description: 'Greek goddess of wisdom, warfare, and strategy.', 
        image_url: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhvbDk3N25ubTZ3YXg5cXM1MGs5Y3NtdnFlNTl4amtyZnJ6dTJjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o1I2ikSm1wRnp3r3sF/giphy.gif
            ', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Freya', 
        description: 'Norse goddess of love, beauty, and fertility.', 
        image_url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWhpOHJ1eXU2MmN3OWZvd3VvNDJqd3UwZHZteDNvcnMxYjNubDR6aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/x7586mT26xPkfQiVv4/giphy.gif', 
        origin: 'Norse', 
        mythology: 'Norse' 
    },
    { 
        name: 'Ares', 
        description: 'Greek god of war and combat.', 
        image_url: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExazY5M25sa3RzdWNyMnN4NW80NHowd2hidXppY3cyMTg5ZDVreWh5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yG7kblM9vA2hotBxZv/giphy.gif', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Hades', 
        description: 'Greek god of the underworld and ruler of the dead.', 
        image_url: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExazY5M25sa3RzdWNyMnN4NW80NHowd2hidXppY3cyMTg5ZDVreWh5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yG7kblM9vA2hotBxZv/giphy.gif', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Loki', 
        description: 'Norse trickster god of mischief and chaos.', 
        image_url: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzNqaWFyNDdld20xNXFwbTgwNHM4cGE5enlmbGN1Z2FuYmNiMDV0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AsKkJB6JbFGiQ/giphy.gif', 
        origin: 'Norse', 
        mythology: 'Norse' 
    },
    { 
        name: 'Isis', 
        description: 'Egyptian goddess of magic and motherhood.', 
        image_url: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXA2dmllZWU3ZTBmc2h4aWhzYnRkdG5pYjhzM3c0c2FvNGpjNW52dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KNKoQfPWg3Dag/giphy.gif', 
        origin: 'Egypt', 
        mythology: 'Egyptian' 
    },
    { 
        name: 'Hercules', 
        description: 'Greek hero known for his strength and the Twelve Labors.', 
        image_url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG4ybGJlYmozY3VwOXIxemtwMDc5N2NzZWd1N3Foc3JweWd1bXhhNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CTIIyOTFjXZ0BOsE3I/giphy.gif', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Bastet', 
        description: 'Egyptian goddess of home, fertility, and cats.', 
        image_url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW11eWxjZThvOXgyYTNuemI4cWp0ZTNhb3FuNHF0eG1hZ25jdThpNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b679qICUQKbg9zd14F/giphy.gif', 
        origin: 'Egypt', 
        mythology: 'Egyptian' 
    },
    { 
        name: 'Medusa', 
        description: 'A Gorgon in Greek mythology, cursed to have snakes for hair.', 
        image_url: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWM3djdxNHdrYXdlM3psazFuM3FoOG5vYTBlNjQ4Mng4c2xoODB1cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cnUrctr99bkfng0GVr/giphy.gif', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Persephone', 
        description: 'Greek goddess of spring and queen of the underworld.', 
        image_url: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXplemRvMmxkNTFsbWIyNzRvbzl4cWh1dzRhdDdsemQ4YmxqeXV0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L4Oi0PT86NKTaRkHFB/giphy.gif', 
        origin: 'Greece', 
        mythology: 'Greek' 
    },
    { 
        name: 'Hermes', 
        description: 'Greek god of commerce, travelers, and messengers.', 
        image_url: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTUxMHJkbjkzOW9xODk2NHE2anZ1bHFtamNqdG5kNDh0eW9qYnJiZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sIO9W4COmC13PXRZWL/giphy.gif', 
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
