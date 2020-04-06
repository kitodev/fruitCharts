import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2';
import Chart from "./Chart";
import { render } from '@testing-library/react';
import axios from "axios";
import data from '../data/proba_6.json';

const Charts = () => {
    const [chart, setChart] = useState({});
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      try {
        const res = await axios.get(
          data
        );
  
        setChart({
          labels: Object.keys(res.data.apple_prices),
          datasets: [
            {
              label: "Apple Prices",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: Object.values(res.data.apple_prices)
            }
          ]
        });
      } catch (error) {
        console.log(error.response);
      }
    };
  
    return (
      <div>
        <Chart data={chart} />
      </div>
    );
  };

export default Charts;
