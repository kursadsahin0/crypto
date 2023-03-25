import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import LineChartBitcoin from './components/dailyChart/LineChartBitcoin';
import LineChartEth from "./components/dailyChart/LineChartEth";
import LineChartDoge from "./components/dailyChart/LineChartDoge";
import Table from './components/Table';
import Converter from "./components/Converter";

import './App.css';
import Tools from "./components/Tools";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Navbar />
      <div className="chart">
        <div className="line">
          <LineChartBitcoin />

        </div>
        <div className="line">
          <LineChartEth />
        </div>
        <div className="line">
          <LineChartDoge />
        </div>
      </div>


      <div className="table">
        <Table />
      </div>
      <div className="converter">
        <Converter />
      </div>
      <div className="tools">
        <Tools />
      </div>
      <Footer />







    </>

  );
}

export default App;
