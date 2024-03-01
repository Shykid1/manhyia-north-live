import PropTypes from 'prop-types'; // Import PropTypes
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ data }) => {
  // Calculate total votes
  const totalVotes = data.reduce((acc, curr) => acc + curr.value, 0);

  // Chart data
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8C54FF',
          '#FF8A80',
          '#A7FFEB',
          '#FFD180',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8C54FF',
          '#FF8A80',
          '#A7FFEB',
          '#FFD180',
        ],
      },
    ],
  };

  // Chart options
  const chartOptions = {
    cutout: '80%',
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: totalVotes.toString(),
            font: {
              size: '40',
            },
          },
          {
            text: 'Total Votes',
            font: {
              size: '20',
            },
          },
        ],
      },
    },
  };

  return <Doughnut data={chartData} options={chartOptions} />;
};

// Add prop types validation
DoughnutChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DoughnutChart;
