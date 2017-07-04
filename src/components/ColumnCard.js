import React from 'react';

import './ColumnCard.css';

class ColumnCard extends React.Component {
    render () {
        return (
            <a href='#'>
            <div className='box'>
                {this.props.card.text}
                <span className="icon is-small">
                    <i className="fa fa-pencil"></i>
                </span>
            </div>
            </a>
        );
    }
}

export default ColumnCard;