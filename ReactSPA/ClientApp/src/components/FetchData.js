import React, { Component } from 'react';
import { Table, Radio, Divider } from 'antd';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Temp. (C)',
    dataIndex: 'temperatureC',
  },
  {
    title: 'Temp. (F)',
    dataIndex: 'temperatureF',
  },
  {
    title: 'Summary',
    dataIndex: 'summary',
  },
];


export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <Table
        columns={columns}
        dataSource={forecasts}
      />
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
