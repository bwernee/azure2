// 🔍 Fetch figures from PHP (optional search query)
async function fetchFigures(search = '') {
    try {
        const response = await fetch(`fetch_figures.php?search=${encodeURIComponent(search)}`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const figures = await response.json();
        displayFigures(figures);
    } catch (error) {
        console.error('Error fetching figures:', error);
        document.getElementById('container').innerHTML = `<p style="color: red;">Error loading figures</p>`;
    }
}

// 🔎 Triggered when user types in the search bar
function searchFigure() {
    const searchTerm = document.getElementById('search').value;
    fetchFigures(searchTerm);
}

// 🖼️ Display figure cards in the container
function displayFigures(figures) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear previous content

    if (figures.length === 0) {
        container.innerHTML = `<p>No figures found</p>`;
        return;
    }

    figures.forEach(figure => {
        const card = document.createElement('div');
        card.className = 'figure-card';

        card.innerHTML = `
            <img src="${figure.image_url}" alt="${figure.name}">
            <h3>${figure.name}</h3>
            <p>${figure.description}</p>
        `;

        container.appendChild(card);
    });
}

// 🚀 Load all figures on page load
fetchFigures();
