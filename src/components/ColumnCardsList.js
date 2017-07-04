import React from 'react';
import PropTypes from 'prop-types';

import ColumnCard from './ColumnCard';

import './ColumnCardsList.css';

class ColumnCardsList extends React.Component {
    render () {
        return (
            <div className='columnListBox'>
                {this.props.cards.map((card) => {
                        console.log(card)
                    return (
                        <ColumnCard editCard={this.props.editCard} id={this.props.id} key={card.id} card={card}/>
                    );
                })}
            </div>
        );
    }
}

ColumnCardsList.propTypes = {
    cards: PropTypes.array.isRequired
};

export default ColumnCardsList;