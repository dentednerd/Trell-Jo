import React from 'react';

import './ColumnTitle.css';

class ColumnTitle extends React.Component {
    render () {
        return (
            <div className="ColumnTitle">
                <h1>{this.props.title}</h1>
                    {/*needs to be an input*/}
            </div>

        );
    }
}

export default ColumnTitle;