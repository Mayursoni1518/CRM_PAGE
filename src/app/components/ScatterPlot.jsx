'use client';

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { getScatterPlotData } from '../Scatterapi';
import { useState, useEffect } from 'react';

const ScatterPlotComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const scatterPlotData = await getScatterPlotData();
      setData(scatterPlotData);
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ScatterChart
        width={400}
        height={300}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product1" name="Product 1 Sales" unit="units" />
        <YAxis dataKey="product2" name="Product 2 Sales" unit="units" />
        <Tooltip />
        <Scatter
          data={data}
          fill="#2563eb"
          line={{ strokeWidth: 2 }}
          lineType="joint"
        />
      </ScatterChart>
    </div>
  );
};

export default ScatterPlotComponent;