import React from 'react';

import ColumnTitle from './ColumnTitle';
import ColumnCardsList from './ColumnCardsList';
import ColumnAdd from './ColumnAdd';

import './ColumnList.css';

class ColumnList extends React.Component {
    render () {
        return (
            <div className="ColumnList">
                <ColumnTitle title={this.props.list.title}/>
                <ColumnCardsList cards={this.props.list.cards}/>
                <ColumnAdd />
            </div>
        );
    }
}

export default ColumnList;