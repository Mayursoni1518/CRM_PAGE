'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { getLineChartData } from '../Lineapi';
import { useState, useEffect } from 'react';

const LineChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const lineChartData = await getLineChartData();
      setData(lineChartData);
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <LineChart
        width={400}
        height={300}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="product1"
          stroke="#2563eb"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="product2"
          stroke="#7c3aed"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;