import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import MyChartData from '../../hooks/MyChartData';

const LineChartDiagram = () => {
    const [data, setData] = MyChartData();
    return (
        <div>
            <h2 className="text-3xl text-lime-700">Line Chart</h2>
            <LineChart width={600} height={400} data={data}>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </LineChart>
        </div>
    );
};

export default LineChartDiagram;