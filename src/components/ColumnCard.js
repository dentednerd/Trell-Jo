import React from 'react';

import './ColumnCard.css';

class ColumnCardsList extends React.Component {
    render () {
        return (
            <a href='#'>
            <div className='box'>
                {this.props.card}
            </div>
            </a>
        );
    }
}

export default ColumnCardsList;