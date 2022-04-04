import { useEffect, useState } from "react";

const MyChartData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('chart.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return [data, setData];
}

export default MyChartData;