import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import MyChartData from '../../hooks/MyChartData';

const LineChartDiagram = () => {
    const [data, setData] = MyChartData();
    return (
        <LineChart width={600} height={400} data={data}>
            <Line dataKey={'investment'}></Line>
            <Line dataKey={'revenue'}></Line>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
        </LineChart>
    );
};

export default LineChartDiagram;