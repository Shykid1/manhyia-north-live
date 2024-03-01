import  { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CumulativeChart = () => {
  const [data, setData] = useState({
    'Candidate A': [100, 345, 100],
    'Candidate B': [200, 450, 300],
    'Candidate C': [150, 200, 250],
    'Candidate D': [300, 400, 500],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => ({
        'Candidate A': [...prevData['Candidate A'], Math.floor(Math.random() * 100) + 1],
        'Candidate B': [...prevData['Candidate B'], Math.floor(Math.random() * 100) + 1],
        'Candidate C': [...prevData['Candidate C'], Math.floor(Math.random() * 100) + 1],
        'Candidate D': [...prevData['Candidate D'], Math.floor(Math.random() * 100) + 1],
      }));
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <LineChart
      width={800}
      height={400}
      data={Object.keys(data).reduce((acc, key, ) => {
        data[key].forEach((value, i) => {
          if (!acc[i]) acc[i] = { name: `Vote ${i + 1}` };
          acc[i][key] = value;
        });
        return acc;
      }, [])}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {Object.keys(data).map((candidate, index) => (
        <Line key={index} type="monotone" dataKey={candidate} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
      ))}
    </LineChart>
  );
};

export default CumulativeChart;
