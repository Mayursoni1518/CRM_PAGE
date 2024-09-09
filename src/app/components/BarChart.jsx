'use client';

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { getBarChartData } from '../Barapi.js';
import { useState, useEffect } from 'react';

const BarChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const barChartData = await getBarChartData();
      setData(barChartData);
    };
    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Bar
          type="monotone"
          dataKey="product1"
          fill="#2563eb"
          stackId="1"
        />

        <Bar
          type="monotone"
          dataKey="product2"
          fill="#7c3aed"
          stackId="1"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Product 1:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Product 2:
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default BarChartComponent;