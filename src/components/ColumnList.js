import React from 'react';

import ColumnTitle from './ColumnTitle';
import ColumnCardsList from './ColumnCardsList';
import ColumnAdd from './ColumnAdd';

import './ColumnList.css';

class ColumnList extends React.Component {
    render () {
        return (
            <div className="ColumnList">
                <ColumnTitle editListTitle={this.props.editListTitle} id={this.props.list.id} title={this.props.list.title}/>
                <ColumnCardsList cards={this.props.list.cards} editCard={this.props.editCard} id={this.props.list.id}/>
                <ColumnAdd id={this.props.list.id} updateCards={this.props.updateCards} />
            </div>
        );
    }
}

export default ColumnList;