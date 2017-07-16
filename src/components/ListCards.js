import React from 'react';
import PropTypes from 'prop-types';

import ColumnCard from './ColumnCard';

import './ListCards.css';

class ListCards extends React.Component {
    render () {
        return (
            <div className='ListCards'>
                {this.props.cards.map((card) => {
                    return (
                        <ColumnCard editCard={this.props.editCard} id={this.props.id} key={card.id} card={card}/>
                    );
                })}
            </div>
        );
    }
}

ListCards.propTypes = {
    cards: PropTypes.array.isRequired,
    editCard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default ListCards;