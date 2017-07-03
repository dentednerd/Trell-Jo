import React from 'react';

import ColumnList from './ColumnList';

import './Columns.css';


class Column extends React.Component {
    render () {
        return (
            <div className="columns">
                <div className="column">
                    <ColumnList />
                </div>
                <div className="column">
                    <ColumnList />
                </div>
                <div className="column">
                    <ColumnList />
                </div>
                <div className="column">
                    <ColumnList />
                </div>
            </div>
        );
    }
}

export default Column;