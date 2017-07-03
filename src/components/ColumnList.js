import React from 'react';

import ColumnTitle from './ColumnTitle';
import ColumnCardsList from './ColumnCardsList';
import ColumnAdd from './ColumnAdd';

import './ColumnList.css';

class ColumnList extends React.Component {
    render () {
        return (
            <div className="ColumnList">
                <ColumnTitle />
                <ColumnCardsList />
                <ColumnAdd />
            </div>
        );
    }
}

export default ColumnList;