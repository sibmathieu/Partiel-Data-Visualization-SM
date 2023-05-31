fetch('data.json')
    .then(response => response.json())
    .then(data => run_visualization(data));

function run_visualization(data) {
    sortByCountryPopulation(data);
    const top30Countries = data.slice(0, 30).reverse();
    const countryNames = top30Countries.map(item => item.country);
    const populationValues = top30Countries.map(item => item.population);

    const graph = {
        x: countryNames,
        y: populationValues,
        type: 'bar'
    };

    const layout = {
        title: 'Data distribution of countries population (Top 30 des pays avec la plus grande population) : ',
        xaxis: { title: 'Pays' },
        yaxis: { title: 'Population' }
    };

    Plotly.newPlot('data-viz', [graph], layout);
}

function sortByCountryPopulation(data) {
    data.sort((Country1, Country2) => Country2.population - Country1.population);
}
