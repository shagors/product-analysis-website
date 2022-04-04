import React from 'react';
import { Area, Bar, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import MyChartData from '../../hooks/MyChartData';

const ComposedChartDiagram = () => {
    const [data, setData]= MyChartData();
    return (
        <div>
            <h2 className="text-3xl text-lime-700">Composed Chart</h2>
            <ComposedChart width={500} height={400} data={data}>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis dataKey={'investment'}></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Area dataKey={'sell'}></Area>
                <Bar barSize={20} dataKey={'investment'}></Bar>
                <Line dataKey={'revenue'}></Line>
            </ComposedChart>
        </div>
    );
};

export default ComposedChartDiagram;