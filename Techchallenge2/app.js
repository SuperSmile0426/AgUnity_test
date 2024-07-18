fetch('data.json')
    .then(response => response.json())
    .then(data => {
        displayData('men', data.men);
        displayData('women', data.women);
        displayData('youth', data.youth);
    })
    .catch(error => console.error('Error fetching data:', error));

function displayData(id, category) {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = `
            <h2>${category.total} ${id.toUpperCase()}</h2>
            <div>By country</div>
            <div class="country-container">
                ${category.countries.map(country => `
                    <div class="country-item">
                        <span>${country.population}</span>
                        <span>${country.country}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
}
