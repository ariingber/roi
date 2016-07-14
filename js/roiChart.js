var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ['1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', '8 Years', '9 Years', '10 Years'],
      datasets: [
        {
          label: 'Yearly Savings in Dollars',
          data: [3000, 6000, 9000, 11000, 13000, 20000, 20000, 20000, 20000, 20000],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)'
          ],
          borderWidth: 1
      },
      {
        label: 'Intial Investment',
        data: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000],
        backgroundColor: "transparent",
        borderColor: "#428bca",
        pointRadius: 0,
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
