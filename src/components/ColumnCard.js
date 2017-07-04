import React from 'react';

import './ColumnCard.css';

class ColumnCard extends React.Component {
    render () {
        return (
            <a href='#'>
            <div className='box'>
                {this.props.card.text}
            </div>
            </a>
        );
    }
}

export default ColumnCard;