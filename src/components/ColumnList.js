import React from 'react';
import PropTypes from 'prop-types';

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


ColumnList.propTypes = {
    editListTitle: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired,
    updateCards: PropTypes.func.isRequired,
};

export default ColumnList;