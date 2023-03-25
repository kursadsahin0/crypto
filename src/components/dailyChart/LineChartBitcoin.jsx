import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
);


const LineChartBitcoin = () => {
    

    const [coinData, setCoinData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
            );
            const data = await response.json();
            setCoinData(data);
        };
        fetchData();
    }, []);

    const chartData = {
        labels: coinData.prices?.map((price) => new Date(price[0]).toLocaleDateString()),
        datasets: [
            {
                label: "Price in USD / Bitcoin",
                data: coinData.prices?.map((price) => price[1]),
                fill: false,
                borderColor: "#16c784",
                tension: 0.1,
            },
        ],
    };

    return (
        <div >
            <Line data={chartData} />
        </div>
    );
};

export default LineChartBitcoin;
