import React from 'react';
import PropTypes from 'prop-types';

import ListTitle from './ListTitle';
import ListCards from './ListCards';
import ListAdd from './ListAdd';

import './List.css';

class List extends React.Component {
    render () {
        return (
            <div className="List">
                <ListTitle editListTitle={this.props.editListTitle} id={this.props.list.id} title={this.props.list.title}/>
                <ListCards cards={this.props.list.cards} editCard={this.props.editCard} id={this.props.list.id}/>
                <ListAdd id={this.props.list.id} updateCards={this.props.updateCards} />
            </div>
        );
    }
}


List.propTypes = {
    editListTitle: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired,
    updateCards: PropTypes.func.isRequired,
    editCard: PropTypes.func.isRequired
};

export default List;