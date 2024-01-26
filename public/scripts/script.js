document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('performanceChart').getContext('2d');

    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Your Classroom',
            data: [65, 59, 80, 81, 56, 55], // Mock scores for each month
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }, {
            label: 'Average of Other Classrooms',
            data: [68, 58, 78, 82, 60, 50, 20], // Mock average scores for each month
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: chartData,
        options: {
            plugins: {
                datalabels: {
                    // ... datalabels configuration ...
                }
            },
            legend: {
                display: false // Position the legend at the bottom
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const performanceChart = new Chart(ctx, config);
});