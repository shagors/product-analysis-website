import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';
import MyChartData from '../../hooks/MyChartData';

const RadarChartDiagram = () => {
    const [data, setData] = MyChartData();
    return (
        <div>
            <h2 className="text-3xl text-lime-700">Radar Chart</h2>
            <RadarChart outerRadius={90} width={500} height={250} data={data}>
                <PolarGrid></PolarGrid>
                <PolarAngleAxis dataKey={'month'}></PolarAngleAxis>
                <PolarRadiusAxis angle={30} domain={[0, 150]}></PolarRadiusAxis>
                <Radar dataKey={'revenue'} stroke='#8884d8' fill='#8884d8' fillOpacity={0.6}></Radar>
                <Radar dataKey={'investment'} stroke='#82ca9d' fill='#82ca9d' fillOpacity={0.6}></Radar>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </RadarChart>
        </div>
    );
};

export default RadarChartDiagram;