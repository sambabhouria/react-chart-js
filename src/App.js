import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from './components/Navbar/Header'
import  Footer  from './components/Navbar/Footer'

import LineChart from './components/Chartjs/LineChart'
import BarChart from './components/Chartjs/BarChart'
import DoughnutChart from './components/Chartjs/DoughnutChart'
import CreditCard from './components/credit-cards/CreditCard'

import "./app.css";

class App extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div>
        <Header path={path} />
        <div className="tabs">
          <Switch>
            <Route path={`${path}`} exact component={LineChart} />
            <Route path={`${path}/Bar`} component={BarChart} />
            <Route path={`${path}/Doughnut`} component={DoughnutChart} />
            <Route path={`${path}/credit-card`} component={CreditCard} />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
