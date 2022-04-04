import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import MyChartData from '../../hooks/MyChartData';

const PieChartDiagram = () => {
    const [data, setData] = MyChartData();
    return (
        <div>
            <h2 className="text-3xl text-lime-700">Pie Chart</h2>
            <PieChart width={500} height={250}>
                <Pie data={data} dataKey={'investment'} cx='50%' cy='50%' outerRadius={50} fill='#8884d8'></Pie>
                <Pie data={data} dataKey={'revenue'} cx='50%' cy='50%' innerRadius={60} outerRadius={80} fill='#82ca9d' nameKey={'month'}></Pie>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </PieChart>
        </div>
    );
};

export default PieChartDiagram;