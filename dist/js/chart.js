    var ctx = document.getElementById('pie').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Present', 'Absent', 'Late', 'Early Departure'],
        datasets: [{
          label: 'Attendence',
          data: [12, 19, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });