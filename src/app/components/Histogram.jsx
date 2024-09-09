'use client';

import {
  Histogram,
  HistogramBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { getHistogramData } from '../Histapi';
import { useState, useEffect } from 'react';

const HistogramComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const histogramData = await getHistogramData();
      setData(histogramData);
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Histogram
        width={400}
        height={300}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <HistogramBar
          xKey="name"
          yKey="product1"
          fill="#2563eb"
          dataKey="product1"
        />
        <HistogramBar
          xKey="name"
          yKey="product2"
          fill="#7c3aed"
          dataKey="product2"
        />
      </Histogram>
    </div>
  );
};

export default HistogramComponent;