document.addEventListener('DOMContentLoaded', function () {
    // Sample data for the last five years (2019 - 2024) for Rice
    const riceData = [30, 32, 28, 31, 32]; // Example prices over the years

    const ctxRice = document.getElementById('chartRice').getContext('2d');
    const chartRice = new Chart(ctxRice, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Rice Prices',
                data: riceData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Repeat similar setups for other crops
});
