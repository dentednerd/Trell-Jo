import React from 'react';

import ColumnCard from './ColumnCard';

import './ColumnCardsList.css';

class ColumnCardsList extends React.Component {
    render() {
        return (
            <div className='columnListBox'>
                {this.props.cards.map((card) => {
                    return (
                        <ColumnCard key={card.text} card={card}/>
                    );
                })}
            </div>
        );
    }
}

export default ColumnCardsList;