import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'BookName',
        dataIndex: 'bookName',
        key: 'bookName',
    },
    {
        title: 'Price',
        dataIndex: 'price',
          key: 'price',
    },
    {
        title: 'Category',
        dataIndex: 'category',
          key: 'category',
    },
    {
        title: 'Author',
        dataIndex: 'author',
          key: 'author',
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
                <h1 id="tabelLabel">Books</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('books');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
