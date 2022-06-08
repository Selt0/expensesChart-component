const chartData = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

const labels = chartData.map(data => data.day)
const data = chartData.map(data => data.amount)

const ctx = document.querySelector('#canvas').getContext('2d')

const config = {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: [
        '#ec755d',
        '#ec755d',
        '#76b5bc',
        '#ec755d',
        '#ec755d',
        '#ec755d',
        '#ec755d'
      ],
      hoverBackgroundColor: [
        '#ff9b87',
        '#ff9b87',
        '#b4dfe5',
        '#ff9b87',
        '#ff9b87',
        '#ff9b87',
        '#ff9b87'
      ],
      borderRadius: 5,
    }]
  },
  options: {
    onHover: (event, chartElement) => {
      const target = event.native ? event.native.target : event.target;
      target.style.cursor = chartElement[0] ? 'pointer' : 'default';
    },
    plugins: {
      legend: {
        display: false,
        onHover: function (e) {
          e.target.style.cursor = 'pointer';
        },
      },
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      },
    }
  },
};

const myChart = new Chart(ctx, config)
