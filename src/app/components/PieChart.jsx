'use client';
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { getDummyData } from '../api.js'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Value:
          <span className="ml-2">${payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const PieChartComponent = () => {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    const fetchDummyData = async () => {
      const data = await getDummyData();
      setPieData(data);
    };
    fetchDummyData();
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#3b82f6" />
            ))}
          </Pie>
          <Legend />
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;