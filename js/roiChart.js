var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ['1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', '8 Years', '9 Years', '10 Years'],
      datasets: [
        {
          label: 'Intial Investment',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          backgroundColor: "transparent",
          borderColor: "#01579b",
          pointRadius: 0,
          borderWidth: 2.5,
          borderDash: [1, 5]
        },
        {
          label: '40% Lift in Adherance',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          backgroundColor: [
              'transparent'
          ],
          borderColor: [
              'rgba(255,99,132,1)'
          ],
          borderWidth: 1
      },
      {
        label: '38.2% Lift in Adherance (EXPECTED)',
        data: [0, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000],
        backgroundColor: [
            'transparent'
        ],
        borderColor: [
            '#00897b'
        ],
        borderWidth: 2.5
      },
      {
        label: '30% Lift in Adherance',
        data: [0, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
        backgroundColor: [
            'transparent'
        ],
        borderColor: [
            '#00897b'
        ],
        borderWidth: 1
      },
      {
        label: '20% Lift in Adherance',
        data: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000],
        backgroundColor: [
            'transparent'
        ],
        borderColor: [
            '#00897b'
        ],
        borderWidth: 1
      },
      {
        label: '10% Lift in Adherance',
        data: [0, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000],
        backgroundColor: [
            'transparent'
        ],
        borderColor: [
            '#00897b'
        ],
        borderWidth: 1
      }

    ]
  },
  options: {
      responsive: true,
      title: {
        display: true,
        text: 'COHERO ROI CALCULATOR'
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }
});
