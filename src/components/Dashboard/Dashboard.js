import ComposedChartDiagram from "../AllChart/ComposedChartDiagram";
import LineChartDiagram from "../AllChart/LineChartDiagram";
import PieChartDiagram from "../AllChart/PieChartDiagram";
import RadarChartDiagram from "../AllChart/RadarChartDiagram";


const Dashboard = () => {

    return (
        <div className="md:grid grid-cols-2 p-5 m-6">
            <LineChartDiagram></LineChartDiagram>
            <ComposedChartDiagram></ComposedChartDiagram>
            <PieChartDiagram></PieChartDiagram>
            <RadarChartDiagram></RadarChartDiagram>
        </div>
    );
};

export default Dashboard;